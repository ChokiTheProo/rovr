import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="py-12 border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 group perspective-1000">
              <div className="relative w-12 h-12 transform-style-3d transition-all duration-500 group-hover:rotate-y-12 group-hover:rotate-x-6 group-hover:scale-110">
                {/* Glow effect behind */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-accent to-primary blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
                
                {/* Main logo container */}
                <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-primary via-primary/80 to-accent border border-primary/50 flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/50 transition-all duration-500 group-hover:border-primary">
                  {/* Inner shine effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Letter R with animation */}
                  <span className="font-display text-xl font-black text-primary-foreground tracking-tighter relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                    R
                  </span>
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 group-hover:animate-float transition-opacity duration-300" />
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 group-hover:animate-float transition-opacity duration-500 delay-100" />
              </div>
              
              <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1">
                <span className="font-display text-xl font-bold tracking-tight">
                  <span className="text-foreground transition-colors duration-300 group-hover:text-primary">Ro</span>
                  <span className="text-gradient group-hover:animate-glow-pulse">VR</span>
                </span>
                <span className="text-[10px] text-muted-foreground -mt-1 transition-colors duration-300 group-hover:text-muted-foreground/80">{t("logo.tagline")}</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              {language === "pt" 
                ? "Transformamos ideias em soluções digitais escaláveis. Nossos produtos SaaS são desenvolvidos com tecnologia de ponta para ajudar seu negócio a crescer."
                : "We transform ideas into scalable digital solutions. Our SaaS products are developed with cutting-edge technology to help your business grow."}
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="space-y-3">
              <a href="mailto:eurhok@gmail.com" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                eurhok@gmail.com
              </a>
              <a href="mailto:robsonvarela23@gmail.com" className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                robsonvarela23@gmail.com
              </a>
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
                {language === "pt" ? "Trabalhe Conosco" : "Work With Us"}
              </a>
              <Link to="/termos" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                {t("footer.terms")}
              </Link>
              <Link to="/privacidade" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                {t("footer.privacy")}
              </Link>
              <Link to="/contato" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                {t("footer.contact")}
              </Link>
              <Link to="/faq" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                {t("footer.faq")}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 RoVR. {t("footer.rights")}
          </p>
          <p className="text-muted-foreground text-xs">
            {language === "pt" ? "Feito com ❤️ no Brasil" : "Made with ❤️ in Brazil"}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
