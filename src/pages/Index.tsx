import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const SitesShowcaseSection = lazy(() => import("@/components/SitesShowcaseSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const MarketingSection = lazy(() => import("@/components/MarketingSection"));
const Footer = lazy(() => import("@/components/Footer"));
const ProgressiveBlur = lazy(() => import("@/components/ProgressiveBlur"));

const SectionFallback = () => <div className="h-32" />;

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
          <Suspense fallback={<SectionFallback />}>
            <AboutSection />
            <MarketingSection />
            <SitesShowcaseSection />
            <TestimonialsSection />
            <FAQSection />
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <Suspense fallback={null}>
        <Footer />
        <ProgressiveBlur />
      </Suspense>
    </div>
  );
};

export default Index;
