import { Lightbulb, Target, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import useScrollAnimation, { staggerContainer, staggerItem, fadeInUp } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  const content = {
    pt: {
      about: "Sobre Nós",
      weAre: "Somos a ",
      description1: "A RoVR é um estúdio de desenvolvimento web e gestão de soluções digitais. Combinamos design profissional, estratégia digital e tecnologia para criar sites, blogs e sistemas que impulsionam negócios.",
      description2: <>Nosso diferencial está na <span className="text-foreground font-semibold">gestão completa</span>: desde a criação do site até a manutenção contínua. Tratamos cada projeto como um ativo digital que trabalha 24/7 para gerar resultados para sua empresa.</>,
      features: [
        { icon: Lightbulb, title: "Sites Profissionais", description: "Design moderno, responsivo e otimizado para converter visitantes em clientes." },
        { icon: Target, title: "Gestão Digital", description: "Acompanhamos métricas, realizamos atualizações e garantimos performance contínua." },
        { icon: TrendingUp, title: "Crescimento Estratégico", description: "Estrutura pensada para SEO, presença no Google e escalabilidade do negócio." },
        { icon: Users, title: "Suporte Completo", description: "Atendimento próximo, contrato formal e pré-visualização gratuita antes do pagamento." },
      ],
    },
    en: {
      about: "About Us",
      weAre: "We are ",
      description1: "RoVR is a web development and digital solutions management studio. We combine professional design, digital strategy and technology to create websites, blogs and systems that drive businesses.",
      description2: <>Our differentiator is <span className="text-foreground font-semibold">complete management</span>: from site creation to ongoing maintenance. We treat each project as a digital asset that works 24/7 to generate results for your company.</>,
      features: [
        { icon: Lightbulb, title: "Professional Websites", description: "Modern, responsive design optimized to convert visitors into customers." },
        { icon: Target, title: "Digital Management", description: "We track metrics, perform updates and ensure continuous performance." },
        { icon: TrendingUp, title: "Strategic Growth", description: "Structure designed for SEO, Google presence and business scalability." },
        { icon: Users, title: "Complete Support", description: "Close service, formal contract and free preview before payment." },
      ],
    },
    es: {
      about: "Sobre Nosotros",
      weAre: "Somos ",
      description1: "RoVR es un estudio de desarrollo web y gestión de soluciones digitales. Combinamos diseño profesional, estrategia digital y tecnología para crear sitios web, blogs y sistemas que impulsan negocios.",
      description2: <>Nuestro diferencial está en la <span className="text-foreground font-semibold">gestión completa</span>: desde la creación del sitio hasta el mantenimiento continuo. Tratamos cada proyecto como un activo digital que trabaja 24/7 para generar resultados para tu empresa.</>,
      features: [
        { icon: Lightbulb, title: "Sitios Web Profesionales", description: "Diseño moderno, responsivo y optimizado para convertir visitantes en clientes." },
        { icon: Target, title: "Gestión Digital", description: "Seguimos métricas, realizamos actualizaciones y garantizamos rendimiento continuo." },
        { icon: TrendingUp, title: "Crecimiento Estratégico", description: "Estructura pensada para SEO, presencia en Google y escalabilidad del negocio." },
        { icon: Users, title: "Soporte Completo", description: "Atención cercana, contrato formal y vista previa gratuita antes del pago." },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="sobre" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <motion.span 
            className="text-primary text-sm font-medium tracking-wider uppercase inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {t.about}
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t.weAre}
            <span className="text-gradient">RoVR</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.description1}
          </motion.p>
          <motion.p 
            className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t.description2}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {t.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300"
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
