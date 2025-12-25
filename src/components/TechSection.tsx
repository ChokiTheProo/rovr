import { Code, Database, Shield, Zap, GitBranch, Palette, Server, Smartphone, Mail, CreditCard, Cloud, Lock } from "lucide-react";

const TechSection = () => {
  const technologies = [
    { icon: Code, title: "React + Vite", subtitle: "Frontend moderno" },
    { icon: Palette, title: "Tailwind CSS", subtitle: "Design responsivo" },
    { icon: Database, title: "Supabase", subtitle: "Backend & Auth" },
    { icon: Server, title: "Edge Functions", subtitle: "Serverless" },
    { icon: Shield, title: "TypeScript", subtitle: "Tipagem segura" },
    { icon: Smartphone, title: "PWA Ready", subtitle: "Mobile first" },
  ];

  const integrations = [
    { icon: CreditCard, title: "Stripe", subtitle: "Pagamentos" },
    { icon: Mail, title: "Resend", subtitle: "E-mails" },
    { icon: Cloud, title: "Cloud Storage", subtitle: "Arquivos" },
    { icon: Lock, title: "Auth Providers", subtitle: "Google, GitHub" },
    { icon: Zap, title: "Real-time", subtitle: "Atualizações" },
    { icon: GitBranch, title: "CI/CD", subtitle: "Deploy contínuo" },
  ];

  const process = [
    { step: "01", title: "Conceito", description: "Ideação e validação de mercado" },
    { step: "02", title: "Prototipagem", description: "MVP funcional em semanas" },
    { step: "03", title: "Desenvolvimento", description: "Iteração ágil com feedback" },
    { step: "04", title: "Lançamento", description: "Go-to-market estratégico" },
  ];

  return (
    <section id="tecnologia" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Stack & Processo</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Tecnologia de <span className="text-gradient">Ponta</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Utilizamos as melhores ferramentas e metodologias do mercado para entregar 
            soluções de alta qualidade.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="mb-12">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">Tecnologias</h3>
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
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-6">Integrações</h3>
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
