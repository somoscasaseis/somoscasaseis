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
      className="relative bg-[#efefed] pt-24 pb-20 px-6 overflow-hidden min-h-[500px] flex flex-col justify-end"
    >
      {/* Texture Overlay - Tiled Repeat Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 1.05, y: 20 }}
          animate={isInView ? { opacity: 0.35, scale: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-x-0 bottom-0 w-full h-[60%]"
          style={{ 
            backgroundImage: "url('/overlay-footer.jpg')",
            backgroundRepeat: "repeat",
            backgroundSize: "600px auto"
          }}
        />
        {/* Soft edge blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#efefed]/20 to-[#efefed]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 text-[#14627E] font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase">
          
          {/* Column 1 - Names */}
          <div className="flex flex-col items-center md:items-start space-y-5">
            <p className="font-medium">XIME GUERRICO / +54911 5593 9599</p>
            <p className="font-medium">JULI PONZANO / +54911 5854 9011</p>
          </div>

          {/* Center - Hexagon Logo */}
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center translate-y-[-15px]"
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
          <div className="flex flex-col items-center md:items-end space-y-5">
            <a href="mailto:casaseis.contacto@gmail.com" className="hover:opacity-70 transition-opacity lowercase font-medium">
              casaseis.contacto@gmail.com
            </a>
            <a href="https://instagram.com/casaseisok" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity font-medium">
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
