import { MessageCircle, ArrowRight, Briefcase, Star, CheckCircle2, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      headlinePre: "Seu site no ar em",
      headlineCursive: "7 dias",
      headlinePost: "— e você só paga depois de aprovar.",
      sub: "Criamos sites e landing pages que vendem enquanto você dorme. Veja o resultado antes de fechar.",
      ctaPrimary: "Falar no WhatsApp",
      ctaSecondary: "Ver projetos",
      stats: [
        { value: "+10", label: "Projetos entregues", category: "Portfolio" },
        { value: "5.0", label: "Avaliação dos clientes", category: "Feedback" },
        { value: "100%", label: "Aprovação no preview", category: "Qualidade" },
        { value: "7d", label: "Prazo médio", category: "Eficiência" },
      ],
    },
    en: {
      headlinePre: "Your site live in",
      headlineCursive: "7 days",
      headlinePost: "— pay only after you approve.",
      sub: "We build websites and landing pages that sell while you sleep. See the result before you commit.",
      ctaPrimary: "Chat on WhatsApp",
      ctaSecondary: "View projects",
      stats: [
        { value: "+10", label: "Projects delivered", category: "Portfolio" },
        { value: "5.0", label: "Client rating", category: "Feedback" },
        { value: "100%", label: "Preview approval", category: "Quality" },
        { value: "7d", label: "Avg. delivery", category: "Efficiency" },
      ],
    },
    es: {
      headlinePre: "Tu sitio online en",
      headlineCursive: "7 días",
      headlinePost: "— pagas solo después de aprobar.",
      sub: "Creamos sitios y landing pages que venden mientras duermes. Ves el resultado antes de cerrar.",
      ctaPrimary: "Hablar por WhatsApp",
      ctaSecondary: "Ver proyectos",
      stats: [
        { value: "+10", label: "Proyectos entregados", category: "Portfolio" },
        { value: "5.0", label: "Calificación", category: "Feedback" },
        { value: "100%", label: "Aprobación en preview", category: "Calidad" },
        { value: "7d", label: "Plazo medio", category: "Eficiencia" },
      ],
    },
  };

  const c = content[language];

  const scrollToProjects = () => {
    const el = document.getElementById("projetos") || document.getElementById("portfolio");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const accents = [
    { icon: Briefcase, iconBg: "bg-purple-500/10", iconText: "text-purple-400", labelText: "text-purple-400/80" },
    { icon: Star, iconBg: "bg-blue-500/10", iconText: "text-blue-400", labelText: "text-blue-400/80" },
    { icon: CheckCircle2, iconBg: "bg-emerald-500/10", iconText: "text-emerald-400", labelText: "text-emerald-400/80" },
    { icon: Clock, iconBg: "bg-indigo-500/10", iconText: "text-indigo-400", labelText: "text-indigo-400/80" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 px-4">
      {/* Blurred brand blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl bg-primary/30"
          style={{ opacity: 0.6 }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl bg-accent/30"
          style={{ opacity: 0.6 }}
        />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Headline */}
        <h1
          className="font-bold tracking-tight text-foreground"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: "clamp(2.5rem, 7vw, 72px)",
            lineHeight: 1.05,
          }}
        >
          {c.headlinePre}{" "}
          <span
            className="inline-block align-baseline text-gradient-accent"
            style={{
              fontFamily: "'Caveat', cursive",
              fontWeight: 700,
              fontSize: "1.15em",
              lineHeight: 1,
            }}
          >
            {c.headlineCursive}
          </span>{" "}
          {c.headlinePost}
        </h1>

        {/* Sub-headline */}
        <p
          className="mt-6 text-base sm:text-lg text-foreground/75 leading-relaxed"
          style={{ maxWidth: "500px", fontFamily: "'Outfit', sans-serif" }}
        >
          {c.sub}
        </p>

        {/* Dual CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-3">
          <motion.a
            href="https://web.whatsapp.com/send?phone=5554991710543"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold text-primary-foreground bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <MessageCircle className="w-5 h-5" />
            {c.ctaPrimary}
          </motion.a>

          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold bg-background/60 backdrop-blur-sm text-foreground border border-border hover:border-primary/40 transition-all"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {c.ctaSecondary}
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Stats grid (centralizado abaixo dos CTAs) */}
        <div className="mt-16 w-full grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
          {c.stats.map((stat, index) => {
            const a = accents[index];
            const Icon = a.icon;
            return (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/50 backdrop-blur-sm p-5 transition-all duration-500 hover:bg-white/70"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative flex flex-col gap-1 text-left">
                  <div className="flex items-center gap-2 mb-1">
                    <div className={`p-1.5 rounded-lg ${a.iconBg}`}>
                      <Icon className={`w-3.5 h-3.5 ${a.iconText}`} strokeWidth={1.75} />
                    </div>
                    <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${a.labelText}`}>
                      {stat.category}
                    </span>
                  </div>
                  <div
                    className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-none"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
