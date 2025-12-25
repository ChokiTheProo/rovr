import { Clock, MessageCircle, FileText, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const ContactSection = () => {
  const benefits = [
    { icon: Clock, text: "Resposta em 24h" },
    { icon: MessageCircle, text: "Consultoria gratuita" },
    { icon: FileText, text: "NDA disponível" },
  ];

  const contacts = [
    { icon: Mail, label: "eurhok@gmail.com" },
    { icon: Mail, label: "robsonvarela23@gmail.com" },
    { icon: Phone, label: "(54) 99171-0543" },
    { icon: Phone, label: "(54) 99506-4090" },
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Tenho interesse em conhecer mais sobre os projetos da Revyra.");
    window.open(`https://wa.me/5554991710543?text=${message}`, '_blank');
  };

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
          <p className="text-muted-foreground text-lg mb-8">
            Seja você um empreendedor com uma visão inovadora ou uma empresa buscando 
            expandir no mercado digital, a Revyra está pronta para tornar seu projeto realidade.
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {contacts.map((contact, index) => (
              <div key={index} className="flex items-center justify-center gap-2 p-3 rounded-xl bg-card/50 border border-border/50">
                <contact.icon className="w-4 h-4 text-primary" />
                <span className="text-xs text-muted-foreground">{contact.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link to="/contato">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold rounded-xl px-10 py-6 text-lg glow-primary transition-all duration-300"
              >
                Fale Conosco
              </Button>
            </Link>
            <Button 
              size="lg"
              onClick={handleWhatsApp}
              variant="outline"
              className="border-accent/50 text-accent hover:bg-accent/10 font-semibold rounded-xl px-10 py-6 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>

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
