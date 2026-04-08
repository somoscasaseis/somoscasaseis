"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import { SplitReveal } from "@/components/v2/Text/SplitReveal";

export const AboutV2 = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  
  // High scroll distance to allow for the horizontal reveal of tall images
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 80, damping: 25, mass: 1 });

  // Animation values for the Tech-ish "Full Height Expansion" look
  // 1. Text fades and stays
  const textOpacity = useTransform(smoothScroll, [0, 0.2], [1, 1]);
  const textY = useTransform(smoothScroll, [0, 0.2], [0, 0]);

  // 2. Images Horizontal Slide (they come from the right)
  const galleryX = useTransform(smoothScroll, [0.1, 0.8], ["40%", "-30%"]);
  
  // 3. Image Scaling/Widening (The "Agrandarse" effect)
  // Each card has a specific "peek" point where it grows
  const scale1 = useTransform(smoothScroll, [0.1, 0.3], [1, 1.15]);
  const width1 = useTransform(smoothScroll, [0.1, 0.3], ["250px", "550px"]);
  
  const scale2 = useTransform(smoothScroll, [0.3, 0.5], [1, 1.15]);
  const width2 = useTransform(smoothScroll, [0.3, 0.5], ["250px", "550px"]);

  const scale3 = useTransform(smoothScroll, [0.5, 0.7], [1, 1.15]);
  const width3 = useTransform(smoothScroll, [0.5, 0.7], ["250px", "550px"]);

  return (
    <section 
      ref={sectionRef} 
      className="relative h-[400vh] bg-[#efefed] w-full"
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* 
          Background Card with rounded corners 
          Large radius on top/bottom to match design
        */}
        <div className="absolute inset-4 md:inset-8 rounded-[40px] md:rounded-[80px] overflow-hidden bg-[#4c3a5a] z-0">
          {/* Mesh Gradient Mesh */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d55] via-[#2b6b74]/30 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#e3be9f,transparent_60%)] opacity-40" />
            <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[radial-gradient(circle_at_bottom_right,#4c3a5a,transparent_70%)] opacity-80" />
          </div>
        </div>

        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center h-full max-w-full">
          
          {/* LADO IZQUIERDO: Texto (Casi estático) */}
          <motion.div 
            style={{ opacity: textOpacity, y: textY }}
            className="w-full lg:w-[45%] flex flex-col justify-center p-12 md:p-24 text-white space-y-8 z-20"
          >
             <h2 className="text-3xl md:text-5xl lg:text-5xl font-light tracking-[0.25em] uppercase leading-tight">
              <SplitReveal text="¿QUIENES" stagger={0.05} />
              <br />
              <span className="font-semibold italic">
                <SplitReveal text="SOMOS" stagger={0.06} baseDelay={0.4} />
              </span>
              <SplitReveal text="?" stagger={0.05} baseDelay={0.8} />
            </h2>
            
            <div className="space-y-6 text-lg font-light leading-relaxed text-white/90 max-w-lg">
              <p>
                Somos Xime y Juli, comunicadoras con más de 15 años de experiencia y un camino recorrido de desarrollo personal a través de terapias y herramientas holísticas. Entendemos de mensajes, de personas y de procesos.
              </p>
              <p>
                También conocemos el detrás de escena: la duda, el desorden, la sobrecarga que aparece cuando un proyecto crece sin estructura. Por eso creamos Casa Seis.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="https://wa.me/5491155939599?text=Hola%20Casa%20Seis,%20quiero%20hacerte%20una%20%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#823C5B] hover:bg-[#9d4a6e] text-white px-12 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] transition-all border border-white/20"
              >
                QUIERO EMPEZAR
              </a>
            </div>
          </motion.div>

          {/* LADO DERECHO: Horizontal reveal of FULL HEIGHT strips */}
          <motion.div 
            style={{ x: galleryX }}
            className="flex items-center gap-6 h-full py-8 md:py-16 pr-24 z-10"
          >
            {/* Tira 1 */}
            <motion.div
              style={{ width: width1, scale: scale1 }}
              className="relative h-full min-w-[250px] rounded-[30px] md:rounded-[50px] overflow-hidden border border-white/10 shadow-2xl flex-shrink-0"
            >
              <Image src="/2.jpg" alt="" fill className="object-cover" />
            </motion.div>

            {/* Tira 2 */}
            <motion.div
              style={{ width: width2, scale: scale2 }}
              className="relative h-full min-w-[250px] rounded-[30px] md:rounded-[50px] overflow-hidden border border-white/10 shadow-2xl flex-shrink-0"
            >
              <Image src="/3.jpg" alt="" fill className="object-cover" />
            </motion.div>

            {/* Tira 3 */}
            <motion.div
              style={{ width: width3, scale: scale3 }}
              className="relative h-full min-w-[250px] rounded-[30px] md:rounded-[50px] overflow-hidden border border-white/10 shadow-2xl flex-shrink-0"
            >
              <Image src="/4.jpg" alt="" fill className="object-cover" />
            </motion.div>

            {/* Tira 4 (Extra) */}
            <motion.div
              className="relative h-full w-[250px] rounded-[30px] md:rounded-[50px] overflow-hidden border border-white/10 shadow-2xl opacity-40 flex-shrink-0"
            >
              <Image src="/hero1.jpg" alt="" fill className="object-cover grayscale" />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
