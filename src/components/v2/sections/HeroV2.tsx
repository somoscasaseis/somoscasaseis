"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/v2/Button";

const rays = Array.from({ length: 12 }).map((_, i) => i * 30);

export const HeroV2 = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] bg-bg-base overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(196,154,108,0.35),transparent_65%)] blur-3xl" />
        <div className="absolute bottom-[-220px] left-[15%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(196,154,108,0.20),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-[-240px] right-[10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(43,107,116,0.12),transparent_65%)] blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col items-center text-center"
        >
          <motion.svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            className="mb-10 h-24 w-24 text-black/80"
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: [0, 0, 1, 1] as const }}
          >
            {rays.map((angle, index) => (
              <motion.path
                key={angle}
                d="M50 50 L50 12"
                transform={`rotate(${angle} 50 50)`}
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  delay: 0.2 + index * 0.03,
                  duration: 1.2,
                  ease: [0.65, 0, 0.35, 1] as const,
                }}
              />
            ))}
            <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.6" />
          </motion.svg>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            className="text-3xl md:text-6xl font-light uppercase tracking-[0.3em] text-black"
          >
            Comunicación Consciente
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 1.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="mt-7 max-w-2xl text-base md:text-lg text-black/70 leading-relaxed"
          >
            Acompañamiento estratégico y comunicación para proyectos que buscan
            claridad, dirección y forma.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Button
              href="#mirada"
              variant="outline"
              icon={<ArrowDown className="h-4 w-4" />}
            >
              Conocé más
            </Button>
            <Button
              href="https://wa.me/5491155939599?text=Hola%20Casa%20Seis,%20quiero%20hacerte%20una%20consulta."
              variant="solid"
              tone="teal"
              icon={<ArrowRight className="h-4 w-4" />}
              target="_blank"
            >
              Hablemos
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
