"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

import { SplitReveal } from "@/components/v2/Text/SplitReveal";
import { useEffect, useState } from "react";

const MOBILE_STAGGER = 0.012;
const MOBILE_CHAR_DURATION = 0.28;
const MOBILE_GAP_BETWEEN_PHRASES = 0.12;

const getPhraseRevealDuration = (phrase: string) => {
  const letters = Array.from(phrase).length;
  if (letters <= 1) return MOBILE_CHAR_DURATION;
  return (letters - 1) * MOBILE_STAGGER + MOBILE_CHAR_DURATION;
};

const MobilePhraseLine = ({ phrase, startDelay }: { phrase: string; startDelay: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, startDelay * 1000);

    return () => clearTimeout(timer);
  }, [startDelay]);

  return (
    <motion.h2 
      className="text-2xl font-normal text-[#1d2a34] uppercase tracking-tight font-mono leading-tight"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {isVisible ? (
        <SplitReveal text={phrase} stagger={MOBILE_STAGGER} />
      ) : (
        <span className="opacity-0">{phrase}</span>
      )}
    </motion.h2>
  );
};

const DesktopPhraseLine = ({ phrase, progress, start, delay }: { phrase: string; progress: MotionValue<number>; start: number; delay: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return progress.on("change", (v) => {
      // Si el scroll supera el punto de inicio, activamos la animación char-by-char
      if (v >= start && !isVisible) {
        setTimeout(() => {
          setIsVisible(true);
        }, delay);
      }
    });
  }, [progress, start, isVisible, delay]);

  return (
    <motion.div 
      className="min-h-[1.5em] flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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

export const ProposalV2 = ({ phrases = [
  "ORDENAMOS TU MENSAJE",
  "ESTRUCTURAMOS TU PROPUESTA",
  "APORTAMOS CLARIDAD Y DIRECCIÓN",
] }: { phrases?: string[] }) => {
  const containerRef = useRef(null);
  
  // Only target desktop height for the scroll trigger
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const validPhrases = phrases.length > 0 ? phrases : [
    "ORDENAMOS TU MENSAJE",
    "ESTRUCTURAMOS TU PROPUESTA",
    "APORTAMOS CLARIDAD Y DIRECCIÓN",
  ];

  const total = validPhrases.length;
  const segment = 0.3; // 30% of scroll per phrase reveal (more space for each phrase)

  return (
    <section
      id="propuesta"
      ref={containerRef}
      className="relative md:h-[120vh] bg-[#efefed] w-full"
    >
      {/* MOBILE: Sequential fade-in animation */}
      <div className="flex md:hidden flex-col items-center text-center justify-center gap-6 py-4 px-6 min-h-[45vh]">
        {validPhrases.map((phrase, index) => {
          const startDelay = validPhrases
            .slice(0, index)
            .reduce((acc, current) => acc + getPhraseRevealDuration(current) + MOBILE_GAP_BETWEEN_PHRASES, 0);

          return (
            <MobilePhraseLine
              key={index}
              phrase={phrase}
              startDelay={startDelay}
            />
          );
        })}
      </div>

      {/* DESKTOP: Sticky scroll-triggered choreography */}
      <div className="hidden md:flex sticky top-0 h-screen w-full flex-col items-center justify-center px-6 will-change-transform">
        <div className="flex flex-col items-center text-center gap-6 md:gap-10">
          {validPhrases.map((phrase, index) => {
            const start = 0.1 + index * segment;
            const delay = index * 800; // 800ms delay between each phrase
            return (
              <DesktopPhraseLine
                key={index}
                phrase={phrase}
                progress={scrollYProgress}
                start={start}
                delay={delay}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
