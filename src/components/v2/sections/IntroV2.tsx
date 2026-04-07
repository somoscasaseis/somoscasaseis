"use client";

import { motion, type Variants } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
} satisfies Variants;

const lineVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
} satisfies Variants;

const underlineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      delay: 2.1,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
} satisfies Variants;

const underlineSecondPassVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      delay: 2.22,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
} satisfies Variants;

const underlineJitterVariants = {
  hidden: { opacity: 0, y: 0, rotate: 0 },
  visible: {
    opacity: 1,
    y: [0, -0.6, 0.3, 0],
    rotate: [0, -0.2, 0.15, 0],
    transition: {
      delay: 2.08,
      duration: 0.9,
      ease: [0.65, 0, 0.35, 1] as const,
    },
  },
} satisfies Variants;

const lines = [
  "Bienvenidos a Casa Seis.",
  "Un espacio de acompañamiento estratégico",
  "y comunicación donde potenciamos",
] as const;

export const IntroV2 = () => {
  return (
    <section
      id="mirada"
      className="bg-[#F4F4F2] px-6 py-32 md:py-40"
    >
      <div className="mx-auto flex flex-col items-center text-center max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-xl md:text-3xl font-normal leading-relaxed text-slate-800"
        >
          {lines.map((line) => (
            <motion.p key={line} variants={lineVariants}>
              {line}
            </motion.p>
          ))}

          <motion.p variants={lineVariants}>
            <span className="relative inline-block text-gray-900 font-semibold">
              proyectos con propósito.
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

                  <motion.g
                    filter="url(#casa-seis-underline-roughen)"
                    variants={underlineJitterVariants}
                  >
                    <motion.path
                      d="M 6 18 Q 150 6 294 16"
                      stroke="#C49A6C"
                      strokeWidth="3.2"
                      fill="transparent"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      variants={underlineVariants}
                    />
                    <motion.path
                      d="M 7 19 Q 150 7 293 15"
                      stroke="#C49A6C"
                      strokeWidth="2.4"
                      fill="transparent"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.55"
                      variants={underlineSecondPassVariants}
                    />
                  </motion.g>
                </motion.svg>
              </span>
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
