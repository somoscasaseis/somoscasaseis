"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { SplitReveal } from "@/components/v2/Text/SplitReveal";

export const HeroV2 = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const heroBgY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  // Primavera suave para que el movimiento del logo al scrollear sea elástico
  const smoothLogoScale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.9]), {
    stiffness: 100,
    damping: 30
  });

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col bg-[#F4F4F2] overflow-hidden"
    >
      {/* Fondo imagen + gradiente */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y: heroBgY }} className="absolute -inset-y-40 inset-x-0">
          <Image
            src="/hero1.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center brightness-[1.02]"
          />
        </motion.div>
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/40 to-[#F4F4F2]" />
      </div>

      {/* Contenido Hero */}
      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 pt-24 z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >

          {/* CONTENEDOR DEL LOGO CON ANIMACIÓN DE LLENADO ÓRGANICO */}
          <motion.div
            style={{ scale: smoothLogoScale }}
            className="relative mb-12 h-60 w-60 md:h-72 md:w-72"
          >
            <motion.svg
              aria-hidden="true"
              viewBox="0 0 318.9 323.6"
              className="absolute inset-0 h-full w-full text-[#1d2a34]"
            >
              <defs>
                {/* MÁSCARA DE LLENADO ORGÁNICO */}
                <mask id="casa-seis-organic-fill">
                  {/* Fondo negro: todo oculto */}
                  <rect width="100%" height="100%" fill="black" />

                  {/* Gradiente Radial Animado: el efecto de "revelado suave" */}
                  {/* Usamos un filtro de blur para que el borde del llenado sea difuso */}
                  <filter id="organic-blur">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                  </filter>

                  <motion.circle
                    cx="159.45"
                    cy="161.8"
                    initial={{ r: 0, opacity: 0 }}
                    animate={{ r: 280, opacity: 1 }}
                    transition={{
                      delay: 0.3,
                      duration: 2.5,
                      ease: [0.4, 0, 0.2, 1] // Ease-in-out suave
                    }}
                    fill="white"
                    filter="url(#organic-blur)" // Aplicamos el blur orgánico
                  />

                  {/* Un segundo foco central para asegurar el llenado completo al final */}
                  <motion.circle
                    cx="159.45"
                    cy="161.8"
                    initial={{ r: 0 }}
                    animate={{ r: 350 }}
                    transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
                    fill="white"
                  />
                </mask>
              </defs>

              {/* El Logo con la máscara aplicada */}
              <g mask="url(#casa-seis-organic-fill)">
                <path
                  d="M255.3,252.9c8.2-7.6,13.8-15.3,17.7-25.8l11.3,7.3c0.7-1.2,1.3-2.3,2-3.5c-9.4-6.4-18.4-13.3-26-22
                    ... (resto del path idéntico) ...
                    C272.6,233.2,251.8,254.6,243.9,258.3"
                  fill="currentColor"
                />
              </g>
            </motion.svg>

            {/* Pequeño destello de luz central que acompaña el inicio */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: [0, 0.5, 0] }}
              transition={{ duration: 1.8, delay: 0.3 }}
              className="absolute inset-0 m-auto w-24 h-24 bg-[#2B5F63]/10 blur-3xl rounded-full"
            />
          </motion.div>

          {/* TIPOGRAFÍA CON REVELADO COMPUESTO */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-[0.12em] text-center text-[#1d2a34] leading-[1.15] mb-14 font-sans"
          >
            <SplitReveal text="COMUNICACIÓN" stagger={0.06} baseDelay={0.6} />
            <br />
            <span className="inline-block mt-2 font-medium opacity-90">
              <SplitReveal text="CONSCIENTE" stagger={0.06} baseDelay={1} />
            </span>
          </motion.h1>

          {/* BOTONES CON ESTILO PREMIUM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center gap-5 z-20"
          >
            <a
              href="#servicios"
              className="group border border-[#1d2a34]/15 px-10 py-4 rounded-full flex items-center gap-3 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.3em] text-[#1d2a34] bg-white/40 backdrop-blur-sm hover:bg-white/70 transition-all duration-500 font-mono shadow-sm"
            >
              CONOCÉ MÁS
              <ArrowDown className="h-3.5 w-3.5 opacity-50 group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="https://wa.me/5491155939599?text=Hola%20Casa%20Seis,%20quiero%20hacerte%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden bg-[#1d2a34] text-white px-12 py-4 rounded-full text-[10px] md:text-[11px] font-medium uppercase tracking-[0.3em] hover:bg-[#2B5F63] transition-all duration-500 shadow-xl font-mono z-10"
            >
              <span className="relative z-10">HABLEMOS</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll lateral o inferior sutil */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 hidden md:block"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#1d2a34] to-transparent" />
      </motion.div>
    </section>
  );
};