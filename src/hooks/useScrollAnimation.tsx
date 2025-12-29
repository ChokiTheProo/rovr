import { useInView } from "framer-motion";
import { useRef } from "react";

// Custom easing as tuple type
const customEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Animation variants for different effects
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: customEase
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
      duration: 0.5,
      ease: customEase
    }
  }
};

// Hook for scroll-triggered animations
export const useScrollAnimation = (options = { once: true, margin: "-100px" as const }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, options);
  
  return { ref, isInView };
};

export default useScrollAnimation;
