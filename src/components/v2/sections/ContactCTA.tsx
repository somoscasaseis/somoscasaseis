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
      className="relative bg-[#efefed] px-6 pt-20 pb-12 overflow-hidden z-20"
    >
      <div className="mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal text-[#1d2a34] uppercase tracking-normal leading-relaxed mb-12 px-4 font-mono">
          <SplitReveal 
            text="SI SENTÍS QUE ES POR ACÁ," 
            stagger={0.03} 
          />
          <br />
          <SplitReveal 
            text="ESTAMOS PARA ACOMPAÑARTE" 
            stagger={0.03} 
            baseDelay={0.8}
          />
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <a
            href="https://wa.me/5491155939599?text=Hola%20Casa%20Seis,%20quiero%20hacerte%20una%20%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-foreground/40 hover:border-foreground hover:bg-black/5 px-16 py-3 rounded-full text-[10px] font-medium text-foreground uppercase tracking-[0.4em] transition-all"
          >
            HABLEMOS
          </a>
        </motion.div>
      </div>
    </section>
  );
};
