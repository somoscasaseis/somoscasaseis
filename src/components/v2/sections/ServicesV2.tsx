"use client";

import { motion } from "framer-motion";
import { AlignLeft, ArrowRightCircle, Search } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "DIAGNÓSTICO",
    colorClass: "bg-[#1F3A4B]",
    icon: "Search",
    items: [
      "Revisión de la comunicación actual",
      "Análisis de propuestas y servicios",
      "Posicionamiento y claridad de mensaje",
    ],
  },
  {
    title: "ORDEN",
    colorClass: "bg-[#2B6B74]",
    icon: "AlignLeft",
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
    icon: "ArrowRightCircle",
    items: [
      "Planificación estratégica de contenido",
      "Identidad visual",
      "Desarrollo de página web",
      "Diseño y producción de experiencias",
      "Producciones fotográficas",
    ],
  },
] as const;

const iconMap = {
  Search,
  AlignLeft,
  ArrowRightCircle,
} as const;

export const ServicesV2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="servicios" className="bg-[#F4F4F2] px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 md:mb-20">
          <p className="text-[10px] uppercase tracking-[0.35em] text-black/60">
            Servicios
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-light uppercase tracking-[0.22em] text-gray-900">
            Nuestros Servicios
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            const isHovered = hoveredIndex === index;
            const isSomeHovered = hoveredIndex !== null;
            const shouldDeemphasize = isSomeHovered && !isHovered;

            return (
              <div
                key={service.title}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={[
                  "relative overflow-hidden rounded-[40px] p-10 transition-all duration-300 ease-out",
                  service.colorClass,
                  isHovered ? "scale-[1.03]" : "scale-100",
                  shouldDeemphasize ? "opacity-50 blur-[2px]" : "opacity-100 blur-0",
                ].join(" ")}
              >
                <div className="absolute right-8 top-8 text-[#C49A6C]">
                  <div
                    className={[
                      "transition-transform duration-300 ease-out",
                      isHovered ? "scale-110" : "scale-100",
                    ].join(" ")}
                  >
                    <Icon aria-hidden="true" className="h-10 w-10" strokeWidth={1.3} />
                  </div>
                </div>

                <div className="relative">
                  <h3 className="text-white text-xl md:text-2xl uppercase tracking-[0.25em] font-light">
                    {service.title}
                  </h3>

                  <div className="mt-10 space-y-4 text-white/85">
                    {service.items.map((item) => (
                      <p key={item} className="text-sm md:text-base leading-relaxed">
                        — {item}
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
