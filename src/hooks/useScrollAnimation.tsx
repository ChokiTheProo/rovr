import { useInView } from "framer-motion";
import { useRef } from "react";

// Animation variants for different effects
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5
    }
  }
};

// Hook for scroll-triggered animations
// Note: returns isInView=true by default to ensure content is always visible,
// preventing mobile viewport issues where useInView fails to trigger.
export const useScrollAnimation = (_options?: { once?: boolean; amount?: number | "some" | "all" }) => {
  const ref = useRef(null);
  return { ref, isInView: true };
};

export default useScrollAnimation;
