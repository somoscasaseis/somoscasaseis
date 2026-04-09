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

  // 1. EL TEXTO: Entra desde la izquierda y se vuelve opaco
  const textContainerX = useTransform(smoothScroll, [0, 0.4], ["-20%", "0%"]);
  const textOpacity = useTransform(smoothScroll, [0.1, 0.4], [0, 1]);

  // 2. LA GALERÍA: Empuja todo el conjunto hacia la derecha para dejar espacio al texto
  // El texto ocupa el 60%, las imágenes se quedan en el 40% restante.
  const galleryContainerX = useTransform(smoothScroll, [0, 0.5], ["0%", "60%"]);

  // 3. EFECTO ACORDEÓN: 
  // Cada imagen empieza ocupando 33.33% del contenedor.
  // Al final, se comprimen para que el conjunto total ocupe el espacio visual de la derecha.
  const imgWidth = useTransform(smoothScroll, [0, 0.5], ["33.33%", "13.33%"]);

  return (
    <section
      id="quienes-somos"
      ref={sectionRef}
      className="relative h-[400vh] bg-[#f0ece9] w-full"
    >
      <div className="sticky top-0 h-screen w-full flex overflow-hidden">

        {/* COLUMNA DE TEXTO (LADO IZQUIERDO) */}
        <motion.div
          style={{ x: textContainerX, opacity: textOpacity }}
          className="relative w-[60%] h-full flex flex-col justify-center px-12 md:px-24 z-20"
        >
          {/* Fondo sutil tipo Mesh/Gradient como la referencia */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(130,60,91,0.05),transparent_50%)] -z-10" />

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-widest text-[#1D2A34] uppercase mb-12">
            <SplitReveal text="¿QUIÉNES SOMOS?" />
          </h2>

          <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-[#1D2A34]/80 max-w-xl">
            <p>
              Somos Xime y Juli, comunicadoras con más de 15 años de experiencia y un camino recorrido de desarrollo personal.
            </p>
            <p>
              Creamos <strong>Casa Seis</strong> para ordenar lo que hoy te pesa y darle dirección a lo que quiere expandirse.
            </p>
          </div>

          <div className="pt-10">
            <a
              href="#"
              className="inline-block border border-[#1D2A34] text-[#1D2A34] px-10 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#1D2A34] hover:text-white transition-all duration-500"
            >
              QUIERO EMPEZAR
            </a>
          </div>
        </motion.div>

        {/* GALERÍA ACORDEÓN (LADO DERECHO) */}
        <motion.div
          style={{ x: galleryContainerX }}
          className="absolute inset-0 flex w-full h-full z-10"
        >
          {/* Imagen 1 */}
          <motion.div style={{ width: imgWidth }} className="relative h-full overflow-hidden border-l border-white/20">
            <Image src="/4.jpg" alt="" fill className="object-cover" priority />
          </motion.div>

          {/* Imagen 2 */}
          <motion.div style={{ width: imgWidth }} className="relative h-full overflow-hidden border-l border-white/20">
            <Image src="/3.jpg" alt="" fill className="object-cover" priority />
          </motion.div>

          {/* Imagen 3 */}
          <motion.div style={{ width: imgWidth }} className="relative h-full overflow-hidden border-l border-white/20">
            <Image src="/2.jpg" alt="" fill className="object-cover" priority />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};