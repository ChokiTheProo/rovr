import { Code, Database, Shield, Zap, GitBranch, Palette, Server, Smartphone, Mail, CreditCard, Cloud, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TechSection = () => {
  const { language } = useLanguage();

  const technologies = language === "pt" ? [
    { icon: Code, title: "React + Vite", subtitle: "Frontend moderno" },
    { icon: Palette, title: "Tailwind CSS", subtitle: "Design responsivo" },
    { icon: Database, title: "Supabase", subtitle: "Backend & Auth" },
    { icon: Server, title: "Edge Functions", subtitle: "Serverless" },
    { icon: Shield, title: "TypeScript", subtitle: "Tipagem segura" },
    { icon: Smartphone, title: "PWA Ready", subtitle: "Mobile first" },
  ] : [
    { icon: Code, title: "React + Vite", subtitle: "Modern frontend" },
    { icon: Palette, title: "Tailwind CSS", subtitle: "Responsive design" },
    { icon: Database, title: "Supabase", subtitle: "Backend & Auth" },
    { icon: Server, title: "Edge Functions", subtitle: "Serverless" },
    { icon: Shield, title: "TypeScript", subtitle: "Type safe" },
    { icon: Smartphone, title: "PWA Ready", subtitle: "Mobile first" },
  ];

  const integrations = language === "pt" ? [
    { icon: CreditCard, title: "Stripe", subtitle: "Pagamentos" },
    { icon: Mail, title: "Resend", subtitle: "E-mails" },
    { icon: Cloud, title: "Cloud Storage", subtitle: "Arquivos" },
    { icon: Lock, title: "Auth Providers", subtitle: "Google, GitHub" },
    { icon: Zap, title: "Real-time", subtitle: "Atualizações" },
    { icon: GitBranch, title: "CI/CD", subtitle: "Deploy contínuo" },
  ] : [
    { icon: CreditCard, title: "Stripe", subtitle: "Payments" },
    { icon: Mail, title: "Resend", subtitle: "Emails" },
    { icon: Cloud, title: "Cloud Storage", subtitle: "Files" },
    { icon: Lock, title: "Auth Providers", subtitle: "Google, GitHub" },
    { icon: Zap, title: "Real-time", subtitle: "Updates" },
    { icon: GitBranch, title: "CI/CD", subtitle: "Continuous deploy" },
  ];

  const process = language === "pt" ? [
    { step: "01", title: "Conceito", description: "Ideação e validação de mercado" },
    { step: "02", title: "Prototipagem", description: "MVP funcional em semanas" },
    { step: "03", title: "Desenvolvimento", description: "Iteração ágil com feedback" },
    { step: "04", title: "Lançamento", description: "Go-to-market estratégico" },
  ] : [
    { step: "01", title: "Concept", description: "Ideation and market validation" },
    { step: "02", title: "Prototyping", description: "Functional MVP in weeks" },
    { step: "03", title: "Development", description: "Agile iteration with feedback" },
    { step: "04", title: "Launch", description: "Strategic go-to-market" },
  ];

  return (
    <section id="tecnologia" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            {language === "pt" ? "Stack & Processo" : "Stack & Process"}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            {language === "pt" ? "Tecnologia de " : "Cutting-Edge "}
            <span className="text-gradient">{language === "pt" ? "Ponta" : "Technology"}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {language === "pt" 
              ? "Atualmente desenvolvemos aplicativos web similares à nossa página inicial e projetos existentes. Integrações TEF e sistemas de notas fiscais estão em desenvolvimento."
              : "We currently develop web applications similar to our homepage and existing projects. TEF integrations and invoice systems are under development."}
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="mb-12">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">
            {language === "pt" ? "Tecnologias" : "Technologies"}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm text-center hover:border-primary/50 hover:bg-card transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                  <tech.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-foreground font-semibold text-sm mb-1">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground text-xs">
                  {tech.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="mb-20">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">
            {language === "pt" ? "Integrações" : "Integrations"}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((tech, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-accent/30 bg-accent/5 backdrop-blur-sm text-center hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-4 transition-all duration-300">
                  <tech.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-foreground font-semibold text-sm mb-1">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground text-xs">
                  {tech.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((item, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-5xl font-display font-bold text-gradient opacity-50 mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
              
              {/* Connector Line */}
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
