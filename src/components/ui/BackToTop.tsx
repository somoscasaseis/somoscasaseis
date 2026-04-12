"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
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
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-[9999] bg-[#1D2A34] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#2B5F63] transition-colors group"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-6 h-6" />
          <span className="absolute right-full mr-3 bg-white text-[#1D2A34] px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 md:group-hover:opacity-100 transition-opacity shadow-lg pointer-events-none">
            Volver arriba
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
