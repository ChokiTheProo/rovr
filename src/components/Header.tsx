import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import { prefetchRoute } from "@/lib/prefetch";

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

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4">
        <div className="container mx-auto max-w-6xl">
          <div className="relative group">
            {/* Outer glow */}
            <div
              aria-hidden
              className={`pointer-events-none absolute -inset-[1px] rounded-full bg-gradient-to-r from-primary/40 via-primary/20 to-primary/40 blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-700 ${scrolled ? "opacity-50" : ""}`}
            />

            <div className={`relative flex items-center justify-between gap-3 rounded-full border border-border/50 bg-background/60 backdrop-blur-xl pl-4 pr-2 sm:pl-5 sm:pr-2.5 py-2 transition-all duration-300 ${scrolled ? "shadow-xl shadow-primary/10 border-primary/30 bg-background/75" : "shadow-lg shadow-primary/5"}`}>
              {/* Logo */}
              <Link to="/" className="flex items-center group/logo shrink-0">
                <span className="font-display text-lg sm:text-xl font-bold tracking-tight">
                  <span className="text-foreground transition-colors duration-300 group-hover/logo:text-primary">Ro</span>
                  <span className="text-gradient group-hover/logo:animate-glow-pulse">VR</span>
                </span>
              </Link>

              {/* Navigation pills */}
              <nav className="hidden lg:flex items-center gap-0.5 bg-secondary/40 border border-border/40 rounded-full p-1">
                {navItems.map((item, index) => {
                  const buttonClasses = "relative inline-flex items-center justify-center whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 text-muted-foreground hover:text-foreground hover:bg-primary/10 active:scale-95";

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
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.04, duration: 0.3 }}
                      >
                        {item.label}
                      </motion.span>
                    </Link>
                  ) : (
                    <motion.button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      className={buttonClasses}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.04, duration: 0.3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
              </nav>

              {/* Theme, Language Switcher & CTA */}
              <div className="hidden md:flex items-center gap-2">
                <ThemeSwitcher />
                <LanguageSwitcher />
                <Link
                  to="/contato"
                  onMouseEnter={() => prefetchRoute("/contato")}
                  onFocus={() => prefetchRoute("/contato")}
                  onTouchStart={() => prefetchRoute("/contato")}
                  className="relative group/cta"
                >
                  <span aria-hidden className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary to-primary/60 blur opacity-40 group-hover/cta:opacity-80 transition-opacity duration-300" />
                  <span className="relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold text-sm px-5 py-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 active:scale-95">
                    {t("nav.contact")}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                  </span>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-foreground rounded-full hover:bg-primary/10 transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Abrir menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
};

export default Header;
