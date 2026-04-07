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
      className="relative bg-[#efefed] pt-32 pb-16 px-6 flex flex-col items-center justify-end min-h-[650px] overflow-hidden"
    >
      {/* TEXTURA DE FONDO (Máscara sutil) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <mask id="footer-texture-mask">
              <motion.rect
                x="0"
                y="100%"
                width="100%"
                height="100%"
                fill="white"
                initial={{ y: "100%" }}
                animate={isInView ? { y: "0%" } : { y: "100%" }}
                transition={{ duration: 2, ease: [0.65, 0, 0.35, 1] }}
              />
            </mask>
          </defs>
          <rect 
            width="100%" 
            height="100%" 
            fill="url(#footer-pattern)" 
            mask="url(#footer-texture-mask)" 
            className="opacity-[0.3]"
          />
          <pattern id="footer-pattern" patternUnits="userSpaceOnUse" width="400" height="400">
            <image href="/overlay-footer.jpg" x="0" y="0" width="400" height="400" />
          </pattern>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-4 text-[#14627E] font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase pb-32">
          
          {/* LADO IZQUIERDO */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <p className="font-medium opacity-70">XIME GUERRICO / +54911 5593 9599</p>
            <p className="font-medium opacity-70">JULI PONZANO / +54911 5854 9011</p>
          </div>

          {/* CENTRO: Hexágono */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center translate-y-[-10px]"
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

        {/* Cierre copyright sutil */}
        <div className="border-t border-[#14627E]/5 pt-12 text-center">
            <p className="text-[8px] md:text-[9px] text-[#14627E]/30 tracking-[0.5em] font-mono">
                CASA SEIS © 2026 / COMUNICACIÓN CONSCIENTE
            </p>
        </div>
      </div>
    </footer>
  );
};
