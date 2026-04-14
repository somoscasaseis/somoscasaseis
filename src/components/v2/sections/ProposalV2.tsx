"use client";

import { motion, useScroll, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { SplitReveal } from "@/components/v2/Text/SplitReveal";

/** Tramo de progreso de scroll asignado a cada frase (0–1 sobre la sección). */
const SCROLL_SEGMENT = 0.26;

const PhraseLine = ({
  phrase,
  progress,
  start,
}: {
  phrase: string;
  progress: MotionValue<number>;
  start: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (progress.get() >= start) setIsVisible(true);
    return progress.on("change", (v: number) => {
      if (v >= start) setIsVisible(true);
    });
  }, [progress, start]);

  return (
    <motion.div
      className="min-h-[1.5em] flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
    >
      <h2 className="text-2xl md:text-5xl font-normal text-[#1d2a34] uppercase tracking-tight font-mono leading-tight">
        {isVisible ? (
          <SplitReveal text={phrase} stagger={0.03} />
        ) : (
          <span className="opacity-0">{phrase}</span>
        )}
      </h2>
    </motion.div>
  );
};

export const ProposalV2 = ({
  phrases = [
    "ORDENAMOS TU MENSAJE",
    "ESTRUCTURAMOS TU PROPUESTA",
    "APORTAMOS CLARIDAD Y DIRECCIÓN",
  ],
}: {
  phrases?: string[];
}) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const validPhrases =
    phrases.length > 0
      ? phrases
      : [
          "ORDENAMOS TU MENSAJE",
          "ESTRUCTURAMOS TU PROPUESTA",
          "APORTAMOS CLARIDAD Y DIRECCIÓN",
        ];

  const scrollStart = 0.08;

  return (
    <section
      id="propuesta"
      ref={containerRef}
      className="relative h-[200vh] md:h-[120vh] bg-[#efefed] w-full"
    >
      <div className="sticky top-0 flex w-full flex-col items-center justify-center px-6 py-6 md:h-[100dvh] md:min-h-screen md:py-0 will-change-transform">
        <div className="flex flex-col items-center text-center gap-3 md:gap-10">
          {validPhrases.map((phrase, index) => (
            <PhraseLine
              key={index}
              phrase={phrase}
              progress={scrollYProgress}
              start={scrollStart + index * SCROLL_SEGMENT}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
