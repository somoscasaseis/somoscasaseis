"use client";

import Link from "next/link";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/v2/Button";
import { cn } from "@/components/v2/cn";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#mirada", label: "Mirada" },
  { href: "#propuesta", label: "Propuesta" },
  { href: "#servicios", label: "Servicios" },
];

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "bg-bg-base/70 backdrop-blur-md border-b border-black/10"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="#inicio"
          className="text-xs md:text-sm uppercase tracking-[0.35em] font-light text-black"
        >
          CASA SEIS
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.25em] text-black/70 hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          href="https://wa.me/5491155939599?text=Hola%20Casa%20Seis,%20quiero%20hacerte%20una%20consulta."
          variant="outline"
          icon={<ArrowRight className="h-3.5 w-3.5" />}
          target="_blank"
        >
          Contacto
        </Button>
      </div>
    </header>
  );
};
