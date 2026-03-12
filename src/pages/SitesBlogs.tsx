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
} from "lucide-react";

const SitesBlogs = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      hero: {
        badge: "Sites & Blogs Profissionais",
        title: "Seu negócio merece um site que realmente",
        titleHighlight: "gere resultados.",
        description:
          "Na ROVR, criamos sites e blogs profissionais, rápidos e estratégicos, projetados para transmitir autoridade, atrair clientes e fortalecer sua presença digital.",
        subdescription:
          "Mais do que apenas um design bonito, entregamos plataformas pensadas para conversão, credibilidade e crescimento do seu negócio online.",
        cta: "Iniciar Meu Projeto",
        ctaSecondary: "Ver Projetos",
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
        badge: "Segurança & Garantia",
        title: "Segurança, transparência e",
        titleHighlight: "garantia.",
        description:
          "Sabemos que um projeto digital exige confiança e profissionalismo. Por isso, todos os projetos da ROVR seguem um processo estruturado e seguro.",
      },
      guaranteeItems: [
        { icon: FileText, text: "Contrato formal de prestação de serviço" },
        { icon: Eye, text: "Processo transparente de desenvolvimento" },
        { icon: MonitorSmartphone, text: "Pré-visualização do projeto antes da entrega" },
        { icon: ShieldCheck, text: "Garantia de qualidade do trabalho entregue" },
        { icon: Users, text: "Comunicação clara durante todo o processo" },
      ],
      guaranteeFooter:
        "Nosso objetivo é que você tenha total segurança ao investir na presença digital do seu negócio.",
      cta: {
        title: "Vamos criar um site que represente o",
        titleHighlight: "verdadeiro valor do seu negócio.",
        description:
          "Entre em contato com nossa equipe e solicite uma pré-visualização do seu projeto. Descubra como um site profissional pode elevar sua marca, atrair clientes e fortalecer sua presença digital.",
        button: "Fale com a ROVR",
        whatsapp: "WhatsApp",
      },
      projectsSection: {
        badge: "Nossos Projetos",
        title: "Sites e blogs que",
        titleHighlight: "já entregamos.",
        description: "Confira alguns dos projetos que desenvolvemos para nossos clientes.",
        viewAll: "Ver Todos os Projetos",
      },
    },
    en: {
      hero: {
        badge: "Professional Websites & Blogs",
        title: "Your business deserves a website that truly",
        titleHighlight: "delivers results.",
        description:
          "At ROVR, we create professional, fast and strategic websites and blogs, designed to convey authority, attract customers and strengthen your digital presence.",
        subdescription:
          "More than just a beautiful design, we deliver platforms designed for conversion, credibility and growth of your online business.",
        cta: "Start My Project",
        ctaSecondary: "View Projects",
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
        badge: "Security & Guarantee",
        title: "Security, transparency and",
        titleHighlight: "guarantee.",
        description:
          "We know that a digital project requires trust and professionalism. That's why all ROVR projects follow a structured and secure process.",
      },
      guaranteeItems: [
        { icon: FileText, text: "Formal service contract" },
        { icon: Eye, text: "Transparent development process" },
        { icon: MonitorSmartphone, text: "Project preview before delivery" },
        { icon: ShieldCheck, text: "Quality guarantee of delivered work" },
        { icon: Users, text: "Clear communication throughout the process" },
      ],
      guaranteeFooter:
        "Our goal is for you to have total security when investing in your business's digital presence.",
      cta: {
        title: "Let's create a website that represents the",
        titleHighlight: "true value of your business.",
        description:
          "Contact our team and request a preview of your project. Discover how a professional website can elevate your brand, attract customers and strengthen your digital presence.",
        button: "Talk to ROVR",
        whatsapp: "WhatsApp",
      },
      projectsSection: {
        badge: "Our Projects",
        title: "Websites and blogs we've",
        titleHighlight: "already delivered.",
        description: "Check out some of the projects we've developed for our clients.",
        viewAll: "View All Projects",
      },
    },
    es: {
      hero: {
        badge: "Sitios Web & Blogs Profesionales",
        title: "Tu negocio merece un sitio web que realmente",
        titleHighlight: "genere resultados.",
        description:
          "En ROVR, creamos sitios web y blogs profesionales, rápidos y estratégicos, diseñados para transmitir autoridad, atraer clientes y fortalecer tu presencia digital.",
        subdescription:
          "Más que solo un diseño bonito, entregamos plataformas pensadas para conversión, credibilidad y crecimiento de tu negocio online.",
        cta: "Iniciar Mi Proyecto",
        ctaSecondary: "Ver Proyectos",
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
        badge: "Seguridad & Garantía",
        title: "Seguridad, transparencia y",
        titleHighlight: "garantía.",
        description:
          "Sabemos que un proyecto digital requiere confianza y profesionalismo. Por eso, todos los proyectos de ROVR siguen un proceso estructurado y seguro.",
      },
      guaranteeItems: [
        { icon: FileText, text: "Contrato formal de prestación de servicio" },
        { icon: Eye, text: "Proceso transparente de desarrollo" },
        { icon: MonitorSmartphone, text: "Vista previa del proyecto antes de la entrega" },
        { icon: ShieldCheck, text: "Garantía de calidad del trabajo entregado" },
        { icon: Users, text: "Comunicación clara durante todo el proceso" },
      ],
      guaranteeFooter:
        "Nuestro objetivo es que tengas total seguridad al invertir en la presencia digital de tu negocio.",
      cta: {
        title: "Vamos a crear un sitio web que represente el",
        titleHighlight: "verdadero valor de tu negocio.",
        description:
          "Contacta a nuestro equipo y solicita una vista previa de tu proyecto. Descubre cómo un sitio web profesional puede elevar tu marca, atraer clientes y fortalecer tu presencia digital.",
        button: "Habla con ROVR",
        whatsapp: "WhatsApp",
      },
      projectsSection: {
        badge: "Nuestros Proyectos",
        title: "Sitios web y blogs que",
        titleHighlight: "ya entregamos.",
        description: "Conoce algunos de los proyectos que desarrollamos para nuestros clientes.",
        viewAll: "Ver Todos los Proyectos",
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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-40" />
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="container mx-auto px-4 sm:px-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-8"
            >
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{c.hero.badge}</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="text-foreground">{c.hero.title} </span>
              <span className="text-gradient">{c.hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4"
            >
              {c.hero.description}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl mx-auto mb-10"
            >
              {c.hero.subdescription}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://web.whatsapp.com/send?phone=5554991710543"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold rounded-xl px-8 py-6 text-lg glow-primary"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {c.hero.cta}
                  </Button>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link to="/" state={{ scrollTo: "projetos" }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-border/50 bg-secondary/30 hover:bg-secondary/50 text-foreground font-semibold rounded-xl px-8 py-6 text-lg"
                  >
                    {c.hero.ctaSecondary}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Why Section */}
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-6 text-sm text-muted-foreground">
                <Search className="w-4 h-4 text-accent" />
                {c.why.badge}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">{c.why.title} </span>
                <span className="text-gradient">{c.why.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-4">
                {c.why.description}
              </p>
              <p className="text-foreground font-medium text-base sm:text-lg">
                {c.why.subtitle}
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {c.benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:bg-card/80 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground text-sm sm:text-base font-medium pt-1.5">
                      {benefit.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              variants={itemVariants}
              className="text-center p-6 rounded-2xl border border-accent/20 bg-accent/5"
            >
              <p className="text-muted-foreground text-sm sm:text-base italic">
                {c.why.footer}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 relative bg-secondary/20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-14">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-6 text-sm text-muted-foreground">
                <Code2 className="w-4 h-4 text-primary" />
                {c.process.badge}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">{c.process.title} </span>
                <span className="text-gradient">{c.process.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                {c.process.description}
              </p>
            </motion.div>

            {/* Steps */}
            <div className="relative">
              {/* Vertical line connector */}
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
                      {/* Content card */}
                      <div className={`md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                        <motion.div
                          whileHover={{ scale: 1.02, y: -3 }}
                          className="p-6 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
                        >
                          <div
                            className={`flex items-center gap-3 mb-3 ${
                              isEven ? "md:justify-end" : ""
                            }`}
                          >
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="font-display text-lg font-bold text-foreground">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground text-sm sm:text-base">
                            {step.description}
                          </p>
                        </motion.div>
                      </div>

                      {/* Center number circle */}
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent items-center justify-center z-10 shadow-lg shadow-primary/30">
                        <span className="text-primary-foreground font-bold text-sm">
                          {step.number}
                        </span>
                      </div>

                      {/* Spacer for opposite side */}
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
      <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-6 text-sm text-muted-foreground">
                <Lock className="w-4 h-4 text-accent" />
                {c.guarantee.badge}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                <span className="text-foreground">{c.guarantee.title} </span>
                <span className="text-gradient">{c.guarantee.titleHighlight}</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                {c.guarantee.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {c.guaranteeItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -3 }}
                    className="flex items-center gap-4 p-5 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm hover:border-accent/40 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <p className="text-foreground text-sm sm:text-base font-medium">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.p
              variants={itemVariants}
              className="text-center text-muted-foreground text-sm sm:text-base"
            >
              {c.guaranteeFooter}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section Link */}
      <section className="py-16 md:py-24 bg-secondary/20 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-6 text-sm text-muted-foreground">
                <Eye className="w-4 h-4 text-primary" />
                {c.projectsSection.badge}
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-4"
            >
              <span className="text-foreground">{c.projectsSection.title} </span>
              <span className="text-gradient">{c.projectsSection.titleHighlight}</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-base sm:text-lg mb-10"
            >
              {c.projectsSection.description}
            </motion.p>
            <motion.div variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link to="/" state={{ scrollTo: "projetos" }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border/50 bg-secondary/30 hover:bg-secondary/50 text-foreground font-semibold rounded-xl px-8 py-6 text-lg"
                  >
                    {c.projectsSection.viewAll}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.h2
              variants={itemVariants}
              className="font-display text-2xl sm:text-3xl md:text-5xl font-bold mb-6"
            >
              <span className="text-foreground">{c.cta.title} </span>
              <span className="text-gradient">{c.cta.titleHighlight}</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-base sm:text-lg mb-10 max-w-2xl mx-auto"
            >
              {c.cta.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://web.whatsapp.com/send?phone=5554991710543"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold rounded-xl px-10 py-6 text-lg glow-primary"
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
                    className="w-full sm:w-auto border-border/50 bg-secondary/30 hover:bg-secondary/50 text-foreground font-semibold rounded-xl px-10 py-6 text-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 mr-2" />
                    {c.cta.button}
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
