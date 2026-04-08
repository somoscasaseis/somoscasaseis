"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const targetItems = [
  "autoconocimiento y desarrollo personal",
  "salud integral y bienestar",
  "cuerpo y movimiento",
  "terapias complementarias",
];

import { SplitReveal } from "@/components/v2/Text/SplitReveal";

export const WhoIsItForV2 = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.8,
        duration: 1.2,
        ease: [0.65, 0, 0.35, 1] as const,
      },
    },
  };

  const bulletVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 1.2 + i * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      id="para-quien"
      ref={containerRef}
      className="bg-[#efefed] px-6 py-24 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-4xl">
        {/* Título con línea que se dibuja */}
        <div className="relative inline-block mb-12">
          <h2 className="text-2xl md:text-4xl font-light text-black uppercase tracking-[0.18em]">
            <SplitReveal text="¿PARA " stagger={0.05} />
            <span className="font-semibold px-2">
              <SplitReveal text="QUIÉN" stagger={0.05} baseDelay={0.3} />
            </span>
            <SplitReveal text=" ES CASA SEIS?" stagger={0.05} baseDelay={0.6} />
          </h2>

          <motion.svg
            width="100%"
            height="12"
            viewBox="0 0 450 12"
            fill="none"
            className="absolute -bottom-4 left-0 w-full"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 5 6 Q 225 3 445 8"
              stroke="#ABA081"
              strokeWidth="2.5"
              strokeLinecap="round"
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
          </motion.svg>
        </div>

        {/* Intro con fade in */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-xl md:text-2xl text-gray-800 font-light mb-10 leading-relaxed max-w-2xl"
        >
          Trabajamos especialmente con proyectos vinculados a:
        </motion.p>

        {/* Lista de bullets que aparecen uno por uno */}
        <div className="space-y-6">
          {targetItems.map((item, i) => (
            <motion.div
              key={item}
              custom={i}
              variants={bulletVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex items-start gap-4"
            >
              <span className="text-2xl text-black font-light mt-[-2px]">
                —
              </span>
              <p className="text-xl md:text-2xl text-black/90 font-light tracking-wide leading-tight first-letter:uppercase">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
