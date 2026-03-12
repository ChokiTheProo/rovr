import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Search,
  Zap,
  ShieldCheck,
  TrendingUp,
  Eye,
  MessageCircle,
  CheckCircle2,
  ClipboardList,
  Layout,
  Code2,
  MonitorSmartphone,
  Settings2,
  FileText,
  Lock,
  Users,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

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

const SitesBlogs = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      hero: {
        badge: "Sites & Blogs Profissionais",
        title: "Seu site pronto com",
        titleHighlight: "zero risco.",
        description:
          "Visualize seu site antes de pagar. Trabalhamos com contrato formal, pré-visualização gratuita e você só paga quando aprovar o projeto.",
        subdescription:
          "Mais de 50 sites entregues com garantia de satisfação. Sua presença digital com segurança total.",
        cta: "Quero Pré-visualização Gratuita",
        ctaSecondary: "Ver Portfólio",
      },
      why: {
        badge: "Por que ter um site profissional?",
        title: "O site é o centro da presença digital",
        titleHighlight: "do seu negócio.",
        description:
          "É onde seus clientes pesquisam, analisam sua credibilidade e tomam a decisão de entrar em contato.",
        subtitle: "Com um site profissional desenvolvido pela ROVR, você terá:",
        footer:
          "Um site bem construído não é apenas uma página online — é um ativo digital que trabalha para o seu negócio 24 horas por dia.",
      },
      benefits: [
        { icon: Eye, text: "Design moderno e profissional que transmite confiança" },
        { icon: TrendingUp, text: "Estrutura pensada para conversão de visitantes em clientes" },
        { icon: Zap, text: "Performance rápida e otimizada" },
        { icon: Smartphone, text: "Layout responsivo para celular, tablet e computador" },
        { icon: Globe, text: "Estratégia digital aplicada ao design" },
        { icon: Search, text: "Estrutura ideal para SEO e presença no Google" },
        { icon: ShieldCheck, text: "Credibilidade imediata para sua marca" },
      ],
      process: {
        badge: "Nosso Processo",
        title: "Como criamos",
        titleHighlight: "seu projeto.",
        description:
          "Trabalhamos com um processo claro e profissional para garantir qualidade, estratégia e transparência em cada projeto.",
      },
      steps: [
        {
          icon: ClipboardList,
          number: "01",
          title: "Análise do Projeto",
          description:
            "Entendemos seu negócio, seu público e seus objetivos para estruturar o site da forma mais estratégica possível.",
        },
        {
          icon: Layout,
          number: "02",
          title: "Planejamento e Estrutura",
          description:
            "Criamos a arquitetura do site e definimos a melhor estrutura de páginas, conteúdo e experiência do usuário.",
        },
        {
          icon: Code2,
          number: "03",
          title: "Desenvolvimento do Projeto",
          description:
            "Nossa equipe desenvolve o design e a estrutura do site com foco em performance, estética e conversão.",
        },
        {
          icon: MonitorSmartphone,
          number: "04",
          title: "Pré-visualização do Site",
          description:
            "Antes da entrega final, você poderá visualizar o projeto e validar o resultado, garantindo que tudo esteja alinhado com sua expectativa.",
        },
        {
          icon: Settings2,
          number: "05",
          title: "Ajustes e Entrega Final",
          description:
            "Realizamos os ajustes necessários e entregamos o projeto final pronto para representar seu negócio online com profissionalismo.",
        },
      ],
      guarantee: {
        badge: "Garantia Incondicional",
        title: "Sua segurança é nossa",
        titleHighlight: "prioridade.",
        description:
          "Trabalhamos com contrato formal, pré-visualização gratuita do seu site antes de qualquer pagamento, e garantia total de satisfação. Só paga quando aprovar o projeto.",
      },
      guaranteeItems: [
        { icon: FileText, text: "Contrato formal de prestação de serviço com todas as cláusulas de proteção" },
        { icon: Eye, text: "Pré-visualização gratuita do seu site antes de qualquer compromisso financeiro" },
        { icon: ShieldCheck, text: "Garantia de 30 dias: ajustamos até você ficar 100% satisfeito" },
        { icon: Lock, text: "Pagamento somente após aprovação da pré-visualização" },
        { icon: Users, text: "Comunicação direta e transparente durante todo o processo" },
      ],
      guaranteeFooter:
        "Zero risco para você. Visualize seu site antes de pagar e só avançamos se você aprovar.",
      trustBadge: {
        title: "Risco Zero",
        subtitle: "Pré-visualização gratuita antes de pagar",
      },
      cta: {
        title: "Visualize seu site antes de pagar.",
        titleHighlight: "Zero risco, total segurança.",
        description:
          "Solicite sua pré-visualização gratuita hoje. Você só paga quando aprovar o projeto. Contrato formal, garantia de 30 dias e suporte completo.",
        button: "Quero Pré-visualização Gratuita",
        buttonContact: "Falar com Especialista",
      },
      projectsSection: {
        badge: "Nossos Projetos",
        title: "Sites profissionais que",
        titleHighlight: "já entregamos.",
        description: "Confira alguns dos projetos que desenvolvemos para nossos clientes.",
        viewAll: "Ver Portfólio Completo",
        viewProject: "Ver Projeto",
        requestQuote: "Quero um Site Assim",
      },
    },
    en: {
      hero: {
        badge: "Professional Websites & Blogs",
        title: "Your website ready with",
        titleHighlight: "zero risk.",
        description:
          "Preview your site before paying. We work with a formal contract, free preview, and you only pay when you approve the project.",
        subdescription:
          "Over 50 websites delivered with satisfaction guarantee. Your digital presence with total security.",
        cta: "Get Free Preview",
        ctaSecondary: "View Portfolio",
      },
      why: {
        badge: "Why have a professional website?",
        title: "The website is the center of the digital presence",
        titleHighlight: "of your business.",
        description:
          "It's where your customers research, analyze your credibility and make the decision to get in touch.",
        subtitle: "With a professional website developed by ROVR, you will have:",
        footer:
          "A well-built website is not just an online page — it's a digital asset that works for your business 24 hours a day.",
      },
      benefits: [
        { icon: Eye, text: "Modern and professional design that conveys trust" },
        { icon: TrendingUp, text: "Structure designed to convert visitors into customers" },
        { icon: Zap, text: "Fast and optimized performance" },
        { icon: Smartphone, text: "Responsive layout for mobile, tablet and desktop" },
        { icon: Globe, text: "Digital strategy applied to design" },
        { icon: Search, text: "Ideal structure for SEO and Google presence" },
        { icon: ShieldCheck, text: "Immediate credibility for your brand" },
      ],
      process: {
        badge: "Our Process",
        title: "How we create",
        titleHighlight: "your project.",
        description:
          "We work with a clear and professional process to ensure quality, strategy and transparency in every project.",
      },
      steps: [
        {
          icon: ClipboardList,
          number: "01",
          title: "Project Analysis",
          description:
            "We understand your business, audience and goals to structure the website in the most strategic way possible.",
        },
        {
          icon: Layout,
          number: "02",
          title: "Planning and Structure",
          description:
            "We create the website architecture and define the best page structure, content and user experience.",
        },
        {
          icon: Code2,
          number: "03",
          title: "Project Development",
          description:
            "Our team develops the design and structure of the website focusing on performance, aesthetics and conversion.",
        },
        {
          icon: MonitorSmartphone,
          number: "04",
          title: "Website Preview",
          description:
            "Before the final delivery, you will be able to preview the project and validate the result.",
        },
        {
          icon: Settings2,
          number: "05",
          title: "Adjustments and Final Delivery",
          description:
            "We make the necessary adjustments and deliver the final project ready to represent your business online.",
        },
      ],
      guarantee: {
        badge: "Unconditional Guarantee",
        title: "Your safety is our",
        titleHighlight: "priority.",
        description:
          "We work with a formal contract, free preview of your site before any payment, and total satisfaction guarantee. You only pay when you approve the project.",
      },
      guaranteeItems: [
        { icon: FileText, text: "Formal service contract with all protection clauses" },
        { icon: Eye, text: "Free preview of your website before any financial commitment" },
        { icon: ShieldCheck, text: "30-day guarantee: we adjust until you're 100% satisfied" },
        { icon: Lock, text: "Payment only after preview approval" },
        { icon: Users, text: "Direct and transparent communication throughout the process" },
      ],
      guaranteeFooter:
        "Zero risk for you. Preview your site before paying and we only proceed if you approve.",
      trustBadge: {
        title: "Zero Risk",
        subtitle: "Free preview before paying",
      },
      cta: {
        title: "Preview your site before paying.",
        titleHighlight: "Zero risk, total security.",
        description:
          "Request your free preview today. You only pay when you approve the project. Formal contract, 30-day guarantee and complete support.",
        button: "Get Free Preview",
        buttonContact: "Talk to Specialist",
      },
      projectsSection: {
        badge: "Our Projects",
        title: "Professional websites we've",
        titleHighlight: "already delivered.",
        description: "Check out some of the projects we've developed for our clients.",
        viewAll: "View Full Portfolio",
        viewProject: "View Project",
        requestQuote: "I Want a Site Like This",
      },
    },
    es: {
      hero: {
        badge: "Sitios Web & Blogs Profesionales",
        title: "Tu sitio web listo con",
        titleHighlight: "riesgo cero.",
        description:
          "Visualiza tu sitio antes de pagar. Trabajamos con contrato formal, vista previa gratuita y solo pagas cuando apruebes el proyecto.",
        subdescription:
          "Más de 50 sitios entregados con garantía de satisfacción. Tu presencia digital con total seguridad.",
        cta: "Quiero Vista Previa Gratuita",
        ctaSecondary: "Ver Portafolio",
      },
      why: {
        badge: "¿Por qué tener un sitio web profesional?",
        title: "El sitio web es el centro de la presencia digital",
        titleHighlight: "de tu negocio.",
        description:
          "Es donde tus clientes investigan, analizan tu credibilidad y toman la decisión de contactarte.",
        subtitle: "Con un sitio web profesional desarrollado por ROVR, tendrás:",
        footer:
          "Un sitio web bien construido no es solo una página online — es un activo digital que trabaja para tu negocio las 24 horas del día.",
      },
      benefits: [
        { icon: Eye, text: "Diseño moderno y profesional que transmite confianza" },
        { icon: TrendingUp, text: "Estructura pensada para convertir visitantes en clientes" },
        { icon: Zap, text: "Rendimiento rápido y optimizado" },
        { icon: Smartphone, text: "Layout responsivo para celular, tablet y computadora" },
        { icon: Globe, text: "Estrategia digital aplicada al diseño" },
        { icon: Search, text: "Estructura ideal para SEO y presencia en Google" },
        { icon: ShieldCheck, text: "Credibilidad inmediata para tu marca" },
      ],
      process: {
        badge: "Nuestro Proceso",
        title: "Cómo creamos",
        titleHighlight: "tu proyecto.",
        description:
          "Trabajamos con un proceso claro y profesional para garantizar calidad, estrategia y transparencia en cada proyecto.",
      },
      steps: [
        {
          icon: ClipboardList,
          number: "01",
          title: "Análisis del Proyecto",
          description:
            "Entendemos tu negocio, tu público y tus objetivos para estructurar el sitio de la forma más estratégica posible.",
        },
        {
          icon: Layout,
          number: "02",
          title: "Planificación y Estructura",
          description:
            "Creamos la arquitectura del sitio y definimos la mejor estructura de páginas, contenido y experiencia del usuario.",
        },
        {
          icon: Code2,
          number: "03",
          title: "Desarrollo del Proyecto",
          description:
            "Nuestro equipo desarrolla el diseño y la estructura del sitio con enfoque en rendimiento, estética y conversión.",
        },
        {
          icon: MonitorSmartphone,
          number: "04",
          title: "Vista Previa del Sitio",
          description:
            "Antes de la entrega final, podrás visualizar el proyecto y validar el resultado.",
        },
        {
          icon: Settings2,
          number: "05",
          title: "Ajustes y Entrega Final",
          description:
            "Realizamos los ajustes necesarios y entregamos el proyecto final listo para representar tu negocio online.",
        },
      ],
      guarantee: {
        badge: "Garantía Incondicional",
        title: "Tu seguridad es nuestra",
        titleHighlight: "prioridad.",
        description:
          "Trabajamos con contrato formal, vista previa gratuita de tu sitio antes de cualquier pago, y garantía total de satisfacción. Solo pagas cuando apruebes el proyecto.",
      },
      guaranteeItems: [
        { icon: FileText, text: "Contrato formal de prestación de servicio con todas las cláusulas de protección" },
        { icon: Eye, text: "Vista previa gratuita de tu sitio web antes de cualquier compromiso financiero" },
        { icon: ShieldCheck, text: "Garantía de 30 días: ajustamos hasta que estés 100% satisfecho" },
        { icon: Lock, text: "Pago solo después de la aprobación de la vista previa" },
        { icon: Users, text: "Comunicación directa y transparente durante todo el proceso" },
      ],
      guaranteeFooter:
        "Cero riesgo para ti. Visualiza tu sitio antes de pagar y solo avanzamos si apruebas.",
      trustBadge: {
        title: "Riesgo Cero",
        subtitle: "Vista previa gratuita antes de pagar",
      },
      cta: {
        title: "Visualiza tu sitio antes de pagar.",
        titleHighlight: "Riesgo cero, total seguridad.",
        description:
          "Solicita tu vista previa gratuita hoy. Solo pagas cuando apruebes el proyecto. Contrato formal, garantía de 30 días y soporte completo.",
        button: "Quiero Vista Previa Gratuita",
        buttonContact: "Hablar con Especialista",
      },
      projectsSection: {
        badge: "Nuestros Proyectos",
        title: "Sitios web profesionales que",
        titleHighlight: "ya entregamos.",
        description: "Conoce algunos de los proyectos que desarrollamos para nuestros clientes.",
        viewAll: "Ver Portafolio Completo",
        viewProject: "Ver Proyecto",
        requestQuote: "Quiero un Sitio Así",
      },
    },
  };

  const c = content[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const getCategory = (cat: string | Record<string, string>) =>
    typeof cat === "string" ? cat : cat[language] || cat.pt;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-40" />
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="container mx-auto px-4 sm:px-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-10"
            >
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                {c.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
            >
              <span className="text-foreground">{c.hero.title} </span>
              <br className="hidden sm:block" />
              <motion.span
                className="text-gradient inline-block"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                {c.hero.titleHighlight}
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-5 leading-relaxed font-light"
            >
              {c.hero.description}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              {c.hero.subdescription}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://wa.me/5554991710543?text=Olá! Vim pelo site RoVR e quero meu site profissional agora!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold rounded-xl px-10 py-7 text-lg glow-primary"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {c.hero.cta}
                  </Button>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <a href="#projetos">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-border/50 bg-secondary/30 hover:bg-secondary/50 text-foreground font-semibold rounded-xl px-10 py-7 text-lg"
                  >
                    {c.hero.ctaSecondary}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-8 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                <Search className="w-4 h-4 text-accent" />
                {c.why.badge}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                <span className="text-foreground">{c.why.title} </span>
                <span className="text-gradient">{c.why.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-5 leading-relaxed font-light">
                {c.why.description}
              </p>
              <p className="text-foreground font-semibold text-lg sm:text-xl">
                {c.why.subtitle}
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-12">
              {c.benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="flex items-start gap-4 p-6 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground text-base sm:text-lg font-medium leading-snug pt-2">
                      {benefit.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              variants={itemVariants}
              className="text-center p-8 rounded-2xl border border-accent/20 bg-accent/5"
            >
              <p className="text-muted-foreground text-base sm:text-lg italic leading-relaxed">
                {c.why.footer}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 relative bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-8 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                <Code2 className="w-4 h-4 text-primary" />
                {c.process.badge}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                <span className="text-foreground">{c.process.title} </span>
                <span className="text-gradient">{c.process.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                {c.process.description}
              </p>
            </motion.div>

            {/* Steps */}
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/40 to-primary/40" />

              <div className="space-y-8 md:space-y-0">
                {c.steps.map((step, index) => {
                  const Icon = step.icon;
                  const isEven = index % 2 === 0;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className={`relative md:flex items-center ${
                        isEven ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      <div className={`md:w-1/2 ${isEven ? "md:pr-14 md:text-right" : "md:pl-14"}`}>
                        <motion.div
                          whileHover={{ scale: 1.02, y: -3 }}
                          className="p-7 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                        >
                          <div
                            className={`flex items-center gap-4 mb-4 ${
                              isEven ? "md:justify-end" : ""
                            }`}
                          >
                            {/* Mobile number badge */}
                            <div className="md:hidden w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                              <span className="text-primary-foreground font-bold text-xs">{step.number}</span>
                            </div>
                            <div className="w-11 h-11 rounded-xl bg-primary/10 hidden md:flex items-center justify-center">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                            {step.description}
                          </p>
                        </motion.div>
                      </div>

                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent items-center justify-center z-10 shadow-lg shadow-primary/30">
                        <span className="text-primary-foreground font-bold text-sm">
                          {step.number}
                        </span>
                      </div>

                      <div className="hidden md:block md:w-1/2" />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-8 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                <Lock className="w-4 h-4 text-accent" />
                {c.guarantee.badge}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                <span className="text-foreground">{c.guarantee.title} </span>
                <span className="text-gradient">{c.guarantee.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                {c.guarantee.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-12">
              {c.guaranteeItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="flex items-center gap-4 p-6 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm hover:border-accent/40 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-foreground text-base sm:text-lg font-medium leading-snug">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.p
              variants={itemVariants}
              className="text-center text-muted-foreground text-base sm:text-lg leading-relaxed"
            >
              {c.guaranteeFooter}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 md:py-28 bg-secondary/20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-8 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                <Eye className="w-4 h-4 text-primary" />
                {c.projectsSection.badge}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                <span className="text-foreground">{c.projectsSection.title} </span>
                <span className="text-gradient">{c.projectsSection.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                {c.projectsSection.description}
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
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group block rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                >
                  {/* Image */}
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
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm text-xs font-semibold text-primary border border-border/40 uppercase tracking-wider">
                        {getCategory(project.category)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-2">
                      {project.description[language]}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* View All + CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://sitesrovr.lovable.app/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-border/50 bg-secondary/30 hover:bg-secondary/50 text-foreground font-semibold rounded-xl px-8 py-6 text-lg"
                  >
                    {c.projectsSection.viewAll}
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
                    {c.projectsSection.requestQuote}
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-36 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight"
            >
              <span className="text-foreground">{c.cta.title} </span>
              <br className="hidden sm:block" />
              <span className="text-gradient">{c.cta.titleHighlight}</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              {c.cta.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://wa.me/5554991710543?text=Olá! Vim pelo site RoVR e gostaria de iniciar meu projeto!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold rounded-xl px-10 py-7 text-lg glow-primary"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {c.cta.button}
                  </Button>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link to="/contato">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-border/50 bg-secondary/30 hover:bg-secondary/50 text-foreground font-semibold rounded-xl px-10 py-7 text-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    {c.cta.buttonContact}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SitesBlogs;
