"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-24 left-8 z-[9999] flex items-center justify-center transition-all duration-300 group p-2"
          aria-label="Volver arriba"
        >
          <div className="relative w-7 h-7 -rotate-90 opacity-40 group-hover:opacity-100 transition-opacity">
            <Image
              src="/accion.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <span className="absolute left-full ml-4 bg-white text-[#1D2A34] px-2 py-1 rounded-md text-[10px] uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-sm pointer-events-none border border-[#1D2A34]/10">
            Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
