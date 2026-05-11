import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { GradientDots } from "@/components/ui/gradient-dots";
import { sectionLoaders, prefetchAllRoutesIdle, prefetchHomeSectionsIdle } from "@/lib/prefetch";

const AboutSection = lazy(sectionLoaders.AboutSection);
const SitesShowcaseSection = lazy(sectionLoaders.SitesShowcaseSection);
const TestimonialsSection = lazy(sectionLoaders.TestimonialsSection);
const FAQSection = lazy(sectionLoaders.FAQSection);
const MarketingSection = lazy(sectionLoaders.MarketingSection);
const Footer = lazy(sectionLoaders.Footer);
const ProgressiveBlur = lazy(sectionLoaders.ProgressiveBlur);

const SectionFallback = () => <div className="h-32" />;

const Index = () => {
  const location = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    // Kick off prefetch of below-the-fold sections and other routes once the browser is idle.
    prefetchHomeSectionsIdle();
    prefetchAllRoutesIdle();
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen relative">
      {/* Full-page animated gradient dots background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GradientDots
          backgroundColor="hsl(var(--background))"
          dotSize={8}
          spacing={12}
          duration={40}
          colorCycleDuration={10}
          className="opacity-50"
        />
      </div>
      {/* Legibility overlay */}
      <div className="fixed inset-0 z-0 bg-background/50 pointer-events-none" />

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
