import { Lightbulb, Target, TrendingUp, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Inovação Contínua",
      description: "Exploramos novas mecânicas e tecnologias para criar experiências únicas.",
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description: "Cada jogo é projetado com métricas claras de engajamento e monetização.",
    },
    {
      icon: TrendingUp,
      title: "Crescimento Escalável",
      description: "Arquitetura pensada para suportar milhões de usuários simultâneos.",
    },
    {
      icon: Users,
      title: "Experiência do Usuário",
      description: "Design centrado no jogador para máxima retenção e satisfação.",
    },
  ];

  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Sobre Nós</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Somos a <span className="text-gradient">Revyra</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            A Revyra é um estúdio de desenvolvimento de jogos com DNA de startup. 
            Combinamos a paixão por games com estratégias de negócios digitais para 
            criar produtos que encantam e geram receita recorrente.
          </p>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            Nosso diferencial está na abordagem <span className="text-foreground font-semibold">Micro SaaS</span>: 
            cada jogo é um produto independente, automatizado e escalável. Da concepção à 
            monetização, pensamos em cada detalhe para maximizar o valor entregue aos jogadores 
            e aos nossos parceiros.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
