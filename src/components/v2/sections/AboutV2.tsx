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

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // Animaciones coordinadas
  const textContainerX = useTransform(smoothScroll, [0, 0.4], ["-10%", "0%"]);
  const textOpacity = useTransform(smoothScroll, [0.1, 0.4], [0, 1]);
  const galleryContainerX = useTransform(smoothScroll, [0, 0.5], ["0%", "52%"]);
  const imgWidth = useTransform(smoothScroll, [0, 0.5], ["33.33%", "16%"]);

  return (
    <section
      id="quienes-somos"
      ref={sectionRef}
      className="relative h-[400vh] bg-[#1a1a1a] w-full"
    >
      <div className="sticky top-0 h-screen w-full flex overflow-hidden p-4">

        {/* COLUMNA DE TEXTO (GRADIENTE) */}
        <motion.div
          style={{ x: textContainerX, opacity: textOpacity }}
          className="relative w-[52%] h-full flex flex-col justify-center px-16 md:px-24 z-20 overflow-hidden"
          /* Redondeado asimétrico: Arriba-Izquierda y Abajo-Izquierda */
          className="rounded-tl-[60px] rounded-bl-[60px] rounded-tr-[10px] rounded-br-[10px]"
          style={{
            background: "linear-gradient(135deg, #1E5F5E 0%, #3D3A4B 40%, #823C5B 80%, #5B3A5A 100%)",
          }}
        >
          {/* Overlay de luz en la esquina superior derecha del texto */}
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_10%,_rgba(215,153,110,0.25),transparent_60%)] pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-light tracking-[0.15em] text-white uppercase mb-10">
            <SplitReveal text="¿QUIENES SOMOS?" />
          </h2>

          <div className="space-y-8 text-sm md:text-[15px] font-light leading-relaxed text-white/90 max-w-lg">
            <p>
              Somos Xime y Juli, comunicadoras con más de 15 años de experiencia y un camino recorrido de desarrollo personal a través de terapias y herramientas holísticas. Entendemos de mensajes, de personas y de procesos.
            </p>
            <p>
              También conocemos el detrás de escena: la duda, el desorden, la sobrecarga que aparece cuando un proyecto crece sin estructura. Por eso creamos Casa Seis.
            </p>
            <p className="pt-2">
              Para ordenar lo que hoy te pesa y darle dirección a lo que quiere expandirse.
            </p>
          </div>

          <div className="pt-12">
            <a
              href="https://wa.me/5491155939599"
              target="_blank"
              className="inline-block bg-[#823C5B] text-white px-10 py-4 rounded-2xl text-[11px] font-medium uppercase tracking-[0.25em] hover:brightness-110 transition-all duration-300 shadow-lg shadow-black/10"
            >
              QUIERO EMPEZAR
            </a>
          </div>
        </motion.div>

        {/* GALERÍA ACORDEÓN */}
        <motion.div
          style={{ x: galleryContainerX }}
          className="absolute inset-y-0 right-0 flex w-full h-full z-10 py-4 pr-4"
        >
          {/* Imagen 1 - La que queda junto al texto */}
          <motion.div
            style={{ width: imgWidth }}
            className="relative h-full overflow-hidden rounded-[60px] mx-1 shadow-2xl"
          >
            <Image src="/4.jpg" alt="" fill className="object-cover brightness-90" priority />
          </motion.div>

          {/* Imagen 2 */}
          <motion.div
            style={{ width: imgWidth }}
            className="relative h-full overflow-hidden rounded-[60px] mx-1 shadow-2xl opacity-80"
          >
            <Image src="/3.jpg" alt="" fill className="object-cover" priority />
          </motion.div>

          {/* Imagen 3 */}
          <motion.div
            style={{ width: imgWidth }}
            className="relative h-full overflow-hidden rounded-[60px] ml-1 shadow-2xl opacity-60"
          >
            <Image src="/2.jpg" alt="" fill className="object-cover" priority />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};