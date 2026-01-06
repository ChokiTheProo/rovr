import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(onClose, 300);
  };

  const navItems = [
    { label: t("nav.about"), href: "sobre" },
    { label: t("nav.projects"), href: "projetos" },
    { label: t("nav.technology"), href: "tecnologia" },
    { label: t("nav.microsaas"), href: "microsaas" },
  ];

  const handleNavClick = (sectionId: string) => {
    handleClose();
    if (location.pathname === "/") {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
        isAnimating && isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/95 backdrop-blur-xl"
        onClick={handleClose}
      />

      {/* Menu Content */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center transform transition-all duration-500 ${
          isAnimating && isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-8 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Logo */}
        <div className="mb-8">
          <span className="font-display text-3xl font-bold">
            <span className="text-foreground">Ro</span>
            <span className="text-gradient">VR</span>
          </span>
          <p className="text-muted-foreground text-sm text-center mt-2">
            {t("logo.tagline")}
          </p>
        </div>

        {/* Theme & Language Switcher */}
        <div className="mb-8 flex items-center gap-4">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center gap-6">
          {navItems.map((item, index) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={`text-2xl font-semibold text-foreground hover:text-primary transition-all duration-300 transform ${
                isAnimating && isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <Link
          to="/contato"
          onClick={handleClose}
          className={`mt-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl px-10 py-4 text-lg glow-primary transition-all duration-500 transform ${
            isAnimating && isOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          {t("nav.contact")}
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
