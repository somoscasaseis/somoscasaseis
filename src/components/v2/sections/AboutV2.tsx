"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import { SplitReveal } from "@/components/v2/Text/SplitReveal";

export const AboutV2 = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  
  // Extra high scroll distance for a precise multi-stage choreography
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, { stiffness: 80, damping: 25, mass: 1 });

  // REVISED CHOREOGRAPHY LOGIC:
  // 1. Initial State: 3 images side-by-side, occupying the full screen (100% width).
  // 2. Scrolling: Images "Accordion" (shrink) and move to the RIGHT.
  // 3. Reveal: The Text Column (with its mesh background) arrives on the LEFT.

  // Gallery container movement (Moves Right to clear the Left)
  const galleryX = useTransform(smoothScroll, [0, 0.6], ["0%", "55%"]);
  
  // Individual Accordion widths (Squish effect)
  const accordionWidth = useTransform(smoothScroll, [0, 0.6], ["33.34vw", "15vw"]);
  
  // Text reveal: Moves into view from the LEFT
  const textContainerX = useTransform(smoothScroll, [0, 0.65], ["-100%", "0%"]);
  const textOpacity = useTransform(smoothScroll, [0.2, 0.6], [0, 1]);

  return (
    <section 
      id="quienes-somos"
      ref={sectionRef} 
      className="relative h-[450vh] bg-[#efefed] w-full"
    >
      <div className="sticky top-0 h-screen w-full flex overflow-hidden">
        
        {/* LADO IZQUIERDO: La Columna de Texto (Se revela desde la izquierda) */}
        <motion.div 
          style={{ x: textContainerX }}
          className="absolute inset-y-0 left-0 w-[55%] z-20 flex items-center justify-center"
        >
          {/* Fondo completo sin márgenes ni bordes redondeados */}
          <div className="absolute inset-0 overflow-hidden bg-[#4c3a5a] -z-10">
            {/* Mesh Gradient Mesh */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a4d55] via-[#2b6b74]/30 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#e3be9f,transparent_60%)] opacity-30" />
            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,#4c3a5a,transparent_80%)] opacity-90" />
          </div>

          <motion.div 
            style={{ opacity: textOpacity }}
            className="relative z-10 text-white space-y-10 max-w-xl px-10"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.25em] uppercase leading-tight">
              <SplitReveal text="¿QUIENES" stagger={0.05} />
              <br />
              <span className="font-semibold italic">
                <SplitReveal text="SOMOS" stagger={0.06} baseDelay={0.4} />
              </span>
              <SplitReveal text="?" stagger={0.05} baseDelay={0.8} />
            </h2>
            
            <div className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-white/90">
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

            <div className="pt-4">
              <a 
                href="https://wa.me/5491155939599?text=Hola%20Casa%20Seis,%20quiero%20hacerte%20una%20%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#823C5B] hover:bg-[#9d4a6e] text-white px-12 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] transition-all border border-white/20 shadow-xl font-mono"
              >
                QUIERO EMPEZAR
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* LADO DERECHO: La Galería Acordeón (Empieza Full Width y se desplaza a la derecha) */}
        <motion.div 
          style={{ x: galleryX }}
          className="relative flex h-full w-full z-10 flex-shrink-0"
        >
          {/* Imagen 1 */}
          <motion.div 
            style={{ width: accordionWidth }}
            className="relative h-full border-l border-white/5 overflow-hidden"
          >
            <Image src="/4.jpg" alt="" fill className="object-cover" priority />
          </motion.div>

          {/* Imagen 2 */}
          <motion.div 
             style={{ width: accordionWidth }}
             className="relative h-full border-l border-white/5 overflow-hidden"
          >
            <Image src="/3.jpg" alt="" fill className="object-cover" priority />
          </motion.div>

          {/* Imagen 3 */}
          <motion.div 
             style={{ width: accordionWidth }}
             className="relative h-full overflow-hidden"
          >
            <Image src="/2.jpg" alt="" fill className="object-cover" priority />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
