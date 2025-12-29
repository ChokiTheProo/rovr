import { TrendingUp, DollarSign, BarChart3, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import useScrollAnimation, { staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const MicroSaasSection = () => {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  const features = language === "pt" ? [
    {
      icon: TrendingUp,
      title: "Crescimento Exponencial",
      description: "Arquitetura projetada para escalar de centenas a milhões de usuários sem refatoração.",
      metric: "10x",
      metricLabel: "Crescimento médio",
    },
    {
      icon: DollarSign,
      title: "Receita Recorrente",
      description: "Modelos de monetização que geram receita previsível e sustentável mês após mês.",
      metric: "MRR",
      metricLabel: "Monthly Revenue",
    },
    {
      icon: BarChart3,
      title: "Métricas em Tempo Real",
      description: "Dashboard completo com KPIs de engajamento, retenção e monetização.",
      metric: "24/7",
      metricLabel: "Monitoramento",
    },
    {
      icon: Settings,
      title: "Automação Total",
      description: "Desde atualizações de conteúdo até campanhas de marketing, tudo automatizado.",
      metric: "90%",
      metricLabel: "Processos automáticos",
    },
  ] : [
    {
      icon: TrendingUp,
      title: "Exponential Growth",
      description: "Architecture designed to scale from hundreds to millions of users without refactoring.",
      metric: "10x",
      metricLabel: "Average growth",
    },
    {
      icon: DollarSign,
      title: "Recurring Revenue",
      description: "Monetization models that generate predictable and sustainable revenue month after month.",
      metric: "MRR",
      metricLabel: "Monthly Revenue",
    },
    {
      icon: BarChart3,
      title: "Real-Time Metrics",
      description: "Complete dashboard with engagement, retention and monetization KPIs.",
      metric: "24/7",
      metricLabel: "Monitoring",
    },
    {
      icon: Settings,
      title: "Full Automation",
      description: "From content updates to marketing campaigns, everything automated.",
      metric: "90%",
      metricLabel: "Automated processes",
    },
  ];

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
            {language === "pt" ? "Nossa Filosofia" : "Our Philosophy"}
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {language === "pt" ? "Visão " : ""}
            <span className="text-gradient">Micro SaaS</span>
            {language === "en" ? " Vision" : ""}
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {language === "pt" 
              ? "Cada produto da RoVR é tratado como um negócio digital independente. Criamos aplicativos similares aos nossos projetos existentes, aplicando metodologias SaaS para gerar valor mensurável. Integrações TEF e notas fiscais em andamento."
              : "Every RoVR product is treated as an independent digital business. We create applications similar to our existing projects, applying SaaS methodologies to generate measurable value. TEF integrations and invoices in progress."}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
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

        {/* Quote */}
        <motion.div 
          className="max-w-3xl mx-auto text-center p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.blockquote 
            className="text-xl md:text-2xl font-light text-foreground italic mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7 }}
          >
            {language === "pt" 
              ? "\"Não criamos apenas soluções. Criamos produtos digitais que crescem, evoluem e geram valor continuamente.\""
              : "\"We don't just create solutions. We create digital products that grow, evolve and continuously generate value.\""}
          </motion.blockquote>
          <motion.cite 
            className="text-primary font-semibold not-italic"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            — {language === "pt" ? "EQUIPE ROVR" : "ROVR TEAM"}
          </motion.cite>
        </motion.div>
      </div>
    </section>
  );
};

export default MicroSaasSection;
