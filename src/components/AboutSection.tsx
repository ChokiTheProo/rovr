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
      description1: "A RoVR é um estúdio de desenvolvimento de soluções digitais com DNA de startup. Combinamos inovação tecnológica com estratégias de negócios digitais para criar produtos que encantam e geram receita recorrente.",
      description2: <>Nosso diferencial está na abordagem <span className="text-foreground font-semibold">Micro SaaS</span>: cada projeto é um produto independente, automatizado e escalável. Da concepção à monetização, pensamos em cada detalhe para maximizar o valor entregue aos clientes e aos nossos parceiros.</>,
      features: [
        { icon: Lightbulb, title: "Inovação Contínua", description: "Exploramos novas mecânicas e tecnologias para criar experiências únicas." },
        { icon: Target, title: "Foco em Resultados", description: "Cada projeto é desenvolvido com métricas claras de engajamento e monetização." },
        { icon: TrendingUp, title: "Crescimento Escalável", description: "Arquitetura pensada para suportar milhões de usuários simultâneos." },
        { icon: Users, title: "Experiência do Usuário", description: "Design centrado no usuário para máxima retenção e satisfação." },
      ],
    },
    en: {
      about: "About Us",
      weAre: "We are ",
      description1: "RoVR is a digital solutions development studio with startup DNA. We combine technological innovation with digital business strategies to create products that delight and generate recurring revenue.",
      description2: <>Our differentiator is the <span className="text-foreground font-semibold">Micro SaaS</span> approach: each project is an independent, automated and scalable product. From conception to monetization, we think about every detail to maximize the value delivered to clients and our partners.</>,
      features: [
        { icon: Lightbulb, title: "Continuous Innovation", description: "We explore new mechanics and technologies to create unique experiences." },
        { icon: Target, title: "Results Focused", description: "Each project is developed with clear engagement and monetization metrics." },
        { icon: TrendingUp, title: "Scalable Growth", description: "Architecture designed to support millions of simultaneous users." },
        { icon: Users, title: "User Experience", description: "User-centered design for maximum retention and satisfaction." },
      ],
    },
    es: {
      about: "Sobre Nosotros",
      weAre: "Somos ",
      description1: "RoVR es un estudio de desarrollo de soluciones digitales con ADN de startup. Combinamos innovación tecnológica con estrategias de negocios digitales para crear productos que deleitan y generan ingresos recurrentes.",
      description2: <>Nuestro diferencial está en el enfoque <span className="text-foreground font-semibold">Micro SaaS</span>: cada proyecto es un producto independiente, automatizado y escalable. Desde la concepción hasta la monetización, pensamos en cada detalle para maximizar el valor entregado a los clientes y nuestros socios.</>,
      features: [
        { icon: Lightbulb, title: "Innovación Continua", description: "Exploramos nuevas mecánicas y tecnologías para crear experiencias únicas." },
        { icon: Target, title: "Enfoque en Resultados", description: "Cada proyecto se desarrolla con métricas claras de engagement y monetización." },
        { icon: TrendingUp, title: "Crecimiento Escalable", description: "Arquitectura diseñada para soportar millones de usuarios simultáneos." },
        { icon: Users, title: "Experiencia del Usuario", description: "Diseño centrado en el usuario para máxima retención y satisfacción." },
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
