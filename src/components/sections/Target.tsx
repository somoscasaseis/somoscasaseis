'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';

const targets = [
  "Emprendimientos con propósito que buscan claridad.",
  "Profesionales de la salud y el bienestar.",
  "Proyectos de autoconocimiento y desarrollo personal.",
  "Marcas que quieren comunicar desde su esencia.",
  "Líderes que buscan estructurar su mensaje estratégico."
];

const Target = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const bulletVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      }
    })
  } satisfies Variants;

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        delay: 0.2,
        duration: 1.2,
        ease: [0.65, 0, 0.35, 1] as const,
      }
    }
  } satisfies Variants;

  return (
    <section ref={ref} className="min-h-screen bg-background py-32 px-4 flex items-center justify-center overflow-hidden">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-light text-blue mb-6 leading-tight"
          >
            ¿PARA <span className="font-bold">QUIÉN</span> ES?
          </motion.h2>
          
          <div className="relative inline-block w-full h-2">
            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="absolute left-0 bottom-0 h-1 bg-gold"
            />
          </div>
          
          <motion.p
             initial={{ opacity: 0 }}
             animate={isInView ? { opacity: 1 } : {}}
             transition={{ delay: 0.8, duration: 1 }}
             className="mt-8 text-xl text-blue/70 max-w-md font-light leading-relaxed"
          >
            Acompañamos a quienes buscan transformar su comunicación en una herramienta de impacto real.
          </motion.p>
        </div>

        <div className="space-y-6">
          {targets.map((target, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={bulletVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/50 border border-gold/10 hover:border-gold/30 hover:bg-white transition-all duration-300"
            >
              <CheckCircle2 className="text-gold shrink-0" size={24} />
              <p className="text-lg md:text-xl text-blue/90 font-light">
                {target}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Target;
