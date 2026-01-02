import { Code, Database, Shield, Zap, GitBranch, Palette, Server, Smartphone, Mail, CreditCard, Cloud, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import useScrollAnimation, { staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const TechSection = () => {
  const { language } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  const content = {
    pt: {
      stackProcess: "Stack & Processo",
      techOf: "Tecnologia de ",
      cutting: "Ponta",
      description: "Atualmente desenvolvemos aplicativos web similares à nossa página inicial e projetos existentes. Integrações TEF e sistemas de notas fiscais estão em desenvolvimento.",
      technologies: "Tecnologias",
      integrations: "Integrações",
      techs: [
        { icon: Code, title: "React + Vite", subtitle: "Frontend moderno" },
        { icon: Palette, title: "Tailwind CSS", subtitle: "Design responsivo" },
        { icon: Database, title: "Supabase", subtitle: "Backend & Auth" },
        { icon: Server, title: "Edge Functions", subtitle: "Serverless" },
        { icon: Shield, title: "TypeScript", subtitle: "Tipagem segura" },
        { icon: Smartphone, title: "PWA Ready", subtitle: "Mobile first" },
      ],
      ints: [
        { icon: CreditCard, title: "Stripe", subtitle: "Pagamentos" },
        { icon: Mail, title: "Resend", subtitle: "E-mails" },
        { icon: Cloud, title: "Cloud Storage", subtitle: "Arquivos" },
        { icon: Lock, title: "Auth Providers", subtitle: "Google, GitHub" },
        { icon: Zap, title: "Real-time", subtitle: "Atualizações" },
        { icon: GitBranch, title: "CI/CD", subtitle: "Deploy contínuo" },
      ],
      process: [
        { step: "01", title: "Conceito", description: "Ideação e validação de mercado" },
        { step: "02", title: "Prototipagem", description: "MVP funcional em semanas" },
        { step: "03", title: "Desenvolvimento", description: "Iteração ágil com feedback" },
        { step: "04", title: "Lançamento", description: "Go-to-market estratégico" },
      ],
    },
    en: {
      stackProcess: "Stack & Process",
      techOf: "Cutting-Edge ",
      cutting: "Technology",
      description: "We currently develop web applications similar to our homepage and existing projects. TEF integrations and invoice systems are under development.",
      technologies: "Technologies",
      integrations: "Integrations",
      techs: [
        { icon: Code, title: "React + Vite", subtitle: "Modern frontend" },
        { icon: Palette, title: "Tailwind CSS", subtitle: "Responsive design" },
        { icon: Database, title: "Supabase", subtitle: "Backend & Auth" },
        { icon: Server, title: "Edge Functions", subtitle: "Serverless" },
        { icon: Shield, title: "TypeScript", subtitle: "Type safe" },
        { icon: Smartphone, title: "PWA Ready", subtitle: "Mobile first" },
      ],
      ints: [
        { icon: CreditCard, title: "Stripe", subtitle: "Payments" },
        { icon: Mail, title: "Resend", subtitle: "Emails" },
        { icon: Cloud, title: "Cloud Storage", subtitle: "Files" },
        { icon: Lock, title: "Auth Providers", subtitle: "Google, GitHub" },
        { icon: Zap, title: "Real-time", subtitle: "Updates" },
        { icon: GitBranch, title: "CI/CD", subtitle: "Continuous deploy" },
      ],
      process: [
        { step: "01", title: "Concept", description: "Ideation and market validation" },
        { step: "02", title: "Prototyping", description: "Functional MVP in weeks" },
        { step: "03", title: "Development", description: "Agile iteration with feedback" },
        { step: "04", title: "Launch", description: "Strategic go-to-market" },
      ],
    },
    es: {
      stackProcess: "Stack & Proceso",
      techOf: "Tecnología de ",
      cutting: "Punta",
      description: "Actualmente desarrollamos aplicaciones web similares a nuestra página de inicio y proyectos existentes. Integraciones TEF y sistemas de facturación están en desarrollo.",
      technologies: "Tecnologías",
      integrations: "Integraciones",
      techs: [
        { icon: Code, title: "React + Vite", subtitle: "Frontend moderno" },
        { icon: Palette, title: "Tailwind CSS", subtitle: "Diseño responsivo" },
        { icon: Database, title: "Supabase", subtitle: "Backend & Auth" },
        { icon: Server, title: "Edge Functions", subtitle: "Serverless" },
        { icon: Shield, title: "TypeScript", subtitle: "Tipado seguro" },
        { icon: Smartphone, title: "PWA Ready", subtitle: "Mobile first" },
      ],
      ints: [
        { icon: CreditCard, title: "Stripe", subtitle: "Pagos" },
        { icon: Mail, title: "Resend", subtitle: "Correos" },
        { icon: Cloud, title: "Cloud Storage", subtitle: "Archivos" },
        { icon: Lock, title: "Auth Providers", subtitle: "Google, GitHub" },
        { icon: Zap, title: "Real-time", subtitle: "Actualizaciones" },
        { icon: GitBranch, title: "CI/CD", subtitle: "Deploy continuo" },
      ],
      process: [
        { step: "01", title: "Concepto", description: "Ideación y validación de mercado" },
        { step: "02", title: "Prototipado", description: "MVP funcional en semanas" },
        { step: "03", title: "Desarrollo", description: "Iteración ágil con feedback" },
        { step: "04", title: "Lanzamiento", description: "Go-to-market estratégico" },
      ],
    },
  };

  const t = content[language];

  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="tecnologia" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span 
            className="text-primary text-sm font-medium tracking-wider uppercase"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.1 }}
          >
            {t.stackProcess}
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mt-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t.techOf}
            <span className="text-gradient">{t.cutting}</span>
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t.description}
          </motion.p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="mb-12">
          <motion.h3 
            className="text-center text-lg font-semibold text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t.technologies}
          </motion.h3>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {t.techs.map((tech, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm text-center hover:border-primary/50 hover:bg-card transition-all duration-300"
              >
                <motion.div 
                  className="w-12 h-12 mx-auto rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <tech.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-foreground font-semibold text-sm mb-1">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground text-xs">
                  {tech.subtitle}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Integrations Grid */}
        <div className="mb-20">
          <motion.h3 
            className="text-center text-lg font-semibold text-muted-foreground mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
          >
            {t.integrations}
          </motion.h3>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {t.ints.map((tech, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group p-6 rounded-2xl border border-accent/30 bg-accent/5 backdrop-blur-sm text-center hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
              >
                <motion.div 
                  className="w-12 h-12 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-4 transition-all duration-300"
                  whileHover={{ scale: 1.2 }}
                >
                  <tech.icon className="w-6 h-6 text-accent" />
                </motion.div>
                <h3 className="text-foreground font-semibold text-sm mb-1">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground text-xs">
                  {tech.subtitle}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Process Timeline */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {t.process.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <motion.div 
                className="text-5xl font-display font-bold text-gradient opacity-50 mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 0.5 } : { scale: 0.5, opacity: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {item.step}
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
              
              {/* Connector Line */}
              {index < t.process.length - 1 && (
                <motion.div 
                  className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;
