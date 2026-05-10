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
      title1: "Site bonito não vende. ",
      title2: "Estratégia sim.",
      description:
        "Um site sem tráfego é um cartão de visita esquecido na gaveta. Cuidamos do que faz visitante virar cliente: anúncios, SEO, conteúdo e otimização contínua.",
      services: [
        {
          icon: Target,
          title: "Tráfego Pago",
          description: "Google, Meta e TikTok Ads com foco em ROI mensurável. Cada real tem que voltar com lucro.",
          metric: "Ads",
          metricLabel: "Google • Meta • TikTok",
        },
        {
          icon: Search,
          title: "SEO Estratégico",
          description: "Você no Google sem precisar pagar por clique. Estrutura técnica + conteúdo que ranqueia.",
          metric: "SEO",
          metricLabel: "técnico + conteúdo",
        },
        {
          icon: Megaphone,
          title: "Conteúdo & Autoridade",
          description: "Blog e posts que ensinam algo de verdade. Quem vê, confia. Quem confia, compra.",
          metric: "Blog",
          metricLabel: "+ redes sociais",
        },
        {
          icon: BarChart3,
          title: "Analytics & Otimização",
          description: "Métricas claras, testes A/B e ajustes constantes. Sem achismo, só dado.",
          metric: "Dados",
          metricLabel: "decisões que rendem",
        },
      ],
      resultsTitle: "O que você ganha trabalhando com a gente",
      results: [
        "Mais clientes vindo do digital, todo mês",
        "Custo por cliente menor que correr atrás na mão",
        "Previsibilidade pra planejar o caixa sem susto",
        "Marca lembrada no seu nicho ou região",
      ],
      ctaTitle: "Pronto para fazer o digital trabalhar pra você?",
      ctaDescription: "Diagnóstico gratuito do seu negócio + sugestões práticas. Sem compromisso, sem ladainha.",
      ctaButton: "Quero meu diagnóstico",
    },
    en: {
      tag: "Digital Marketing",
      title1: "A pretty site doesn't sell. ",
      title2: "Strategy does.",
      description:
        "A site with no traffic is a business card lost in a drawer. We handle what turns visitors into customers: ads, SEO, content, and constant optimization.",
      services: [
        {
          icon: Target,
          title: "Paid Traffic",
          description: "Google, Meta and TikTok Ads built for measurable ROI. Every dollar has to come back with a profit.",
          metric: "Ads",
          metricLabel: "Google • Meta • TikTok",
        },
        {
          icon: Search,
          title: "Strategic SEO",
          description: "Show up on Google without paying per click. Technical setup + content that actually ranks.",
          metric: "SEO",
          metricLabel: "technical + content",
        },
        {
          icon: Megaphone,
          title: "Content & Authority",
          description: "Blog and posts that teach something real. People who learn, trust. People who trust, buy.",
          metric: "Blog",
          metricLabel: "+ social",
        },
        {
          icon: BarChart3,
          title: "Analytics & Optimization",
          description: "Clear metrics, A/B testing, constant tweaks. No guessing — only data.",
          metric: "Data",
          metricLabel: "decisions that pay off",
        },
      ],
      resultsTitle: "What you actually get",
      results: [
        "More customers coming from digital, every month",
        "Lower cost per customer than chasing them by hand",
        "Predictability so you can plan cashflow without surprises",
        "A brand people remember in your niche or region",
      ],
      ctaTitle: "Ready to make digital work for you?",
      ctaDescription: "Free diagnosis of your business + practical next steps. No commitment, no fluff.",
      ctaButton: "Get my diagnosis",
    },
    es: {
      tag: "Marketing Digital",
      title1: "Un sitio bonito no vende. ",
      title2: "Estrategia sí.",
      description:
        "Un sitio sin tráfico es una tarjeta olvidada en el cajón. Cuidamos lo que convierte visitantes en clientes: anuncios, SEO, contenido y optimización constante.",
      services: [
        {
          icon: Target,
          title: "Tráfico Pago",
          description: "Google, Meta y TikTok Ads con foco en ROI medible. Cada peso tiene que volver con ganancia.",
          metric: "Ads",
          metricLabel: "Google • Meta • TikTok",
        },
        {
          icon: Search,
          title: "SEO Estratégico",
          description: "Apareces en Google sin pagar por clic. Estructura técnica + contenido que rankea.",
          metric: "SEO",
          metricLabel: "técnico + contenido",
        },
        {
          icon: Megaphone,
          title: "Contenido & Autoridad",
          description: "Blog y posts que enseñan algo real. Quien aprende, confía. Quien confía, compra.",
          metric: "Blog",
          metricLabel: "+ redes",
        },
        {
          icon: BarChart3,
          title: "Analytics & Optimización",
          description: "Métricas claras, tests A/B y ajustes constantes. Nada de adivinar, solo datos.",
          metric: "Datos",
          metricLabel: "decisiones que rinden",
        },
      ],
      resultsTitle: "Lo que ganas trabajando con nosotros",
      results: [
        "Más clientes desde lo digital, cada mes",
        "Costo por cliente menor que ir a buscarlos a mano",
        "Previsibilidad para planear caja sin sustos",
        "Marca recordada en tu nicho o región",
      ],
      ctaTitle: "¿Listo para que lo digital trabaje por ti?",
      ctaDescription: "Diagnóstico gratis de tu negocio + sugerencias prácticas. Sin compromiso, sin relleno.",
      ctaButton: "Quiero mi diagnóstico",
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
