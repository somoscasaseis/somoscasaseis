'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, ListChecks, Play } from 'lucide-react';

const pillars = [
  {
    id: 'diagnostico',
    title: 'DIAGNÓSTICO',
    icon: Search,
    description: 'Analizamos la situación actual para identificar los puntos de mejora y las oportunidades de crecimiento.',
    color: '#14627E',
  },
  {
    id: 'orden',
    title: 'ORDEN',
    icon: ListChecks,
    description: 'Estructuramos tu propuesta y mensaje para que sea claro, coherente y efectivo.',
    color: '#ABA081',
  },
  {
    id: 'accion',
    title: 'ACCIÓN',
    icon: Play,
    description: 'Implementamos la estrategia definida para alcanzar tus objetivos y potenciar tu comunicación.',
    color: '#14627E',
  },
];

const Methodology = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-background py-32 px-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-light text-blue mb-4 uppercase tracking-wider">
          Metodología
        </h2>
        <p className="text-xl text-blue/60 uppercase tracking-widest font-light">
          Los 3 Pilares
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {pillars.map((pillar) => {
          const isHovered = hoveredId === pillar.id;
          const isSomeHovered = hoveredId !== null && !isHovered;

          return (
            <motion.div
              key={pillar.id}
              onMouseEnter={() => setHoveredId(pillar.id)}
              onMouseLeave={() => setHoveredId(null)}
              animate={{
                scale: isHovered ? 1.05 : 1,
                filter: isSomeHovered ? 'blur(4px)' : 'blur(0px)',
                opacity: isSomeHovered ? 0.6 : 1,
              }}
              transition={{
                duration: 0.4,
                ease: [0.65, 0, 0.35, 1] as const,
              }}
              className="relative p-10 h-[450px] flex flex-col items-center justify-center text-center rounded-3xl overflow-hidden cursor-default shadow-xl group"
              style={{ 
                backgroundColor: pillar.id === 'orden' ? '#ABA081' : '#14627E',
                color: '#fff'
              }}
            >
              <div className="mb-8">
                <pillar.icon size={64} strokeWidth={1} className="text-white/80 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-widest">{pillar.title}</h3>
              <p className="text-lg font-light leading-relaxed text-white/90">
                {pillar.description}
              </p>
              
              {/* Decoración sutil de fondo del card */}
              <div className="absolute top-0 right-0 p-6 opacity-10">
                 <pillar.icon size={120} strokeWidth={0.5} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Methodology;
