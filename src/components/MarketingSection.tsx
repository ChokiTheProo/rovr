import { TrendingUp, Search, Target, BarChart3, Megaphone, Zap, ArrowUpRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import useScrollAnimation, { staggerContainer, staggerItem, fadeInUp } from "@/hooks/useScrollAnimation";

const MarketingSection = () => {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  const content = {
    pt: {
      tag: "Marketing Digital",
      title1: "Mais clientes. ",
      title2: "Mais faturamento.",
      description:
        "Ter um site lindo não basta. Atraímos visitantes qualificados, transformamos em leads e leads em vendas — todos os meses, no piloto automático.",
      services: [
        {
          icon: Target,
          title: "Tráfego Pago",
          description: "Campanhas no Google Ads, Meta Ads e TikTok com foco em ROI mensurável e escalável.",
          metric: "3x ROI",
          metricLabel: "médio dos clientes",
        },
        {
          icon: Search,
          title: "SEO Estratégico",
          description: "Posicionamento orgânico no Google para receber clientes 24/7 sem pagar por clique.",
          metric: "+180%",
          metricLabel: "tráfego orgânico em 6 meses",
        },
        {
          icon: Megaphone,
          title: "Marketing de Conteúdo",
          description: "Blogs, posts e materiais que educam o público e geram autoridade na sua área.",
          metric: "+5x",
          metricLabel: "leads qualificados",
        },
        {
          icon: BarChart3,
          title: "Analytics & Otimização",
          description: "Acompanhamento de métricas, A/B testing e ajustes contínuos para maximizar resultados.",
          metric: "24/7",
          metricLabel: "monitoramento ativo",
        },
      ],
      resultsTitle: "Resultados que sua empresa pode alcançar",
      results: [
        "Aumento real no faturamento mensal",
        "Custo por cliente menor que a concorrência",
        "Previsibilidade de vendas todos os meses",
        "Marca reconhecida na sua região/nicho",
      ],
      ctaTitle: "Pronto para faturar mais?",
      ctaDescription: "Análise gratuita do seu negócio + plano de ação personalizado. Sem compromisso.",
      ctaButton: "Quero faturar mais",
    },
    en: {
      tag: "Digital Marketing",
      title1: "More customers. ",
      title2: "More revenue.",
      description:
        "A beautiful site isn't enough. We attract qualified visitors, turn them into leads and leads into sales — every month, on autopilot.",
      services: [
        {
          icon: Target,
          title: "Paid Traffic",
          description: "Google Ads, Meta Ads and TikTok campaigns focused on measurable, scalable ROI.",
          metric: "3x ROI",
          metricLabel: "average for clients",
        },
        {
          icon: Search,
          title: "Strategic SEO",
          description: "Organic Google ranking to bring customers 24/7 without paying per click.",
          metric: "+180%",
          metricLabel: "organic traffic in 6 months",
        },
        {
          icon: Megaphone,
          title: "Content Marketing",
          description: "Blogs, posts and materials that educate audiences and build authority in your field.",
          metric: "+5x",
          metricLabel: "qualified leads",
        },
        {
          icon: BarChart3,
          title: "Analytics & Optimization",
          description: "Metrics tracking, A/B testing and continuous adjustments to maximize results.",
          metric: "24/7",
          metricLabel: "active monitoring",
        },
      ],
      resultsTitle: "Results your company can achieve",
      results: [
        "Real increase in monthly revenue",
        "Lower customer cost than competitors",
        "Sales predictability every month",
        "Recognized brand in your region/niche",
      ],
      ctaTitle: "Ready to earn more?",
      ctaDescription: "Free business analysis + custom action plan. No commitment.",
      ctaButton: "I want to earn more",
    },
    es: {
      tag: "Marketing Digital",
      title1: "Más clientes. ",
      title2: "Más facturación.",
      description:
        "Un sitio bonito no basta. Atraemos visitantes calificados, los convertimos en leads y los leads en ventas — todos los meses, en piloto automático.",
      services: [
        {
          icon: Target,
          title: "Tráfico Pago",
          description: "Campañas en Google Ads, Meta Ads y TikTok con foco en ROI medible y escalable.",
          metric: "3x ROI",
          metricLabel: "promedio de clientes",
        },
        {
          icon: Search,
          title: "SEO Estratégico",
          description: "Posicionamiento orgánico en Google para recibir clientes 24/7 sin pagar por clic.",
          metric: "+180%",
          metricLabel: "tráfico orgánico en 6 meses",
        },
        {
          icon: Megaphone,
          title: "Marketing de Contenido",
          description: "Blogs, posts y materiales que educan al público y generan autoridad en tu área.",
          metric: "+5x",
          metricLabel: "leads calificados",
        },
        {
          icon: BarChart3,
          title: "Analytics & Optimización",
          description: "Seguimiento de métricas, A/B testing y ajustes continuos para maximizar resultados.",
          metric: "24/7",
          metricLabel: "monitoreo activo",
        },
      ],
      resultsTitle: "Resultados que tu empresa puede alcanzar",
      results: [
        "Aumento real en la facturación mensual",
        "Costo por cliente menor que la competencia",
        "Previsibilidad de ventas cada mes",
        "Marca reconocida en tu región/nicho",
      ],
      ctaTitle: "¿Listo para facturar más?",
      ctaDescription: "Análisis gratuito de tu negocio + plan de acción personalizado. Sin compromiso.",
      ctaButton: "Quiero facturar más",
    },
  };

  const t = content[language];

  return (
    <section id="marketing" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <motion.div
        className="absolute -top-32 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-accent text-sm font-medium tracking-wider uppercase">{t.tag}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-foreground">{t.title1}</span>
            <span className="text-gradient">{t.title2}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{t.description}</p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {t.services.map((service, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:glow-primary transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-baseline gap-2 pt-3 border-t border-border/40">
                    <span className="font-display text-2xl font-bold text-gradient">{service.metric}</span>
                    <span className="text-xs text-muted-foreground">{service.metricLabel}</span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-300 flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Results + CTA */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Results list */}
          <div className="p-8 rounded-3xl border border-border/50 bg-card/40 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-accent" />
              <h3 className="text-xl font-bold text-foreground">{t.resultsTitle}</h3>
            </div>
            <ul className="space-y-3">
              {t.results.map((result, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{result}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA card */}
          <div className="relative p-8 rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 to-accent/15 backdrop-blur-sm overflow-hidden flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 animate-pulse" />
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{t.ctaTitle}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{t.ctaDescription}</p>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold rounded-xl px-8 py-6 text-lg glow-primary"
                >
                  <a href="https://web.whatsapp.com/send?phone=5554991710543" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {t.ctaButton}
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingSection;
