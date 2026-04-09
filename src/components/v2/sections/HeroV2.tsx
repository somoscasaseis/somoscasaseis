"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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

  const heroBgY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col bg-[#F4F4F2] overflow-hidden"
    >
      {/* Fondo con Parallax suave */}
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
        {/* Overlay sofisticado */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/20 via-[#F4F4F2]/40 to-[#F4F4F2]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 pt-24 z-10">
        <motion.div className="flex flex-col items-center text-center">

          {/* LOGO CON REVELADO ORGÁNICO */}
          <motion.div
            style={{ scale: logoScale }}
            className="relative mb-12"
          >
            <motion.svg
              viewBox="0 0 318.9 323.6"
              className="h-60 w-60 md:h-72 md:w-72 text-[#1d2a34]"
            >
              <defs>
                {/* Filtro de Turbulencia para bordes orgánicos */}
                <filter id="liquid-filter">
                  <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" seed="2" />
                  <feDisplacementMap in="SourceGraphic" scale="25" />
                </filter>

                <mask id="organic-mask">
                  <motion.circle
                    cx="159.45"
                    cy="161.8"
                    initial={{ r: 0, opacity: 0 }}
                    animate={{ r: 300, opacity: 1 }}
                    transition={{
                      duration: 2.5,
                      ease: [0.4, 0, 0.2, 1],
                      delay: 0.2
                    }}
                    fill="white"
                    filter="url(#liquid-filter)"
                  />
                </mask>
              </defs>

              {/* El Logo propiamente dicho */}
              <g mask="url(#organic-mask)">
                <motion.path
                  d="M255.3,252.9c8.2-7.6,13.8-15.3,17.7-25.8l11.3,7.3c0.7-1.2,1.3-2.3,2-3.5c-9.4-6.4-18.4-13.3-26-22
                    c8.7,0.7,16.6,7,24.5,9.4c2,0.6,4.9,1.1,8,1.5c0.4-0.7,0.8-1.3,1.1-2c-7.1-1-17.1-5.1-20-7.9l5.6-21.8c3.4-2.4,17.8,2,22.2,2.7
                    c0,0.7,0,1.4,0,2c0.5-2.3,1-4.5,1.5-6.8c-6.9-0.9-17.7-4.7-23.6-3.4c-0.6-0.6,4-11.2,4-13.7v-37l21.3-0.3c-0.4-1.2-0.8-2.5-1.2-3.7
                    l-29.8-0.9l-1.9-2.1c-1.1,0.6-1,2.6-2.3,3c-4.7,1.5-14.2,1.2-19.8,2.2c-9.8,1.6-19.3,3.9-29,5.9l2.1-3.5l40.5-22.4l3,2.6l-2-4
                    c8.3-4.9,16.7-10,25.8-13.5c-0.5-0.9-0.9-1.9-1.4-2.8c-2.9,1.2-5.2,2-5.6,2c-2-0.4-8.8-18.3-10.6-21.8c-1.6-3.1-3.7-6.5-6.2-8.9
                    c1.7-0.8,3.4-2.1,5.1-3.4c-0.7-1-1.3-2.1-2-3.1c-10.6,6.6-20.9,12.6-22.3,11.1c0.1-8.6,3.5-17.7,7.7-25.2c0.2-0.4,0.6-1.1,1.1-1.8
                    c-0.5-0.5-1.1-1-1.6-1.4c-2,3.4-4,6.7-4.6,8.2c-2.6,6.2-4.5,13.6-5.6,20.2l-7.1-3l5,4.5l-51.1,41l-1.6-3.5l16.3-55.2l7.1,1l-4.9-3.5
                    c4.9-9.8,12.8-17.1,20.4-24.7c-1-0.4-2-0.8-3.1-1.1c-3.2,3.2-6.4,6.3-9.3,9.6c-1.1,1.3-8.3,13.4-10.1,11.6l8-24.7
                    c-0.7-0.2-1.4-0.4-2.2-0.6c-0.6-0.1-1.2-0.3-1.7-0.4c1,9-11.9,39.6-13.2,49c-6.2-6.2-13.9-7.8-22.2-9.2L185.1,14
                    c-0.6-0.1-1.3-0.2-1.9-0.3c-1.4,5-2.7,8.8-3.3,8.8c-7.5-5.6-16,0-17.1-11.4c-0.8-0.1-1.7-0.1-2.5-0.2c-1.4-0.1-2.8-0.2-4.2-0.3V18
                    l-17.3,5.1l-3.4-13c-0.9,0-1.8,0-2.6,0.1l0,0.1c-1.1,0-2.2,0-3.2,0c-2.7,0.1-5.4,0.3-8.2,0.5c-1.7,0.4-4.5,1.4-4.8,2.6
                    c5.9-0.8,11.6-3.9,17.3-0.3L145,61c-5.1,0.2-11.9,2-16.5,4.3c-2,1-3.8,4.7-5.3,2.8c-1.5-1.8-7.2-22.1-8.3-26.1
                    c-1.1-4-6-19.8-4.9-22.4c0.6-1.5,3.2-2.3,3.6-4.1l-4.5,2c-0.4-0.1-1.3-1.9-2.3-4.7c-1,0.2-1.9,0.4-2.8,0.7
                    c4.1,11.8,9.2,29.2,9.7,32.9l-2,0.5l-10.1-14.7C99.3,31,93.6,25,89,19.5c-0.8,0.5-1.6,0.9-2.4,1.4c1.4,1.9,2.9,4,3.8,4.9
                    c3.1,3.2,24.5,23.3,21.2,27.1c-4.7-0.1-8.4,3-12.2,5.1c2.5-0.9,12.6-4.8,14-3.9c2.7,6.5,19.4,55.2,17.3,57.6L77.1,72.1
                    C76.4,71.1,97.6,59,99.4,58c-3.4,1.2-5.6,1.8-9.1,3.5c-2.8,1.4-12.2,8.8-14.2,7.2c-1.8-4.8-2.6-9.9-4.5-14.7
                    c-0.9-2.4-4.6-8.8-7.6-14.6c-0.5,0.5-1.1,1-1.6,1.5c5.6,9,9.8,19.1,10.7,29.2c-4,0.3-7.4-2.1-10.8-3.9c-4.8-2.5-10.5-5.7-16-9.1
                    c-0.6,0.7-1.3,1.4-1.9,2.1c3.3,2.1,6.5,4.3,6.9,4.7c1,0.9,1.5,1.7,1.5,3.1c1.1-0.5,2.8-1,4-0.5c13,7.6,27.7,13.4,37.5,25.2
                    c-8,7.5-13.9,15.3-17.6,25.8c-12.8-4.6-24.2-12.9-36.1-19.5c-1.2-1.5,1.4-9,2.1-11.7c-1.5,2.6-4.4,10.1-6.5,10.1
                    c-0.6,0-6.6-2.6-11.6-5c-1.6,4.1-3,8.4-4.2,12.6c1.3-3.5,3.2-7.5,5.7-7.7c3.1-0.3,28.2,12.5,28.6,14.8c0.1,0.9-1.2,3-0.8,3.4
                    l5.3-1.8l40.3,23.6c-9.2,0.4-18.7-2.9-28-4.4c-5.7-0.9-16.2-0.5-20.8-2.2c-1.4-0.5-1.2-2.2-2.3-3c-0.3,1.7-3.6,3-5.1,3H16.4
                    c-0.1-2.5-0.1-5.1,0.1-7.6c-0.6,3.9-1.1,7.9-1.5,11.8l21.6-0.1v32.9c0.2,2,1,6.6,1.5,8.7c0.7,3.1,2.3,6.2,3.6,9
                    c-6.1-0.7-16.7,3.1-23.7,3.9c0.3,1.7,0.7,3.4,1.1,5.1c3.6-2.3,20.5-4.1,22.7-2.4l5.7,20.3c-0.3,2.9-13.3,7.2-20.2,8.7
                    c0.3,0.7,0.6,1.5,0.9,2.2c3.2-0.6,6.1-1.1,7.7-1.6c3.3-1.1,22.6-11.2,24.1-9.8c1.1,1-4.1,5.7-5,6.6c-4.4,4.2-12.8,11.1-17.7,14.7
                    c-0.8,0.5-2,1.4-3.5,2.4c0.6,1.2,1.2,2.4,1.8,3.6c4.5-3.3,8.9-6.8,13.6-9.8c3.2,0.5,21.8,23,23.8,26.9c3.9,7.6,0,8-6.2,11.6
                    c-2.6,1.5-5.3,3-8,4.4c1.3,1.4,2.6,2.8,4,4.2l22.1-12.8c2.7,5.4,1.8,9.9,7.7,13.6c1.1,0.7,2.3,0.3,3,0.5c-3.9-0.9-10.3-11.6-7.9-16
                    c11.8-5,25.7-16.9,37.6-20.6c2.4-0.8,4.3-1.1,6.8-0.8c-10.7,11.6-16.4,27.6-29.1,37.2c-1.4,0.4-6,0.5-7.4,0.2c2.2,0.9,6.3,1.1,6,3.4
                    l-11.8,16.1c1.6,0.9,3.3,1.9,4.9,2.7c0-0.1,0-0.2,0-0.4l17.8-23.8c2.9-0.7,15.8,9.3,19.8,11.2c6.9,3.2,15.6,5.1,23,6.9
                    c0.6,0.8-5,12-9.4,19.7c1.5,0.1,2.9,0.8,4.4,0.8c2.9-5.7,5.4-10.4,6.5-10.4c1.6,1,1.3,2,1.5,3.5c0.3,1.9,0.5,5.2,0.6,7.4
                    c2.2-0.1,4.3-0.2,6.4-0.3v-6.1c0-1.3,0.3-4.3,2-4.6l4.2,10c1.6-0.2,4.1-0.9,5.6-1.2c-2.8-4.9-6.6-11.3-8-13.3
                    c-0.9-1.4-2.9-1.9-3.4-2.6c-0.5-0.8-0.7-17.5-0.6-19.8c0.2-2.8,1-5.6,1.2-8.4c3.3-1.5,6.8-2.8,9.8-4.8c3.8-2.5,11.3-11.2,13.3-12.1
                    c1.4-0.6,2.6,0,3.7,0.9l33.5,44c0,0.1,0.1,0.2,0.1,0.3c1.4-0.7,2.8-1.4,4.2-2.1c-5.5-8.1-10.7-16.5-17.1-24
                    c-0.5-1.2-0.2-2.1,0.3-3.2c0.3-0.7,7.4-11.4,7.9-11.9c1-0.9,2.2-1.2,3.4-0.6c3.4,3.2,24.1,13.3,35,19.6c1.4-1.3,2.8-2.6,4.2-3.9
                    c-2.6-1.6-4.9-3-6.4-3.8c-3.4-1.8-7.5-3.5-11.2-4.5C245.4,258.7,253.4,254.6,255.3,252.9"
                  fill="currentColor"
                />
              </g>
            </motion.svg>

            {/* Pequeño destello central que acompaña el inicio */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: [0, 0.4, 0] }}
              transition={{ duration: 1.5, delay: 0.2 }}
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

          {/* BOTONES CON BLUR Y ESTILO "GLASSSMORPHISM" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center gap-5"
          >
            <a
              href="#servicios"
              className="group border border-[#1d2a34]/10 px-10 py-4 rounded-full flex items-center gap-3 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.3em] text-[#1d2a34] bg-white/30 backdrop-blur-md hover:bg-white/80 transition-all duration-500 font-mono shadow-sm"
            >
              CONOCÉ MÁS
              <ArrowDown className="h-3.5 w-3.5 opacity-50 group-hover:translate-y-1 transition-transform" />
            </a>

            <a
              href="https://wa.me/5491155939599?text=Hola%20Casa%20Seis,%20quiero%20hacerte%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden bg-[#1d2a34] text-white px-12 py-4 rounded-full text-[10px] md:text-[11px] font-medium uppercase tracking-[0.3em] hover:bg-[#2B5F63] transition-all duration-500 shadow-xl font-mono"
            >
              <span className="relative z-10">HABLEMOS</span>
              {/* Efecto de brillo interno en hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
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