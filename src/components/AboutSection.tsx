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
    <section id="sobre" className="py-20 sm:py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* === 12-column split: label + list (4 cols) | heading + body (8 cols) === */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          {/* LEFT 1-4: Capabilities label + list with line-prefix */}
          <div className="lg:col-span-4">
            <span className="text-muted-foreground text-xs font-medium tracking-[0.3em] uppercase block mb-8">
              {t.about}
            </span>
            <motion.ul
              className="space-y-5"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {t.features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={staggerItem}
                  className="group flex items-center gap-4 cursor-default"
                >
                  <span
                    className="block h-px bg-primary/60 group-hover:bg-primary transition-all duration-500"
                    style={{ width: "40px" }}
                  >
                    <span className="block h-full w-0 bg-primary group-hover:w-[24px] transition-all duration-500" />
                  </span>
                  <span className="flex items-center gap-2.5 text-foreground/90 group-hover:text-foreground transition-colors">
                    <feature.icon className="w-4 h-4 text-primary shrink-0" strokeWidth={1.5} />
                    <span className="text-sm md:text-base font-medium">{feature.title}</span>
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* RIGHT 5-12: Massive light-weight heading with italic accents */}
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] tracking-tight text-foreground">
              {t.weAre}
              <span className="text-gradient font-bold">RoVR</span>
              <span className="text-muted-foreground italic font-light"> — </span>
              <span className="text-foreground/90">
                {language === "pt" ? "estúdio de sites e " : language === "en" ? "studio for sites and " : "estudio de sitios y "}
                <em className="text-muted-foreground italic font-light">
                  {language === "pt" ? "gestão digital" : language === "en" ? "digital management" : "gestión digital"}
                </em>
                .
              </span>
            </h2>

            <div className="mt-8 space-y-4 max-w-2xl">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {t.description1}
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {t.description2}
              </p>
            </div>

            {/* Feature descriptions revealed */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mt-12 pt-8 border-t border-border/40"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {t.features.map((feature, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
