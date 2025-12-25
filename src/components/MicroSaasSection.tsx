import { TrendingUp, DollarSign, BarChart3, Settings } from "lucide-react";

const MicroSaasSection = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Crescimento Exponencial",
      description: "Arquitetura projetada para escalar de centenas a milhões de usuários sem refatoração.",
      metric: "10x",
      metricLabel: "Crescimento médio",
    },
    {
      icon: DollarSign,
      title: "Receita Recorrente",
      description: "Modelos de monetização que geram receita previsível e sustentável mês após mês.",
      metric: "MRR",
      metricLabel: "Monthly Revenue",
    },
    {
      icon: BarChart3,
      title: "Métricas em Tempo Real",
      description: "Dashboard completo com KPIs de engajamento, retenção e monetização.",
      metric: "24/7",
      metricLabel: "Monitoramento",
    },
    {
      icon: Settings,
      title: "Automação Total",
      description: "Desde atualizações de conteúdo até campanhas de marketing, tudo automatizado.",
      metric: "90%",
      metricLabel: "Processos automáticos",
    },
  ];

  return (
    <section id="microsaas" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Nossa Filosofia</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Visão <span className="text-gradient">Micro SaaS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Cada jogo da Revyra é tratado como um produto digital independente. 
            Aplicamos metodologias de SaaS para criar games que não apenas entretêm, 
            mas também geram valor de negócio mensurável e escalável.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:glow-primary transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-display font-bold text-gradient">
                      {feature.metric}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {feature.metricLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto text-center p-8 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
          <blockquote className="text-xl md:text-2xl font-light text-foreground italic mb-4">
            "Não criamos apenas jogos. Criamos produtos digitais que crescem, 
            evoluem e geram valor continuamente."
          </blockquote>
          <cite className="text-primary font-semibold not-italic">— EQUIPE REVYRA</cite>
        </div>
      </div>
    </section>
  );
};

export default MicroSaasSection;
