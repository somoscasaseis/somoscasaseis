"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { SplitReveal } from "@/components/v2/Text/SplitReveal";

export const HeroJM = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [stars, setStars] = useState<{ x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    // Generate static stars for the void
    const newStars = Array.from({ length: 60 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
    }));
    setStars(newStars);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const logoScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.6]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const bgOpacity = useTransform(scrollYProgress, [0.4, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[180vh] bg-[#0a0a0a] overflow-hidden flex flex-col items-center"
    >
      {/* Cosmic Background */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Deep Void Stars */}
        <div className="absolute inset-0 z-0">
          {stars.map((star, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ 
                duration: Math.random() * 3 + 2, 
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              className="absolute bg-white rounded-full"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: star.size,
                height: star.size,
              }}
            />
          ))}
        </div>

        {/* Liquid Nebula Glows */}
        <motion.div 
            style={{ opacity: bgOpacity }}
            className="absolute inset-0"
        >
          <div className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] bg-[#1a4d55]/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
          <div className="absolute bottom-[20%] right-[30%] w-[40vw] h-[40vw] bg-[#823C5B]/15 rounded-full blur-[120px] mix-blend-screen" />
        </motion.div>

        {/* The Hero Logo: Floating in the void */}
        <motion.div
           style={{ scale: logoScale, opacity: logoOpacity }}
           className="relative z-10 flex flex-col items-center text-center"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mb-12 relative"
          >
            <div className="absolute -inset-8 bg-white/5 rounded-full blur-2xl" />
            <Image 
                src="/logo-footer.svg" 
                alt="Casa Seis" 
                width={200} 
                height={200} 
                className="relative brightness-[2] drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            />
          </motion.div>

          <motion.div style={{ y: textY }} className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin tracking-[0.4em] uppercase text-white/90">
                <SplitReveal text="CASA SEIS" stagger={0.08} />
            </h1>
            <p className="text-[#C49A6C] font-mono text-xs tracking-[0.8em] uppercase opacity-60">
                Estrategia & Magia Astral
            </p>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group"
        >
            <span className="text-[9px] uppercase tracking-[0.5em] text-white/40 group-hover:text-white/80 transition-colors">Descubrir</span>
            <div className="w-[1px] h-20 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
                <motion.div 
                    animate={{ y: [0, 80] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 left-0 w-full h-1/2 bg-white" 
                />
            </div>
        </motion.div>
      </div>

      {/* Transitioning Floor */}
      <div className="h-[80vh] w-full" />
    </section>
  );
};
