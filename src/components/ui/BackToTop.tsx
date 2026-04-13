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
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ 
            scale: 1.1,
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-[9999] w-14 h-14 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-500 group cursor-pointer"
          aria-label="Volver arriba"
        >
          <motion.div
            className="relative w-8 h-8"
            animate={{
              y: [-2, 2, -2],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {/* Flecha principal */}
            <motion.svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute inset-0 text-[#1d2a34]"
            >
              <motion.path
                d="M12 6V18M6 12l6-6 6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  pathLength: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }}
              />
            </motion.svg>
            
            {/* Efecto de aura sutil */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#1d2a34]/10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0.4 }}
              transition={{
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                },
                opacity: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            />
          </motion.div>
          
          {/* Efecto de pulso sutil al hover */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-[#1d2a34]/20"
            initial={{ scale: 1, opacity: 0 }}
            whileHover={{ 
              scale: 1.1, 
              opacity: 1,
              transition: { duration: 0.4 }
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
