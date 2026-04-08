"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplitReveal } from "@/components/v2/Text/SplitReveal";

const steps = [
  { id: "01", title: "ORDEN", desc: "Coherencia en cada fibra de tu mensaje." },
  { id: "02", title: "ESTRUCTURA", desc: "El andamiaje que permite la expansión." },
  { id: "03", title: "ALQUIMIA", desc: "Transformar visión en realidad tangible." }
];

export const ProposalJM = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="bg-white py-32 md:py-60 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-foreground/5">
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className={`group relative p-12 md:p-20 transition-colors duration-500 hover:bg-black hover:text-white ${
                index !== 2 ? "md:border-r border-foreground/5" : ""
              }`}
            >
              <span className="font-mono text-[9px] tracking-[0.6em] text-[#C49A6C] block mb-12">
                PASO {step.id}
              </span>
              
              <h4 className="text-4xl md:text-5xl lg:text-6xl font-thin tracking-tighter mb-10 group-hover:scale-110 transition-transform origin-left duration-700">
                {step.title}
              </h4>
              
              <p className="text-sm md:text-base font-light tracking-wide text-foreground/50 group-hover:text-white/70 transition-colors duration-500 max-w-[200px]">
                {step.desc}
              </p>

              {/* Decorative Circle that appears on hover */}
              <div className="absolute top-1/2 right-10 -translate-y-1/2 w-32 h-32 border border-foreground/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 pointer-events-none flex items-center justify-center">
                 <div className="w-1 h-1 bg-[#C49A6C] rounded-full animate-ping" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
