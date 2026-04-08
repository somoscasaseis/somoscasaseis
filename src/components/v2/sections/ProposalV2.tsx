"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const phrases = [
  {
    title: "ORDENAMOS",
    subtitle: "TU MENSAJE",
    description: "Damos coherencia y sentido a tu comunicación.",
  },
  {
    title: "ESTRUCTURAMOS",
    subtitle: "TU PROPUESTA",
    description: "Damos forma a tus ideas para que impacten.",
  },
  {
    title: "APORTAMOS CLARIDAD",
    subtitle: "Y DIRECCIÓN",
    description: "Ayudamos a que tu proyecto sepa hacia dónde ir.",
  },
];

const PhraseSection = ({ phrase, index }: { phrase: typeof phrases[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: 0.6,
    margin: "-10% 0px -10% 0px"
  });

  return (
    <div
      ref={ref}
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden snap-start"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
           animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.95, filter: "blur(10px)" }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="text-center"
        >
          <span className="text-xs md:text-sm font-bold tracking-[0.4em] text-black/40 mb-6 block uppercase font-mono">
            Paso {index + 1}
          </span>
          <h2 className="text-4xl md:text-7xl lg:text-9xl font-light text-black leading-none mb-4 tracking-tighter uppercase whitespace-pre-line font-mono">
            {phrase.title}
            <br />
            <span className="font-semibold text-black">{phrase.subtitle}</span>
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-black/60 max-w-xl mx-auto mt-8 font-light"
          >
            {phrase.description}
          </motion.p>
        </motion.div>
      </div>

      {/* Elemento decorativo de fondo que se mueve sutilmente */}
      <motion.div
        animate={isInView ? { opacity: 0.05, scale: 1.1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 2 }}
        className="absolute -z-10 pointer-events-none"
      >
        <div className="text-[25vw] font-bold text-[#C49A6C] opacity-10 select-none">
          0{index + 1}
        </div>
      </motion.div>
    </div>
  );
};

export const ProposalV2 = () => {
  return (
    <section id="propuesta" className="bg-[#efefed] w-full">
      {phrases.map((phrase, index) => (
        <PhraseSection key={index} phrase={phrase} index={index} />
      ))}
      
      {/* Divisor final suave para la siguiente sección */}
      <div className="h-24 bg-gradient-to-b from-[#efefed] to-white opacity-20" />
    </section>
  );
};
