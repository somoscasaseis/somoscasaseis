'use client';

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';

const phrases = [
  "ORDENAMOS TU MENSAJE",
  "ESTRUCTURAMOS TU PROPUESTA",
  "APORTAMOS CLARIDAD Y DIRECCIÓN"
];

const PhraseLine = ({ phrase, progress, start, end }: { phrase: string, progress: MotionValue<number>, start: number, end: number }) => {
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [30, 0]);

  return (
    <motion.p
      style={{ opacity, y }}
      className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-tight uppercase"
    >
      {phrase}
    </motion.p>
  );
};

const ValueProposition = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const total = phrases.length;
  const segment = 0.8 / total;

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] bg-[#1d2a34]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4">
        <div className="flex flex-col items-center text-center gap-4 md:gap-6">
          {phrases.map((phrase, index) => {
            const start = 0.1 + index * segment;
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

        {/* Decoración sutil de fondo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] border border-white/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
};

export default ValueProposition;
