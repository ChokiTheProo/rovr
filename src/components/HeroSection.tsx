import { Sparkles, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: "10+", label: "Projetos" },
    { value: "99%", label: "Uptime" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">SaaS Studio • MicroSaaS</span>
            <Sparkles className="w-4 h-4 text-accent" />
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">REV</span>
            <span className="text-gradient">YRA</span>
          </h1>

          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl font-light mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="text-foreground">Criamos SaaS e MicroSaaS que </span>
            <span className="text-gradient-accent font-medium">escalam como negócios.</span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Desenvolvemos soluções digitais escaláveis. Inovação, 
            automação e monetização inteligente em cada projeto.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg"
              onClick={() => scrollToSection('projetos')}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold rounded-xl px-8 py-6 text-lg glow-primary transition-all duration-300"
            >
              Ver Projetos
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('sobre')}
              className="border-border/50 bg-secondary/30 hover:bg-secondary/50 text-foreground font-semibold rounded-xl px-8 py-6 text-lg transition-all duration-300"
            >
              Conhecer a Revyra
            </Button>
            <Button 
              size="lg"
              onClick={() => scrollToSection('contato')}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-xl px-8 py-6 text-lg transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Fale Conosco
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
              <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-glow-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
