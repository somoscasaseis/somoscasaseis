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
      className="relative -mt-4 md:mt-0 bg-[#F4F4F2] px-6 pt-0 pb-16 md:pt-24 md:pb-32"
    >
      <div className="mx-auto flex flex-col items-center text-center max-w-4xl -translate-y-[14vh] md:translate-y-0">
        <div className="text-xl md:text-2xl font-light leading-relaxed text-foreground/80 space-y-1">
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
              whileInView={{ width: "100%" }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
              className="absolute -bottom-2 left-0 h-4 md:h-4 overflow-hidden z-10 pointer-events-none"
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
