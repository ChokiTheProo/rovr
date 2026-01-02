import { motion } from "framer-motion";
import { Check, Zap, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const easeOut: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

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

const PricingSection = () => {
  const { t, language } = useLanguage();

  const descriptions = {
    pt: "Ideal para validar sua ideia de MicroSaaS",
    en: "Ideal to validate your MicroSaaS idea",
    es: "Ideal para validar tu idea de MicroSaaS",
  };

  const periods = {
    pt: "único",
    en: "one-time",
    es: "único",
  };

  const highlights = {
    pt: "Entrega em 2-3 semanas",
    en: "Delivery in 2-3 weeks",
    es: "Entrega en 2-3 semanas",
  };

  const supportDays = {
    pt: "30 dias de suporte",
    en: "30 days of support",
    es: "30 días de soporte",
  };

  const differentMessages = {
    pt: "Precisa de algo diferente? Temos soluções flexíveis para cada projeto.",
    en: "Need something different? We have flexible solutions for every project.",
    es: "¿Necesitas algo diferente? Tenemos soluciones flexibles para cada proyecto.",
  };

  const talkTeam = {
    pt: "Fale com nossa equipe",
    en: "Talk to our team",
    es: "Habla con nuestro equipo",
  };

  const plan = {
    name: t("pricing.plan"),
    description: descriptions[language],
    price: "1.500",
    period: periods[language],
    icon: Zap,
    features: [
      t("pricing.feature1"),
      t("pricing.feature2"),
      t("pricing.feature3"),
      t("pricing.feature4"),
      t("pricing.feature5"),
      t("pricing.feature6"),
      supportDays[language],
    ],
    highlight: highlights[language],
  };

  return (
    <section id="precos" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {t("pricing.tag")}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">{t("pricing.title1")} </span>
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              MicroSaaS
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("pricing.description")}
          </p>
        </motion.div>

        {/* Single Pricing Card */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          {/* Card */}
          <div className="relative rounded-2xl border border-primary/50 bg-gradient-to-b from-primary/10 via-card to-card shadow-2xl shadow-primary/20 overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

            <div className="relative p-8">
              {/* Plan Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/20">
                  <plan.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-border/50">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg text-muted-foreground">R$</span>
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>
                <p className="text-sm text-accent font-medium mt-2">{plan.highlight}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="mt-0.5 p-1 rounded-full bg-primary/20">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link to="/contato">
                <Button
                  className="w-full group/btn transition-all duration-300 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg shadow-primary/25"
                  size="lg"
                >
                  <span>{t("pricing.cta")}</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            {differentMessages[language]}
          </p>
          <Link
            to="/contato"
            className="text-primary hover:text-accent transition-colors font-medium inline-flex items-center gap-2"
          >
            {talkTeam[language]}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
