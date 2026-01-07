import { motion, AnimatePresence } from "framer-motion";
import FluxenHeader from "@/components/fluxen/FluxenHeader";
import FluxenHero from "@/components/fluxen/FluxenHero";
import FluxenFeatures from "@/components/fluxen/FluxenFeatures";
import FluxenDashboard from "@/components/fluxen/FluxenDashboard";
import FluxenPricing from "@/components/fluxen/FluxenPricing";
import FluxenTestimonials from "@/components/fluxen/FluxenTestimonials";
import FluxenFAQ from "@/components/fluxen/FluxenFAQ";
import FluxenCTA from "@/components/fluxen/FluxenCTA";
import FluxenFooter from "@/components/fluxen/FluxenFooter";

const FluxenIndex = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      <FluxenHeader />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <FluxenHero />
          <FluxenFeatures />
          <FluxenDashboard />
          <FluxenPricing />
          <FluxenTestimonials />
          <FluxenFAQ />
          <FluxenCTA />
        </motion.main>
      </AnimatePresence>
      <FluxenFooter />
    </div>
  );
};

export default FluxenIndex;
