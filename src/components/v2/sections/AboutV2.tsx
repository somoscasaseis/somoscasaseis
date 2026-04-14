"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { SplitReveal } from "@/components/v2/Text/SplitReveal";

export const AboutV2 = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 32,
    restDelta: 0.001,
  });

  // Desktop: Original choreography
  // Desktop: Text appears much faster
  const textOpacity = useTransform(smoothScroll, [0, 0.15], [0, 1]);
  const desktopBackgroundOpacity = useTransform(smoothScroll, [0, 0.1], [0, 1]);
  
  // Desktop and Mobile Images slider duration (longer = smoother/slower)
  const galleryContainerX = useTransform(smoothScroll, [0.2, 0.8], ["0%", "50%"]);
  
  // Accordion effect: starts full screen, compresses precisely into the right half
  // (25% + 12.5% + 12.5% = 50% of the container)
  const widthFirst = useTransform(smoothScroll, [0.2, 0.8], ["33.33%", "25%"]);
  const widthOthers = useTransform(smoothScroll, [0.2, 0.8], ["33.33%", "12.5%"]);

  // Mobile: animaciones unificadas - todo aparece junto más rápido
  const mobileTextOpacity = useTransform(smoothScroll, [0, 0.08], [0, 1]);
  const mobileTextY = useTransform(smoothScroll, [0, 0.08], [20, 0]);
  const mobileBackgroundOpacity = useTransform(smoothScroll, [0, 0.05], [0, 1]);

  const imagesOpacity = useTransform(smoothScroll, [0.05, 0.15], [0, 1]);
  const imagesY = useTransform(smoothScroll, [0.05, 0.15], [24, 0]);

  return (
    <section
      id="quienes-somos"
      ref={sectionRef}
      className="relative h-[175vh] md:h-[250vh] bg-[#EFEFED] w-full scroll-mt-20"
    >
      <div className="sticky top-0 h-screen w-full flex overflow-hidden">

        {/* DESKTOP: Column layout */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="hidden md:flex relative w-1/2 h-full flex-col justify-center px-12 md:px-24 z-10"
        >
          <motion.div
            style={{ opacity: desktopBackgroundOpacity, background: "linear-gradient(135deg, #1E5F5E 0%, #3D3A4B 40%, #823C5B 80%, #5B3A5A 100%)" }}
            className="absolute inset-0"
          />
          <motion.div
            style={{ opacity: desktopBackgroundOpacity }}
            className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_10%,_rgba(215,153,110,0.15),transparent_60%)] pointer-events-none"
          />

          <h2 className="text-3xl md:text-5xl font-light tracking-[0.15em] text-white uppercase mb-10 relative z-10">
            <SplitReveal text="¿QUIÉNES SOMOS?" />
          </h2>

          <div className="space-y-6 text-sm md:text-base font-light leading-relaxed text-white/90 max-w-lg relative z-10">
            <p>
              Somos <strong>Xime y Juli</strong>, comunicadoras con más de 15 años de experiencia y un camino recorrido de desarrollo personal a través de terapias y herramientas holísticas. Entendemos de mensajes, de personas y de procesos.
            </p>
            <p>
              También conocemos el detrás de escena: la duda, el desorden, la sobrecarga que aparece cuando un proyecto crece sin estructura.
            </p>
            <p className="font-bold text-white/100">
              Por eso creamos Casa Seis. Para ordenar lo que hoy te pesa y darle dirección a lo que quiere expandirse.
            </p>
          </div>

          <div className="pt-12 relative z-10">
            <a
              href="https://wa.me/5491155939599"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#823C5B] text-white px-10 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-[0.3em] hover:brightness-110 transition-all shadow-lg shadow-black/20"
            >
              QUIERO EMPEZAR
            </a>
          </div>
        </motion.div>

        {/* DESKTOP: Gallery accordion */}
        <motion.div
          style={{ x: galleryContainerX }}
          className="hidden md:flex absolute inset-0 flex w-full h-full z-20"
        >
          <motion.div
            style={{ width: widthFirst }}
            className="relative h-full overflow-hidden border-l border-white/5"
          >
            <Image src="/4.jpg" alt="1" fill className="object-cover" priority />
          </motion.div>

          <motion.div
            style={{ width: widthOthers }}
            className="relative h-full overflow-hidden border-l border-white/10 shadow-[-20px_0_40px_rgba(0,0,0,0.5)]"
          >
            <Image src="/3.jpg" alt="2" fill className="object-cover" priority />
          </motion.div>

          <motion.div
            style={{ width: widthOthers }}
            className="relative h-full overflow-hidden border-l border-white/10 shadow-[-20px_0_40px_rgba(0,0,0,0.5)]"
          >
            <Image src="/2.jpg" alt="3" fill className="object-cover" priority />
          </motion.div>
        </motion.div>

        {/* MOBILE: Stacked layout with background image */}
        <div id="about-content" className="flex md:hidden flex-col w-full h-full relative">
          {/* Mobile background image */}
          <motion.div
            style={{ opacity: mobileBackgroundOpacity }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/quienes-somos.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>

          {/* Mobile: Text top */}
          <motion.div
            style={{ opacity: mobileTextOpacity, y: mobileTextY }}
            className="relative z-20 px-8 pt-12 md:pt-16"
          >
            <h2 className="text-3xl font-light tracking-[0.15em] text-white uppercase mt-8 mb-6">
              ¿QUIÉNES SOMOS?
            </h2>

            <div className="space-y-4 text-sm font-light leading-relaxed text-white/90">
              <p>
                Somos <strong>Xime y Juli</strong>, comunicadoras con más de 15 años de experiencia y un camino recorrido de desarrollo personal a través de terapias y herramientas holísticas. Entendemos de mensajes, de personas y de procesos.
              </p>
              <p>
                También conocemos el detrás de escena: la duda, el desorden, la sobrecarga que aparece cuando un proyecto crece sin estructura.
              </p>
              <p className="font-bold text-white/100">
                Por eso creamos Casa Seis, Para ordenar lo que hoy te pesa y darle dirección a lo que quiere expandirse.
              </p>
            </div>

            <div className="pt-6 pb-8">
              <a
                href="https://wa.me/5491155939599"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#823C5B] text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:brightness-110 transition-all"
              >
                QUIERO EMPEZAR
              </a>
            </div>
          </motion.div>

          {/* Mobile: Images row at bottom */}
          <div className="relative z-20 flex flex-row w-full h-[45vh] mt-auto pb-0 px-0 gap-0">
            <motion.div
              style={{ opacity: imagesOpacity, y: imagesY }}
              className="relative overflow-hidden w-[50%]"
            >
              <Image src="/4.jpg" alt="1" fill className="object-cover" />
            </motion.div>

            <motion.div
              style={{ opacity: imagesOpacity, y: imagesY }}
              className="relative overflow-hidden w-[25%]"
            >
              <Image src="/3.jpg" alt="2" fill className="object-cover" />
            </motion.div>

            <motion.div
              style={{ opacity: imagesOpacity, y: imagesY }}
              className="relative overflow-hidden w-[25%]"
            >
              <Image src="/2.jpg" alt="3" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};