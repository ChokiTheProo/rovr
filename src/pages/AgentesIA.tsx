import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, MessageSquare, Zap, Brain, Clock, TrendingUp, Sparkles, ArrowRight, Check, Star, Send, Phone, Building2, User, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const AgentesIA = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    empresa: "",
    mensagem: ""
  });

  const content = {
    pt: {
      hero: {
        badge: "Inteligência Artificial",
        title: "Agentes de IA &",
        titleHighlight: "Automação WhatsApp",
        description: "Transforme seu atendimento com agentes inteligentes que trabalham 24/7. Automatize conversas, qualifique leads e aumente suas vendas com tecnologia de ponta."
      },
      stats: [
        { value: "80%", label: "Redução no tempo de resposta" },
        { value: "24/7", label: "Disponibilidade total" },
        { value: "3x", label: "Mais conversões" },
        { value: "50%", label: "Redução de custos" }
      ],
      features: {
        title: "O que oferecemos",
        items: [
          {
            icon: Bot,
            title: "Agentes de IA Personalizados",
            description: "Chatbots inteligentes treinados com a personalidade da sua marca para atendimento humanizado e contextual."
          },
          {
            icon: MessageSquare,
            title: "Automação de WhatsApp",
            description: "Respostas automáticas, disparo de mensagens em massa, funis de vendas e integração completa com CRM."
          },
          {
            icon: Brain,
            title: "IA Conversacional Avançada",
            description: "Entendimento de linguagem natural com GPT para resolver dúvidas complexas e fechar vendas automaticamente."
          },
          {
            icon: Clock,
            title: "Atendimento 24/7",
            description: "Seus clientes atendidos a qualquer hora do dia ou da noite, sem precisar de equipe humana disponível."
          },
          {
            icon: Zap,
            title: "Integração em Minutos",
            description: "Conecte com suas ferramentas existentes rapidamente: CRMs, ERPs, e-commerce e muito mais."
          },
          {
            icon: TrendingUp,
            title: "Qualificação de Leads",
            description: "Identificação automática de oportunidades quentes com scoring inteligente e follow-up automatizado."
          }
        ]
      },
      cases: {
        title: "Cases de Sucesso",
        subtitle: "Resultados reais de clientes que transformaram seu atendimento",
        items: [
          {
            company: "E-commerce de Moda",
            industry: "Varejo",
            results: [
              "Redução de 70% no tempo de resposta",
              "Aumento de 45% nas conversões",
              "3.000+ atendimentos/mês automatizados"
            ],
            quote: "O bot entende exatamente o que nossos clientes precisam e responde como se fosse um vendedor experiente.",
            rating: 5
          },
          {
            company: "Clínica Odontológica",
            industry: "Saúde",
            results: [
              "90% dos agendamentos via WhatsApp",
              "Redução de 60% em no-shows",
              "Lembretes automáticos de consultas"
            ],
            quote: "Nossos pacientes adoram a facilidade de agendar pelo WhatsApp a qualquer hora.",
            rating: 5
          },
          {
            company: "Imobiliária Premium",
            industry: "Imóveis",
            results: [
              "Qualificação automática de leads",
              "50% mais visitas agendadas",
              "Integração com sistema de gestão"
            ],
            quote: "Conseguimos filtrar os leads realmente interessados antes mesmo do corretor entrar em contato.",
            rating: 5
          }
        ]
      },
      pricing: {
        title: "Planos Flexíveis",
        subtitle: "Escolha o plano ideal para o seu negócio",
        items: [
          {
            name: "Starter",
            price: "R$ 297",
            period: "/mês",
            features: [
              "1 Agente de IA",
              "Até 1.000 mensagens/mês",
              "Respostas automáticas básicas",
              "Suporte por email"
            ]
          },
          {
            name: "Business",
            price: "R$ 697",
            period: "/mês",
            popular: true,
            features: [
              "3 Agentes de IA",
              "Até 5.000 mensagens/mês",
              "IA Conversacional avançada",
              "Integração com CRM",
              "Relatórios detalhados",
              "Suporte prioritário"
            ]
          },
          {
            name: "Enterprise",
            price: "Sob consulta",
            period: "",
            features: [
              "Agentes ilimitados",
              "Mensagens ilimitadas",
              "IA personalizada",
              "Integrações customizadas",
              "SLA garantido",
              "Gerente de conta dedicado"
            ]
          }
        ]
      },
      form: {
        title: "Solicite uma Demonstração",
        subtitle: "Preencha o formulário e entraremos em contato em até 24h",
        fields: {
          nome: "Seu nome",
          email: "Seu email",
          telefone: "WhatsApp",
          empresa: "Nome da empresa",
          mensagem: "Conte-nos sobre seu projeto"
        },
        button: "Solicitar Demonstração",
        success: "Mensagem enviada com sucesso!",
        successDesc: "Entraremos em contato em breve."
      }
    },
    en: {
      hero: {
        badge: "Artificial Intelligence",
        title: "AI Agents &",
        titleHighlight: "WhatsApp Automation",
        description: "Transform your customer service with intelligent agents that work 24/7. Automate conversations, qualify leads and increase your sales with cutting-edge technology."
      },
      stats: [
        { value: "80%", label: "Response time reduction" },
        { value: "24/7", label: "Total availability" },
        { value: "3x", label: "More conversions" },
        { value: "50%", label: "Cost reduction" }
      ],
      features: {
        title: "What we offer",
        items: [
          {
            icon: Bot,
            title: "Custom AI Agents",
            description: "Smart chatbots trained with your brand's personality for humanized and contextual service."
          },
          {
            icon: MessageSquare,
            title: "WhatsApp Automation",
            description: "Automatic responses, bulk messaging, sales funnels and complete CRM integration."
          },
          {
            icon: Brain,
            title: "Advanced Conversational AI",
            description: "Natural language understanding with GPT to resolve complex questions and close sales automatically."
          },
          {
            icon: Clock,
            title: "24/7 Support",
            description: "Your customers served at any time of day or night, without needing human staff available."
          },
          {
            icon: Zap,
            title: "Integration in Minutes",
            description: "Connect with your existing tools quickly: CRMs, ERPs, e-commerce and more."
          },
          {
            icon: TrendingUp,
            title: "Lead Qualification",
            description: "Automatic identification of hot opportunities with intelligent scoring and automated follow-up."
          }
        ]
      },
      cases: {
        title: "Success Stories",
        subtitle: "Real results from customers who transformed their service",
        items: [
          {
            company: "Fashion E-commerce",
            industry: "Retail",
            results: [
              "70% reduction in response time",
              "45% increase in conversions",
              "3,000+ automated services/month"
            ],
            quote: "The bot understands exactly what our customers need and responds like an experienced salesperson.",
            rating: 5
          },
          {
            company: "Dental Clinic",
            industry: "Healthcare",
            results: [
              "90% of appointments via WhatsApp",
              "60% reduction in no-shows",
              "Automatic appointment reminders"
            ],
            quote: "Our patients love the ease of scheduling via WhatsApp at any time.",
            rating: 5
          },
          {
            company: "Premium Real Estate",
            industry: "Real Estate",
            results: [
              "Automatic lead qualification",
              "50% more scheduled visits",
              "Integration with management system"
            ],
            quote: "We can filter truly interested leads before the agent even contacts them.",
            rating: 5
          }
        ]
      },
      pricing: {
        title: "Flexible Plans",
        subtitle: "Choose the ideal plan for your business",
        items: [
          {
            name: "Starter",
            price: "$59",
            period: "/month",
            features: [
              "1 AI Agent",
              "Up to 1,000 messages/month",
              "Basic automatic responses",
              "Email support"
            ]
          },
          {
            name: "Business",
            price: "$139",
            period: "/month",
            popular: true,
            features: [
              "3 AI Agents",
              "Up to 5,000 messages/month",
              "Advanced Conversational AI",
              "CRM Integration",
              "Detailed reports",
              "Priority support"
            ]
          },
          {
            name: "Enterprise",
            price: "Contact us",
            period: "",
            features: [
              "Unlimited agents",
              "Unlimited messages",
              "Custom AI",
              "Custom integrations",
              "Guaranteed SLA",
              "Dedicated account manager"
            ]
          }
        ]
      },
      form: {
        title: "Request a Demo",
        subtitle: "Fill out the form and we'll contact you within 24h",
        fields: {
          nome: "Your name",
          email: "Your email",
          telefone: "WhatsApp",
          empresa: "Company name",
          mensagem: "Tell us about your project"
        },
        button: "Request Demo",
        success: "Message sent successfully!",
        successDesc: "We'll contact you soon."
      }
    },
    es: {
      hero: {
        badge: "Inteligencia Artificial",
        title: "Agentes de IA y",
        titleHighlight: "Automatización WhatsApp",
        description: "Transforma tu atención al cliente con agentes inteligentes que trabajan 24/7. Automatiza conversaciones, califica leads y aumenta tus ventas con tecnología de punta."
      },
      stats: [
        { value: "80%", label: "Reducción en tiempo de respuesta" },
        { value: "24/7", label: "Disponibilidad total" },
        { value: "3x", label: "Más conversiones" },
        { value: "50%", label: "Reducción de costos" }
      ],
      features: {
        title: "Lo que ofrecemos",
        items: [
          {
            icon: Bot,
            title: "Agentes de IA Personalizados",
            description: "Chatbots inteligentes entrenados con la personalidad de tu marca para atención humanizada y contextual."
          },
          {
            icon: MessageSquare,
            title: "Automatización de WhatsApp",
            description: "Respuestas automáticas, envío masivo de mensajes, embudos de ventas e integración completa con CRM."
          },
          {
            icon: Brain,
            title: "IA Conversacional Avanzada",
            description: "Comprensión del lenguaje natural con GPT para resolver dudas complejas y cerrar ventas automáticamente."
          },
          {
            icon: Clock,
            title: "Atención 24/7",
            description: "Tus clientes atendidos a cualquier hora del día o de la noche, sin necesitar equipo humano disponible."
          },
          {
            icon: Zap,
            title: "Integración en Minutos",
            description: "Conecta con tus herramientas existentes rápidamente: CRMs, ERPs, e-commerce y mucho más."
          },
          {
            icon: TrendingUp,
            title: "Calificación de Leads",
            description: "Identificación automática de oportunidades calientes con scoring inteligente y seguimiento automatizado."
          }
        ]
      },
      cases: {
        title: "Casos de Éxito",
        subtitle: "Resultados reales de clientes que transformaron su atención",
        items: [
          {
            company: "E-commerce de Moda",
            industry: "Retail",
            results: [
              "Reducción del 70% en tiempo de respuesta",
              "Aumento del 45% en conversiones",
              "3.000+ atenciones/mes automatizadas"
            ],
            quote: "El bot entiende exactamente lo que nuestros clientes necesitan y responde como un vendedor experimentado.",
            rating: 5
          },
          {
            company: "Clínica Dental",
            industry: "Salud",
            results: [
              "90% de las citas vía WhatsApp",
              "Reducción del 60% en inasistencias",
              "Recordatorios automáticos de citas"
            ],
            quote: "Nuestros pacientes aman la facilidad de agendar por WhatsApp a cualquier hora.",
            rating: 5
          },
          {
            company: "Inmobiliaria Premium",
            industry: "Inmuebles",
            results: [
              "Calificación automática de leads",
              "50% más visitas agendadas",
              "Integración con sistema de gestión"
            ],
            quote: "Podemos filtrar los leads realmente interesados antes de que el corredor los contacte.",
            rating: 5
          }
        ]
      },
      pricing: {
        title: "Planes Flexibles",
        subtitle: "Elige el plan ideal para tu negocio",
        items: [
          {
            name: "Starter",
            price: "$59",
            period: "/mes",
            features: [
              "1 Agente de IA",
              "Hasta 1.000 mensajes/mes",
              "Respuestas automáticas básicas",
              "Soporte por email"
            ]
          },
          {
            name: "Business",
            price: "$139",
            period: "/mes",
            popular: true,
            features: [
              "3 Agentes de IA",
              "Hasta 5.000 mensajes/mes",
              "IA Conversacional avanzada",
              "Integración con CRM",
              "Reportes detallados",
              "Soporte prioritario"
            ]
          },
          {
            name: "Enterprise",
            price: "A consultar",
            period: "",
            features: [
              "Agentes ilimitados",
              "Mensajes ilimitados",
              "IA personalizada",
              "Integraciones customizadas",
              "SLA garantizado",
              "Gerente de cuenta dedicado"
            ]
          }
        ]
      },
      form: {
        title: "Solicita una Demostración",
        subtitle: "Completa el formulario y te contactaremos en 24h",
        fields: {
          nome: "Tu nombre",
          email: "Tu email",
          telefone: "WhatsApp",
          empresa: "Nombre de la empresa",
          mensagem: "Cuéntanos sobre tu proyecto"
        },
        button: "Solicitar Demostración",
        success: "¡Mensaje enviado con éxito!",
        successDesc: "Te contactaremos pronto."
      }
    }
  };

  const currentContent = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_leads')
        .insert({
          nome: formData.nome.trim(),
          email: formData.email.trim(),
          telefone: formData.telefone.trim() || null,
          empresa: formData.empresa.trim() || null,
          mensagem: `[Agentes IA] ${formData.mensagem.trim()}`
        });

      if (error) throw error;

      toast({
        title: currentContent.form.success,
        description: currentContent.form.successDesc
      });

      setFormData({ nome: "", email: "", telefone: "", empresa: "", mensagem: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        variant: "destructive",
        title: "Erro",
        description: "Não foi possível enviar sua mensagem. Tente novamente."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">{currentContent.hero.badge}</span>
              </motion.div>
              
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-foreground">{currentContent.hero.title}</span>
                <br />
                <span className="text-gradient">{currentContent.hero.titleHighlight}</span>
              </h1>
              
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
                {currentContent.hero.description}
              </p>

              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl px-10 py-6 text-lg glow-primary group"
                onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {currentContent.form.button}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 border-y border-border/50 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {currentContent.stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="font-display text-3xl md:text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {currentContent.features.title}
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentContent.features.items.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cases Section */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{currentContent.cases.title}</h2>
              <p className="text-muted-foreground text-lg">{currentContent.cases.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {currentContent.cases.items.map((caseItem, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {caseItem.industry}
                    </span>
                    <div className="flex items-center gap-0.5 ml-auto">
                      {Array.from({ length: caseItem.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">{caseItem.company}</h3>
                  
                  <ul className="space-y-2 mb-6">
                    {caseItem.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                  
                  <blockquote className="text-sm italic text-muted-foreground border-l-2 border-primary/30 pl-4">
                    "{caseItem.quote}"
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{currentContent.pricing.title}</h2>
              <p className="text-muted-foreground text-lg">{currentContent.pricing.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {currentContent.pricing.items.map((plan, index) => (
                <motion.div
                  key={index}
                  className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-primary/5 border-primary shadow-lg shadow-primary/10' 
                      : 'bg-card/50 border-border/50 hover:border-primary/30'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      Popular
                    </div>
                  )}
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/80'}`}
                    onClick={() => document.getElementById('form-section')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {currentContent.form.button}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="form-section" className="py-24 bg-card/30">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{currentContent.form.title}</h2>
                <p className="text-muted-foreground text-lg">{currentContent.form.subtitle}</p>
              </motion.div>

              <motion.form 
                onSubmit={handleSubmit}
                className="space-y-6 p-8 rounded-2xl bg-background border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder={currentContent.form.fields.nome}
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder={currentContent.form.fields.email}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder={currentContent.form.fields.telefone}
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="pl-10"
                    />
                  </div>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder={currentContent.form.fields.empresa}
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <Textarea
                    placeholder={currentContent.form.fields.mensagem}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="pl-10 min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl py-6 text-lg glow-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      {currentContent.form.button}
                    </span>
                  )}
                </Button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AgentesIA;
