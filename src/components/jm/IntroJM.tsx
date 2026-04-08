"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { SplitReveal } from "@/components/v2/Text/SplitReveal";

export const IntroJM = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const springScroll = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // Floating text blocks that move at different speeds (Parallax Typography)
  const y1 = useTransform(springScroll, [0, 1], [100, -100]);
  const y2 = useTransform(springScroll, [0, 1], [0, -250]);
  const y3 = useTransform(springScroll, [0, 1], [200, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[140vh] bg-white text-foreground py-40 px-6 overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="max-w-5xl mx-auto relative z-10 w-full">
        
        {/* Large Hinter Background Text */}
        <motion.div 
            style={{ y: y1 }}
            className="absolute -top-20 -left-40 text-[20vw] font-bold text-foreground/[0.03] select-none pointer-events-none whitespace-nowrap"
        >
            PROPÓSITO — ESTRATEGIA
        </motion.div>

        <div className="flex flex-col gap-32">
            
            <motion.div style={{ y: y2 }} className="max-w-2xl">
                <p className="font-mono text-[10px] tracking-[0.5em] uppercase mb-8 text-[#C49A6C]">La Mirada</p>
                <h3 className="text-4xl md:text-6xl font-light leading-[1.1] tracking-tight">
                    <SplitReveal text="REINVENTAMOS LA FORMA DE" stagger={0.03} />
                    <br />
                    <span className="font-semibold italic">
                        <SplitReveal text="COMUNICAR" stagger={0.05} baseDelay={0.5} />
                    </span>
                </h3>
            </motion.div>

            <motion.div style={{ y: y3 }} className="max-w-2xl ml-auto text-right">
                <p className="text-xl md:text-3xl font-light leading-relaxed text-foreground/70">
                    Un acompañamiento que une lo <span className="text-foreground font-medium">tangible de la estrategia</span> con lo <span className="text-foreground font-medium">invisible de la intuición</span>.
                </p>
                <div className="mt-12 h-[1px] w-40 bg-black/10 inline-block" />
            </motion.div>

        </div>

        {/* Floating Accent Shapes */}
        <motion.div 
            animate={{ 
                rotate: [0, 360],
                x: [0, 20, 0],
                y: [0, -20, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-0 w-64 h-64 border border-foreground/[0.05] rounded-full -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </section>
  );
};
