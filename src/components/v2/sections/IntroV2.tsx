"use client";

import { motion } from "framer-motion";
import { HandDrawnUnderline } from "@/components/v2/HandDrawnUnderline";

export const IntroV2 = () => {
  return (
    <section
      id="mirada"
      className="relative bg-bg-base px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-xl md:text-3xl font-light leading-relaxed text-black/80"
        >
          Bienvenidos a Casa Seis. Acompañamos{" "}
          <span className="relative inline-block text-black">
            proyectos con propósito
            <span className="pointer-events-none absolute left-0 right-0 -bottom-3 h-4 text-accent-gold">
              <HandDrawnUnderline className="h-full w-full" />
            </span>
          </span>
          , donde la claridad y el orden se vuelven parte del mensaje.
        </motion.p>
      </div>
    </section>
  );
};
