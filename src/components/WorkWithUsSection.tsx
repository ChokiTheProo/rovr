import { Users, Rocket, Heart, Send } from "lucide-react";
import { Button } from "./ui/button";

const WorkWithUsSection = () => {
  const benefits = [
    { icon: Rocket, title: "Projetos Inovadores", description: "Trabalhe em SaaS e MicroSaaS de ponta" },
    { icon: Users, title: "Equipe Colaborativa", description: "Ambiente de trabalho flexível e remoto" },
    { icon: Heart, title: "Crescimento", description: "Oportunidade de desenvolvimento contínuo" },
  ];

  const handleApply = () => {
    const message = encodeURIComponent("Olá! Tenho interesse em trabalhar na Revyra. Gostaria de saber mais sobre as oportunidades.");
    window.open(`https://wa.me/5554991710543?text=${message}`, '_blank');
  };

  return (
    <section id="trabalhe-conosco" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-medium tracking-wider uppercase">Carreiras</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Trabalhe <span className="text-gradient">Conosco</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Junte-se à nossa equipe e ajude a construir o futuro dos produtos digitais no Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm text-center hover:border-accent/50 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            onClick={handleApply}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl px-8 py-6 text-lg transition-all duration-300"
          >
            <Send className="w-5 h-5 mr-2" />
            Enviar Candidatura
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSection;
