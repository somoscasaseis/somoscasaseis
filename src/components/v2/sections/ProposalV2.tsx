"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProposalV2 = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const shift = 40;

  // Texto 1: Aparece al inicio, desaparece al 30% del scroll
  const text1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const text1Y = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.3], [0, 0, -shift]),
    { stiffness: 110, damping: 26, mass: 0.7 },
  );

  // Texto 2: Aparece al 35%, se queda hasta el 60%, desaparece al 65%
  const text2Opacity = useTransform(
    scrollYProgress,
    [0.35, 0.45, 0.55, 0.65],
    [0, 1, 1, 0],
  );
  const text2Y = useSpring(
    useTransform(
      scrollYProgress,
      [0.35, 0.45, 0.55, 0.65],
      [shift, 0, 0, -shift],
    ),
    { stiffness: 110, damping: 26, mass: 0.7 },
  );

  // Texto 3: Aparece al 70%, se queda hasta el final
  const text3Opacity = useTransform(scrollYProgress, [0.7, 0.8, 1], [0, 1, 1]);
  const text3Y = useSpring(
    useTransform(scrollYProgress, [0.7, 0.8, 1], [shift, 0, 0]),
    { stiffness: 110, damping: 26, mass: 0.7 },
  );

  const bgY = useSpring(useTransform(scrollYProgress, [0, 1], [18, -18]), {
    stiffness: 120,
    damping: 30,
    mass: 0.6,
  });

  return (
    <section id="propuesta" ref={containerRef} className="relative h-[350vh] bg-[#F4F4F2] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Luces de fondo */}
        <motion.div
          style={{ y: bgY }}
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
        >
          <div className="absolute left-1/2 top-[25%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(196,154,108,0.22),transparent_60%)] blur-3xl" />
          <div className="absolute left-[12%] bottom-[15%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(43,107,116,0.10),transparent_65%)] blur-3xl" />
        </motion.div>

        {/* Contenedor de frases */}
        <div className="relative w-full max-w-5xl mx-auto text-center px-6 min-h-[300px] flex items-center justify-center">
          <motion.h2
            style={{ opacity: text1Opacity, y: text1Y }}
            className="absolute w-full text-3xl md:text-5xl lg:text-7xl font-light uppercase tracking-[0.2em] text-gray-900 leading-tight pointer-events-none select-none"
          >
            ORDENAMOS <br className="md:hidden" /> TU MENSAJE
          </motion.h2>

          <motion.h2
            style={{ opacity: text2Opacity, y: text2Y }}
            className="absolute w-full text-3xl md:text-5xl lg:text-7xl font-light uppercase tracking-[0.2em] text-gray-900 leading-tight pointer-events-none select-none"
          >
            ESTRUCTURAMOS <br className="md:hidden" /> TU PROPUESTA
          </motion.h2>

          <motion.h2
            style={{ opacity: text3Opacity, y: text3Y }}
            className="absolute w-full text-3xl md:text-5xl lg:text-7xl font-light uppercase tracking-[0.2em] text-gray-900 leading-tight pointer-events-none select-none"
          >
            APORTAMOS CLARIDAD <br className="md:hidden" /> Y DIRECCIÓN
          </motion.h2>
        </div>
      </div>
    </section>
  );
};
