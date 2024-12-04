import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#FFFFFF",
        primary: {
          default: "#FFDD59",
          hover: "#FFFCEF",
        },
        muted: "#9CA3AF",
        dice: {
          first: "#FF4035",
          second: "#4D66F3",
        },
      },
      keyframes: {
        "slide-in-from-left": {
          "0%": { transform: "translateX(-30%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "slide-in-from-left": "slide-in-from-left 0.2s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
