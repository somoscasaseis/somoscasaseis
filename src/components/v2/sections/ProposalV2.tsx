"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

const phrases = [
  "ORDENAMOS TU MENSAJE",
  "ESTRUCTURAMOS TU PROPUESTA",
  "APORTAMOS CLARIDAD Y DIRECCIÓN",
];

const PhraseLine = ({ phrase, progress, start, end }: { phrase: string; progress: MotionValue<number>; start: number; end: number }) => {
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [40, 0]);

  return (
    <motion.p
      style={{ opacity, y }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#1d2a34] uppercase tracking-wide leading-tight"
    >
      {phrase}
    </motion.p>
  );
};

export const ProposalV2 = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const total = phrases.length;
  const segment = 0.75 / total;

  return (
    <section
      id="propuesta"
      ref={containerRef}
      className="relative h-[300vh] bg-[#efefed]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
        <div className="flex flex-col items-center text-center gap-6 md:gap-8">
          {phrases.map((phrase, index) => {
            const start = 0.15 + index * segment;
            const end = start + segment;
            return (
              <PhraseLine
                key={index}
                phrase={phrase}
                progress={scrollYProgress}
                start={start}
                end={end}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
