"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const smoothX = useSpring(mousePos.x - 16, { stiffness: 250, damping: 20 });
  const smoothY = useSpring(mousePos.y - 16, { stiffness: 250, damping: 20 });

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#C49A6C] pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
      style={{
        x: smoothX,
        y: smoothY,
      }}
      animate={{
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "rgba(196, 154, 108, 0.4)" : "rgba(196, 154, 108, 0)",
      }}
    >
        <div className="w-1 h-1 bg-[#C49A6C] rounded-full" />
    </motion.div>
  );
};
