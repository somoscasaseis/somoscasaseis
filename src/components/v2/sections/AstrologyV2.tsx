"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
      className="bg-[#efefed] px-6 py-24 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Columna Izquierda */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-light text-foreground uppercase tracking-[0.18em] leading-tight">
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
          <div className="space-y-8 pt-2">
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

        {/* Línea decorativa inferior wavy */}
        <div className="mt-24 md:mt-32 opacity-40">
          <motion.svg
            width="100%"
            height="20"
            viewBox="0 0 1200 20"
            fill="none"
            preserveAspectRatio="none"
            className="w-full"
          >
            <motion.path
              d="M0 10 Q150 0 300 10 T600 10 T900 10 T1200 10"
              stroke="#000000"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ delay: 1.5, duration: 2, ease: "easeInOut" }}
            />
            {/* Pequeño nudo/lazo en el centro similar al screenshot */}
            <motion.circle 
              cx="600" cy="10" r="3" 
              fill="#000000" 
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 2.5 }}
            />
          </motion.svg>
        </div>
      </div>
    </section>
  );
};
