import { Users, Rocket, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import useScrollAnimation, { staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const WorkWithUsSection = () => {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  const benefits = language === "pt" ? [
    { icon: Rocket, title: "Projetos Inovadores", description: "Trabalhe em SaaS e MicroSaaS de ponta" },
    { icon: Users, title: "Equipe Colaborativa", description: "Ambiente de trabalho flexível e remoto" },
    { icon: Heart, title: "Crescimento", description: "Oportunidade de desenvolvimento contínuo" },
  ] : [
    { icon: Rocket, title: "Innovative Projects", description: "Work on cutting-edge SaaS and MicroSaaS" },
    { icon: Users, title: "Collaborative Team", description: "Flexible and remote work environment" },
    { icon: Heart, title: "Growth", description: "Continuous development opportunity" },
  ];

  return (
    <section id="trabalhe-conosco" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-accent text-sm font-medium tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.1 }}
          >
            {language === "pt" ? "Carreiras" : "Careers"}
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {language === "pt" ? "Trabalhe " : "Work "}
            <span className="text-gradient">{language === "pt" ? "Conosco" : "With Us"}</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {language === "pt" 
              ? "Junte-se à nossa equipe e ajude a construir o futuro dos produtos digitais no Brasil."
              : "Join our team and help build the future of digital products in Brazil."}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm text-center hover:border-accent/50 transition-all duration-300"
            >
              <motion.div 
                className="w-14 h-14 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <benefit.icon className="w-7 h-7 text-accent" />
              </motion.div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;
