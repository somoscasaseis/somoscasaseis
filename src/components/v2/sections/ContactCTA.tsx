"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SplitReveal } from "@/components/v2/Text/SplitReveal";

export const ContactCTA = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  return (
    <section
      id="contacto"
      ref={containerRef}
      className="relative bg-[#efefed] px-6 py-28 md:py-40 overflow-hidden"
    >
      {/* Esplandor de fondo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#e8c8b0]/30 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-4xl text-center relative z-10">
        
        {/* Línea dibujada a mano (separador superior) */}
        <div className="mb-20 opacity-30">
          <motion.svg
            width="100%"
            height="20"
            viewBox="0 0 800 20"
            fill="none"
            preserveAspectRatio="none"
            className="w-full"
          >
            <motion.path
              d="M 10 10 C 150 12, 300 8, 400 10 S 650 12, 790 10"
              stroke="#14627E"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </motion.svg>
        </div>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-[#14627E] uppercase tracking-[0.25em] leading-tight mb-16">
          <SplitReveal text="SI SENTÍS QUE ES POR ACÁ," stagger={0.04} />
          <br />
          <SplitReveal text="ESTAMOS PARA ACOMPAÑARTE" stagger={0.04} baseDelay={1.2} />
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 2.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="https://wa.me/5491155939599?text=Hola%20Casa%20Seis,%20quiero%20hacerte%20una%20%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#14627E]/40 hover:border-[#14627E] hover:bg-[#14627E]/5 px-16 py-4 rounded-full text-xs font-semibold text-[#14627E] uppercase tracking-[0.3em] transition-all"
          >
            HABLEMOS
          </a>
        </motion.div>
      </div>

      {/* Otra línea dibujada a mano (inferior, opcional para cierre) */}
      <div className="mt-28 opacity-20">
          <motion.svg
            width="100%"
            height="15"
            viewBox="0 0 1000 15"
            fill="none"
            preserveAspectRatio="none"
            className="w-full"
          >
            <motion.path
              d="M 0 7 Q 250 12 500 7 T 1000 7"
              stroke="#14627E"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ delay: 2.5, duration: 2 }}
            />
          </motion.svg>
      </div>
    </section>
  );
};
