"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SplitRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  baseDelay?: number;
}

export const SplitReveal = ({ 
  text, 
  className = "", 
  stagger = 0.02,
  baseDelay = 0 
}: SplitRevealProps) => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => {
      mediaQuery.removeEventListener("change", updateIsMobile);
    };
  }, []);

  const effectiveStagger = isMobile ? Math.min(stagger, 0.012) : stagger;
  const effectiveBaseDelay = isMobile ? Math.min(baseDelay, 0.2) : baseDelay;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: effectiveStagger,
        delayChildren: effectiveBaseDelay,
      },
    },
  };

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: isMobile ? 4 : 10,
      filter: isMobile ? "blur(0px)" : "blur(4px)",
      scale: isMobile ? 1 : 0.98
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: isMobile ? 0.28 : 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`inline-block whitespace-pre-wrap ${className}`}
    >
      {text.split(" ").map((word, wordIndex, array) => (
        <span key={wordIndex} className="inline-block">
          {Array.from(word).map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={childVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {/* Add space after the word if it's not the last one */}
          {wordIndex < array.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </motion.div>
  );
};
