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
  MessageCircle,
  CheckCircle2,
  Layout,
  MonitorSmartphone,
  FileText,
  ShieldCheck,
  Users,
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  Palette,
  Building2,
  ShoppingBag,
  BookOpen,
  Target,
} from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";
import siteInstitucional from "@/assets/site-institucional.jpg";
import siteLanding from "@/assets/site-landing.jpg";
import siteBlog from "@/assets/site-blog.jpg";
import siteVendas from "@/assets/site-vendas.jpg";

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

const Index = () => {
  const { language } = useLanguage();

  const content = {
    pt: {
      hero: {
        badge: "Agência Digital Premium",
        title: "Crie um site profissional que",
        titleHighlight: "atrai clientes todos os dias",
        description: "Sites modernos, rápidos e estratégicos para clínicas, restaurantes e negócios locais",
        cta: "Solicitar orçamento",
        ctaSecondary: "Ver portfólio",
      },
      siteTypes: {
        badge: "Nossos Serviços",
        title: "Soluções digitais para",
        titleHighlight: "cada tipo de negócio",
        items: [
          {
            icon: Building2,
            title: "Site Institucional",
            description: "Presença profissional e confiável para sua empresa com design moderno e navegação intuitiva.",
            image: siteInstitucional,
          },
          {
            icon: Target,
            title: "Landing Page",
            description: "Páginas de alta conversão focadas em captar leads e gerar resultados imediatos para seu negócio.",
            image: siteLanding,
          },
          {
            icon: BookOpen,
            title: "Blog Profissional",
            description: "Plataforma de conteúdo otimizada para SEO que posiciona sua marca como autoridade no mercado.",
            image: siteBlog,
          },
          {
            icon: ShoppingBag,
            title: "Página de Vendas",
            description: "Design persuasivo e estratégico que transforma visitantes em compradores com alta taxa de conversão.",
            image: siteVendas,
          },
        ],
      },
      benefits: {
        badge: "Diferenciais",
        title: "Por que escolher a",
        titleHighlight: "ROVR?",
        items: [
          { icon: Palette, text: "Design profissional e exclusivo" },
          { icon: Search, text: "SEO otimizado para Google" },
          { icon: Zap, text: "Carregamento ultra rápido" },
          { icon: MessageCircle, text: "Integração com WhatsApp" },
          { icon: Smartphone, text: "Totalmente responsivo" },
          { icon: ShieldCheck, text: "Segurança e SSL incluso" },
        ],
      },
      authority: {
        badge: "Resultados Comprovados",
        title: "Números que",
        titleHighlight: "falam por si",
        stats: [
          { value: "+100", label: "Projetos Criados" },
          { value: "98%", label: "Clientes Satisfeitos" },
          { value: "24h", label: "Suporte Dedicado" },
          { value: "5★", label: "Avaliação Média" },
        ],
      },
      testimonials: {
        badge: "Depoimentos",
        title: "O que nossos clientes",
        titleHighlight: "dizem sobre nós",
        items: [
          {
            name: "Carlos M.",
            role: "Dono de Restaurante",
            text: "O site ficou incrível! Recebi mais de 30 novos clientes só no primeiro mês. A equipe da ROVR entendeu exatamente o que eu precisava.",
          },
          {
            name: "Ana P.",
            role: "Dentista",
            text: "Profissionalismo do início ao fim. Meu consultório ganhou uma presença digital que transmite confiança e credibilidade.",
          },
          {
            name: "Roberto S.",
            role: "Advogado",
            text: "Investimento que se pagou rapidamente. O site gera contatos qualificados todos os dias. Recomendo sem hesitar!",
          },
        ],
      },
      cta: {
        title: "Seu site pronto para",
        titleHighlight: "vender todos os dias",
        description: "Solicite seu orçamento agora e transforme sua presença digital. Contrato formal, garantia de satisfação e suporte completo.",
        button: "Solicitar orçamento agora",
        buttonContact: "Falar com Especialista",
      },
    },
    en: {
      hero: {
        badge: "Premium Digital Agency",
        title: "Create a professional website that",
        titleHighlight: "attracts clients every day",
        description: "Modern, fast and strategic websites for clinics, restaurants and local businesses",
        cta: "Request a quote",
        ctaSecondary: "View portfolio",
      },
      siteTypes: {
        badge: "Our Services",
        title: "Digital solutions for",
        titleHighlight: "every type of business",
        items: [
          {
            icon: Building2,
            title: "Corporate Website",
            description: "Professional and reliable presence for your company with modern design and intuitive navigation.",
            image: siteInstitucional,
          },
          {
            icon: Target,
            title: "Landing Page",
            description: "High-conversion pages focused on capturing leads and generating immediate results.",
            image: siteLanding,
          },
          {
            icon: BookOpen,
            title: "Professional Blog",
            description: "SEO-optimized content platform that positions your brand as a market authority.",
            image: siteBlog,
          },
          {
            icon: ShoppingBag,
            title: "Sales Page",
            description: "Persuasive and strategic design that turns visitors into buyers with high conversion rates.",
            image: siteVendas,
          },
        ],
      },
      benefits: {
        badge: "Why Us",
        title: "Why choose",
        titleHighlight: "ROVR?",
        items: [
          { icon: Palette, text: "Professional and exclusive design" },
          { icon: Search, text: "SEO optimized for Google" },
          { icon: Zap, text: "Ultra fast loading" },
          { icon: MessageCircle, text: "WhatsApp integration" },
          { icon: Smartphone, text: "Fully responsive" },
          { icon: ShieldCheck, text: "Security and SSL included" },
        ],
      },
      authority: {
        badge: "Proven Results",
        title: "Numbers that",
        titleHighlight: "speak for themselves",
        stats: [
          { value: "+100", label: "Projects Created" },
          { value: "98%", label: "Satisfied Clients" },
          { value: "24h", label: "Dedicated Support" },
          { value: "5★", label: "Average Rating" },
        ],
      },
      testimonials: {
        badge: "Testimonials",
        title: "What our clients",
        titleHighlight: "say about us",
        items: [
          {
            name: "Carlos M.",
            role: "Restaurant Owner",
            text: "The website turned out amazing! I got over 30 new clients in the first month alone. The ROVR team understood exactly what I needed.",
          },
          {
            name: "Ana P.",
            role: "Dentist",
            text: "Professionalism from start to finish. My practice gained a digital presence that conveys trust and credibility.",
          },
          {
            name: "Roberto S.",
            role: "Lawyer",
            text: "An investment that paid for itself quickly. The website generates qualified contacts every day. I recommend without hesitation!",
          },
        ],
      },
      cta: {
        title: "Your website ready to",
        titleHighlight: "sell every day",
        description: "Request your quote now and transform your digital presence. Formal contract, satisfaction guarantee and complete support.",
        button: "Request a quote now",
        buttonContact: "Talk to a Specialist",
      },
    },
    es: {
      hero: {
        badge: "Agencia Digital Premium",
        title: "Crea un sitio web profesional que",
        titleHighlight: "atrae clientes todos los días",
        description: "Sitios modernos, rápidos y estratégicos para clínicas, restaurantes y negocios locales",
        cta: "Solicitar presupuesto",
        ctaSecondary: "Ver portafolio",
      },
      siteTypes: {
        badge: "Nuestros Servicios",
        title: "Soluciones digitales para",
        titleHighlight: "cada tipo de negocio",
        items: [
          {
            icon: Building2,
            title: "Sitio Institucional",
            description: "Presencia profesional y confiable para tu empresa con diseño moderno y navegación intuitiva.",
            image: siteInstitucional,
          },
          {
            icon: Target,
            title: "Landing Page",
            description: "Páginas de alta conversión enfocadas en captar leads y generar resultados inmediatos.",
            image: siteLanding,
          },
          {
            icon: BookOpen,
            title: "Blog Profesional",
            description: "Plataforma de contenido optimizada para SEO que posiciona tu marca como autoridad.",
            image: siteBlog,
          },
          {
            icon: ShoppingBag,
            title: "Página de Ventas",
            description: "Diseño persuasivo y estratégico que transforma visitantes en compradores.",
            image: siteVendas,
          },
        ],
      },
      benefits: {
        badge: "Diferenciales",
        title: "¿Por qué elegir",
        titleHighlight: "ROVR?",
        items: [
          { icon: Palette, text: "Diseño profesional y exclusivo" },
          { icon: Search, text: "SEO optimizado para Google" },
          { icon: Zap, text: "Carga ultra rápida" },
          { icon: MessageCircle, text: "Integración con WhatsApp" },
          { icon: Smartphone, text: "Totalmente responsivo" },
          { icon: ShieldCheck, text: "Seguridad y SSL incluido" },
        ],
      },
      authority: {
        badge: "Resultados Comprobados",
        title: "Números que",
        titleHighlight: "hablan por sí solos",
        stats: [
          { value: "+100", label: "Proyectos Creados" },
          { value: "98%", label: "Clientes Satisfechos" },
          { value: "24h", label: "Soporte Dedicado" },
          { value: "5★", label: "Valoración Media" },
        ],
      },
      testimonials: {
        badge: "Testimonios",
        title: "Lo que nuestros clientes",
        titleHighlight: "dicen de nosotros",
        items: [
          {
            name: "Carlos M.",
            role: "Dueño de Restaurante",
            text: "¡El sitio web quedó increíble! Recibí más de 30 nuevos clientes solo en el primer mes. El equipo de ROVR entendió exactamente lo que necesitaba.",
          },
          {
            name: "Ana P.",
            role: "Dentista",
            text: "Profesionalismo de principio a fin. Mi consultorio ganó una presencia digital que transmite confianza y credibilidad.",
          },
          {
            name: "Roberto S.",
            role: "Abogado",
            text: "Una inversión que se pagó rápidamente. El sitio genera contactos calificados todos los días. ¡Recomiendo sin dudar!",
          },
        ],
      },
      cta: {
        title: "Tu sitio web listo para",
        titleHighlight: "vender todos los días",
        description: "Solicita tu presupuesto ahora y transforma tu presencia digital. Contrato formal, garantía de satisfacción y soporte completo.",
        button: "Solicitar presupuesto ahora",
        buttonContact: "Hablar con Especialista",
      },
    },
  };

  const c = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ===== HERO ===== */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="container mx-auto px-4 sm:px-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Left - Text */}
            <div className="text-center lg:text-left">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8"
              >
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium tracking-wide text-primary uppercase">
                  {c.hero.badge}
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
              >
                <span className="text-foreground">{c.hero.title} </span>
                <br className="hidden sm:block" />
                <span className="text-gradient">{c.hero.titleHighlight}</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              >
                {c.hero.description}
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href="https://wa.me/5554991710543?text=Olá! Vim pelo site RoVR e quero um orçamento!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl px-10 py-7 text-lg glow-primary"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      {c.hero.cta}
                    </Button>
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <a href="#tipos-de-sites">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-primary/30 hover:bg-primary/10 text-foreground font-semibold rounded-xl px-10 py-7 text-lg"
                    >
                      {c.hero.ctaSecondary}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                </motion.div>
              </motion.div>
            </div>

            {/* Right - Mockup */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
                <img
                  src={heroMockup}
                  alt="Sites profissionais ROVR"
                  width={1280}
                  height={720}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl -z-10" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ===== TIPOS DE SITES ===== */}
      <section id="tipos-de-sites" className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8 text-sm font-medium tracking-wide text-primary uppercase">
                <Globe className="w-4 h-4" />
                {c.siteTypes.badge}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                <span className="text-foreground">{c.siteTypes.title} </span>
                <span className="text-gradient">{c.siteTypes.titleHighlight}</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {c.siteTypes.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="group rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    </div>
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== BENEFÍCIOS ===== */}
      <section className="py-20 md:py-28 relative bg-card/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8 text-sm font-medium tracking-wide text-primary uppercase">
                <Star className="w-4 h-4" />
                {c.benefits.badge}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                <span className="text-foreground">{c.benefits.title} </span>
                <span className="text-gradient">{c.benefits.titleHighlight}</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {c.benefits.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className="flex items-center gap-4 p-6 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground text-base sm:text-lg font-medium leading-snug">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== AUTORIDADE ===== */}
      <section className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8 text-sm font-medium tracking-wide text-primary uppercase">
                <TrendingUp className="w-4 h-4" />
                {c.authority.badge}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                <span className="text-foreground">{c.authority.title} </span>
                <span className="text-gradient">{c.authority.titleHighlight}</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {c.authority.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="text-center p-8 rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
                >
                  <motion.div
                    className="font-display text-4xl md:text-5xl font-bold text-gradient mb-3"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== DEPOIMENTOS ===== */}
      <section className="py-20 md:py-28 relative bg-card/30">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8 text-sm font-medium tracking-wide text-primary uppercase">
                <Users className="w-4 h-4" />
                {c.testimonials.badge}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                <span className="text-foreground">{c.testimonials.title} </span>
                <span className="text-gradient">{c.testimonials.titleHighlight}</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {c.testimonials.items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="p-6 sm:p-8 rounded-2xl border border-border/40 bg-card/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 relative"
                >
                  {/* WhatsApp-style speech bubble */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground text-base leading-relaxed mb-6 italic">
                    "{item.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold text-sm">{item.name}</p>
                      <p className="text-muted-foreground text-xs">{item.role}</p>
                    </div>
                  </div>
                  {/* Green WhatsApp-style check */}
                  <div className="absolute top-6 right-6">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-24 md:py-36 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        {/* Gold line accents */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

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
              className="text-muted-foreground text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              {c.cta.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="https://wa.me/5554991710543?text=Olá! Vim pelo site RoVR e quero um orçamento!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl px-10 py-7 text-lg glow-primary"
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
                    className="w-full sm:w-auto border-primary/30 hover:bg-primary/10 text-foreground font-semibold rounded-xl px-10 py-7 text-lg"
                  >
                    <FileText className="w-5 h-5 mr-2" />
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

export default Index;
