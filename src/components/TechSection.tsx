import { Gamepad2, Cloud, Database, Shield, Zap, GitBranch } from "lucide-react";

const TechSection = () => {
  const technologies = [
    { icon: Gamepad2, title: "Unity & Unreal", subtitle: "Engines AAA" },
    { icon: Cloud, title: "Cloud Native", subtitle: "AWS & GCP" },
    { icon: Database, title: "Real-time DB", subtitle: "Firebase & Supabase" },
    { icon: Shield, title: "Anti-Cheat", subtitle: "Segurança robusta" },
    { icon: Zap, title: "Low Latency", subtitle: "< 50ms response" },
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
            jogos de alta qualidade.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
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
