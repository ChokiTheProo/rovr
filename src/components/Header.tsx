import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { prefetchRoute } from "@/lib/prefetch";
import logoIcon from "@/assets/logo-icon.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: t("nav.about"), href: "sobre" },
    { label: t("nav.sitesBlogs"), href: "/sites-blogs", isPage: true },
    { label: t("nav.microsaas"), href: "/microsaas", isPage: true },
    { label: t("nav.aiAgents"), href: "/agentes-ia", isPage: true },
    { label: t("nav.internalServices"), href: "/servicos-internos", isPage: true },
  ];

  const handleNavClick = (sectionId: string) => {
    if (location.pathname === "/") {
      // Already on home, just scroll
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home then scroll
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1">
                <span className="font-display text-xl font-bold tracking-tight">
                  <span className="text-foreground transition-colors duration-300 group-hover:text-primary">Ro</span>
                  <span className="text-gradient group-hover:animate-glow-pulse">VR</span>
                </span>
                
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navItems.map((item, index) => {
                const buttonClasses = "inline-flex items-center justify-center whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-border/40 bg-secondary/30 text-muted-foreground hover:text-foreground hover:border-primary/60 hover:bg-primary/15 hover:shadow-lg hover:shadow-primary/10 active:scale-95";
                
                return item.isPage ? (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={buttonClasses}
                    onMouseEnter={() => prefetchRoute(item.href)}
                    onFocus={() => prefetchRoute(item.href)}
                    onTouchStart={() => prefetchRoute(item.href)}
                  >
                    <motion.span
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                ) : (
                  <motion.button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className={buttonClasses}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                );
              })}
            </nav>

            {/* Theme, Language Switcher & CTA */}
            <div className="hidden md:flex items-center gap-3">
              <ThemeSwitcher />
              <LanguageSwitcher />
              <Link
                to="/contato"
                onMouseEnter={() => prefetchRoute("/contato")}
                onFocus={() => prefetchRoute("/contato")}
                onTouchStart={() => prefetchRoute("/contato")}
              >
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg px-6 glow-primary">
                  {t("nav.contact")}
                </Button>
              </Link>
            </div>

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
