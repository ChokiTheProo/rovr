import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MicroSaasSection from "@/components/MicroSaasSection";

const MicroSaas = () => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  const content = {
    pt: {
      badge: "Produtos RoVR",
      title: "Nossos ",
      highlight: "MicroSaaS",
      subtitle:
        "Conheça nossos aplicativos SaaS independentes. Produtos digitais que crescem, evoluem e geram valor continuamente para milhares de usuários.",
    },
    en: {
      badge: "RoVR Products",
      title: "Our ",
      highlight: "MicroSaaS",
      subtitle:
        "Discover our independent SaaS applications. Digital products that grow, evolve and continuously deliver value to thousands of users.",
    },
    es: {
      badge: "Productos RoVR",
      title: "Nuestros ",
      highlight: "MicroSaaS",
      subtitle:
        "Conoce nuestras aplicaciones SaaS independientes. Productos digitales que crecen, evolucionan y generan valor continuamente para miles de usuarios.",
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={language}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Hero */}
          <section className="relative pt-32 pb-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial opacity-30" />
            <div className="container mx-auto px-6 relative z-10 text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-4"
              >
                {t.badge}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                {t.title}
                <span className="text-gradient">{t.highlight}</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted-foreground text-lg max-w-2xl mx-auto"
              >
                {t.subtitle}
              </motion.p>
            </div>
          </section>

          <MicroSaasSection />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default MicroSaas;
