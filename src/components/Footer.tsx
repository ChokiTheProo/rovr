import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import useScrollAnimation, { staggerContainer, staggerItem } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const { t, language } = useLanguage();
  const { ref, isInView } = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.footer 
      className="relative z-10 py-12 border-t border-border/50 bg-card/30"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Logo & Description */}
          <motion.div className="md:col-span-2" variants={staggerItem}>
            <Link to="/" className="flex items-center gap-3 mb-4 group perspective-1000">
              <motion.div 
                className="relative w-12 h-12 transform-style-3d transition-all duration-500 group-hover:rotate-y-12 group-hover:rotate-x-6 group-hover:scale-110"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
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
                <motion.div 
                  className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div 
                  className="absolute -bottom-1 -left-1 w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ y: [2, -2, 2] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </motion.div>
              
              <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1">
                <span className="font-display text-xl font-bold tracking-tight">
                  <span className="text-foreground transition-colors duration-300 group-hover:text-primary">Ro</span>
                  <span className="text-gradient group-hover:animate-glow-pulse">VR</span>
                </span>
                <span className="text-[10px] text-muted-foreground -mt-1 transition-colors duration-300 group-hover:text-muted-foreground/80">{t("logo.tagline")}</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              {t("footer.description")}
            </p>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h4 className="text-foreground font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="space-y-3">
              <motion.a 
                href="mailto:eurhok@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
                whileHover={{ x: 4 }}
              >
                <Mail className="w-4 h-4" />
                eurhok@gmail.com
              </motion.a>
              <motion.a 
                href="mailto:roger1robson2@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
                whileHover={{ x: 4 }}
              >
                <Mail className="w-4 h-4" />
                roger1robson2@gmail.com
              </motion.a>
              <motion.a 
                href="mailto:rovrbr@outlook.com" 
                className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
                whileHover={{ x: 4 }}
              >
                <Mail className="w-4 h-4" />
                rovrbr@outlook.com
              </motion.a>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={staggerItem}>
            <h4 className="text-foreground font-semibold mb-4">Links</h4>
            <div className="space-y-3">
              <motion.div whileHover={{ x: 4 }}>
                <Link 
                  to="/agentes-ia" 
                  className="block text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {t("footer.aiAgents")}
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 4 }}>
                <Link 
                  to="/servicos-internos" 
                  className="block text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {language === "pt" ? "Serviços Internos" : language === "en" ? "Internal Services" : "Servicios Internos"}
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 4 }}>
                <Link 
                  to="/trabalhe-conosco" 
                  className="block text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  {t("footer.workWithUs")}
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 4 }}>
                <Link to="/termos" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                  {t("footer.terms")}
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 4 }}>
                <Link to="/privacidade" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                  {t("footer.privacy")}
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 4 }}>
                <Link to="/contato" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                  {t("footer.contact")}
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 4 }}>
                <Link to="/faq" className="block text-muted-foreground text-sm hover:text-primary transition-colors">
                  {t("footer.faq")}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div 
          className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground text-sm">
            © 2025 RoVR. {t("footer.rights")}
          </p>
          <motion.p 
            className="text-muted-foreground text-xs"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {t("footer.madeWith")}
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
