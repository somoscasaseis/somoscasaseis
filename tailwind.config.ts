import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "bg-base": "#F4F4F2",
        "accent-gold": "#C49A6C",
        "card-blue": "#1F3A4B",
        "card-teal": "#2B6B74",
        "card-plum": "#823C5B",
      },
      fontFamily: {
        sans: ['"DM Sans"', "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
} satisfies Config;

