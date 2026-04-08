"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import { SplitReveal } from "@/components/v2/Text/SplitReveal";

export const AboutV2 = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring for that premium inertia feel
  const springConfig = { stiffness: 100, damping: 30, mass: 1 };
  const smoothScroll = useSpring(scrollYProgress, springConfig);

  // Staggered Vertical Parallax for images (The Tech-ish effect)
  // Each column/card moves at a unique speed
  const y1 = useTransform(smoothScroll, [0, 1], [100, -100]);
  const y2 = useTransform(smoothScroll, [0, 1], [-150, 150]);
  const y3 = useTransform(smoothScroll, [0, 1], [80, -220]);
  const y4 = useTransform(smoothScroll, [0, 1], [200, -80]);

  // Entrance animations
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.1, 0.3], [-30, 0]);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[120vh] bg-[#efefed] w-full py-20 px-4 md:px-8 overflow-hidden"
    >
      {/* 
        The Main Container Box from design:
        A large rounded box with the rich mesh-like gradient.
      */}
      <div className="relative mx-auto max-w-7xl min-h-[90vh] rounded-[40px] md:rounded-[80px] overflow-hidden bg-[#4c3a5a]">
        
        {/* Mesh Gradient Background logic */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d55] via-[#2b6b74]/40 to-transparent" />
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-[radial-gradient(circle_at_top_right,rgba(227,190,159,0.45),transparent_70%)]" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_bottom_right,rgba(76,58,90,0.8),transparent_80%)]" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full min-h-[90vh]">
          
          {/* LADO IZQUIERDO: Información Estática/Slow reveal */}
          <motion.div 
            style={{ opacity: textOpacity, x: textX }}
            className="flex flex-col justify-center p-10 md:p-20 text-white space-y-10"
          >
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-light tracking-[0.25em] uppercase leading-tight">
              <SplitReveal text="¿QUIENES" stagger={0.05} />
              <br />
              <span className="font-semibold italic">
                <SplitReveal text="SOMOS" stagger={0.06} baseDelay={0.4} />
              </span>
              <SplitReveal text="?" stagger={0.05} baseDelay={0.8} />
            </h2>
            
            <div className="space-y-8 text-lg font-light leading-relaxed text-white/90 max-w-lg">
              <p>
                Somos Xime y Juli, comunicadoras con más de 15 años de experiencia y un camino recorrido de desarrollo personal a través de terapias y herramientas holísticas. Entendemos de mensajes, de personas y de procesos.
              </p>
              <p>
                También conocemos el detrás de escena: la duda, el desorden, la sobrecarga que aparece cuando un proyecto crece sin estructura. Por eso creamos Casa Seis.
              </p>
              <p>
                Para ordenar lo que hoy te pesa y darle dirección a lo que quiere expandirse.
              </p>
            </div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 1, duration: 0.8 }}
            >
              <a 
                href="https://wa.me/5491155939599?text=Hola%20Casa%20Seis,%20quiero%20hacerte%20una%20%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#823C5B] hover:bg-[#9d4a6e] text-white px-12 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] transition-all shadow-xl active:scale-95 border border-white/10"
              >
                QUIERO EMPEZAR
              </a>
            </motion.div>
          </motion.div>

          {/* LADO DERECHO: Staggered Image Parallax (The "Incredible Movement") */}
          <div className="relative h-[600px] lg:h-auto overflow-hidden flex items-center justify-center lg:justify-end pr-0 lg:pr-10 lg:pl-10">
            
            <div className="grid grid-cols-3 gap-3 md:gap-5 w-full h-[120%] -rotate-6 scale-110">
              
              {/* Columna 1 */}
              <motion.div style={{ y: y1 }} className="space-y-4 md:space-y-6">
                <div className="relative aspect-[2/3] w-full rounded-[30px] md:rounded-[50px] overflow-hidden border border-white/10 shadow-2xl">
                  <Image src="/4.jpg" alt="" fill className="object-cover" />
                </div>
                <div className="relative aspect-[3/4] w-full rounded-[30px] md:rounded-[50px] overflow-hidden border border-white/10 shadow-2xl opacity-40">
                  <Image src="/hero1.jpg" alt="" fill className="object-cover grayscale" />
                </div>
              </motion.div>

              {/* Columna 2 - Main Image from design */}
              <motion.div style={{ y: y2 }} className="space-y-4 md:space-y-6 pt-20">
                <div className="relative aspect-[2/3.5] w-full rounded-[30px] md:rounded-[55px] overflow-hidden border-2 border-white/20 shadow-[-20px_20px_50px_rgba(0,0,0,0.5)] z-10">
                  <Image src="/2.jpg" alt="Focus" fill className="object-cover" />
                </div>
                <div className="relative aspect-[2/3] w-full rounded-[30px] md:rounded-[50px] overflow-hidden border border-white/10 shadow-2xl">
                  <Image src="/3.jpg" alt="" fill className="object-cover" />
                </div>
              </motion.div>

              {/* Columna 3 */}
              <motion.div style={{ y: y3 }} className="space-y-4 md:space-y-6 -pt-10">
                <div className="relative aspect-[2/3] w-full rounded-[30px] md:rounded-[50px] overflow-hidden border border-white/10 shadow-2xl">
                  <Image src="/icon.svg" alt="" fill className="object-contain p-8 bg-white/5 backdrop-blur-sm" />
                </div>
                <div className="relative aspect-[3/4] w-full rounded-[30px] md:rounded-[50px] overflow-hidden border border-white/10 shadow-2xl">
                  <Image src="/1.jpg" alt="" fill className="object-cover" />
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
