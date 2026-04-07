"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const phrases = [
  "ESTRUCTURAMOS TU PROPUESTA",
  "ORDENAMOS TU MENSAJE",
  "APORTAMOS CLARIDAD Y DIRECCIÓN",
];

const Phrase = ({
  index,
  phrase,
  scrollYProgress,
  total,
}: {
  index: number;
  phrase: string;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  total: number;
}) => {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.08, end - 0.08, end],
    [0, 1, 1, 0],
  );
  const y = useTransform(
    scrollYProgress,
    [start, start + 0.08, end - 0.08, end],
    [70, 0, 0, -70],
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-x-0 px-6 text-center"
    >
      <h2 className="text-3xl md:text-7xl font-light uppercase tracking-[0.18em] text-black">
        {phrase}
      </h2>
    </motion.div>
  );
};

export const ProposalV2 = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="propuesta"
      ref={ref}
      className="relative h-[280vh] bg-bg-base"
    >
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-6xl">
          {phrases.map((phrase, index) => (
            <Phrase
              key={phrase}
              index={index}
              phrase={phrase}
              total={phrases.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

