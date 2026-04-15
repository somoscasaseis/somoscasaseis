"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SplitReveal } from "@/components/v2/Text/SplitReveal";

export const AstrologyV2 = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const blockVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6 + i * 0.2,
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      id="astrologia"
      ref={containerRef}
      className="relative bg-[#efefed] px-6 pt-24 pb-32 md:pt-36 md:pb-48 overflow-hidden scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 lg:gap-24 items-start">
          
          {/* Columna Izquierda */}
          <div className="flex flex-col gap-6 md:gap-10">
            <h2 className="text-[1.625rem] md:text-5xl font-light text-foreground uppercase tracking-[0.18em] leading-tight">
              <SplitReveal text="CASA SEIS EN" stagger={0.05} />
              <br />
              <SplitReveal text="ASTROLOGÍA" stagger={0.05} baseDelay={0.4} />
            </h2>
            
            <motion.p
              custom={0}
              variants={blockVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-xl md:text-2xl text-foreground font-medium leading-relaxed max-w-md"
            >
              La Casa Seis representa el ámbito del trabajo, el servicio y la vida cotidiana.
            </motion.p>
          </div>

          {/* Columna Derecha */}
          <div className="flex flex-col gap-6 md:gap-12 md:pt-4">
            <motion.p
              custom={1}
              variants={blockVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed"
            >
              Habla de cómo nos relacionamos con lo que hacemos todos los días, con nuestros hábitos y con la actitud frente a nuestras responsabilidades.
            </motion.p>

            <motion.p
              custom={2}
              variants={blockVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed"
            >
              Es una casa que nos invita a ordenar, mejorar y perfeccionar, poniendo atención en los detalles. Porque es ahí donde <span className="font-semibold text-foreground">pequeñas acciones sostenidas construyen bienestar a largo plazo</span>.
            </motion.p>
          </div>
        </div>
      </div>

      {/* LÍNEA DECORATIVA - Transición a ContactCTA */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-32 md:h-24 z-30 pointer-events-none"
      >
        <Image
          src="/linea-cierre-desktop.png"
          alt=""
          fill
          className="object-contain object-bottom hidden md:block"
          priority
        />
        <Image
          src="/linea-cierre-mobile.png"
          alt=""
          fill
          className="object-contain object-bottom md:hidden"
          priority
        />
      </div>
    </section>
  );
};
