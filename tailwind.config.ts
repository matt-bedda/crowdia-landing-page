import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        magenta: {
          DEFAULT: "#FF007F",
          50: "#FFE5F0",
          100: "#FFB8D9",
          200: "#FF8ABF",
          300: "#FF5CA6",
          400: "#FF2E8C",
          500: "#FF007F",
          600: "#CC0066",
          700: "#99004D",
          800: "#660033",
          900: "#33001A",
        },
        charcoal: {
          DEFAULT: "#2E2E2E",
          50: "#B8B8B8",
          100: "#A8A8A8",
          200: "#888888",
          300: "#686868",
          400: "#484848",
          500: "#2E2E2E",
          600: "#1E1E1E",
          700: "#141414",
          800: "#0A0A0A",
          900: "#000000",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        inter: ["var(--font-inter)"],
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 20px #FF007F, 0 0 40px #FF007F, 0 0 60px #FF007F",
          },
          "50%": {
            boxShadow: "0 0 30px #FF007F, 0 0 60px #FF007F, 0 0 90px #FF007F",
          },
        },
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
