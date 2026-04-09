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
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // --- NUEVA COREOGRAFÍA OPTIMIZADA ---

  // El texto aparece más rápido para que el usuario lo lea mientras scrollea
  const textOpacity = useTransform(smoothScroll, [0, 0.3], [0, 1]);

  // La galería se desplaza suavemente durante TODO el recorrido (de 0 a 1)
  const galleryContainerX = useTransform(smoothScroll, [0, 1], ["0%", "50%"]);

  // Acordeón Irregular: Al final la principal es el doble que las otras, pero todas visibles.
  // Proporción final: 50% | 25% | 25% del contenedor derecho
  const widthFirst = useTransform(smoothScroll, [0, 1], ["33.33%", "50%"]);
  const widthOthers = useTransform(smoothScroll, [0, 1], ["33.33%", "25%"]);

  return (
    <section
      id="quienes-somos"
      ref={sectionRef}
      // Reducimos a 250vh para que no sea un "vía crucis" de scroll
      className="relative h-[250vh] bg-[#1a1a1a] w-full"
    >
      <div className="sticky top-0 h-screen w-full flex overflow-hidden">

        {/* COLUMNA DE TEXTO */}
        <motion.div
          style={{
            opacity: textOpacity,
            background: "linear-gradient(135deg, #1E5F5E 0%, #3D3A4B 40%, #823C5B 80%, #5B3A5A 100%)"
          }}
          className="relative w-1/2 h-full flex flex-col justify-center px-12 md:px-24 z-10"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_10%,_rgba(215,153,110,0.15),transparent_60%)] pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-light tracking-[0.15em] text-white uppercase mb-10">
            <SplitReveal text="¿QUIÉNES SOMOS?" />
          </h2>

          <div className="space-y-6 text-sm md:text-base font-light leading-relaxed text-white/90 max-w-lg">
            <p>
              Somos <strong>Xime y Juli</strong>, comunicadoras con más de 15 años de experiencia y un camino recorrido de desarrollo personal.
            </p>
            <p>
              Conocemos el detrás de escena: la duda, el desorden, la sobrecarga. Por eso creamos <strong>Casa Seis</strong>.
            </p>
            <p className="font-medium text-white/100 border-l-2 border-[#823C5B] pl-4 italic">
              Para ordenar lo que hoy te pesa y darle dirección a lo que quiere expandirse.
            </p>
          </div>

          <div className="pt-12">
            <a
              href="https://wa.me/5491155939599"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#823C5B] text-white px-10 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-[0.3em] hover:brightness-110 transition-all shadow-lg shadow-black/20"
            >
              QUIERO EMPEZAR
            </a>
          </div>
        </motion.div>

        {/* GALERÍA ACORDEÓN */}
        <motion.div
          style={{ x: galleryContainerX }}
          className="absolute inset-0 flex w-full h-full z-20"
        >
          <motion.div
            style={{ width: widthFirst }}
            className="relative h-full overflow-hidden border-l border-white/5"
          >
            <Image src="/4.jpg" alt="1" fill className="object-cover" priority />
          </motion.div>

          <motion.div
            style={{ width: widthOthers }}
            className="relative h-full overflow-hidden border-l border-white/10 shadow-[-20px_0_40px_rgba(0,0,0,0.5)]"
          >
            <Image src="/3.jpg" alt="2" fill className="object-cover" priority />
          </motion.div>

          <motion.div
            style={{ width: widthOthers }}
            className="relative h-full overflow-hidden border-l border-white/10 shadow-[-20px_0_40px_rgba(0,0,0,0.5)]"
          >
            <Image src="/2.jpg" alt="3" fill className="object-cover" priority />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};