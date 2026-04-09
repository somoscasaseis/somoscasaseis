"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#servicios", label: "NUESTROS SERVICIOS" },
    { href: "#quienes-somos", label: "QUIÉNES SOMOS" },
    { href: "#astrologia", label: "EN ASTROLOGÍA" },
    { href: "#contacto", label: "CONTACTO" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as const,
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as const,
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      }
    })
  };

  return (
    <>
      <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[94%] max-w-[1300px] z-50">
        <div className="bg-[#EFECE9] border border-[#E3DFDA]/50 rounded-full px-4 py-3 flex items-center justify-between shadow-sm backdrop-blur-sm">

          {/* Logo - Izquierda */}
          <div className="pl-4 md:pl-6 text-[18px] md:text-[20px] uppercase tracking-[0.25em] text-[#1D2A34] font-sans font-light">
            CASA SEIS
          </div>

          {/* Navegación - Desktop */}
          <nav className="hidden lg:flex gap-10 text-[10px] font-medium uppercase tracking-[0.2em] text-[#1D2A34]/70 font-sans">
            <a href="#servicios" className="hover:text-[#1D2A34] transition-colors">
              NUESTROS SERVICIOS
            </a>
            <a href="#quienes-somos" className="hover:text-[#1D2A34] transition-colors">
              QUIENES SOMOS
            </a>
            <a href="#astrologia" className="hover:text-[#1D2A34] transition-colors">
              EN ASTROLOGÍA
            </a>
          </nav>

          {/* Botón Contacto - Desktop / Burger - Mobile */}
          <div className="flex items-center pr-2">
            <a
              href="https://wa.me/5491155939599?text=Hola%20Casa%20Seis,%20quiero%20hacerte%20una%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block mr-2 border border-[#1D2A34] text-[#1D2A34] px-8 py-2.5 rounded-full text-[10px] font-medium uppercase tracking-[0.2em] hover:bg-[#1D2A34] hover:text-white transition-all duration-500 font-sans"
            >
              CONTACTO
            </a>

            {/* Burger Menu Button - Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center"
              aria-label="Menú"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="w-6 h-5 flex flex-col justify-between"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 10 }
                  }}
                  className="w-full h-[2px] bg-[#1D2A34] origin-left rounded-full"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  className="w-full h-[2px] bg-[#1D2A34] rounded-full"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -10 }
                  }}
                  className="w-full h-[2px] bg-[#1D2A34] origin-left rounded-full"
                />
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Menu - Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[60] bg-[#EFECE9] flex flex-col items-center justify-center"
          >
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(130,60,91,0.08),transparent_50%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_rgba(43,111,116,0.08),transparent_50%)] pointer-events-none" />

            {/* Logo and Close Button in menu */}
            <div className="absolute top-6 left-0 right-0 px-6 flex items-center justify-between z-50">
              <div className="text-[18px] uppercase tracking-[0.25em] text-[#1D2A34] font-sans font-light">
                CASA SEIS
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 flex items-center justify-center relative"
                aria-label="Cerrar menú"
              >
                <motion.span
                  className="absolute w-6 h-[2px] bg-[#1D2A34] rounded-full"
                  animate={{ rotate: 45 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute w-6 h-[2px] bg-[#1D2A34] rounded-full"
                  animate={{ rotate: -45 }}
                  transition={{ duration: 0.2 }}
                />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  onClick={() => setIsOpen(false)}
                  className="text-2xl md:text-3xl font-light text-[#1D2A34] tracking-[0.15em] hover:opacity-60 transition-opacity font-sans"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Contact info at bottom */}
            <motion.div
              custom={navLinks.length}
              variants={linkVariants}
              initial="closed"
              animate="open"
              className="absolute bottom-12 flex flex-col items-center gap-2 text-xs text-[#1D2A34]/60 font-mono tracking-widest uppercase"
            >
              <a href="mailto:casaseis.contacto@gmail.com" className="hover:opacity-60 transition-opacity">
                casaseis.contacto@gmail.com
              </a>
              <a href="https://instagram.com/casaseisok" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                @casaseisok
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
