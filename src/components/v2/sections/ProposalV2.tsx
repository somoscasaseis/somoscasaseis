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

  // Texto 1
  const text1Opacity = useTransform(scrollYProgress, [0, 0.28, 0.35], [1, 1, 0]);
  const text1Y = useSpring(
    useTransform(scrollYProgress, [0, 0.28, 0.35], [0, 0, -shift]),
    { stiffness: 110, damping: 26, mass: 0.7 },
  );
  const text1Scale = useTransform(scrollYProgress, [0, 0.28, 0.35], [1, 1, 0.95]);

  // Texto 2
  const text2Opacity = useTransform(
    scrollYProgress,
    [0.32, 0.38, 0.62, 0.68],
    [0, 1, 1, 0],
  );
  const text2Y = useSpring(
    useTransform(
      scrollYProgress,
      [0.32, 0.38, 0.62, 0.68],
      [shift, 0, 0, -shift],
    ),
    { stiffness: 110, damping: 26, mass: 0.7 },
  );
  const text2Scale = useTransform(
    scrollYProgress,
    [0.32, 0.38, 0.62, 0.68],
    [0.95, 1, 1, 0.95],
  );

  // Texto 3
  const text3Opacity = useTransform(scrollYProgress, [0.65, 0.71, 0.95], [0, 1, 1]);
  const text3Y = useSpring(
    useTransform(scrollYProgress, [0.65, 0.71, 0.95], [shift, 0, 0]),
    { stiffness: 110, damping: 26, mass: 0.7 },
  );
  const text3Scale = useTransform(scrollYProgress, [0.65, 0.71, 0.95], [0.95, 1, 1]);

  const bgY = useSpring(useTransform(scrollYProgress, [0, 1], [18, -18]), {
    stiffness: 120,
    damping: 30,
    mass: 0.6,
  });

  return (
    <section id="propuesta" ref={containerRef} className="relative h-[400vh] bg-[#F4F4F2] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ y: bgY }}
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
        >
          <div className="absolute left-1/2 top-[25%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(196,154,108,0.22),transparent_60%)] blur-3xl" />
          <div className="absolute left-[12%] bottom-[15%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(43,107,116,0.10),transparent_65%)] blur-3xl" />
        </motion.div>

        <div className="relative w-full max-w-5xl mx-auto text-center select-none px-6 h-[200px] flex items-center justify-center">
          <motion.h2
            style={{ opacity: text1Opacity, y: text1Y, scale: text1Scale }}
            className="absolute w-full text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-[0.2em] text-gray-900 leading-[1.15] will-change-transform pointer-events-none"
          >
            ORDENAMOS TU MENSAJE
          </motion.h2>

          <motion.h2
            style={{ opacity: text2Opacity, y: text2Y, scale: text2Scale }}
            className="absolute w-full text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-[0.2em] text-gray-900 leading-[1.15] will-change-transform pointer-events-none"
          >
            ESTRUCTURAMOS TU PROPUESTA
          </motion.h2>

          <motion.h2
            style={{ opacity: text3Opacity, y: text3Y, scale: text3Scale }}
            className="absolute w-full text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-[0.2em] text-gray-900 leading-[1.15] will-change-transform pointer-events-none"
          >
            APORTAMOS CLARIDAD Y DIRECCIÓN
          </motion.h2>
        </div>
      </div>
    </section>
  );
};
