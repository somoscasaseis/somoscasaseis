"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "DIAGNÓSTICO",
    bgClass: "bg-card-blue",
    bullets: [
      "Escuchamos lo que ya existe.",
      "Identificamos ruido y potencial.",
      "Definimos una dirección clara.",
    ],
  },
  {
    title: "ORDEN",
    bgClass: "bg-card-teal",
    bullets: [
      "Estructura y jerarquía del mensaje.",
      "Lenguaje alineado a tu esencia.",
      "Coherencia entre forma y fondo.",
    ],
  },
  {
    title: "ACCIÓN",
    bgClass: "bg-card-plum",
    bullets: [
      "Plan para comunicar con consistencia.",
      "Ritmo y foco en lo importante.",
      "Ejecución con intención.",
    ],
  },
];

export const ServicesV2 = () => {
  return (
    <section id="servicios" className="bg-bg-base px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 md:mb-20">
          <p className="text-[10px] uppercase tracking-[0.35em] text-black/60">
            Servicios
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-light uppercase tracking-[0.22em] text-black">
            Las 3 Tarjetas
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
              className={`group relative overflow-hidden rounded-[40px] p-10 ${service.bgClass}`}
            >
              <motion.svg
                aria-hidden="true"
                viewBox="0 0 48 48"
                className="absolute right-8 top-8 h-10 w-10 text-accent-gold/90"
                initial={false}
                whileHover={{ scale: 1.06, rotate: 2 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <path
                  d="M6 28 C 14 10, 26 8, 42 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M10 38 C 18 22, 32 18, 40 26"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.8"
                />
              </motion.svg>

              <div className="relative">
                <h3 className="text-white text-xl md:text-2xl uppercase tracking-[0.25em] font-light">
                  {service.title}
                </h3>

                <div className="mt-10 space-y-4 text-white/85">
                  {service.bullets.map((bullet) => (
                    <p
                      key={bullet}
                      className="text-sm md:text-base leading-relaxed"
                    >
                      — {bullet}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
