"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export const FooterV2 = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.2 });

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#efefed] pt-32 pb-20 px-6 overflow-hidden min-h-[500px] flex flex-col justify-end"
    >
      {/* Texture Overlay - "Relleno" animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={isInView ? { y: "0%" } : { y: "100%" }}
          transition={{ duration: 2, ease: [0.65, 0, 0.35, 1] }}
          className="absolute inset-0 w-full h-full opacity-[0.4]"
        >
          <Image
            src="/overlay-footer.jpg"
            alt=""
            fill
            className="object-cover object-bottom"
          />
        </motion.div>
        {/* Gradient blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#efefed]/80 to-[#efefed]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 text-[#14627E] font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase">
          
          {/* Column 1 - Names */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <p>XIME GUERRICO / +54911 5593 9599</p>
            <p>JULI PONZANO / +54911 5854 9011</p>
          </div>

          {/* Center - Hexagon Logo */}
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-40 h-40 flex items-center justify-center translate-y-[-10px]"
          >
            <Image
                src="/logo-footer.svg"
                alt="Casa Seis Hexagon"
                fill
                className="object-contain"
                priority
            />
          </motion.div>

          {/* Column 3 - Socials */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <a href="mailto:casaseis.contacto@gmail.com" className="hover:opacity-70 transition-opacity">
              CASASEIS.CONTACTO@GMAIL.COM
            </a>
            <a href="https://instagram.com/casaseisok" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              IG: @CASASEISOK
            </a>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="mt-20 pt-8 border-t border-[#14627E]/10 flex justify-center">
            <p className="text-[9px] text-[#14627E]/40 tracking-[0.3em] font-mono">
                CASA SEIS © 2026 / COMUNICACIÓN CONSCIENTE
            </p>
        </div>
      </div>
    </footer>
  );
};
