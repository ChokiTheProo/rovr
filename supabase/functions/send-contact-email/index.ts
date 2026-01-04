import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  nome: string;
  email: string;
  telefone?: string;
  empresa?: string;
  mensagem: string;
}

// HTML escape function to prevent XSS
function escapeHtml(text: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
  };
  return text.replace(/[&<>"']/g, (char) => htmlEntities[char] || char);
}

// Simple in-memory rate limiting (per IP, 5 requests per minute)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 1000; // 1 minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS });
    return true;
  }
  
  if (record.count >= RATE_LIMIT) {
    return false;
  }
  
  record.count++;
  return true;
}

// Input validation
function validateInput(data: ContactEmailRequest): string | null {
  if (!data.nome || typeof data.nome !== 'string' || data.nome.trim().length === 0) {
    return "Nome é obrigatório";
  }
  if (data.nome.length > 100) {
    return "Nome deve ter no máximo 100 caracteres";
  }
  
  if (!data.email || typeof data.email !== 'string') {
    return "Email é obrigatório";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email) || data.email.length > 255) {
    return "Email inválido";
  }
  
  if (!data.mensagem || typeof data.mensagem !== 'string' || data.mensagem.trim().length === 0) {
    return "Mensagem é obrigatória";
  }
  if (data.mensagem.length > 5000) {
    return "Mensagem deve ter no máximo 5000 caracteres";
  }
  
  if (data.telefone && (typeof data.telefone !== 'string' || data.telefone.length > 20)) {
    return "Telefone inválido";
  }
  
  if (data.empresa && (typeof data.empresa !== 'string' || data.empresa.length > 200)) {
    return "Empresa deve ter no máximo 200 caracteres";
  }
  
  return null;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") || 
                     "unknown";
    
    if (!checkRateLimit(clientIP)) {
      console.warn("Rate limit exceeded for IP:", clientIP);
      return new Response(
        JSON.stringify({ error: "Muitas requisições. Tente novamente em alguns minutos." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const requestData: ContactEmailRequest = await req.json();
    
    // Validate inputs
    const validationError = validateInput(requestData);
    if (validationError) {
      console.warn("Validation failed:", validationError);
      return new Response(
        JSON.stringify({ error: validationError }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { nome, email, telefone, empresa, mensagem } = requestData;

    console.log("Processing contact email request");

    // Initialize Supabase client with service role key
    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

    // Save lead to database
    const { error: dbError } = await supabase
      .from("contact_leads")
      .insert({
        nome: nome.trim(),
        email: email.trim(),
        telefone: telefone?.trim() || null,
        empresa: empresa?.trim() || null,
        mensagem: mensagem.trim(),
      });

    if (dbError) {
      console.error("Database error:", dbError.message);
      // Continue with email sending even if DB fails
    } else {
      console.log("Lead saved to database");
    }

    // Escape all user inputs to prevent XSS
    const safeNome = escapeHtml(nome.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeTelefone = telefone ? escapeHtml(telefone.trim()) : null;
    const safeEmpresa = empresa ? escapeHtml(empresa.trim()) : null;
    const safeMensagem = escapeHtml(mensagem.trim()).replace(/\n/g, "<br>");

    // Send email using Resend API (optional - don't fail if it doesn't work)
    let emailSent = false;
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Revyra Contact <onboarding@resend.dev>",
          to: ["eurhok@gmail.com", "robsonvarela23@gmail.com"],
          subject: `Nova mensagem de contato - ${safeNome}`,
          html: `
            <h1>Nova mensagem de contato</h1>
            <p><strong>Nome:</strong> ${safeNome}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            ${safeTelefone ? `<p><strong>Telefone:</strong> ${safeTelefone}</p>` : ""}
            ${safeEmpresa ? `<p><strong>Empresa:</strong> ${safeEmpresa}</p>` : ""}
            <h2>Mensagem:</h2>
            <p>${safeMensagem}</p>
          `,
        }),
      });

      if (res.ok) {
        emailSent = true;
        console.log("Email sent successfully");
      } else {
        const errorText = await res.text();
        console.warn("Resend API warning (email not sent but lead saved):", errorText);
      }
    } catch (emailError: any) {
      console.warn("Email sending failed (lead still saved):", emailError.message);
    }

    // Return success as long as lead was saved to database
    return new Response(JSON.stringify({ success: true, emailSent }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error.message);
    return new Response(
      JSON.stringify({ error: "Erro ao processar sua mensagem. Tente novamente." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
