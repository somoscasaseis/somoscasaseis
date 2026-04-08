"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SplitReveal } from "@/components/v2/Text/SplitReveal";

export const AstrologyJM = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center py-40 overflow-hidden"
    >
      {/* Background Starmap / Mandala Rotating */}
      <motion.div 
        style={{ rotate, scale, opacity: 0.15 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <svg viewBox="0 0 1000 1000" className="w-[120vw] h-[120vw] text-white stroke-current fill-none">
          <circle cx="500" cy="500" r="450" strokeWidth="0.5" opacity="0.3" />
          <circle cx="500" cy="500" r="300" strokeWidth="0.5" opacity="0.3" />
          <circle cx="500" cy="500" r="150" strokeWidth="0.5" opacity="0.3" />
          
          {[...Array(12)].map((_, i) => (
            <line 
                key={i}
                x1="500" y1="500" 
                x2={500 + 500 * Math.cos((i * 30 * Math.PI) / 180)} 
                y2={500 + 500 * Math.sin((i * 30 * Math.PI) / 180)} 
                strokeWidth="0.5" 
                opacity="0.2" 
            />
          ))}

          {/* Random Constellation Points */}
          {[...Array(40)].map((_, i) => (
             <circle 
                key={`p-${i}`}
                cx={200 + Math.random() * 600}
                cy={200 + Math.random() * 600}
                r="1.5"
                fill="white"
                className="animate-pulse"
             />
          ))}
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-4xl text-center px-6">
        <h2 className="text-4xl md:text-7xl font-thin tracking-[0.3em] uppercase mb-16">
            <SplitReveal text="EL CIELO EN" stagger={0.06} />
            <br />
            <span className="font-semibold text-[#efefed]">
                <SplitReveal text="CASA SEIS" stagger={0.06} baseDelay={0.5} />
            </span>
        </h2>

        <p className="text-xl md:text-3xl font-light leading-relaxed text-white/60 mb-20 max-w-2xl mx-auto">
            No somos solo comunicación. Somos la <span className="text-white">geometría sagrada</span> de tus hábitos diarios manifestándose en el mundo.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
            <div className="px-8 py-3 border border-white/10 rounded-full font-mono text-[9px] uppercase tracking-[0.4em] bg-white/5 backdrop-blur-md">
                Servicio
            </div>
            <div className="px-8 py-3 border border-white/10 rounded-full font-mono text-[9px] uppercase tracking-[0.4em] bg-white/5 backdrop-blur-md">
                Orden
            </div>
            <div className="px-8 py-3 border border-white/10 rounded-full font-mono text-[9px] uppercase tracking-[0.4em] bg-white/5 backdrop-blur-md">
                Propósito
            </div>
        </div>
      </div>
    </section>
  );
};
