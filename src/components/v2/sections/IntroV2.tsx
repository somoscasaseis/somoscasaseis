"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const lines = [
  "Bienvenidos a Casa Seis.",
  "Un espacio de acompañamiento estratégico",
  "y comunicación donde potenciamos",
  "proyectos con propósito.",
] as const;

import { SplitReveal } from "@/components/v2/Text/SplitReveal";

export const IntroV2 = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  return (
    <section
      id="mirada"
      ref={sectionRef}
      className="bg-[#F4F4F2] px-6 pt-16 pb-24 md:pt-24 md:pb-32"
    >
      <div className="mx-auto flex flex-col items-center text-center max-w-4xl">
        <div className="text-base md:text-3xl font-light leading-relaxed text-foreground space-y-1">
          <SplitReveal text={lines[0]} baseDelay={0} />
          <br />
          <SplitReveal text={lines[1]} baseDelay={0.4} />
          <br />
          <SplitReveal text={lines[2]} baseDelay={0.8} />
          <br />

          <div className="relative inline-block text-foreground font-semibold">
            <SplitReveal text={lines[3]} baseDelay={1.2} />
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 2.6, duration: 1.5, ease: "easeInOut" }}
              className="absolute -bottom-2 left-0 h-3 md:h-4 overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/linea-bienvenidos.png"
                  alt=""
                  fill
                  className="object-contain object-left"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
