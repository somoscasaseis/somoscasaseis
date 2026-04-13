"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

import { SplitReveal } from "@/components/v2/Text/SplitReveal";
import { useEffect, useState } from "react";

const MobilePhraseLine = ({ phrase, index }: { phrase: string; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 1000); // 1 second delay between each phrase

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <h2 className="text-xl font-normal text-[#1d2a34] uppercase tracking-normal leading-relaxed font-mono">
      {isVisible ? (
        <SplitReveal text={phrase} stagger={0.03} />
      ) : (
        <span className="opacity-0">{phrase}</span>
      )}
    </h2>
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
    <div className="min-h-[1.5em] flex items-center justify-center">
      <h2 className="text-xl md:text-4xl lg:text-5xl font-normal text-[#1d2a34] uppercase tracking-normal leading-relaxed font-mono">
        {isVisible ? (
          <SplitReveal text={phrase} stagger={0.03} />
        ) : (
          <span className="opacity-0">{phrase}</span>
        )}
      </h2>
    </div>
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
  const segment = 0.2; // 20% of scroll per phrase reveal

  return (
    <section
      id="propuesta"
      ref={containerRef}
      className="relative md:h-[180vh] bg-[#efefed] w-full"
    >
      {/* MOBILE: Sequential fade-in animation */}
      <div className="flex md:hidden flex-col items-center text-center justify-center gap-10 py-40 px-6 min-h-[70vh]">
        {validPhrases.map((phrase, index) => (
          <MobilePhraseLine key={index} phrase={phrase} index={index} />
        ))}
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
