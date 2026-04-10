"use client";

import { motion } from "framer-motion";

type HandDrawnUnderlineProps = {
  className?: string;
};

export const HandDrawnUnderline = ({ className }: HandDrawnUnderlineProps) => {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 240 28"
      className={className}
      fill="none"
      preserveAspectRatio="none"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }}
    >
      <motion.path
        d="M6 18 C 45 26, 80 10, 120 18 S 195 26, 234 16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.2, ease: [0.65, 0, 0.35, 1] as const },
          },
        }}
      />
    </motion.svg>
  );
};
