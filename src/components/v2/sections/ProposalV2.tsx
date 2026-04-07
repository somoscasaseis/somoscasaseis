"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProposalV2 = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const shift = 70;

  const text1Opacity = useSpring(useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]), {
    stiffness: 90,
    damping: 26,
    mass: 0.7,
  });
  const text1Y = useSpring(useTransform(scrollYProgress, [0, 0.25, 0.33], [0, 0, -shift]), {
    stiffness: 90,
    damping: 26,
    mass: 0.7,
  });

  const text2Opacity = useSpring(
    useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [0, 1, 1, 0]),
    { stiffness: 90, damping: 26, mass: 0.7 },
  );
  const text2Y = useSpring(
    useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [shift, 0, 0, -shift]),
    { stiffness: 90, damping: 26, mass: 0.7 },
  );

  const text3Opacity = useSpring(useTransform(scrollYProgress, [0.58, 0.66, 1], [0, 1, 1]), {
    stiffness: 90,
    damping: 26,
    mass: 0.7,
  });
  const text3Y = useSpring(useTransform(scrollYProgress, [0.58, 0.66, 1], [shift, 0, 0]), {
    stiffness: 90,
    damping: 26,
    mass: 0.7,
  });

  const bgY = useSpring(useTransform(scrollYProgress, [0, 1], [18, -18]), {
    stiffness: 120,
    damping: 30,
    mass: 0.6,
  });

  return (
    <section id="propuesta" ref={containerRef} className="relative h-[300vh] bg-[#F4F4F2] w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: bgY }}
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
        >
          <div className="absolute left-1/2 top-[25%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(196,154,108,0.22),transparent_60%)] blur-3xl" />
          <div className="absolute left-[12%] bottom-[15%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(43,107,116,0.10),transparent_65%)] blur-3xl" />
        </motion.div>

        <div className="relative w-full max-w-5xl mx-auto text-center h-[40vh] min-h-[220px] flex items-center justify-center select-none">
          <motion.h2
            style={{ opacity: text1Opacity, y: text1Y }}
            className="absolute inset-0 flex items-center justify-center w-full text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-[0.2em] text-gray-900 will-change-transform"
          >
            ORDENAMOS TU MENSAJE
          </motion.h2>

          <motion.h2
            style={{ opacity: text2Opacity, y: text2Y }}
            className="absolute inset-0 flex items-center justify-center w-full text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-[0.2em] text-gray-900 will-change-transform"
          >
            ESTRUCTURAMOS TU PROPUESTA
          </motion.h2>

          <motion.h2
            style={{ opacity: text3Opacity, y: text3Y }}
            className="absolute inset-0 flex items-center justify-center w-full text-3xl md:text-5xl lg:text-6xl font-light uppercase tracking-[0.2em] text-gray-900 will-change-transform"
          >
            APORTAMOS CLARIDAD Y DIRECCIÓN
          </motion.h2>
        </div>
      </div>
    </section>
  );
};
