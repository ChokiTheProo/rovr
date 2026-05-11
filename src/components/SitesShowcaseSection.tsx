import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import useScrollAnimation, { staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const siteProjects = [
  {
    image: "/projects/site-minecraft.jpg",
    category: "Landing Page",
    title: "Minecraft Paint",
    description: {
      pt: "Landing page de vendas para produto digital voltado para crianças, com design vibrante e gamificado.",
      en: "Sales landing page for a digital product for children, with vibrant and gamified design.",
      es: "Landing page de ventas para producto digital dirigido a niños, con diseño vibrante y gamificado.",
    },
    url: "https://sitesrovr.lovable.app/projeto/minecraft-desenho",
  },
  {
    image: "/projects/site-lassie.jpg",
    category: "Landing Page",
    title: "Las 7 Edades de la Iglesia",
    description: {
      pt: "Landing page de vendas para curso bíblico digital com design impactante e foco em conversão.",
      en: "Sales landing page for a digital bible course with impactful design and conversion focus.",
      es: "Landing page de ventas para curso bíblico digital con diseño impactante y enfoque en conversión.",
    },
    url: "https://sitesrovr.lovable.app/projeto/lassie-7-edades",
  },
  {
    image: "/projects/site-cuidabem.jpg",
    category: "Landing Page",
    title: "Cuidabem",
    description: {
      pt: "Landing page para guia de cuidadores com design moderno e gradientes vibrantes.",
      en: "Landing page for a caregiver guide with modern design and vibrant gradients.",
      es: "Landing page para guía de cuidadores con diseño moderno y gradientes vibrantes.",
    },
    url: "https://sitesrovr.lovable.app/projeto/cuidabem",
  },
  {
    image: "/projects/site-rogervarela.jpg",
    category: { pt: "Portfólio", en: "Portfolio", es: "Portafolio" },
    title: "Roger Varela",
    description: {
      pt: "Site portfólio pessoal com design futurista, animações elegantes e multi-idioma.",
      en: "Personal portfolio site with futuristic design, elegant animations and multi-language.",
      es: "Sitio portafolio personal con diseño futurista, animaciones elegantes y multi-idioma.",
    },
    url: "https://sitesrovr.lovable.app/projeto/roger-varela",
  },
  {
    image: "/projects/site-rovr.jpg",
    category: { pt: "Institucional", en: "Corporate", es: "Institucional" },
    title: "RoVR - SaaS Studio",
    description: {
      pt: "Site institucional da RoVR com apresentação de projetos SaaS e MicroSaaS.",
      en: "RoVR's corporate website showcasing SaaS and MicroSaaS projects.",
      es: "Sitio institucional de RoVR con presentación de proyectos SaaS y MicroSaaS.",
    },
    url: "https://sitesrovr.lovable.app/projeto/rovr-site",
  },
  {
    image: "/projects/site-sitesrovr.jpg",
    category: "Landing Page",
    title: "Sites RoVR",
    description: {
      pt: "Página de portfólio e vendas de sites profissionais da RoVR.",
      en: "Portfolio and sales page for RoVR's professional websites.",
      es: "Página de portafolio y ventas de sitios profesionales de RoVR.",
    },
    url: "https://sitesrovr.lovable.app/projeto/sites-rovr",
  },
];

const SitesShowcaseSection = () => {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  const getCategory = (cat: string | Record<string, string>) =>
    typeof cat === "string" ? cat : cat[language] || cat.pt;

  const content = {
    pt: {
      tag: "Portfólio Web",
      title: "Sites & ",
      titleAccent: "Landing Pages",
      description: "Projetos de sites profissionais desenvolvidos pela RoVR.",
    },
    en: {
      tag: "Web Portfolio",
      title: "Sites & ",
      titleAccent: "Landing Pages",
      description: "Professional website projects developed by RoVR.",
    },
    es: {
      tag: "Portafolio Web",
      title: "Sitios & ",
      titleAccent: "Landing Pages",
      description: "Proyectos de sitios profesionales desarrollados por RoVR.",
    },
  };

  const t = content[language];

  return (
    <section id="sites-showcase" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="mb-16 md:mb-20 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-xs font-medium tracking-[0.3em] uppercase">
            {t.tag}
          </span>
          <h2 className="heading-mega font-display font-black mt-4 text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground">
            <span className="block">{t.title}</span>
            <span className="block text-gradient">{t.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mt-6 uppercase tracking-wider">
            {t.description}
          </p>
        </motion.div>

        {/* === Asymmetric 2-col masonry; even items get top offset === */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {siteProjects.map((project, index) => (
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              className={`group relative block overflow-hidden ${
                index % 2 === 1 ? "md:mt-16" : ""
              }`}
            >
              {/* Image with 3:4 aspect */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover overlay — primary 60% (adapted from Navy spec) */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-background/95 backdrop-blur-md flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-500">
                    <span className="font-display text-xs uppercase tracking-[0.25em] font-bold text-foreground">
                      View
                    </span>
                  </div>
                </div>
                {/* Category tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-[10px] font-semibold text-primary border border-border/40 uppercase tracking-[0.2em]">
                    {getCategory(project.category)}
                  </span>
                </div>
              </div>

              {/* Title + description below */}
              <div className="mt-5">
                <h4 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 max-w-md">
                  {project.description[language]}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SitesShowcaseSection;
