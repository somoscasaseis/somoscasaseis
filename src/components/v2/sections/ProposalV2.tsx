"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

const phrases = [
  "ORDENAMOS TU MENSAJE",
  "ESTRUCTURAMOS TU PROPUESTA",
  "APORTAMOS CLARIDAD Y DIRECCIÓN",
];

const DesktopPhraseLine = ({ phrase, progress, start, end }: { phrase: string; progress: MotionValue<number>; start: number; end: number }) => {
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [40, 0]);

  return (
    <motion.p
      style={{ opacity, y }}
      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-[#1d2a34] uppercase tracking-wide leading-tight"
    >
      {phrase}
    </motion.p>
  );
};

export const ProposalV2 = () => {
  const containerRef = useRef(null);
  
  // Only target desktop height for the scroll trigger
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
      className="relative md:h-[300vh] bg-[#efefed] w-full"
    >
      {/* MOBILE: Standard scroll fade sequence, bypassing the sticky height */}
      <div className="flex md:hidden flex-col items-center text-center justify-center gap-6 py-40 px-6 min-h-[70vh]">
        {phrases.map((phrase, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ delay: index * 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl font-light text-[#1d2a34] uppercase tracking-wide leading-tight"
          >
            {phrase}
          </motion.p>
        ))}
      </div>

      {/* DESKTOP: Sticky scroll-triggered choreography */}
      <div className="hidden md:flex sticky top-0 h-screen w-full flex-col items-center justify-center overflow-hidden px-6">
        <div className="flex flex-col items-center text-center gap-4 md:gap-8">
          {phrases.map((phrase, index) => {
            const start = 0.15 + index * segment;
            const end = start + segment;
            return (
              <DesktopPhraseLine
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
