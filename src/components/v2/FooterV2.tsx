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
      {/* CAPA 1: GRADIENTE BASE (CSS) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ 
          background: "linear-gradient(to top, rgba(232, 200, 176, 0.45) 0%, rgba(239, 239, 237, 1) 90%)" 
        }} 
      />

      {/* CAPA 2: TRAMA DE LOGOS (CSS REPEAT + RELLENO ANIMADO) */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={isInView ? { height: "70%", opacity: 0.8 } : {}}
        transition={{ delay: 0.2, duration: 2, ease: [0.65, 0, 0.35, 1] }}
        className="absolute inset-x-0 bottom-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: "url('/icon.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "220px auto",
          opacity: 0.45,
          maskImage: "linear-gradient(to top, black 80%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 80%, transparent 100%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-4 text-[#14627E] font-mono text-[9px] md:text-[10px] tracking-[0.3em] uppercase pb-32">
          
          {/* LADO IZQUIERDO */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <p className="font-medium opacity-80">XIME GUERRICO / +54911 5593 9599</p>
            <p className="font-medium opacity-80">JULI PONZANO / +54911 5854 9011</p>
          </div>

          {/* CENTRO: Hexágono (Logo-footer) */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-52 h-52 md:w-64 md:h-64 flex items-center justify-center translate-y-[-15px]"
          >
            <Image
              src="/logo-footer.svg"
              alt="Casa Seis Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          {/* LADO DERECHO */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <a href="mailto:casaseis.contacto@gmail.com" className="hover:opacity-60 transition-opacity lowercase font-medium opacity-80">
              casaseis.contacto@gmail.com
            </a>
            <a href="https://instagram.com/casaseisok" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity font-medium opacity-80">
              IG: @casaseisok
            </a>
          </div>

        </div>

        {/* Copyright final */}
        <div className="border-t border-[#14627E]/5 pt-12 text-center">
            <p className="text-[8px] md:text-[10px] text-[#14627E]/30 tracking-[0.5em] font-mono">
                CASA SEIS © 2026 / COMUNICACIÓN CONSCIENTE
            </p>
        </div>
      </div>
    </footer>
  );
};
