import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        grow: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.15)" },
        },
        slideInOut: {
          "0%": { transform: "translateX(100vw)" }, // Start outside the right edge
          "10%": { transform: "translateX(0)" }, // Slide in
          "90%": { transform: "translateX(0)" }, // Stay in place
          "100%": { transform: "translateX(100vw)" }, // Slide out
        },
      },
      animation: {
        fadeOut: "fadeOut 0.5s ease-in-out forwards",
        grow: "grow 0.5s ease-in-out",
        "slide-in-out": "slideInOut 6s ease-in-out 4s infinite",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

export default config;
