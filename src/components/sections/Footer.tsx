'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.65, 0, 0.35, 1] as const,
      }
    }
  } satisfies Variants;

  const hexVariants = {
    hidden: { scale: 0, opacity: 0, y: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 1,
        type: "spring" as const,
        stiffness: 100,
      }
    }
  } satisfies Variants;

  return (
    <footer ref={ref} className="relative min-h-[60vh] bg-background py-24 px-4 overflow-hidden flex flex-col items-center justify-center">
      {/* Línea divisoria dibujada a mano */}
      <div className="absolute top-0 left-0 w-full h-20">
        <motion.svg
          width="100%"
          height="40"
          viewBox="0 0 1000 40"
          fill="none"
          preserveAspectRatio="none"
          className="text-gold"
        >
          <motion.path
            d="M0 20 Q250 15 500 20 T1000 20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        </motion.svg>
      </div>

      <div className="max-w-4xl w-full text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-light text-blue"
        >
          ¿EMPEZAMOS EL <br /> <span className="font-bold uppercase tracking-widest">CAMINO JUNTOS?</span>
        </motion.h2>

        <motion.div
           initial={{ opacity: 0 }}
           animate={isInView ? { opacity: 1 } : {}}
           transition={{ delay: 0.8, duration: 1 }}
           className="pt-4"
        >
          <a
            href="https://wa.me/5491155939599?text=Hola%20Casa%20Seis,%20quiero%20hacerte%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue text-white px-12 py-5 rounded-full text-xl hover:bg-blue/90 transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95"
          >
            Hablemos por WhatsApp
          </a>
        </motion.div>

        {/* Logo Hexagonal animado */}
        <div className="pt-20 flex flex-col items-center gap-6">
          <motion.div
            variants={hexVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative w-24 h-24 flex items-center justify-center"
          >
            <motion.svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-blue"
            >
              <motion.path
                d="M50 5 L90 27.5 V72.5 L50 95 L10 72.5 V27.5 Z"
                stroke="currentColor"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ delay: 1, duration: 2 }}
              />
              <motion.path
                d="M50 20 L75 35 V65 L50 80 L25 65 V35 Z"
                fill="currentColor"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
                transition={{ delay: 2, duration: 1 }}
              />
            </motion.svg>
            <span className="absolute text-blue font-bold text-xs tracking-widest">C6</span>
          </motion.div>

          <div className="space-y-2">
            <p className="text-blue/60 text-sm tracking-[0.3em] font-light uppercase">
              CASA SEIS • 2026
            </p>
            <p className="text-blue/40 text-xs tracking-widest font-light">
              BUENOS AIRES, ARGENTINA
            </p>
          </div>
        </div>
      </div>

      {/* Textura de fondo (sutil degradado) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#ABA08111_0%,transparent_70%)] -z-10" />
    </footer>
  );
};

export default Footer;
