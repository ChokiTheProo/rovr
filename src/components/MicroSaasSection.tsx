import { TrendingUp, DollarSign, BarChart3, Settings, Check, ArrowRight, Heart, Stethoscope, Scale, Pill, Star, ExternalLink, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "./ui/button";
import useScrollAnimation, { staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";
import fluxenImg from "@/assets/project-fluxen.png";
import klyexaImg from "@/assets/project-klyexa.png";
import cuidabemImg from "@/assets/project-cuidabem.png";
import tratamentoImg from "@/assets/project-tratamento.png";
import emagrioImg from "@/assets/project-emagrio.png";

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

const MicroSaasSection = () => {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  const getCategory = (cat: string | Record<string, string>) =>
    typeof cat === "string" ? cat : cat[language] || cat.pt;

  const content = {
    pt: {
      philosophy: "Subnegócio RoVR",
      vision: "Nossos ",
      microSaas: "Micro SaaS",
      description: "Além de sites e blogs, a RoVR desenvolve produtos digitais independentes usando metodologias SaaS. Cada aplicativo é tratado como um negócio próprio, gerando valor mensurável para seus usuários.",
      quote: "\"Nossos MicroSaaS são produtos complementares que crescem, evoluem e geram valor continuamente.\"",
      team: "EQUIPE ROVR",
      features: [
        { icon: TrendingUp, title: "Crescimento Exponencial", description: "Arquitetura projetada para escalar de centenas a milhões de usuários sem refatoração.", metric: "10x", metricLabel: "Crescimento médio" },
        { icon: DollarSign, title: "Receita Recorrente", description: "Modelos de monetização que geram receita previsível e sustentável mês após mês.", metric: "MRR", metricLabel: "Monthly Revenue" },
        { icon: BarChart3, title: "Métricas em Tempo Real", description: "Dashboard completo com KPIs de engajamento, retenção e monetização.", metric: "24/7", metricLabel: "Monitoramento" },
        { icon: Settings, title: "Automação Total", description: "Desde atualizações de conteúdo até campanhas de marketing, tudo automatizado.", metric: "90%", metricLabel: "Processos automáticos" },
      ],
      saasTitle: "Nossos Aplicativos SaaS",
      sitesTitle: "Sites & Landing Pages",
      sitesDescription: "Projetos de sites profissionais desenvolvidos pela RoVR.",
    },
    en: {
      philosophy: "RoVR Sub-Business",
      vision: "Our ",
      microSaas: "Micro SaaS",
      description: "Beyond websites and blogs, RoVR develops independent digital products using SaaS methodologies. Each app is treated as its own business, generating measurable value for its users.",
      quote: "\"Our MicroSaaS are complementary products that grow, evolve and continuously generate value.\"",
      team: "ROVR TEAM",
      features: [
        { icon: TrendingUp, title: "Exponential Growth", description: "Architecture designed to scale from hundreds to millions of users without refactoring.", metric: "10x", metricLabel: "Average growth" },
        { icon: DollarSign, title: "Recurring Revenue", description: "Monetization models that generate predictable and sustainable revenue month after month.", metric: "MRR", metricLabel: "Monthly Revenue" },
        { icon: BarChart3, title: "Real-Time Metrics", description: "Complete dashboard with engagement, retention and monetization KPIs.", metric: "24/7", metricLabel: "Monitoring" },
        { icon: Settings, title: "Full Automation", description: "From content updates to marketing campaigns, everything automated.", metric: "90%", metricLabel: "Automated processes" },
      ],
      saasTitle: "Our SaaS Apps",
      sitesTitle: "Sites & Landing Pages",
      sitesDescription: "Professional website projects developed by RoVR.",
    },
    es: {
      philosophy: "Subnegocio RoVR",
      vision: "Nuestros ",
      microSaas: "Micro SaaS",
      description: "Además de sitios web y blogs, RoVR desarrolla productos digitales independientes usando metodologías SaaS. Cada aplicación se trata como un negocio propio, generando valor medible para sus usuarios.",
      quote: "\"Nuestros MicroSaaS son productos complementarios que crecen, evolucionan y generan valor continuamente.\"",
      team: "EQUIPO ROVR",
      features: [
        { icon: TrendingUp, title: "Crecimiento Exponencial", description: "Arquitectura diseñada para escalar de cientos a millones de usuarios sin refactorización.", metric: "10x", metricLabel: "Crecimiento promedio" },
        { icon: DollarSign, title: "Ingresos Recurrentes", description: "Modelos de monetización que generan ingresos predecibles y sostenibles mes tras mes.", metric: "MRR", metricLabel: "Monthly Revenue" },
        { icon: BarChart3, title: "Métricas en Tiempo Real", description: "Dashboard completo con KPIs de engagement, retención y monetización.", metric: "24/7", metricLabel: "Monitoreo" },
        { icon: Settings, title: "Automatización Total", description: "Desde actualizaciones de contenido hasta campañas de marketing, todo automatizado.", metric: "90%", metricLabel: "Procesos automáticos" },
      ],
      saasTitle: "Nuestras Apps SaaS",
      sitesTitle: "Sitios & Landing Pages",
      sitesDescription: "Proyectos de sitios profesionales desarrollados por RoVR.",
    },
  };

  const t = content[language];

  const saasProducts = [
    {
      title: "Fluxen",
      category: language === "pt" ? "Gestão Financeira" : language === "en" ? "Financial Management" : "Gestión Financiera",
      image: fluxenImg,
      icon: DollarSign,
      rating: "4.9",
      link: "https://fluxenvenda.lovable.app",
      gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
      title: "Klyexa",
      category: language === "pt" ? "Gestão de Saúde" : language === "en" ? "Health Management" : "Gestión de Salud",
      image: klyexaImg,
      icon: Stethoscope,
      rating: "4.8",
      link: "https://klyexavenda.lovable.app",
      gradient: "from-teal-500/20 to-cyan-500/20",
    },
    {
      title: "CuidaBem",
      category: language === "pt" ? "Cuidados & Saúde" : language === "en" ? "Health & Care" : "Salud & Cuidados",
      image: cuidabemImg,
      icon: Heart,
      rating: "5.0",
      link: "https://cuidadem-facil.lovable.app",
      gradient: "from-primary/20 to-accent/20",
    },
    {
      title: language === "pt" ? "Tratamento Diário" : language === "en" ? "Daily Treatment" : "Tratamiento Diario",
      category: language === "pt" ? "Saúde Digestiva" : language === "en" ? "Digestive Health" : "Salud Digestiva",
      image: tratamentoImg,
      icon: Pill,
      rating: "4.9",
      link: "https://tramentodiario.lovable.app",
      gradient: "from-orange-500/20 to-amber-500/20",
    },
    {
      title: "Emagrio",
      category: language === "pt" ? "Emagrecimento" : language === "en" ? "Weight Loss" : "Adelgazamiento",
      image: emagrioImg,
      icon: Scale,
      rating: "4.8",
      link: "https://emagrio-venda.lovable.app",
      gradient: "from-green-500/20 to-lime-500/20",
    },
  ];

  return (
    <section id="microsaas" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-primary text-sm font-medium tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.1 }}
          >
            {t.philosophy}
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t.vision}
            <span className="text-gradient">{t.microSaas}</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t.description}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {t.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:glow-primary transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <motion.span 
                      className="text-2xl font-display font-bold text-gradient"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {feature.metric}
                    </motion.span>
                    <span className="text-muted-foreground text-xs">
                      {feature.metricLabel}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* SaaS Products Showcase */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            {t.saasTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {saasProducts.map((product, index) => (
              <motion.a
                key={index}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/15"
              >
                <div className={`aspect-video bg-gradient-to-br ${product.gradient} relative overflow-hidden`}>
                  <img src={product.image} alt={product.title} className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-background/70 backdrop-blur-sm">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-xs text-foreground font-medium">{product.rating}</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <product.icon className="w-4 h-4 text-primary" />
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{product.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground">{product.category}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Sites & Landing Pages Showcase */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem} className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-2">{t.sitesTitle}</h3>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">{t.sitesDescription}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {siteProjects.map((project, index) => (
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
                <div className="p-5">
                  <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {project.description[language]}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div 
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="max-w-2xl p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm text-center">
            <motion.blockquote 
              className="text-lg md:text-xl font-light text-foreground italic mb-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.7 }}
            >
              {t.quote}
            </motion.blockquote>
            <motion.cite 
              className="text-primary font-semibold not-italic"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8 }}
            >
              — {t.team}
            </motion.cite>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MicroSaasSection;
