import { Users, Star, Clock, TrendingUp, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import useScrollAnimation, { staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const SocialProofBar = () => {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  const content = {
    pt: {
      urgency: "Vagas limitadas — apenas 3 projetos por mês para garantir qualidade",
      stats: [
        { icon: Users, value: "+10", label: "Clientes ativos" },
        { icon: Star, value: "5.0", label: "Avaliação média" },
        { icon: Clock, value: "7 dias", label: "Entrega média" },
        { icon: TrendingUp, value: "100%", label: "Aprovação" },
      ],
    },
    en: {
      urgency: "Limited spots — only 3 projects per month to ensure quality",
      stats: [
        { icon: Users, value: "+10", label: "Active clients" },
        { icon: Star, value: "5.0", label: "Average rating" },
        { icon: Clock, value: "7 days", label: "Avg. delivery" },
        { icon: TrendingUp, value: "100%", label: "Approval rate" },
      ],
    },
    es: {
      urgency: "Cupos limitados — solo 3 proyectos al mes para garantizar calidad",
      stats: [
        { icon: Users, value: "+10", label: "Clientes activos" },
        { icon: Star, value: "5.0", label: "Calificación media" },
        { icon: Clock, value: "7 días", label: "Entrega media" },
        { icon: TrendingUp, value: "100%", label: "Aprobación" },
      ],
    },
  };

  const t = content[language];

  return (
    <section className="py-12 relative overflow-hidden border-y border-border/40 bg-card/20" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Urgency banner */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-8 px-4 py-2 mx-auto w-fit rounded-full bg-accent/10 border border-accent/30"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Flame className="w-4 h-4 text-accent" />
          </motion.div>
          <span className="text-xs md:text-sm text-foreground font-medium">{t.urgency}</span>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {t.stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -4 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-background/40 border border-border/40 backdrop-blur-sm hover:border-primary/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="font-display text-xl md:text-2xl font-bold text-gradient leading-none">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofBar;
