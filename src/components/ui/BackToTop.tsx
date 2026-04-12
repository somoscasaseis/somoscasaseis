"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          whileHover={{ scale: 1.1, backgroundColor: "#1D2A34", color: "#FFFFFF" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 z-[9999] w-10 h-10 border border-[#1D2A34]/30 rounded-full flex items-center justify-center text-[#1D2A34] transition-all duration-300 group hover:border-[#1D2A34]"
          aria-label="Volver arriba"
        >
          <ChevronUp className="w-5 h-5 stroke-[1.5px]" />
          <span className="absolute right-full mr-4 bg-white text-[#1D2A34] px-2 py-1 rounded-md text-[10px] uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-sm pointer-events-none border border-[#1D2A34]/10">
            Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
