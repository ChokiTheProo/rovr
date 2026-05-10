import { TrendingUp, DollarSign, BarChart3, Settings, Heart, Stethoscope, Scale, Pill, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import useScrollAnimation, { staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";
import fluxenImg from "@/assets/project-fluxen.png";
import klyexaImg from "@/assets/project-klyexa.png";
import cuidabemImg from "@/assets/project-cuidabem.png";
import tratamentoImg from "@/assets/project-tratamento.png";
import emagrioImg from "@/assets/project-emagrio.png";

const MicroSaasSection = () => {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  const content = {
    pt: {
      philosophy: "Produtos próprios da RoVR",
      vision: "Nossos ",
      microSaas: "Micro SaaS",
      description: "Além de sites para clientes, a gente também constrói produtos próprios. Aplicativos pequenos, focados, que resolvem um problema bem feito — e seguem evoluindo todo mês.",
      quote: "\"A gente come do próprio bolo. Cada MicroSaaS aqui é testado por nós antes de virar oferta pra você.\"",
      team: "EQUIPE ROVR",
      features: [
        { icon: TrendingUp, title: "Foco em um problema", description: "Cada produto resolve uma dor específica, sem virar canivete suíço que não corta nada.", metric: "1 dor", metricLabel: "por produto" },
        { icon: DollarSign, title: "Modelo recorrente", description: "Assinatura mensal com preço justo. Sem trava de fidelidade, sem letra miúda.", metric: "Mensal", metricLabel: "cancele quando quiser" },
        { icon: BarChart3, title: "Iteração contínua", description: "Atualizamos com base no que o usuário pede, não no que achamos bonito.", metric: "Live", metricLabel: "sempre evoluindo" },
        { icon: Settings, title: "Setup em minutos", description: "Cria conta, conecta o que precisa e usa. Sem onboarding de duas horas.", metric: "Rápido", metricLabel: "sem fricção" },
      ],
      saasTitle: "Aplicativos no ar",
      sitesTitle: "Sites & Landing Pages",
      sitesDescription: "Projetos de sites profissionais desenvolvidos pela RoVR.",
    },
    en: {
      philosophy: "RoVR's own products",
      vision: "Our ",
      microSaas: "Micro SaaS",
      description: "Besides building for clients, we also build our own. Small, focused apps that solve one problem well — and keep evolving every month.",
      quote: "\"We eat our own cooking. Every MicroSaaS here is tested by us before it becomes an offer to you.\"",
      team: "ROVR TEAM",
      features: [
        { icon: TrendingUp, title: "One problem, done right", description: "Each product solves one specific pain. No Swiss-army-knife that cuts nothing.", metric: "1 pain", metricLabel: "per product" },
        { icon: DollarSign, title: "Recurring model", description: "Monthly subscription, fair price. No lock-in, no fine print.", metric: "Monthly", metricLabel: "cancel any time" },
        { icon: BarChart3, title: "Constant iteration", description: "We ship what users ask for, not what we think looks cool.", metric: "Live", metricLabel: "always evolving" },
        { icon: Settings, title: "Setup in minutes", description: "Create account, connect what you need, use. No two-hour onboarding.", metric: "Fast", metricLabel: "no friction" },
      ],
      saasTitle: "Live apps",
      sitesTitle: "Sites & Landing Pages",
      sitesDescription: "Professional website projects developed by RoVR.",
    },
    es: {
      philosophy: "Productos propios de RoVR",
      vision: "Nuestros ",
      microSaas: "Micro SaaS",
      description: "Además de construir para clientes, también construimos para nosotros. Apps pequeñas y enfocadas que resuelven un problema bien hecho — y siguen evolucionando cada mes.",
      quote: "\"Comemos de nuestro propio pastel. Cada MicroSaaS aquí lo probamos antes de ofrecértelo.\"",
      team: "EQUIPO ROVR",
      features: [
        { icon: TrendingUp, title: "Un problema, bien resuelto", description: "Cada producto resuelve un dolor específico. Nada de navaja suiza que no corta.", metric: "1 dolor", metricLabel: "por producto" },
        { icon: DollarSign, title: "Modelo recurrente", description: "Suscripción mensual a precio justo. Sin permanencia, sin letra chica.", metric: "Mensual", metricLabel: "cancela cuando quieras" },
        { icon: BarChart3, title: "Iteración constante", description: "Lanzamos lo que el usuario pide, no lo que nos parece bonito.", metric: "Live", metricLabel: "siempre evolucionando" },
        { icon: Settings, title: "Setup en minutos", description: "Creas cuenta, conectas lo que necesitas y usas. Sin onboarding de dos horas.", metric: "Rápido", metricLabel: "sin fricción" },
      ],
      saasTitle: "Apps activas",
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
