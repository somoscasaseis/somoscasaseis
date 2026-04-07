"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProposalV2 = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const text1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0, 0.25, 0.33], ["0%", "0%", "-50%"]);

  const text2Opacity = useTransform(
    scrollYProgress,
    [0.25, 0.33, 0.58, 0.66],
    [0, 1, 1, 0],
  );
  const text2Y = useTransform(
    scrollYProgress,
    [0.25, 0.33, 0.58, 0.66],
    ["50%", "0%", "0%", "-50%"],
  );

  const text3Opacity = useTransform(scrollYProgress, [0.58, 0.66, 1], [0, 1, 1]);
  const text3Y = useTransform(scrollYProgress, [0.58, 0.66, 1], ["50%", "0%", "0%"]);

  return (
    <section id="propuesta" ref={containerRef} className="relative h-[300vh] bg-[#F4F4F2] w-full">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-5xl mx-auto text-center h-[40vh] min-h-[220px] flex items-center justify-center">
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
