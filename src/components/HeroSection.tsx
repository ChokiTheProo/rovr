import { Sparkles, MessageCircle, Star, ShieldCheck, Eye, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { language } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const content = {
    pt: {
      badge: "Sites Profissionais • Blogs • Gestão Digital",
      headline1: "Sites que ",
      headline2: "vendem por você",
      headline3: ", 24 horas por dia.",
      description:
        "Criamos sites, blogs e landing pages que transformam visitantes em clientes. Pré-visualização gratuita — você só paga depois de aprovar o resultado.",
      ctaPrimary: "Falar no WhatsApp agora",
      ctaSecondary: "Ver Projetos",
      ctaTertiary: "Conhecer a RoVR",
      trust1: "Preview grátis",
      trust2: "Sem risco",
      trust3: "Entrega em até 7 dias",
      stats: [
        { value: "+10", label: "Projetos entregues" },
        { value: "5.0", label: "Avaliação média" },
        { value: "100%", label: "Clientes satisfeitos" },
        { value: "7d", label: "Entrega média" },
      ],
      whatsapp: "Fale Conosco",
    },
    en: {
      badge: "Professional Websites • Blogs • Digital Management",
      headline1: "Websites that ",
      headline2: "sell for you",
      headline3: ", 24 hours a day.",
      description:
        "We build websites, blogs and landing pages that turn visitors into customers. Free preview — you only pay after approving the result.",
      ctaPrimary: "Chat on WhatsApp now",
      ctaSecondary: "View Projects",
      ctaTertiary: "About RoVR",
      trust1: "Free preview",
      trust2: "Zero risk",
      trust3: "Delivery in up to 7 days",
      stats: [
        { value: "+10", label: "Projects delivered" },
        { value: "5.0", label: "Average rating" },
        { value: "100%", label: "Happy clients" },
        { value: "7d", label: "Avg. delivery" },
      ],
      whatsapp: "Contact Us",
    },
    es: {
      badge: "Sitios Profesionales • Blogs • Gestión Digital",
      headline1: "Sitios que ",
      headline2: "venden por ti",
      headline3: ", 24 horas al día.",
      description:
        "Creamos sitios, blogs y landing pages que convierten visitantes en clientes. Vista previa gratuita — solo pagas después de aprobar el resultado.",
      ctaPrimary: "Hablar por WhatsApp ahora",
      ctaSecondary: "Ver Proyectos",
      ctaTertiary: "Conocer RoVR",
      trust1: "Preview gratis",
      trust2: "Sin riesgo",
      trust3: "Entrega en hasta 7 días",
      stats: [
        { value: "+10", label: "Proyectos entregados" },
        { value: "5.0", label: "Calificación media" },
        { value: "100%", label: "Clientes satisfechos" },
        { value: "7d", label: "Entrega media" },
      ],
      whatsapp: "Contáctanos",
    },
  };

  const c = content[language];

  const trustBadges = [
    { icon: ShieldCheck, text: c.trust1 },
    { icon: Eye, text: c.trust2 },
    { icon: Zap, text: c.trust3 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -100, 0], opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-6 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.5)" }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm text-muted-foreground">{c.badge}</span>
          </motion.div>

          {/* Brand mark */}
          <motion.h1 variants={itemVariants} className="font-display text-5xl md:text-7xl font-bold mb-4">
            <span className="text-foreground">Ro</span>
            <span className="text-gradient">VR</span>
          </motion.h1>

          {/* Headline */}
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold leading-tight mb-6 max-w-4xl">
            <span className="text-foreground">{c.headline1}</span>
            <span className="text-gradient-accent">{c.headline2}</span>
            <span className="text-foreground">{c.headline3}</span>
          </motion.h2>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            {c.description}
          </motion.p>

          {/* Trust badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {trustBadges.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-foreground"
              >
                <b.icon className="w-3.5 h-3.5 text-primary" />
                <span className="font-medium">{b.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs — WhatsApp first */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold rounded-xl px-8 py-6 text-lg glow-primary transition-all duration-300"
              >
                <a
                  href="https://web.whatsapp.com/send?phone=5554991710543"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {c.ctaPrimary}
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("projetos")}
                className="w-full sm:w-auto border-border/50 bg-secondary/30 hover:bg-secondary/50 text-foreground font-semibold rounded-xl px-8 py-6 text-lg transition-all duration-300"
              >
                {c.ctaSecondary}
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-3xl">
            {c.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-xs md:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
