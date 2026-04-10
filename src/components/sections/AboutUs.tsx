'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AboutUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0.1, 0.4], [0, 800]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0.3, 0.5], [50, 0]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[150vh] bg-background py-32 px-4 overflow-hidden"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        {/* Galería de fotos que se desplazan */}
        <motion.div 
          style={{ x }}
          className="absolute left-0 top-1/2 -translate-y-1/2 flex gap-12 px-20 z-10"
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="relative w-[300px] h-[450px] rounded-3xl overflow-hidden shadow-2xl shrink-0 bg-blue/10 flex items-center justify-center text-blue/30 italic"
            >
              Foto {i}
              {/* Aquí irían las fotos de Xime y Juli */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue/20 to-transparent" />
            </motion.div>
          ))}
        </motion.div>

        {/* Texto que se revela */}
        <motion.div 
          style={{ opacity, y }}
          className="max-w-3xl w-full text-left ml-[10%] pr-4"
        >
          <h2 className="text-4xl md:text-7xl font-bold text-blue mb-8 uppercase tracking-tighter">
            QUIÉNES <br /> SOMOS
          </h2>
          <div className="space-y-6 text-xl md:text-2xl text-blue/80 font-light leading-relaxed">
            <p>
              Somos <span className="font-bold text-blue">Xime y Juli</span>, el corazón detrás de Casa Seis.
            </p>
            <p>
              Fusionamos nuestras experiencias en comunicación, estrategia y mirada integral para acompañarte en tu proceso de expansión.
            </p>
            <p>
              Creemos en un abordaje que combine lo práctico con lo profundo, lo estratégico con lo intuitivo.
            </p>
          </div>
        </motion.div>

        {/* Fondo con degradado sutil */}
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-gold/10 rounded-full blur-[120px] -z-10" />
      </div>
    </section>
  );
};

export default AboutUs;
