"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { AlignLeft, ArrowRightCircle, Search } from "lucide-react";
import { useRef, useState } from "react";

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
      className="relative bg-[#F4F4F2] px-6 py-28 md:py-36 overflow-hidden"
    >
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
      >
        <div className="absolute left-1/2 -top-[180px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(196,154,108,0.22),transparent_62%)] blur-3xl" />
        <div className="absolute right-[10%] bottom-[-220px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(31,58,75,0.12),transparent_65%)] blur-3xl" />
      </motion.div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-14 md:mb-20">
          <p className="text-[10px] uppercase tracking-[0.35em] text-black/60">
            Servicios
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-light uppercase tracking-[0.15em] text-black">
            <SplitReveal text="Nuestros Servicios" />
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
