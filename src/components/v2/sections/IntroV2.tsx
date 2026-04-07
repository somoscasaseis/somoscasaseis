"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

const lines = [
  "Bienvenidos a Casa Seis.",
  "Un espacio de acompañamiento estratégico",
  "y comunicación donde potenciamos",
  "proyectos con propósito.",
] as const;

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

const segmentForLine = (lineIndex: number) => {
  const total = lines.length;
  const start = 0.06 + (lineIndex / total) * 0.84;
  const end = start + 0.2;
  return { start: clamp01(start), end: clamp01(end) };
};

const Letter = ({
  ch,
  progress,
  start,
  end,
}: {
  ch: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) => {
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], [14, 0]);
  return (
    <motion.span style={{ opacity, y }} className="inline-block">
      {ch === " " ? "\u00A0" : ch}
    </motion.span>
  );
};

const LineReveal = ({
  text,
  progress,
  lineIndex,
  className,
}: {
  text: string;
  progress: MotionValue<number>;
  lineIndex: number;
  className?: string;
}) => {
  const { start, end } = segmentForLine(lineIndex);
  const chars = Array.from(text);
  const step = (end - start) / Math.max(chars.length, 1);

  return (
    <div className={className}>
      {chars.map((ch, i) => {
        const s = start + i * step;
        const e = s + step * 0.95;
        return <Letter key={`${lineIndex}-${i}`} ch={ch} progress={progress} start={s} end={e} />;
      })}
    </div>
  );
};

export const IntroV2 = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const underlineStart = 0.86;
  const underlineEnd = 0.98;
  const underlinePathLength = useTransform(scrollYProgress, [underlineStart, underlineEnd], [0, 1]);
  const underlineOpacity = useTransform(scrollYProgress, [underlineStart, underlineStart + 0.03], [0, 1]);

  return (
    <section
      id="mirada"
      ref={sectionRef}
      className="bg-[#F4F4F2] px-6 py-32 md:py-40"
    >
      <div className="mx-auto flex flex-col items-center text-center max-w-4xl">
        <div className="text-xl md:text-3xl font-normal leading-relaxed text-slate-800">
          <LineReveal text={lines[0]} progress={scrollYProgress} lineIndex={0} />
          <LineReveal text={lines[1]} progress={scrollYProgress} lineIndex={1} />
          <LineReveal text={lines[2]} progress={scrollYProgress} lineIndex={2} />

          <div className="relative inline-block text-gray-900 font-semibold">
            <LineReveal text={lines[3]} progress={scrollYProgress} lineIndex={3} />
            <span className="absolute -bottom-2 left-0 w-full">
              <motion.svg
                aria-hidden="true"
                width="100%"
                height="20"
                viewBox="0 0 300 24"
                fill="none"
                preserveAspectRatio="none"
              >
                <defs>
                  <filter id="casa-seis-underline-roughen">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.9"
                      numOctaves="2"
                      seed="2"
                      result="noise"
                    />
                    <feDisplacementMap
                      in="SourceGraphic"
                      in2="noise"
                      scale="0.9"
                      xChannelSelector="R"
                      yChannelSelector="G"
                    />
                  </filter>
                </defs>

                <g filter="url(#casa-seis-underline-roughen)">
                  <motion.path
                    d="M 6 18 Q 150 6 294 16"
                    stroke="#C49A6C"
                    strokeWidth="3.2"
                    fill="transparent"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ pathLength: underlinePathLength, opacity: underlineOpacity }}
                  />
                  <motion.path
                    d="M 7 19 Q 150 7 293 15"
                    stroke="#C49A6C"
                    strokeWidth="2.4"
                    fill="transparent"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ pathLength: underlinePathLength, opacity: underlineOpacity }}
                  />
                </g>
              </motion.svg>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
