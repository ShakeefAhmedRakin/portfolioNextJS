import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        backgroundDark: "var(--background-dark)",
        backgroundAlt: "var(--background-alt)",
        primary: {
          DEFAULT: "var(--primary)",
          lighter: "var(--primary-light)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          lighter: "var(--secondary-light)",
        },
        accent: "var(--accent)",
      },
      fontFamily: {
        heading: ["var(--font-montserrat)"],
        body: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [daisyui],
  darkMode: "class",
};
export default config;
