import { Lightbulb, Target, TrendingUp, Users, Eye, ExternalLink, ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import useScrollAnimation, { staggerContainer, staggerItem, fadeInUp } from "@/hooks/useScrollAnimation";

const projects = [
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

const AboutSection = () => {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  const getCategory = (cat: string | Record<string, string>) =>
    typeof cat === "string" ? cat : cat[language] || cat.pt;

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
      projectsBadge: "Nossos Projetos",
      projectsTitle: "Sites profissionais que ",
      projectsHighlight: "já entregamos.",
      projectsDescription: "Confira alguns dos projetos que desenvolvemos para nossos clientes.",
      viewAll: "Ver Portfólio Completo",
      requestQuote: "Quero um Site Assim",
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
      projectsBadge: "Our Projects",
      projectsTitle: "Professional websites we've ",
      projectsHighlight: "already delivered.",
      projectsDescription: "Check out some of the projects we've developed for our clients.",
      viewAll: "View Full Portfolio",
      requestQuote: "I Want a Site Like This",
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
      projectsBadge: "Nuestros Proyectos",
      projectsTitle: "Sitios profesionales que ",
      projectsHighlight: "ya entregamos.",
      projectsDescription: "Conoce algunos de los proyectos que desarrollamos para nuestros clientes.",
      viewAll: "Ver Portafolio Completo",
      requestQuote: "Quiero un Sitio Así",
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
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

        {/* Projects Showcase */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-8 text-sm font-medium tracking-wide text-muted-foreground uppercase">
              <Eye className="w-4 h-4 text-primary" />
              {t.projectsBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
              <span className="text-foreground">{t.projectsTitle}</span>
              <span className="text-gradient">{t.projectsHighlight}</span>
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              {t.projectsDescription}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={staggerItem}
                whileHover={{ y: -8 }}
                className="group block rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
                      <ExternalLink className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-xs font-semibold text-primary border border-border/40 uppercase tracking-wider">
                      {getCategory(project.category)}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-2">
                    {project.description[language]}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <a href="https://sitesrovr.lovable.app/portfolio" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-border/50 bg-secondary/30 hover:bg-secondary/50 text-foreground font-semibold rounded-xl px-8 py-6 text-lg"
                >
                  {t.viewAll}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
              <a
                href="https://wa.me/5554991710543?text=Olá! Vi o portfólio de vocês e quero um site profissional!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold rounded-xl px-8 py-6 text-lg glow-primary"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t.requestQuote}
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
