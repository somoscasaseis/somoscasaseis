"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const FooterV2 = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.1 });

  return (
    <footer
      ref={footerRef}
      className="relative pt-32 pb-16 px-6 flex flex-col items-center justify-end min-h-[650px] overflow-hidden"
    >
      {/* 
        FONDO PROPIO DEL FOOTER: Gradiente rico y textura
      */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* 1. EL GRADIENTE (USANDO EL JPG PARA MAYOR RIQUEZA VISUAL) */}
        <div className="absolute inset-0">
          <Image
            src="/overlay-footer.jpg"
            alt=""
            fill
            className="object-cover object-bottom opacity-70"
            priority
          />
        </div>

        {/* 2. LA TRAMA DE ICONOS (RELLENO ANIMADO TIPO HERO) */}
        <div className="absolute inset-x-0 bottom-0 top-0 opacity-[0.22] z-[1]">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern
                id="refined-footer-trama"
                x="0"
                y="0"
                width="240"
                height="240"
                patternUnits="userSpaceOnUse"
              >
                <image
                  href="/icon.svg"
                  x="-15"
                  y="-15"
                  width="270"
                  height="270"
                  className="opacity-100"
                />
              </pattern>

              <mask id="footer-fill-mask">
                <motion.rect
                  x="0"
                  width="100%"
                  initial={{ y: "100%", height: 0 }}
                  animate={isInView ? { y: "0%", height: "100%" } : {}}
                  transition={{ delay: 0.3, duration: 2, ease: [0.65, 0, 0.35, 1] }}
                  fill="white"
                />
              </mask>
            </defs>

            <rect
              width="100%"
              height="100%"
              fill="url(#refined-footer-trama)"
              mask="url(#footer-fill-mask)"
              className="opacity-[0.4]"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto mt-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-4 text-[#14627E] font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase pb-28">

          {/* LADO IZQUIERDO */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <p className="font-medium opacity-70">XIME GUERRICO / +54911 5593 9599</p>
            <p className="font-medium opacity-70">JULI PONZANO / +54911 5854 9011</p>
          </div>

          {/* CENTRO: Hexágono */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-52 h-52 md:w-60 md:h-60 flex items-center justify-center translate-y-[-10px]"
          >
            <Image
              src="/logo-footer.svg"
              alt="Casa Seis"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* LADO DERECHO */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <a href="mailto:casaseis.contacto@gmail.com" className="hover:opacity-50 transition-opacity lowercase font-medium opacity-70">
              casaseis.contacto@gmail.com
            </a>
            <a href="https://instagram.com/casaseisok" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity font-medium opacity-70">
              IG: @casaseisok
            </a>
          </div>

        </div>

        {/* Cierre copyright */}
        <div className="border-t border-[#14627E]/5 pt-12 text-center">
          <p className="text-[8px] md:text-[9px] text-[#14627E]/30 tracking-[0.5em] font-mono">
            CASA SEIS © 2026 / COMUNICACIÓN CONSCIENTE
          </p>
        </div>
      </div>
    </footer>
  );
};
