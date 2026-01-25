import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Handshake, Mail, Send, Shield, Users, Briefcase, Target, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ServicosInternos = () => {
  const { language, t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    cargo: "",
    tipoServico: "",
    mensagem: ""
  });

  const content = {
    pt: {
      backHome: "Voltar ao início",
      tag: "Serviços Internos & Parcerias",
      title1: "Parcerias",
      title2: "Estratégicas",
      description: "Buscamos parceiros que compartilham nossa visão de inovação. Se você representa uma empresa, agência ou é um profissional interessado em colaborar, entre em contato.",
      benefits: [
        { icon: Handshake, title: "Parcerias White-Label", description: "Desenvolva projetos sob sua marca com nossa expertise técnica" },
        { icon: Users, title: "Programas de Afiliados", description: "Ganhe comissões indicando clientes para nossos serviços" },
        { icon: Briefcase, title: "Consultorias B2B", description: "Serviços personalizados para demandas corporativas" },
        { icon: Target, title: "Projetos Especiais", description: "Colaborações em projetos de grande escala e impacto" }
      ],
      form: {
        title: "Formulário de Contato",
        subtitle: "Preencha os dados abaixo para iniciarmos uma conversa",
        name: "Nome Completo",
        namePlaceholder: "Seu nome completo",
        email: "E-mail Corporativo",
        emailPlaceholder: "seu@empresa.com",
        company: "Empresa/Organização",
        companyPlaceholder: "Nome da empresa",
        role: "Cargo",
        rolePlaceholder: "Seu cargo na empresa",
        serviceType: "Tipo de Interesse",
        serviceTypePlaceholder: "Selecione o tipo de serviço",
        serviceOptions: ["Parceria White-Label", "Programa de Afiliados", "Consultoria B2B", "Projeto Especial", "Outro"],
        message: "Mensagem",
        messagePlaceholder: "Descreva sua proposta ou interesse...",
        submit: "Enviar Proposta",
        sending: "Enviando...",
        success: "Proposta enviada com sucesso! Entraremos em contato em breve.",
        error: "Erro ao enviar proposta. Tente novamente."
      },
      contact: {
        title: "Contato Direto",
        description: "Para assuntos urgentes ou confidenciais, entre em contato diretamente:",
        email: "rovrbr@outlook.com"
      },
      trust: {
        title: "Por que ser nosso parceiro?",
        items: [
          "Tecnologia de ponta e equipe experiente",
          "Flexibilidade em modelos de colaboração",
          "Confidencialidade garantida (NDA)",
          "Suporte dedicado para parceiros"
        ]
      }
    },
    en: {
      backHome: "Back to home",
      tag: "Internal Services & Partnerships",
      title1: "Strategic",
      title2: "Partnerships",
      description: "We seek partners who share our vision of innovation. If you represent a company, agency, or are a professional interested in collaborating, get in touch.",
      benefits: [
        { icon: Handshake, title: "White-Label Partnerships", description: "Develop projects under your brand with our technical expertise" },
        { icon: Users, title: "Affiliate Programs", description: "Earn commissions by referring clients to our services" },
        { icon: Briefcase, title: "B2B Consulting", description: "Customized services for corporate demands" },
        { icon: Target, title: "Special Projects", description: "Collaborations on large-scale, high-impact projects" }
      ],
      form: {
        title: "Contact Form",
        subtitle: "Fill in the details below to start a conversation",
        name: "Full Name",
        namePlaceholder: "Your full name",
        email: "Corporate Email",
        emailPlaceholder: "your@company.com",
        company: "Company/Organization",
        companyPlaceholder: "Company name",
        role: "Position",
        rolePlaceholder: "Your position at the company",
        serviceType: "Type of Interest",
        serviceTypePlaceholder: "Select service type",
        serviceOptions: ["White-Label Partnership", "Affiliate Program", "B2B Consulting", "Special Project", "Other"],
        message: "Message",
        messagePlaceholder: "Describe your proposal or interest...",
        submit: "Send Proposal",
        sending: "Sending...",
        success: "Proposal sent successfully! We'll be in touch soon.",
        error: "Error sending proposal. Please try again."
      },
      contact: {
        title: "Direct Contact",
        description: "For urgent or confidential matters, contact us directly:",
        email: "rovrbr@outlook.com"
      },
      trust: {
        title: "Why partner with us?",
        items: [
          "Cutting-edge technology and experienced team",
          "Flexibility in collaboration models",
          "Guaranteed confidentiality (NDA)",
          "Dedicated support for partners"
        ]
      }
    },
    es: {
      backHome: "Volver al inicio",
      tag: "Servicios Internos y Alianzas",
      title1: "Alianzas",
      title2: "Estratégicas",
      description: "Buscamos socios que compartan nuestra visión de innovación. Si representa una empresa, agencia o es un profesional interesado en colaborar, contáctenos.",
      benefits: [
        { icon: Handshake, title: "Alianzas White-Label", description: "Desarrolle proyectos bajo su marca con nuestra experiencia técnica" },
        { icon: Users, title: "Programas de Afiliados", description: "Gane comisiones refiriendo clientes a nuestros servicios" },
        { icon: Briefcase, title: "Consultoría B2B", description: "Servicios personalizados para demandas corporativas" },
        { icon: Target, title: "Proyectos Especiales", description: "Colaboraciones en proyectos de gran escala e impacto" }
      ],
      form: {
        title: "Formulario de Contacto",
        subtitle: "Complete los datos a continuación para iniciar una conversación",
        name: "Nombre Completo",
        namePlaceholder: "Su nombre completo",
        email: "Correo Corporativo",
        emailPlaceholder: "su@empresa.com",
        company: "Empresa/Organización",
        companyPlaceholder: "Nombre de la empresa",
        role: "Cargo",
        rolePlaceholder: "Su cargo en la empresa",
        serviceType: "Tipo de Interés",
        serviceTypePlaceholder: "Seleccione el tipo de servicio",
        serviceOptions: ["Alianza White-Label", "Programa de Afiliados", "Consultoría B2B", "Proyecto Especial", "Otro"],
        message: "Mensaje",
        messagePlaceholder: "Describa su propuesta o interés...",
        submit: "Enviar Propuesta",
        sending: "Enviando...",
        success: "¡Propuesta enviada con éxito! Nos pondremos en contacto pronto.",
        error: "Error al enviar propuesta. Intente nuevamente."
      },
      contact: {
        title: "Contacto Directo",
        description: "Para asuntos urgentes o confidenciales, contáctenos directamente:",
        email: "rovrbr@outlook.com"
      },
      trust: {
        title: "¿Por qué ser nuestro socio?",
        items: [
          "Tecnología de vanguardia y equipo experimentado",
          "Flexibilidad en modelos de colaboración",
          "Confidencialidad garantizada (NDA)",
          "Soporte dedicado para socios"
        ]
      }
    }
  };

  const currentContent = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database with a custom message format for internal services
      const { error: dbError } = await supabase
        .from("contact_leads")
        .insert({
          nome: formData.nome,
          email: formData.email,
          empresa: formData.empresa,
          telefone: formData.cargo, // Using telefone field for cargo
          mensagem: `[SERVIÇOS INTERNOS - ${formData.tipoServico}]\n\nCargo: ${formData.cargo}\n\n${formData.mensagem}`,
          status: "new"
        });

      if (dbError) throw dbError;

      // Try to send email notification
      try {
        await supabase.functions.invoke("send-contact-email", {
          body: {
            nome: formData.nome,
            email: formData.email,
            empresa: formData.empresa,
            mensagem: `[SERVIÇOS INTERNOS - ${formData.tipoServico}]\n\nCargo: ${formData.cargo}\n\n${formData.mensagem}`,
            isInternal: true
          }
        });
      } catch (emailError) {
        console.log("Email notification failed, but lead was saved:", emailError);
      }

      toast({
        title: "✅",
        description: currentContent.form.success,
      });

      setFormData({
        nome: "",
        email: "",
        empresa: "",
        cargo: "",
        tipoServico: "",
        mensagem: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "❌",
        description: currentContent.form.error,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {currentContent.backHome}
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              {currentContent.tag}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {currentContent.title1}{" "}
              <span className="text-gradient">{currentContent.title2}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {currentContent.description}
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {currentContent.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">{currentContent.form.title}</h2>
                  <p className="text-muted-foreground">{currentContent.form.subtitle}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {currentContent.form.name}
                      </label>
                      <Input
                        type="text"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        placeholder={currentContent.form.namePlaceholder}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {currentContent.form.email}
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={currentContent.form.emailPlaceholder}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {currentContent.form.company}
                      </label>
                      <Input
                        type="text"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        placeholder={currentContent.form.companyPlaceholder}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {currentContent.form.role}
                      </label>
                      <Input
                        type="text"
                        value={formData.cargo}
                        onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                        placeholder={currentContent.form.rolePlaceholder}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {currentContent.form.serviceType}
                    </label>
                    <select
                      value={formData.tipoServico}
                      onChange={(e) => setFormData({ ...formData, tipoServico: e.target.value })}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option value="">{currentContent.form.serviceTypePlaceholder}</option>
                      {currentContent.form.serviceOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {currentContent.form.message}
                    </label>
                    <Textarea
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      placeholder={currentContent.form.messagePlaceholder}
                      required
                      rows={5}
                      className="bg-background/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
                        />
                        {currentContent.form.sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {currentContent.form.submit}
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-6"
            >
              {/* Direct Contact */}
              <div className="p-6 rounded-2xl bg-accent/10 border border-accent/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground">{currentContent.contact.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{currentContent.contact.description}</p>
                <a
                  href={`mailto:${currentContent.contact.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors font-medium text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {currentContent.contact.email}
                </a>
              </div>

              {/* Trust Section */}
              <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{currentContent.trust.title}</h3>
                </div>
                <ul className="space-y-3">
                  {currentContent.trust.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicosInternos;
