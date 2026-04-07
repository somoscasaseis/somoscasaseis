'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

const Introduction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      }
    })
  } satisfies Variants;

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.5,
        ease: [0.65, 0, 0.35, 1] as const,
      }
    }
  } satisfies Variants;

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-background px-4 py-20">
      <div className="max-w-5xl w-full text-center space-y-12">
        <div className="relative inline-block mb-12">
          <motion.h2
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            className="text-4xl md:text-6xl font-light text-blue"
          >
            NUESTRA MIRADA
          </motion.h2>
          
          {/* Línea decorativa tipo marcador */}
          <motion.svg
            width="100%"
            height="10"
            viewBox="0 0 400 10"
            fill="none"
            className="absolute -bottom-4 left-0"
          >
            <motion.path
              d="M5 5 Q200 8 395 5"
              stroke="#ABA081"
              strokeWidth="3"
              strokeLinecap="round"
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
          </motion.svg>
        </div>

        <div className="space-y-8">
          <motion.p
            custom={1}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            className="text-2xl md:text-4xl font-light text-blue/90 leading-relaxed"
          >
            Creemos en la <span className="text-gold font-normal italic">comunicación con propósito</span>.
          </motion.p>

          <motion.p
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={textVariants}
            className="text-xl md:text-2xl font-light text-blue/70 max-w-3xl mx-auto leading-relaxed"
          >
            No se trata solo de qué decís, sino de cómo lo hacés y desde dónde te parás. 
            Te acompañamos a estructurar tu mensaje para que resuene con claridad.
          </motion.p>
        </div>

        {/* Otra línea decorativa */}
        <div className="pt-12 flex justify-center">
          <motion.svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            fill="none"
            className="text-gold/30"
          >
             <motion.path
              d="M10 50 Q50 90 90 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
          </motion.svg>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
