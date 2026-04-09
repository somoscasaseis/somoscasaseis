"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SplitReveal } from "@/components/v2/Text/SplitReveal";

export const AboutV2 = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Configuramos el scroll con un muelle (spring) para que el movimiento sea suave
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // --- COREOGRAFÍA DE ANIMACIÓN ---

  // 1. El texto entra sutilmente y gana opacidad
  const textContainerX = useTransform(smoothScroll, [0, 0.4], ["-10%", "0%"]);
  const textOpacity = useTransform(smoothScroll, [0.1, 0.4], [0, 1]);

  // 2. La galería se desplaza a la derecha para dejar el 52% del ancho al texto
  const galleryContainerX = useTransform(smoothScroll, [0, 0.5], ["0%", "52%"]);

  // 3. Efecto Acordeón: Las imágenes se comprimen de 33% a 16% cada una
  const imgWidth = useTransform(smoothScroll, [0, 0.5], ["33.33%", "16%"]);

  return (
    <section
      id="quienes-somos"
      ref={sectionRef}
      className="relative h-[400vh] bg-[#1a1a1a] w-full"
    >
      <div className="sticky top-0 h-screen w-full flex overflow-hidden p-4 md:p-6">

        {/* COLUMNA DE TEXTO CON GRADIENTE MÍSTICO */}
        <motion.div
          style={{
            x: textContainerX,
            opacity: textOpacity,
            background: "linear-gradient(135deg, #1E5F5E 0%, #3D3A4B 40%, #823C5B 80%, #5B3A5A 100%)"
          }}
          className="relative w-[52%] h-full flex flex-col justify-center px-12 md:px-24 z-20 overflow-hidden rounded-tl-[60px] rounded-bl-[60px] rounded-tr-[10px] rounded-br-[10px] shadow-2xl"
        >
          {/* Overlay de luz superior (efecto destello naranja/ocre) */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_10%,_rgba(215,153,110,0.25),transparent_60%)] pointer-events-none" />

          <header className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] text-white uppercase mb-10">
              <SplitReveal text="¿QUIENES SOMOS?" />
            </h2>
          </header>

          <article className="relative z-10 space-y-8 text-sm md:text-[16px] font-light leading-relaxed text-white/90 max-w-lg">
            <p>
              Somos Xime y Juli, comunicadoras con más de 15 años de experiencia y un camino recorrido de desarrollo personal a través de terapias y herramientas holísticas. Entendemos de mensajes, de personas y de procesos.
            </p>
            <p>
              También conocemos el detrás de escena: la duda, el desorden, la sobrecarga que aparece cuando un proyecto crece sin estructura. Por eso creamos Casa Seis.
            </p>
            <p className="pt-2 font-medium italic">
              Para ordenar lo que hoy te pesa y darle dirección a lo que quiere expandirse.
            </p>
          </article>

          <div className="relative z-10 pt-12">
            <a
              href="https://wa.me/5491155939599?text=Hola%20Casa%20Seis,%20quiero%20hacerte%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#823C5B] text-white px-12 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#9d4a6e] hover:scale-105 transition-all duration-300 shadow-xl shadow-black/20"
            >
              QUIERO EMPEZAR
            </a>
          </div>
        </motion.div>

        {/* GALERÍA ACORDEÓN (IMÁGENES) */}
        <motion.div
          style={{ x: galleryContainerX }}
          className="absolute inset-y-0 right-0 flex w-full h-full z-10 py-4 pr-4 md:py-6 md:pr-6"
        >
          {/* Imagen 1 - La que queda pegada al texto */}
          <motion.div
            style={{ width: imgWidth }}
            className="relative h-full overflow-hidden rounded-[60px] mx-1 md:mx-2 shadow-2xl border-l border-white/10"
          >
            <Image
              src="/4.jpg"
              alt="Casa Seis - Proceso 1"
              fill
              className="object-cover brightness-90"
              priority
            />
          </motion.div>

          {/* Imagen 2 - Imagen central */}
          <motion.div
            style={{ width: imgWidth }}
            className="relative h-full overflow-hidden rounded-[60px] mx-1 md:mx-2 shadow-2xl border-l border-white/10 opacity-90"
          >
            <Image
              src="/3.jpg"
              alt="Casa Seis - Proceso 2"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Imagen 3 - Imagen final derecha */}
          <motion.div
            style={{ width: imgWidth }}
            className="relative h-full overflow-hidden rounded-[60px] ml-1 md:ml-2 shadow-2xl border-l border-white/10 opacity-80"
          >
            <Image
              src="/2.jpg"
              alt="Casa Seis - Proceso 3"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};