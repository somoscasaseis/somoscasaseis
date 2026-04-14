"use client";

import { motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { SplitReveal } from "@/components/v2/Text/SplitReveal";

const STAGGER = 0.012;
const CHAR_DURATION = 0.28;
const GAP_BETWEEN_PHRASES = 0.12;

const getPhraseRevealDuration = (phrase: string) => {
  const letters = Array.from(phrase).length;
  if (letters <= 1) return CHAR_DURATION;
  return (letters - 1) * STAGGER + CHAR_DURATION;
};

const SequentialPhraseLine = ({
  phrase,
  startDelaySec,
  enabled,
  parallaxY,
}: {
  phrase: string;
  startDelaySec: number;
  enabled: boolean;
  parallaxY?: MotionValue<number>;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, startDelaySec * 1000);

    return () => clearTimeout(timer);
  }, [enabled, startDelaySec]);

  return (
    <motion.h2
      className="text-2xl md:text-5xl font-normal text-[#1d2a34] uppercase tracking-tight font-mono leading-tight"
      initial={{ opacity: 0, y: 40 }}
      animate={
        isVisible
          ? isAnimating
            ? { opacity: 1, y: 0 }
            : { opacity: 1, y: 0 }
          : { opacity: 0, y: 40 }
      }
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      style={parallaxY ? { y: parallaxY } : undefined}
      onAnimationComplete={() => setIsAnimating(false)}
    >
      {isVisible ? (
        <SplitReveal text={phrase} stagger={STAGGER} />
      ) : (
        <span className="opacity-0">{phrase}</span>
      )}
    </motion.h2>
  );
};

export const ProposalV2 = ({
  phrases = [
    "ORDENAMOS TU MENSAJE",
    "ESTRUCTURAMOS TU PROPUESTA",
    "APORTANDO CLARIDAD Y DIRECCIÓN",
  ],
}: {
  phrases?: string[];
}) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const parallaxY3 = useTransform(scrollYProgress, [0, 1], [10, -10]);

  const validPhrases =
    phrases.length > 0
      ? phrases
      : [
          "ORDENAMOS TU MENSAJE",
          "ESTRUCTURAMOS TU PROPUESTA",
          "APORTAMOS CLARIDAD Y DIRECCIÓN",
        ];

  const totalRevealDurationSec =
    validPhrases.reduce(
      (acc, current) => acc + getPhraseRevealDuration(current) + GAP_BETWEEN_PHRASES,
      0,
    ) - GAP_BETWEEN_PHRASES;

  useEffect(() => {
    if (!isInView) return;
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return;

    const triggerStopAtEndTimer = window.setTimeout(() => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        const centeredTop = absoluteTop - (window.innerHeight - rect.height) / 2;
        window.scrollTo({ top: Math.max(0, centeredTop), behavior: "auto" });
      }
      window.dispatchEvent(new Event("lenis:stop"));
    }, totalRevealDurationSec * 1000);

    const releaseAfterPauseTimer = window.setTimeout(() => {
      window.dispatchEvent(new Event("lenis:start"));
    }, totalRevealDurationSec * 1000 + 900);

    return () => {
      window.clearTimeout(triggerStopAtEndTimer);
      window.clearTimeout(releaseAfterPauseTimer);
      window.dispatchEvent(new Event("lenis:start"));
    };
  }, [isInView, totalRevealDurationSec]);

  const parallaxValues = [parallaxY1, parallaxY2, parallaxY3];

  return (
    <section
      id="propuesta"
      ref={sectionRef}
      className="relative bg-[#efefed] w-full py-12 pb-16 md:flex md:min-h-screen md:items-center md:py-0 md:pb-0"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-3 px-6 text-center md:min-h-screen md:gap-10">
        {validPhrases.map((phrase, index) => {
          const startDelaySec = validPhrases
            .slice(0, index)
            .reduce(
              (acc, current) =>
                acc + getPhraseRevealDuration(current) + GAP_BETWEEN_PHRASES,
              0,
            );

          return (
            <SequentialPhraseLine
              key={index}
              phrase={phrase}
              startDelaySec={startDelaySec}
              enabled={isInView}
              parallaxY={parallaxValues[index]}
            />
          );
        })}
      </div>
    </section>
  );
};
