import { useState } from "react";
import { Layers } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Tecnologia", href: "#tecnologia" },
    { label: "Micro SaaS", href: "#microsaas" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center group-hover:glow-primary transition-all duration-300">
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

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <Link to="/contato" className="hidden md:block">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-6 glow-primary">
                Fale Conosco
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground relative z-50"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Header;
