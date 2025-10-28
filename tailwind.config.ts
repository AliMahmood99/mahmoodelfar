import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0F172A", // Navy Blue
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#475569", // Steel Blue
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#059669", // Emerald Green
          foreground: "#FFFFFF",
        },
        gold: {
          DEFAULT: "#CA8A04",
          foreground: "#FFFFFF",
        },
        // Egyptian Agricultural Luxury Palette
        egyptian: {
          green: {
            deep: "#1B4332",
            DEFAULT: "#40916C",
            light: "#52B788",
            pale: "#74C69D",
          },
          gold: {
            dark: "#B8956A",
            DEFAULT: "#D4A574",
            light: "#F5DEB3",
          },
          dark: {
            forest: "#0A1F1A",
            alt: "#0F2D23",
          },
        },
        background: "#FFFFFF",
        foreground: "#1E293B", // Dark Slate
        muted: {
          DEFAULT: "#F8FAFC", // Light Gray
          foreground: "#64748B", // Medium Gray
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1E293B",
        },
        border: "#E2E8F0",
        input: "#E2E8F0",
        ring: "#059669",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-tajawal)", "system-ui", "sans-serif"],
        arabic: ["var(--font-tajawal)", "system-ui", "sans-serif"],
        english: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 20px rgba(5, 150, 105, 0.5)" },
          "50%": { opacity: "0.8", boxShadow: "0 0 40px rgba(5, 150, 105, 0.8)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(212, 165, 116, 0.3)"
          },
          "50%": {
            boxShadow: "0 0 40px rgba(212, 165, 116, 0.6), 0 0 60px rgba(212, 165, 116, 0.4)"
          },
        },
        "rotate-slow": {
          "from": { transform: "rotate(0deg)" },
          "to": { transform: "rotate(360deg)" },
        },
        "slide-in-from-right": {
          "from": { transform: "translateX(100%)", opacity: "0" },
          "to": { transform: "translateX(0)", opacity: "1" },
        },
        "text-reveal": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "gradient-shift": "gradient-shift 5s ease infinite",
        "scale-in": "scale-in 0.5s ease-out",
        "bounce-subtle": "bounce-subtle 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "slide-in-from-right": "slide-in-from-right 0.6s ease-out",
        "text-reveal": "text-reveal 0.8s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "shimmer-gradient": "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
