"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import { SplitReveal } from "@/components/v2/Text/SplitReveal";

export const AboutV2 = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Animaciones de las fotos
  const photosY = useTransform(scrollYProgress, [0, 0.25], ["100%", "0%"]);
  const photosX = useTransform(scrollYProgress, [0.35, 0.65], ["0%", "28%"]);
  const photosScale = useTransform(scrollYProgress, [0.35, 0.65], [1, 0.9]);
  
  // Animaciones del contenido de texto
  const textOpacity = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.45, 0.65], [-40, 0]);

  // Animación del fondo (gradiente que se revela)
  const bgOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-[#efefed] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Fondo con Degrade que aparece */}
        <motion.div 
          style={{ opacity: bgOpacity }}
          className="absolute inset-4 md:inset-8 rounded-[40px] md:rounded-[60px] bg-gradient-to-br from-[#1a4d55] via-[#2b6b74] to-[#4c3a5a] z-0"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          
          {/* LADO IZQUIERDO: Información */}
          <motion.div 
            style={{ opacity: textOpacity, x: textX }}
            className="w-full md:w-1/2 text-white space-y-8"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.25em] uppercase">
              <SplitReveal text="¿QUIENES " stagger={0.05} />
              <span className="font-semibold italic">
                <SplitReveal text="SOMOS" stagger={0.05} baseDelay={0.3} />
              </span>
              <SplitReveal text="?" stagger={0.05} baseDelay={0.6} />
            </h2>
            
            <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-white/90">
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
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="pt-4"
            >
              <a 
                href="#contacto"
                className="inline-block bg-[#823C5B] hover:bg-[#6b314b] text-white px-10 py-4 rounded-2xl text-xs font-bold uppercase tracking-[0.3em] transition-all shadow-lg active:scale-95"
              >
                QUIERO EMPEZAR
              </a>
            </motion.div>
          </motion.div>

          {/* LADO DERECHO: Stack de Fotos */}
          <motion.div 
            style={{ y: photosY, x: photosX, scale: photosScale }}
            className="relative w-[80%] md:w-[45%] aspect-[3/4] md:aspect-[4/5]"
          >
            {/* Foto 4 (la de más atrás) */}
            <motion.div 
              style={{ x: useTransform(scrollYProgress, [0.4, 0.7], [0, 60]), rotate: 6 }}
              className="absolute inset-0 rounded-[40px] overflow-hidden border-4 border-white/20 shadow-2xl"
            >
              <Image src="/4.jpg" alt="Xime y Juli" fill className="object-cover" />
            </motion.div>
            
            {/* Foto 3 (medio) */}
            <motion.div 
              style={{ x: useTransform(scrollYProgress, [0.4, 0.7], [0, 30]), rotate: -3 }}
              className="absolute inset-0 rounded-[40px] overflow-hidden border-4 border-white/20 shadow-2xl"
            >
              <Image src="/3.jpg" alt="CASA SEIS" fill className="object-cover" />
            </motion.div>

            {/* Foto 2 (frente) */}
            <motion.div 
              className="absolute inset-0 rounded-[40px] overflow-hidden border-4 border-white shadow-2xl"
            >
              <Image src="/2.jpg" alt="Xime y Juli Home" fill className="object-cover" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
