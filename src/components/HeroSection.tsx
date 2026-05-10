import { Sparkles, MessageCircle, Star, ShieldCheck, Eye, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedShaderBackground from "./ui/animated-shader-background";

const HeroSection = () => {
  const { language } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const content = {
    pt: {
      badge: "Sites • Blogs • Landing Pages • Gestão Digital",
      headline1: "Seu site no ar em ",
      headline2: "7 dias",
      headline3: ". Você só paga depois de aprovar.",
      description:
        "Criamos sites e landing pages que vendem enquanto você dorme. Veja o resultado antes de fechar — sem cartão, sem entrada, sem pegadinha.",
      ctaPrimary: "Quero meu site no WhatsApp",
      ctaSecondary: "Ver Projetos",
      ctaTertiary: "Conhecer a RoVR",
      trust1: "Preview grátis",
      trust2: "Sem entrada",
      trust3: "Entrega em 7 dias",
      stats: [
        { value: "+10", label: "Projetos entregues" },
        { value: "5.0", label: "Avaliação dos clientes" },
        { value: "100%", label: "Aprovação no preview" },
        { value: "7d", label: "Prazo médio" },
      ],
      whatsapp: "Fale Conosco",
    },
    en: {
      badge: "Websites • Blogs • Landing Pages • Digital Management",
      headline1: "Your site live in ",
      headline2: "7 days",
      headline3: ". Pay only after you approve.",
      description:
        "We build websites and landing pages that sell while you sleep. See the result before you commit — no card, no deposit, no catch.",
      ctaPrimary: "Get my site on WhatsApp",
      ctaSecondary: "View Projects",
      ctaTertiary: "About RoVR",
      trust1: "Free preview",
      trust2: "No deposit",
      trust3: "7-day delivery",
      stats: [
        { value: "+10", label: "Projects delivered" },
        { value: "5.0", label: "Client rating" },
        { value: "100%", label: "Preview approval" },
        { value: "7d", label: "Avg. delivery" },
      ],
      whatsapp: "Contact Us",
    },
    es: {
      badge: "Sitios • Blogs • Landing Pages • Gestión Digital",
      headline1: "Tu sitio online en ",
      headline2: "7 días",
      headline3: ". Pagas solo después de aprobar.",
      description:
        "Creamos sitios y landing pages que venden mientras duermes. Ves el resultado antes de cerrar — sin tarjeta, sin entrada, sin trampa.",
      ctaPrimary: "Quiero mi sitio por WhatsApp",
      ctaSecondary: "Ver Proyectos",
      ctaTertiary: "Conocer RoVR",
      trust1: "Preview gratis",
      trust2: "Sin entrada",
      trust3: "Entrega en 7 días",
      stats: [
        { value: "+10", label: "Proyectos entregados" },
        { value: "5.0", label: "Calificación de clientes" },
        { value: "100%", label: "Aprobación en preview" },
        { value: "7d", label: "Plazo medio" },
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
    <section className="relative min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center pt-24 md:pt-20 pb-12 overflow-hidden">
      {/* Animated Shader Background */}
      <div className="absolute inset-0 opacity-60 mix-blend-screen">
        <AnimatedShaderBackground />
      </div>
      {/* Soft overlay for legibility */}
      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
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
        className="container mx-auto px-4 sm:px-6 py-8 md:py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* LEFT — content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-5 sm:mb-6 max-w-full"
              whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.5)" }}
            >
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="flex-shrink-0">
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-xs sm:text-sm text-muted-foreground">{c.badge}</span>
            </motion.div>

            {/* Brand mark */}
            <motion.h1 variants={itemVariants} className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
              <span className="text-foreground">Ro</span>
              <span className="text-gradient">VR</span>
            </motion.h1>

            {/* Headline */}
            <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-4 sm:mb-6">
              <span className="text-foreground">{c.headline1}</span>
              <span className="text-gradient-accent">{c.headline2}</span>
              <span className="text-foreground">{c.headline3}</span>
            </motion.h2>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-xl mb-6 sm:mb-8 leading-relaxed">
              {c.description}
            </motion.p>

            {/* Trust badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8">
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

            {/* CTA — WhatsApp */}
            <motion.div variants={itemVariants} className="w-full sm:w-auto">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  asChild
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold rounded-xl px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg glow-primary transition-all duration-300"
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
            </motion.div>
          </div>

          {/* RIGHT — Stats grid (Turing-style) */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full">
            {c.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative p-6 sm:p-8 rounded-2xl border border-border/40 bg-card/30 backdrop-blur-md hover:border-primary/40 transition-colors"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-2 leading-none">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
