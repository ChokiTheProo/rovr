import { Gamepad2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
              <Gamepad2 className="w-4 h-4 text-primary" />
            </div>
            <span className="font-display text-lg font-bold">
              <span className="text-foreground">REV</span>
              <span className="text-gradient">YRA</span>
            </span>
          </a>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2024 Revyra. Todos os direitos reservados.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Termos
            </a>
            <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
