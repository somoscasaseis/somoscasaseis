"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const letters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: baseDelay,
      },
    },
  };

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: 15, 
      filter: "blur(8px)", 
      scale: 0.9 
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 0.8,
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
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};
