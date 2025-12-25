import { Layers, Mail, Phone, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Olá! Gostaria de mais informações sobre a Revyera.");
    window.open(`https://wa.me/5554991710543?text=${message}`, '_blank');
  };

  return (
    <footer className="py-12 border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                <Layers className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold">
                  <span className="text-foreground">REV</span>
                  <span className="text-gradient">YERA</span>
                </span>
                <span className="text-[10px] text-muted-foreground -mt-1">Criamos SaaS e MicroSaaS</span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm max-w-md">
              Transformamos ideias em soluções digitais escaláveis. Nossos produtos SaaS são desenvolvidos 
              com tecnologia de ponta para ajudar seu negócio a crescer.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="mailto:eurhok@gmail.com" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                eurhok@gmail.com
              </a>
              <a href="mailto:robsonvarela23@gmail.com" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                robsonvarela23@gmail.com
              </a>
              <a href="tel:+5554991710543" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                (54) 99171-0543
              </a>
              <a href="tel:+5554995064090" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                (54) 99506-4090
              </a>
              <button 
                onClick={handleWhatsApp}
                className="flex items-center gap-2 text-accent text-sm hover:text-accent/80 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Links</h4>
            <div className="space-y-3">
              <a 
                href="#trabalhe-conosco" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('trabalhe-conosco')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block text-muted-foreground text-sm hover:text-primary transition-colors"
              >
                Trabalhe Conosco
              </a>
              <Link to="/termos" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                Termos de Uso
              </Link>
              <Link to="/privacidade" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/contato" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Revyera. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-xs">
            Feito com ❤️ no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
