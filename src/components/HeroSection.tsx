import { Sparkles, MessageCircle, ShieldCheck, Eye, Zap, Briefcase, Star, CheckCircle2, Clock, ArrowDown } from "lucide-react";
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
        { value: "+10", label: "Projetos entregues", category: "Portfolio" },
        { value: "5.0", label: "Avaliação dos clientes", category: "Feedback" },
        { value: "100%", label: "Aprovação no preview", category: "Qualidade" },
        { value: "7d", label: "Prazo médio", category: "Eficiência" },
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
        { value: "+10", label: "Projects delivered", category: "Portfolio" },
        { value: "5.0", label: "Client rating", category: "Feedback" },
        { value: "100%", label: "Preview approval", category: "Quality" },
        { value: "7d", label: "Avg. delivery", category: "Efficiency" },
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
        { value: "+10", label: "Proyectos entregados", category: "Portfolio" },
        { value: "5.0", label: "Calificación de clientes", category: "Feedback" },
        { value: "100%", label: "Aprobación en preview", category: "Calidad" },
        { value: "7d", label: "Plazo medio", category: "Eficiencia" },
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
        className="container mx-auto px-4 sm:px-6 py-8 md:py-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* === MEGA HEADLINE BLOCK (Anton-style adapted to Orbitron + RoVR identity) === */}
        <motion.div variants={itemVariants} className="max-w-[1400px] mx-auto mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }}>
              <Sparkles className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground">
              {c.badge}
            </span>
          </div>

          <h1 className="heading-mega font-display font-black text-foreground leading-[0.9] tracking-tight">
            <span className="block text-[14vw] sm:text-[13vw] lg:text-[12vw] xl:text-[11vw]">
              {language === "pt" ? "Seu site" : language === "en" ? "Your site" : "Tu sitio"}
            </span>
            <span className="block text-outline text-[14vw] sm:text-[13vw] lg:text-[12vw] xl:text-[11vw]">
              {language === "pt" ? "no ar em 7 dias" : language === "en" ? "live in 7 days" : "online en 7 días"}
            </span>
          </h1>
        </motion.div>

        {/* === Bottom row: description (left) + arrow (right) === */}
        <motion.div
          variants={itemVariants}
          className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12"
        >
          <p className="text-muted-foreground text-sm sm:text-base max-w-xs uppercase tracking-wider leading-relaxed">
            {c.description}
          </p>
          <button
            onClick={() => scrollToSection("sobre")}
            aria-label="Scroll down"
            className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-primary/40 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all duration-300 group"
          >
            <ArrowDown className="w-5 h-5 text-primary animate-arrow-bounce group-hover:text-accent transition-colors" strokeWidth={1.5} />
          </button>
        </motion.div>

        {/* === CONTENT GRID (description detail + CTAs + stats) === */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* LEFT — CTAs & trust */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
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

          {/* RIGHT — Stats grid (Midnight Ethereal) */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
            {(() => {
              const accents = [
                { icon: Briefcase, ring: "hover:border-purple-500/40", shadow: "hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.35)]", glow: "bg-purple-600/10 group-hover:bg-purple-500/20", iconBg: "bg-purple-500/10", iconText: "text-purple-400", labelText: "text-purple-400/80" },
                { icon: Star, ring: "hover:border-blue-500/40", shadow: "hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.35)]", glow: "bg-blue-600/10 group-hover:bg-blue-500/20", iconBg: "bg-blue-500/10", iconText: "text-blue-400", labelText: "text-blue-400/80" },
                { icon: CheckCircle2, ring: "hover:border-emerald-500/40", shadow: "hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.35)]", glow: "bg-emerald-600/10 group-hover:bg-emerald-500/20", iconBg: "bg-emerald-500/10", iconText: "text-emerald-400", labelText: "text-emerald-400/80" },
                { icon: Clock, ring: "hover:border-indigo-500/40", shadow: "hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.35)]", glow: "bg-indigo-600/10 group-hover:bg-indigo-500/20", iconBg: "bg-indigo-500/10", iconText: "text-indigo-400", labelText: "text-indigo-400/80" },
              ];
              return c.stats.map((stat, index) => {
                const a = accents[index];
                const Icon = a.icon;
                return (
                  <motion.div
                    key={index}
                    className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.05] to-transparent p-6 sm:p-7 transition-all duration-500 ${a.ring} ${a.shadow}`}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`absolute -right-4 -top-4 h-24 w-24 rounded-full blur-2xl transition-all ${a.glow}`} />
                    <div className="relative flex flex-col gap-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg ${a.iconBg}`}>
                          <Icon className={`w-4 h-4 ${a.iconText}`} strokeWidth={1.75} />
                        </div>
                        <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${a.labelText}`}>
                          {stat.category}
                        </span>
                      </div>
                      <div className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-none">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-light mt-1">{stat.label}</div>
                    </div>
                  </motion.div>
                );
              });
            })()}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
