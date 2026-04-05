import { TrendingUp, DollarSign, BarChart3, Settings, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import useScrollAnimation, { staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const MicroSaasSection = () => {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  const content = {
    pt: {
      philosophy: "Subnegócio RoVR",
      vision: "Nossos ",
      microSaas: "Micro SaaS",
      description: "Além de sites e blogs, a RoVR desenvolve produtos digitais independentes usando metodologias SaaS. Cada aplicativo é tratado como um negócio próprio, gerando valor mensurável para seus usuários.",
      quote: "\"Nossos MicroSaaS são produtos complementares que crescem, evoluem e geram valor continuamente.\"",
      team: "EQUIPE ROVR",
      features: [
        { icon: TrendingUp, title: "Crescimento Exponencial", description: "Arquitetura projetada para escalar de centenas a milhões de usuários sem refatoração.", metric: "10x", metricLabel: "Crescimento médio" },
        { icon: DollarSign, title: "Receita Recorrente", description: "Modelos de monetização que geram receita previsível e sustentável mês após mês.", metric: "MRR", metricLabel: "Monthly Revenue" },
        { icon: BarChart3, title: "Métricas em Tempo Real", description: "Dashboard completo com KPIs de engajamento, retenção e monetização.", metric: "24/7", metricLabel: "Monitoramento" },
        { icon: Settings, title: "Automação Total", description: "Desde atualizações de conteúdo até campanhas de marketing, tudo automatizado.", metric: "90%", metricLabel: "Processos automáticos" },
      ],
    },
    en: {
      philosophy: "RoVR Sub-Business",
      vision: "Our ",
      microSaas: "Micro SaaS",
      description: "Beyond websites and blogs, RoVR develops independent digital products using SaaS methodologies. Each app is treated as its own business, generating measurable value for its users.",
      quote: "\"Our MicroSaaS are complementary products that grow, evolve and continuously generate value.\"",
      team: "ROVR TEAM",
      features: [
        { icon: TrendingUp, title: "Exponential Growth", description: "Architecture designed to scale from hundreds to millions of users without refactoring.", metric: "10x", metricLabel: "Average growth" },
        { icon: DollarSign, title: "Recurring Revenue", description: "Monetization models that generate predictable and sustainable revenue month after month.", metric: "MRR", metricLabel: "Monthly Revenue" },
        { icon: BarChart3, title: "Real-Time Metrics", description: "Complete dashboard with engagement, retention and monetization KPIs.", metric: "24/7", metricLabel: "Monitoring" },
        { icon: Settings, title: "Full Automation", description: "From content updates to marketing campaigns, everything automated.", metric: "90%", metricLabel: "Automated processes" },
      ],
    },
    es: {
      philosophy: "Subnegocio RoVR",
      vision: "Nuestros ",
      microSaas: "Micro SaaS",
      description: "Además de sitios web y blogs, RoVR desarrolla productos digitales independientes usando metodologías SaaS. Cada aplicación se trata como un negocio propio, generando valor medible para sus usuarios.",
      quote: "\"Nuestros MicroSaaS son productos complementarios que crecen, evolucionan y generan valor continuamente.\"",
      team: "EQUIPO ROVR",
      features: [
        { icon: TrendingUp, title: "Crecimiento Exponencial", description: "Arquitectura diseñada para escalar de cientos a millones de usuarios sin refactorización.", metric: "10x", metricLabel: "Crecimiento promedio" },
        { icon: DollarSign, title: "Ingresos Recurrentes", description: "Modelos de monetización que generan ingresos predecibles y sostenibles mes tras mes.", metric: "MRR", metricLabel: "Monthly Revenue" },
        { icon: BarChart3, title: "Métricas en Tiempo Real", description: "Dashboard completo con KPIs de engagement, retención y monetización.", metric: "24/7", metricLabel: "Monitoreo" },
        { icon: Settings, title: "Automatización Total", description: "Desde actualizaciones de contenido hasta campañas de marketing, todo automatizado.", metric: "90%", metricLabel: "Procesos automáticos" },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="microsaas" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-primary text-sm font-medium tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.1 }}
          >
            {t.philosophy}
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t.vision}
            <span className="text-gradient">{t.microSaas}</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t.description}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {t.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:glow-primary transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <motion.span 
                      className="text-2xl font-display font-bold text-gradient"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {feature.metric}
                    </motion.span>
                    <span className="text-muted-foreground text-xs">
                      {feature.metricLabel}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote + Pricing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quote */}
          <motion.div 
            className="flex items-center p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <motion.blockquote 
                className="text-lg md:text-xl font-light text-foreground italic mb-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.7 }}
              >
                {t.quote}
              </motion.blockquote>
              <motion.cite 
                className="text-primary font-semibold not-italic"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8 }}
              >
                — {t.team}
              </motion.cite>
            </div>
          </motion.div>

          {/* MicroSaaS Pricing Card */}
          <motion.div 
            className="p-8 rounded-2xl border border-primary/40 bg-gradient-to-b from-primary/10 via-card to-card shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-primary/20">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{language === "pt" ? "MicroSaaS Starter" : language === "en" ? "MicroSaaS Starter" : "MicroSaaS Starter"}</h3>
                <p className="text-sm text-muted-foreground">{language === "pt" ? "Ideal para validar sua ideia" : language === "en" ? "Ideal to validate your idea" : "Ideal para validar tu idea"}</p>
              </div>
            </div>
            <div className="mb-6 pb-6 border-b border-border/50">
              <div className="flex items-baseline gap-1">
                <span className="text-base text-muted-foreground">{language === "pt" ? "R$" : "$"}</span>
                <span className="text-4xl font-bold text-foreground">{language === "pt" ? "3.500+" : "599+"}</span>
                <span className="text-muted-foreground text-sm ml-1">/{language === "pt" ? "único" : language === "en" ? "one-time" : "único"}</span>
              </div>
              <p className="text-sm text-accent font-medium mt-2">{language === "pt" ? "Entrega em 2-3 semanas" : language === "en" ? "Delivery in 2-3 weeks" : "Entrega en 2-3 semanas"}</p>
            </div>
            <ul className="space-y-2 mb-6">
              {[
                language === "pt" ? "MVP completo e funcional" : language === "en" ? "Complete functional MVP" : "MVP completo y funcional",
                language === "pt" ? "Design responsivo" : language === "en" ? "Responsive design" : "Diseño responsivo",
                language === "pt" ? "Integração com pagamentos" : language === "en" ? "Payment integration" : "Integración con pagos",
                language === "pt" ? "Painel administrativo" : language === "en" ? "Admin dashboard" : "Panel administrativo",
                language === "pt" ? "30 dias de suporte" : language === "en" ? "30 days of support" : "30 días de soporte",
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="p-0.5 rounded-full bg-primary/20">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  {feat}
                </li>
              ))}
            </ul>
            <a href="https://web.whatsapp.com/send?phone=5554991710543" target="_blank" rel="noopener noreferrer">
              <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground" size="lg">
                {language === "pt" ? "Começar MicroSaaS" : language === "en" ? "Start MicroSaaS" : "Comenzar MicroSaaS"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MicroSaasSection;
