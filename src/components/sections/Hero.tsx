'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    initial: {
      background: 'linear-gradient(135deg, #efefed 0%,rgb(255, 255, 255) 100%)',
    },
    animate: {
      background: 'linear-gradient(135deg, #efefed 100%, #efefed 100%)',
      transition: {
        duration: 2,
        ease: [0.65, 0, 0.35, 1] as const,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.5 + i * 0.2,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      }
    })
  };

  const logoPathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: [0.65, 0, 0.35, 1] as const,
      }
    }
  };

  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={containerVariants}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
    >
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Logo SVG Animado */}
        <div className="flex justify-center mb-12">
          <motion.svg
            width="200"
            height="200"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-blue"
          >
            {/* Tallo Principal */}
            <motion.path
              d="M50 90 Q50 50 50 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              variants={logoPathVariants}
              initial="hidden"
              animate="visible"
            />
            {/* Rama 1 */}
            <motion.path
              d="M50 70 Q30 60 20 40"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              variants={logoPathVariants}
              initial="hidden"
              animate="visible"
            />
            {/* Rama 2 */}
            <motion.path
              d="M50 50 Q70 40 80 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              variants={logoPathVariants}
              initial="hidden"
              animate="visible"
            />
            {/* Hojitas/Detalles */}
            <motion.circle
              cx="20" cy="40" r="2"
              fill="currentColor"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            />
            <motion.circle
              cx="80" cy="20" r="2"
              fill="currentColor"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            />
          </motion.svg>
        </div>

        {/* Título */}
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="text-5xl md:text-7xl font-light text-blue tracking-tight"
        >
          CASA <span className="font-bold">SEIS</span>
        </motion.h1>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="text-xl md:text-2xl text-blue/80 max-w-2xl mx-auto font-light"
        >
          Acompañamiento estratégico y comunicación con mirada integral.
        </motion.p>

        {/* Botones */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <a
            href="https://wa.me/5491155939599?text=Hola%20Casa%20Seis,%20quiero%20hacerte%20una%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue text-white px-8 py-4 rounded-full text-lg hover:bg-blue/90 transition-colors shadow-lg"
          >
            Empezá ahora
          </a>
          <button className="border border-blue text-blue px-8 py-4 rounded-full text-lg hover:bg-blue/5 transition-colors">
            Nuestra mirada
          </button>
        </motion.div>
      </div>

      {/* Indicador de Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-gold/50 mx-auto" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;
