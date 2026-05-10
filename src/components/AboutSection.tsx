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
      description1: "Estúdio de sites, blogs e gestão digital. Trabalhamos rápido, cobramos justo e só fechamos quando você aprova o preview.",
      description2: <>O que muda aqui é a <span className="text-foreground font-semibold">gestão completa</span>: criamos, publicamos e cuidamos do seu site depois — sem você precisar virar especialista em nada.</>,
      features: [
        { icon: Lightbulb, title: "Sites que vendem", description: "Design limpo, mobile-first e estrutura pensada para converter visitante em cliente." },
        { icon: Target, title: "Gestão contínua", description: "Atualizações, ajustes e monitoramento. Seu site sempre no ar e sempre atualizado." },
        { icon: TrendingUp, title: "Pronto para o Google", description: "Estrutura técnica feita para SEO desde o primeiro dia. Você aparece para quem busca." },
        { icon: Users, title: "Atendimento direto", description: "Você fala com quem desenvolve. Sem call center, sem ticket, sem espera." },
      ],
    },
    en: {
      about: "About Us",
      weAre: "We are ",
      description1: "A studio for websites, blogs and digital management. We move fast, price fair, and only close the deal once you approve the preview.",
      description2: <>What's different here: <span className="text-foreground font-semibold">end-to-end management</span>. We build, ship and maintain your site — you don't need to become a tech expert.</>,
      features: [
        { icon: Lightbulb, title: "Sites that sell", description: "Clean design, mobile-first, built to turn visitors into customers." },
        { icon: Target, title: "Ongoing management", description: "Updates, tweaks and monitoring. Your site always live, always current." },
        { icon: TrendingUp, title: "Google-ready", description: "Technical SEO baked in from day one. You show up for the people searching." },
        { icon: Users, title: "Direct line", description: "You talk to the people building it. No call center, no tickets, no waiting." },
      ],
    },
    es: {
      about: "Sobre Nosotros",
      weAre: "Somos ",
      description1: "Estudio de sitios, blogs y gestión digital. Trabajamos rápido, cobramos justo y solo cerramos cuando apruebas el preview.",
      description2: <>Lo que cambia aquí es la <span className="text-foreground font-semibold">gestión completa</span>: creamos, publicamos y cuidamos tu sitio después — sin que tengas que volverte experto en nada.</>,
      features: [
        { icon: Lightbulb, title: "Sitios que venden", description: "Diseño limpio, mobile-first y estructura pensada para convertir visitante en cliente." },
        { icon: Target, title: "Gestión continua", description: "Actualizaciones, ajustes y monitoreo. Tu sitio siempre online y al día." },
        { icon: TrendingUp, title: "Listo para Google", description: "Estructura técnica de SEO desde el primer día. Apareces para quien busca." },
        { icon: Users, title: "Atención directa", description: "Hablas con quien desarrolla. Sin call center, sin tickets, sin espera." },
      ],
    },
  };

  const t = content[language];

  return (
    <section id="sobre" className="py-16 sm:py-20 md:py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t.weAre}
            <span className="text-gradient">RoVR</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t.description1}
          </motion.p>
          <motion.p 
            className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mt-3 sm:mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t.description2}
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
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
              className="group p-5 sm:p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300"
            >
              <motion.div 
                className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
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
