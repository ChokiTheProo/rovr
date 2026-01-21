import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Bot, MessageSquare, Zap, Brain, Clock, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const AIAgentsSection = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      badge: "Inteligência Artificial",
      title: "Agentes de IA & Automação",
      subtitle: "WhatsApp",
      description: "Transforme seu atendimento com agentes inteligentes que trabalham 24/7. Automatize conversas, qualifique leads e aumente suas vendas.",
      features: [
        {
          icon: Bot,
          title: "Agentes de IA Personalizados",
          description: "Chatbots inteligentes treinados com a personalidade da sua marca para atendimento humanizado."
        },
        {
          icon: MessageSquare,
          title: "Automação de WhatsApp",
          description: "Respostas automáticas, disparo de mensagens em massa e integração com CRM."
        },
        {
          icon: Brain,
          title: "IA Conversacional",
          description: "Entendimento de linguagem natural para resolver dúvidas e fechar vendas automaticamente."
        },
        {
          icon: Clock,
          title: "Atendimento 24/7",
          description: "Seus clientes atendidos a qualquer hora, sem precisar de equipe disponível."
        },
        {
          icon: Zap,
          title: "Integração Rápida",
          description: "Conecte com suas ferramentas existentes em poucos minutos."
        },
        {
          icon: TrendingUp,
          title: "Aumento de Conversões",
          description: "Qualificação automática de leads e follow-up inteligente."
        }
      ],
      cta: "Quero Automatizar",
      ctaSecondary: "Saiba Mais",
      stats: [
        { value: "80%", label: "Redução no tempo de resposta" },
        { value: "24/7", label: "Disponibilidade" },
        { value: "3x", label: "Mais conversões" }
      ]
    },
    en: {
      badge: "Artificial Intelligence",
      title: "AI Agents & Automation",
      subtitle: "WhatsApp",
      description: "Transform your customer service with intelligent agents that work 24/7. Automate conversations, qualify leads and increase your sales.",
      features: [
        {
          icon: Bot,
          title: "Custom AI Agents",
          description: "Smart chatbots trained with your brand's personality for humanized service."
        },
        {
          icon: MessageSquare,
          title: "WhatsApp Automation",
          description: "Automatic responses, bulk messaging and CRM integration."
        },
        {
          icon: Brain,
          title: "Conversational AI",
          description: "Natural language understanding to resolve questions and close sales automatically."
        },
        {
          icon: Clock,
          title: "24/7 Support",
          description: "Your customers served at any time, without needing available staff."
        },
        {
          icon: Zap,
          title: "Quick Integration",
          description: "Connect with your existing tools in minutes."
        },
        {
          icon: TrendingUp,
          title: "Increased Conversions",
          description: "Automatic lead qualification and smart follow-up."
        }
      ],
      cta: "I Want to Automate",
      ctaSecondary: "Learn More",
      stats: [
        { value: "80%", label: "Response time reduction" },
        { value: "24/7", label: "Availability" },
        { value: "3x", label: "More conversions" }
      ]
    },
    es: {
      badge: "Inteligencia Artificial",
      title: "Agentes de IA y Automatización",
      subtitle: "WhatsApp",
      description: "Transforma tu atención al cliente con agentes inteligentes que trabajan 24/7. Automatiza conversaciones, califica leads y aumenta tus ventas.",
      features: [
        {
          icon: Bot,
          title: "Agentes de IA Personalizados",
          description: "Chatbots inteligentes entrenados con la personalidad de tu marca para atención humanizada."
        },
        {
          icon: MessageSquare,
          title: "Automatización de WhatsApp",
          description: "Respuestas automáticas, envío masivo de mensajes e integración con CRM."
        },
        {
          icon: Brain,
          title: "IA Conversacional",
          description: "Comprensión del lenguaje natural para resolver dudas y cerrar ventas automáticamente."
        },
        {
          icon: Clock,
          title: "Atención 24/7",
          description: "Tus clientes atendidos a cualquier hora, sin necesitar equipo disponible."
        },
        {
          icon: Zap,
          title: "Integración Rápida",
          description: "Conecta con tus herramientas existentes en minutos."
        },
        {
          icon: TrendingUp,
          title: "Aumento de Conversiones",
          description: "Calificación automática de leads y seguimiento inteligente."
        }
      ],
      cta: "Quiero Automatizar",
      ctaSecondary: "Saber Más",
      stats: [
        { value: "80%", label: "Reducción en tiempo de respuesta" },
        { value: "24/7", label: "Disponibilidad" },
        { value: "3x", label: "Más conversiones" }
      ]
    }
  };

  const currentContent = content[language];

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="agentes-ia" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">{currentContent.badge}</span>
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">{currentContent.title}</span>
            <br />
            <span className="text-gradient">{currentContent.subtitle}</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {currentContent.description}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {currentContent.stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center p-4 md:p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.5)" }}
            >
              <div className="text-2xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {currentContent.features.map((feature, index) => (
            <motion.div
              key={index}
              className="group p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl px-8 py-6 text-lg glow-primary group"
          >
            {currentContent.cta}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Link to="/agentes-ia">
            <Button 
              variant="outline"
              size="lg" 
              className="rounded-xl px-8 py-6 text-lg border-primary/50 hover:bg-primary/10"
            >
              {currentContent.ctaSecondary}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AIAgentsSection;
