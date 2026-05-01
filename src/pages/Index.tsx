import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

import SitesShowcaseSection from "@/components/SitesShowcaseSection";

import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import MarketingSection from "@/components/MarketingSection";



import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.state]);

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
          <HeroSection />
          <AboutSection />
          
          <MarketingSection />
          <TechSection />
          
          <TestimonialsSection />
          <SitesShowcaseSection />
          <MicroSaasSection />
          <FAQSection />
          <SocialProofBar />
          <GuaranteesSection />
          
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Index;
