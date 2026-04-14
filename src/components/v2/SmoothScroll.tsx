"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Inicializar Lenis
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    const handleStop = () => {
      lenis.stop();
    };

    const handleStart = () => {
      lenis.start();
    };

    window.addEventListener("lenis:stop", handleStop);
    window.addEventListener("lenis:start", handleStart);

    // Conectar a requestAnimationFrame
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Limpieza al desmontar
    return () => {
      window.removeEventListener("lenis:stop", handleStop);
      window.removeEventListener("lenis:start", handleStart);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
