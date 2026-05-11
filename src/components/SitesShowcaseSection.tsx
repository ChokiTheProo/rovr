import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import useScrollAnimation, { staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const ctaLabel = {
  pt: "Ver projeto",
  en: "View project",
  es: "Ver proyecto",
};

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
    <section id="sites-showcase" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-radial opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {t.tag}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {t.title}
            <span className="text-gradient">{t.titleAccent}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
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
              whileHover={{ y: -8 }}
              className="group flex flex-col rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1.5 rounded-full bg-background/70 backdrop-blur-md text-[10px] font-semibold text-primary border border-primary/30 uppercase tracking-[0.15em] shadow-lg shadow-primary/10">
                    {getCategory(project.category)}
                  </span>
                </div>
              </div>
              <div className="flex flex-col flex-1 p-5">
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-5">
                  {project.description[language]}
                </p>
                <div className="mt-auto pt-4 border-t border-border/30">
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    <span>{ctaLabel[language]}</span>
                    <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/50">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SitesShowcaseSection;
