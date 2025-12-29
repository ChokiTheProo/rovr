import { Lightbulb, Target, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import useScrollAnimation, { staggerContainer, staggerItem, fadeInUp } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  const features = language === "pt" ? [
    {
      icon: Lightbulb,
      title: "Inovação Contínua",
      description: "Exploramos novas mecânicas e tecnologias para criar experiências únicas.",
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Cada projeto é desenvolvido com métricas claras de engajamento e monetização.",
    },
    {
      icon: TrendingUp,
      title: "Crescimento Escalável",
      description: "Arquitetura pensada para suportar milhões de usuários simultâneos.",
    },
    {
      icon: Users,
      title: "Experiência do Usuário",
      description: "Design centrado no usuário para máxima retenção e satisfação.",
    },
  ] : [
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      description: "We explore new mechanics and technologies to create unique experiences.",
    },
    {
      icon: Target,
      title: "Results Focused",
      description: "Each project is developed with clear engagement and monetization metrics.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Architecture designed to support millions of simultaneous users.",
    },
    {
      icon: Users,
      title: "User Experience",
      description: "User-centered design for maximum retention and satisfaction.",
    },
  ];

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
            {language === "pt" ? "Sobre Nós" : "About Us"}
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {language === "pt" ? "Somos a " : "We are "}
            <span className="text-gradient">RoVR</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {language === "pt" 
              ? "A RoVR é um estúdio de desenvolvimento de soluções digitais com DNA de startup. Combinamos inovação tecnológica com estratégias de negócios digitais para criar produtos que encantam e geram receita recorrente."
              : "RoVR is a digital solutions development studio with startup DNA. We combine technological innovation with digital business strategies to create products that delight and generate recurring revenue."}
          </motion.p>
          <motion.p 
            className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {language === "pt" 
              ? <>Nosso diferencial está na abordagem <span className="text-foreground font-semibold">Micro SaaS</span>: cada projeto é um produto independente, automatizado e escalável. Da concepção à monetização, pensamos em cada detalhe para maximizar o valor entregue aos clientes e aos nossos parceiros.</>
              : <>Our differentiator is the <span className="text-foreground font-semibold">Micro SaaS</span> approach: each project is an independent, automated and scalable product. From conception to monetization, we think about every detail to maximize the value delivered to clients and our partners.</>}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
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
