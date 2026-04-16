"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { SplitReveal } from "@/components/v2/Text/SplitReveal";
import { getWhoIsItFor, type WhoIsItFor } from "@/lib/sanity/queries";

export const WhoIsItForV2 = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const [whoIsItFor, setWhoIsItFor] = useState<WhoIsItFor | null>(null);

  useEffect(() => {
    getWhoIsItFor().then(setWhoIsItFor);
  }, []);

  const targetItems = whoIsItFor?.targetItems || [
    "autoconocimiento y desarrollo personal",
    "salud integral y bienestar",
    "cuerpo y movimiento",
    "terapias complementarias",
  ];

  const isInView = useInView(containerRef, { once: true, amount: 0.3 });



  


  const bulletVariants = {

    hidden: { opacity: 0, x: -10 },

    visible: (i: number) => ({

      opacity: 1,

      x: 0,

      transition: {

        delay: 1.2 + i * 0.15,

        duration: 0.8,

        ease: [0.16, 1, 0.3, 1] as const,

      },

    }),

  };



  return (
    <section
      id="para-quien"
      ref={containerRef}
      className="bg-[#efefed] px-6 pt-24 pb-24 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl">

        {/* Título con línea que se dibuja */}

        <div className="relative inline-block mb-12">

          <h2 className="text-xl md:text-4xl font-light text-foreground uppercase tracking-[0.18em]">

            <SplitReveal text={whoIsItFor?.title || "¿PARA QUIÉN ES CASA SEIS?"} stagger={0.05} />

          </h2>



          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "110%" } : { width: 0 }}
            transition={{ delay: 0.9, duration: 1.3, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-[5%] h-4 md:h-5 overflow-hidden z-10 pointer-events-none"
          >
            <div className="relative w-full h-full">
              <Image
                src="/linea-para-quien-es.png"
                alt=""
                fill
                className="object-contain object-center"
              />
            </div>
          </motion.div>

        </div>



        {/* Intro con fade in */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-xl md:text-2xl text-foreground/80 font-light mb-10 leading-relaxed max-w-2xl"
        >
          {whoIsItFor?.description || "Trabajamos especialmente con proyectos vinculados a:"}
        </motion.p>



        {/* Lista de bullets que aparecen uno por uno */}

        <div className="space-y-6">

          {targetItems.map((item, i) => (

            <motion.div

              key={item}

              custom={i}

              variants={bulletVariants}

              initial="hidden"

              animate={isInView ? "visible" : "hidden"}

              className="flex items-start gap-4"

            >

              <span className="text-2xl text-foreground font-light mt-[-2px]">

                —

              </span>

              <p className="text-xl md:text-2xl text-foreground/90 font-light tracking-wide leading-tight first-letter:uppercase">

                {item}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );

};

