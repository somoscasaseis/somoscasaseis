"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const services = [
  {
    title: "DIAGNÓSTICO",
    colorClass: "bg-[#1F3A4B]",
    iconPath: "/diagnostico.svg",
    items: [
      "Revisión de la comunicación actual",
      "Análisis de propuestas y servicios",
      "Posicionamiento y claridad de mensaje",
    ],
  },
  {
    title: "ORDEN",
    colorClass: "bg-[#2B6B74]",
    iconPath: "/orden.svg",
    items: [
      "Arquitectura de servicios",
      "Organización de procesos internos",
      "Estructura de comunicación",
      "Lineamientos narrativos y estratégicos",
    ],
  },
  {
    title: "ACCIÓN",
    colorClass: "bg-[#823C5B]",
    iconPath: "/accion.svg",
    items: [
      "Planificación estratégica de contenido",
      "Identidad visual",
      "Desarrollo de página web",
      "Diseño y producción de experiencias",
      "Producciones fotográficas",
    ],
  },
] as const;



import { SplitReveal } from "@/components/v2/Text/SplitReveal";

export const ServicesV2 = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.2"],
  });
  const bgY = useSpring(useTransform(scrollYProgress, [0, 1], [18, -18]), {
    stiffness: 120,
    damping: 30,
    mass: 0.6,
  });

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="relative bg-[#EFEFED] px-6 py-28 md:py-36 overflow-hidden"
    >
      {/* STOP */}
      <div className="flex justify-center mb-8">
        <div className="w-2 h-2 rounded-full bg-[#1d2a34]/30" />
      </div>
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="mb-14 md:mb-24 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal uppercase tracking-[0.2em] text-[#1d2a34] mb-6">
            <SplitReveal text="NUESTROS SERVICIOS" />
          </h2>
          <p className="text-xl md:text-2xl text-[#1d2a34]/80 max-w-2xl mx-auto font-medium leading-relaxed">
            Te acompañamos desde una mirada integral que une lo humano con lo estratégico.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 items-stretch"
        >
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const isSomeHovered = hoveredIndex !== null;
            const shouldDeemphasize = isSomeHovered && !isHovered;

            return (
              <div
                key={service.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={[
                  "relative overflow-hidden rounded-[50px] md:rounded-[60px] p-10 md:p-12 transition-all duration-500 ease-out flex flex-col min-h-[500px]",
                  index === 0 ? "bg-[#1c2833]" : index === 1 ? "bg-[#2d5e62]" : "bg-[#7d3857]",
                  isHovered ? "scale-[1.02] -translate-y-2 shadow-2xl" : "scale-100 translate-y-0",
                  shouldDeemphasize ? "opacity-40 grayscale-[0.5] blur-[1px]" : "opacity-100 grayscale-0 blur-0",
                ].join(" ")}
              >
                {/* Icon Container */}
                {/* Icon Container - Top Right */}
                <div className="flex justify-end mb-4">
                  <motion.div
                    animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="relative w-24 h-24 md:w-32 md:h-32"
                  >
                    <Image
                      src={service.iconPath}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                </div>

                <div className="relative">
                  <h3 className="text-[#C49A6C] text-2xl md:text-3xl uppercase tracking-[0.05em] font-medium mb-10 leading-none">
                    {service.title}
                  </h3>

                  <div className="space-y-6 text-white/95">
                    {service.items.map((item) => (
                      <p key={item} className="text-[15px] md:text-[16px] leading-[1.4] flex items-start">
                        <span className="mr-2 flex-shrink-0">—</span>
                        <span>{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
