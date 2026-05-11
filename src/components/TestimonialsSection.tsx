import { motion, type Easing } from "framer-motion";
import { Star, Zap, Shield, Rocket, Users, TrendingUp, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialsSection = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      whyChoose: "Por que a RoVR",
      resultsTitle1: "O que muda quando ",
      resultsTitle2: "trabalhamos juntos",
      description: "Sem fake metrics, sem promessa milagrosa. Aqui você sabe o que vai receber, em quanto tempo e por quanto.",
      quote: <>
        "A gente não entrega site bonito. Entrega <span className="text-gradient font-semibold">site que funciona</span> — e <span className="text-gradient font-semibold">cuida dele depois</span>."
      </>,
      team: "EQUIPE ROVR",
      testimonials: [],
      qualities: [
        { icon: Rocket, title: "Entrega rápida", description: "Sites em 7 dias. Projetos maiores em 2-3 semanas. Sem prazo elástico.", highlight: "7-21 dias" },
        { icon: TrendingUp, title: "Risco zero pra você", description: "Você só paga depois de ver e aprovar o resultado. Ponto.", highlight: "Preview grátis" },
        { icon: Shield, title: "Contrato formal", description: "Escopo, prazo e garantias por escrito. Nada combinado só no WhatsApp.", highlight: "100% formal" },
        { icon: Users, title: "Falando com quem faz", description: "Atendimento direto comigo. Sem fila, sem ticket, sem robô.", highlight: "Direto" },
        { icon: Zap, title: "Performance de verdade", description: "Sites rápidos, leves e prontos para o Google ranquear.", highlight: "Lighthouse 90+" },
        { icon: CheckCircle, title: "Continua depois da entrega", description: "Suporte e ajustes mensais opcionais. Você nunca fica no escuro.", highlight: "Suporte ativo" },
      ],
    },
    en: {
      whyChoose: "Why RoVR",
      resultsTitle1: "What actually changes when ",
      resultsTitle2: "we work together",
      description: "No fake metrics, no miracle promises. You know exactly what you'll get, by when, and for how much.",
      quote: <>
        "We don't deliver pretty sites. We deliver <span className="text-gradient font-semibold">sites that work</span> — and <span className="text-gradient font-semibold">take care of them afterwards</span>."
      </>,
      team: "ROVR TEAM",
      testimonials: [],
      qualities: [
        { icon: Rocket, title: "Fast delivery", description: "Websites in 7 days. Bigger projects in 2-3 weeks. No elastic deadlines.", highlight: "7-21 days" },
        { icon: TrendingUp, title: "Zero risk for you", description: "You pay only after seeing and approving the result. That's it.", highlight: "Free preview" },
        { icon: Shield, title: "Formal contract", description: "Scope, deadline and guarantees in writing. Nothing settled only on WhatsApp.", highlight: "100% formal" },
        { icon: Users, title: "Talk to the maker", description: "You speak directly with me. No queue, no tickets, no bot.", highlight: "Direct" },
        { icon: Zap, title: "Real performance", description: "Fast, lightweight sites ready to rank on Google.", highlight: "Lighthouse 90+" },
        { icon: CheckCircle, title: "We stick around", description: "Optional monthly support and tweaks. You're never in the dark.", highlight: "Active support" },
      ],
    },
    es: {
      whyChoose: "Por qué RoVR",
      resultsTitle1: "Lo que cambia cuando ",
      resultsTitle2: "trabajamos juntos",
      description: "Sin métricas inventadas, sin promesas milagrosas. Aquí sabes qué recibes, cuándo y por cuánto.",
      quote: <>
        "No entregamos sitios bonitos. Entregamos <span className="text-gradient font-semibold">sitios que funcionan</span> — y <span className="text-gradient font-semibold">los cuidamos después</span>."
      </>,
      team: "EQUIPO ROVR",
      testimonials: [],
      qualities: [
        { icon: Rocket, title: "Entrega rápida", description: "Sitios en 7 días. Proyectos mayores en 2-3 semanas. Sin plazos elásticos.", highlight: "7-21 días" },
        { icon: TrendingUp, title: "Riesgo cero", description: "Pagas solo después de ver y aprobar el resultado. Punto.", highlight: "Preview gratis" },
        { icon: Shield, title: "Contrato formal", description: "Alcance, plazo y garantías por escrito. Nada cerrado solo en WhatsApp.", highlight: "100% formal" },
        { icon: Users, title: "Hablas con quien lo hace", description: "Atención directa conmigo. Sin fila, sin tickets, sin bot.", highlight: "Directo" },
        { icon: Zap, title: "Performance real", description: "Sitios rápidos, ligeros y listos para que Google los rankee.", highlight: "Lighthouse 90+" },
        { icon: CheckCircle, title: "Seguimos después", description: "Soporte y ajustes mensuales opcionales. Nunca quedas a oscuras.", highlight: "Soporte activo" },
      ],
    },
  };

  const t = content[language];

  const easeOut: Easing = [0, 0, 0.2, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <section id="depoimentos" className="py-28 md:py-36 relative overflow-hidden">
      {/* Decorative giant quote mark */}
      <div
        aria-hidden
        className="absolute left-[5%] top-[10%] font-display font-black text-primary/[0.08] select-none pointer-events-none leading-none"
        style={{ fontSize: "clamp(20rem, 40vw, 36rem)" }}
      >
        "
      </div>

      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Label */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-xs font-medium tracking-[0.3em] uppercase">
            {t.whyChoose}
          </span>
        </motion.div>

        {/* === Massive uppercase quote === */}
        <motion.blockquote
          className="max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <p className="heading-mega font-display font-black text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
            {t.quote}
          </p>

          {/* Bio row */}
          <div className="flex items-center gap-4 mt-10 md:mt-14">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
              <span className="font-display text-2xl font-black text-primary-foreground">R</span>
            </div>
            <div>
              <cite className="font-display font-bold text-lg md:text-xl not-italic text-foreground block">
                {t.team}
              </cite>
              <span className="text-muted-foreground text-xs uppercase tracking-[0.25em]">
                {t.resultsTitle2.trim()}
              </span>
            </div>
          </div>
        </motion.blockquote>

        {/* Qualities grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 mt-20 md:mt-28 pt-12 border-t border-border/40"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {t.qualities.map((q, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="flex items-center gap-3 mb-3">
                <q.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold">
                  {q.highlight}
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {q.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {q.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
