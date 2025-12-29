import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import logoIcon from "@/assets/logo-icon.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: t("nav.about"), href: "sobre" },
    { label: t("nav.projects"), href: "projetos" },
    { label: t("nav.technology"), href: "tecnologia" },
    { label: t("nav.microsaas"), href: "microsaas" },
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

  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group perspective-1000">
              <div className="relative w-12 h-12 transform-style-3d transition-all duration-500 group-hover:rotate-y-12 group-hover:rotate-x-6 group-hover:scale-110">
                {/* Glow effect behind */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                
                {/* Main logo image */}
                <img 
                  src={logoIcon} 
                  alt="RoVR Logo" 
                  className="relative w-full h-full rounded-2xl shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/50 transition-all duration-500"
                />
                
                {/* Shine overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
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

            {/* Navigation */}
            <motion.nav 
              className="hidden md:flex items-center gap-2"
              variants={navContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  variants={navItemVariants}
                  onClick={() => handleNavClick(item.href)}
                  className="relative px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 overflow-hidden group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </motion.nav>

            {/* Language Switcher & CTA */}
            <div className="hidden md:flex items-center gap-4">
              <LanguageSwitcher />
              <Link to="/contato">
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
