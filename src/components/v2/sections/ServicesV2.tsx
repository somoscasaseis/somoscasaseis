"use client";

import { motion, useInView, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { SplitReveal } from "@/components/v2/Text/SplitReveal";

const DEFAULT_SERVICES = [
  {
    title: "DIAGNÓSTICO",
    colorClass: "bg-[#1c2833]",
    iconPath: "/diagnostico.svg",
    items: [
      "Revisión de la comunicación actual",
      "Análisis de propuestas y servicios",
      "Posicionamiento y claridad de mensaje",
    ],
  },
  {
    title: "ORDEN",
    colorClass: "bg-[#2d5e62]",
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
    colorClass: "bg-[#7d3857]",
    iconPath: "/accion.svg",
    items: [
      "Planificación estratégica de contenido",
      "Identidad visual",
      "Desarrollo de página web",
      "Diseño y producción de experiencias",
      "Producciones fotográficas",
    ],
  },
];

type ServiceProps = {
  title: string;
  colorClass: string;
  iconPath: string;
  items: string[];
};

const introBlockVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const introBlockVariantsMobile = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export const ServicesV2 = ({ services }: { services?: ServiceProps[] }) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const displayServices = services && services.length > 0 ? services : DEFAULT_SERVICES;

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
      className="relative bg-[#EFEFED] px-6 pt-24 pb-12 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl relative z-10 w-full flex flex-col items-center">
        <div className="mb-14 md:mb-24 flex flex-col items-center text-center w-full">
          <h2 className="mb-6 text-center text-3xl md:text-5xl font-medium text-foreground uppercase tracking-[0.12em] md:tracking-[0.18em] leading-tight w-full">
            <span className="md:hidden">NUESTROS SERVICIOS</span>
            <span className="hidden md:block">
              <SplitReveal text="NUESTROS SERVICIOS" stagger={0.05} className="w-full text-center" />
            </span>
          </h2>
          <motion.p
            variants={introBlockVariantsMobile}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-xl md:text-2xl text-foreground/80 font-light mb-4 md:mb-6 leading-relaxed max-w-2xl"
          >
            Te acompañamos desde una mirada integral que une lo humano con lo estratégico.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 items-stretch"
        >
          {displayServices.map((service, index) => {
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
                  service.colorClass,
                  isHovered ? "scale-[1.02] -translate-y-2 shadow-2xl" : "scale-100 translate-y-0",
                  shouldDeemphasize ? "opacity-40 grayscale-[0.5] blur-[1px]" : "opacity-100 grayscale-0 blur-0",
                ].join(" ")}
              >
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
