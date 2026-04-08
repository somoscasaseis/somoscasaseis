"use client";

import { ArrowRight } from "lucide-react";

export const Navbar = () => {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="bg-[#EFEFED] rounded-full px-8 py-4 flex items-center justify-between shadow-sm">
        <div className="text-xl uppercase tracking-widest text-gray-900">
          CASA SEIS
        </div>

        <nav className="hidden md:flex gap-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-600">
          <a href="#servicios" className="hover:text-gray-900 transition-colors">
            NUESTROS SERVICIOS
          </a>
          <a href="#quienes" className="hover:text-gray-900 transition-colors">
            QUIENES SOMOS
          </a>
          <a href="#astrologia" className="hover:text-gray-900 transition-colors">
            EN ASTROLOGÍA
          </a>
        </nav>

        <a
          href="https://wa.me/5491155939599?text=Hola%20Casa%20Seis,%20quiero%20hacerte%20una%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          className="border border-gray-900 text-gray-900 px-6 py-2 rounded-full text-[11px] font-semibold uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors inline-flex items-center gap-2"
        >
          Contacto
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
};
