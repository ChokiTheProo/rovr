import { Eye, CreditCard, FileSignature, Headphones, ShieldCheck, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import useScrollAnimation, { staggerContainer, staggerItem, fadeInUp } from "@/hooks/useScrollAnimation";

const GuaranteesSection = () => {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  const content = {
    pt: {
      tag: "Compromisso RoVR",
      title1: "Risco ",
      title2: "Zero",
      title3: " para você",
      description:
        "Trabalhamos com transparência total. Você vê o resultado antes de pagar e tem garantias claras em cada etapa.",
      items: [
        {
          icon: Eye,
          title: "Pré-visualização gratuita",
          description: "Desenvolvemos um preview completo do seu site sem nenhum custo inicial. Você vê antes de decidir.",
        },
        {
          icon: CreditCard,
          title: "Pague só após aprovar",
          description: "Nada de pagamento adiantado. Aprovou o projeto? Aí sim você investe — com total tranquilidade.",
        },
        {
          icon: FileSignature,
          title: "Contrato formal",
          description: "Tudo documentado: prazos, escopo, garantias e responsabilidades. Segurança jurídica total.",
        },
        {
          icon: Headphones,
          title: "Suporte contínuo",
          description: "Atualizações, ajustes e dúvidas resolvidas direto com nosso time. Você nunca fica no escuro.",
        },
      ],
      ctaTitle: "Pronto para o próximo passo?",
      ctaDescription: "Solicite agora seu preview gratuito. Sem compromisso, sem cartão de crédito.",
      ctaButton: "Solicitar Preview Grátis",
    },
    en: {
      tag: "RoVR Commitment",
      title1: "Zero ",
      title2: "Risk",
      title3: " for you",
      description:
        "We work with full transparency. You see the result before paying and get clear guarantees at every step.",
      items: [
        {
          icon: Eye,
          title: "Free preview",
          description: "We develop a full preview of your site at no upfront cost. See it before you decide.",
        },
        {
          icon: CreditCard,
          title: "Pay only after approval",
          description: "No upfront payment. Approved the project? Then you invest — with total peace of mind.",
        },
        {
          icon: FileSignature,
          title: "Formal contract",
          description: "Everything documented: deadlines, scope, guarantees and responsibilities. Full legal safety.",
        },
        {
          icon: Headphones,
          title: "Ongoing support",
          description: "Updates, adjustments and questions solved directly with our team. You're never left alone.",
        },
      ],
      ctaTitle: "Ready for the next step?",
      ctaDescription: "Request your free preview now. No commitment, no credit card.",
      ctaButton: "Request Free Preview",
    },
    es: {
      tag: "Compromiso RoVR",
      title1: "Riesgo ",
      title2: "Cero",
      title3: " para ti",
      description:
        "Trabajamos con total transparencia. Ves el resultado antes de pagar y tienes garantías claras en cada etapa.",
      items: [
        {
          icon: Eye,
          title: "Vista previa gratuita",
          description: "Desarrollamos un preview completo de tu sitio sin costo inicial. Lo ves antes de decidir.",
        },
        {
          icon: CreditCard,
          title: "Paga solo tras aprobar",
          description: "Sin pago adelantado. ¿Aprobaste el proyecto? Entonces inviertes — con total tranquilidad.",
        },
        {
          icon: FileSignature,
          title: "Contrato formal",
          description: "Todo documentado: plazos, alcance, garantías y responsabilidades. Seguridad jurídica total.",
        },
        {
          icon: Headphones,
          title: "Soporte continuo",
          description: "Actualizaciones, ajustes y dudas resueltas con nuestro equipo. Nunca quedas sin respuesta.",
        },
      ],
      ctaTitle: "¿Listo para el siguiente paso?",
      ctaDescription: "Solicita ahora tu preview gratis. Sin compromiso, sin tarjeta de crédito.",
      ctaButton: "Solicitar Preview Gratis",
    },
  };

  const t = content[language];

  return (
    <section id="garantias" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16 max-w-3xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium tracking-wider uppercase">{t.tag}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{t.title1}</span>
            <span className="text-gradient">{t.title2}</span>
            <span className="text-foreground">{t.title3}</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">{t.description}</p>
        </motion.div>

        {/* Guarantee cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {t.items.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="absolute top-6 right-6 text-4xl font-display font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative p-8 md:p-10 rounded-3xl border border-primary/30 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 animate-pulse" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">{t.ctaTitle}</h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">{t.ctaDescription}</p>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold rounded-xl px-8 py-6 text-lg glow-primary"
                >
                  <a
                    href="https://web.whatsapp.com/send?phone=5554991710543"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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

export default GuaranteesSection;
