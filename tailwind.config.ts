import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#f0f9f9",
                    100: "#d0eeef",
                    200: "#a1dde0",
                    300: "#6bc5cb",
                    400: "#3ca8b0",
                    500: "#1f8a93",
                    600: "#176e76",
                    700: "#145860",
                    800: "#12474d",
                    900: "#0f3a40",
                    950: "#082528",
                },
                accent: {
                    50: "#fff7ed",
                    100: "#ffedd5",
                    200: "#fed7aa",
                    300: "#fdba74",
                    400: "#fb923c",
                    500: "#f97316",
                    600: "#ea580c",
                    700: "#c2410c",
                    800: "#9a3412",
                    900: "#7c2d12",
                    950: "#431407",
                },
                neutral: {
                    50: "#fafaf9",
                    100: "#f5f5f4",
                    200: "#e7e5e4",
                    300: "#d6d3d1",
                    400: "#a8a29e",
                    500: "#78716c",
                    600: "#57534e",
                    700: "#44403c",
                    800: "#292524",
                    900: "#1c1917",
                    950: "#0c0a09",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            fontSize: {
                "display-1": ["clamp(3rem, 8vw, 6rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
                "display-2": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
                "heading-1": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
                "heading-2": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
                "heading-3": ["clamp(1.25rem, 2vw, 1.75rem)", { lineHeight: "1.3" }],
                "body-lg": ["1.25rem", { lineHeight: "1.6" }],
                "body": ["1.125rem", { lineHeight: "1.7" }],
                "body-sm": ["1rem", { lineHeight: "1.6" }],
            },
            spacing: {
                "18": "4.5rem",
                "22": "5.5rem",
                "30": "7.5rem",
                "34": "8.5rem",
            },
            animation: {
                "fade-in": "fadeIn 0.7s ease-out forwards",
                "fade-in-up": "fadeInUp 0.7s ease-out forwards",
                "fade-in-down": "fadeInDown 0.7s ease-out forwards",
                "scale-in": "scaleIn 0.5s ease-out forwards",
                "slide-in-right": "slideInRight 0.5s ease-out forwards",
                "slide-in-left": "slideInLeft 0.5s ease-out forwards",
                "pulse-slow": "pulse 3s ease-in-out infinite",
                "bounce-slow": "bounce 2s ease-in-out infinite",
                "gradient": "gradient 8s ease infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeInDown: {
                    "0%": { opacity: "0", transform: "translateY(-30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                scaleIn: {
                    "0%": { opacity: "0", transform: "scale(0.95)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                slideInRight: {
                    "0%": { opacity: "0", transform: "translateX(30px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                slideInLeft: {
                    "0%": { opacity: "0", transform: "translateX(-30px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                gradient: {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "hero-gradient": "linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 50%, var(--tw-gradient-to) 100%)",
            },
            boxShadow: {
                "soft": "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
                "medium": "0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)",
                "large": "0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 20px 50px -10px rgba(0, 0, 0, 0.1)",
                "glow": "0 0 30px -5px var(--tw-shadow-color)",
            },
            transitionDuration: {
                "400": "400ms",
                "600": "600ms",
                "800": "800ms",
            },
            transitionTimingFunction: {
                "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
                "bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
            },
        },
    },
    plugins: [],
};

export default config;
