'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles } from 'lucide-react';

const Astrology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const blockVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.4,
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const,
      }
    })
  } satisfies Variants;

  return (
    <section ref={ref} className="min-h-screen bg-blue py-32 px-4 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="max-w-4xl w-full space-y-20">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={isInView ? { opacity: 1, scale: 1 } : {}}
           transition={{ duration: 1.5 }}
           className="flex flex-col items-center gap-6"
        >
          <Sparkles className="text-gold/50" size={80} strokeWidth={0.5} />
          <h2 className="text-4xl md:text-6xl font-light text-white uppercase tracking-widest leading-tight">
            ASTROLOGÍA Y <br /> <span className="font-bold text-gold">CASA SEIS</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          <motion.div
            custom={0}
            variants={blockVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-2xl md:text-3xl font-light text-white/90 leading-relaxed max-w-3xl mx-auto"
          >
            En astrología, la <span className="text-gold font-normal">Casa Seis</span> representa el orden cotidiano, el servicio, la salud y la mejora constante.
          </motion.div>

          <motion.div
            custom={1}
            variants={blockVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-xl md:text-2xl font-light text-white/70 leading-relaxed max-w-3xl mx-auto italic"
          >
            “Es el espacio donde organizamos nuestra energía para ponerla al servicio de algo más grande.”
          </motion.div>

          <motion.div
            custom={2}
            variants={blockVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-xl md:text-2xl font-light text-white/80 leading-relaxed max-w-3xl mx-auto"
          >
            De ahí nace nuestra esencia: acompañarte a encontrar ese orden y estructura en tu comunicación para que tu propósito brille con claridad.
          </motion.div>
        </div>

        {/* Decoración mística */}
        <div className="pt-12 flex justify-center gap-8 opacity-20">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className="w-2 h-2 rounded-full bg-gold"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Astrology;
