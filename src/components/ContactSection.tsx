import { Clock, MessageCircle, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const benefits = [
    { icon: Clock, text: "Resposta em 24h" },
    { icon: MessageCircle, text: "Consultoria gratuita" },
    { icon: FileText, text: "NDA disponível" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <span className="text-accent text-sm font-medium tracking-wider">
            Vamos criar algo incrível juntos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Pronto para transformar{" "}
            <span className="text-gradient">sua ideia em realidade?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Seja você um empreendedor com uma visão inovadora ou uma empresa buscando 
            expandir no mercado digital, a Revyra está pronta para tornar seu projeto realidade.
          </p>

          {/* CTA Button */}
          <Link to="/contato">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold rounded-xl px-10 py-6 text-lg glow-primary transition-all duration-300 mb-10"
            >
              Fale Conosco
            </Button>
          </Link>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <benefit.icon className="w-5 h-5 text-primary" />
                <span className="text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
