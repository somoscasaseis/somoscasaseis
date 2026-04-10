'use client';

import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';

const phrases = [
  "ORDENAMOS TU MENSAJE",
  "ESTRUCTURAMOS TU PROPUESTA",
  "APORTAMOS CLARIDAD Y DIRECCIÓN"
];

const PhraseItem = ({ phrase, index, total, scrollYProgress }: { phrase: string, index: number, total: number, scrollYProgress: MotionValue<number> }) => {
  const start = index / total;
  const end = (index + 1) / total;
  
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  );
  
  const y = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [100, 0, 0, -100]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute text-center px-4"
    >
      <h3 className="text-4xl md:text-7xl font-bold text-white tracking-tighter leading-tight uppercase">
        {phrase}
      </h3>
    </motion.div>
  );
};

const ValueProposition = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      ref={containerRef} 
      className="relative h-[300vh] bg-blue"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="relative h-[20vh] w-full max-w-6xl mx-auto flex items-center justify-center">
          {phrases.map((phrase, index) => (
            <PhraseItem 
              key={index} 
              phrase={phrase} 
              index={index} 
              total={phrases.length} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </div>

        {/* Decoración sutil de fondo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vh] border border-white/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
};

export default ValueProposition;
