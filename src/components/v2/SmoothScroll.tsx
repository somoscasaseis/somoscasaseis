"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Inicializar Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing de Apple/Lenis standard
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Conectar a requestAnimationFrame
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Limpieza al desmontar
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
