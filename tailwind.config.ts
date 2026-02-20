import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#14A3A6",
          light: "#6ED3D5",
        },
        neutral: {
          white: "#FFFFFF",
          light: "#F4F6F8",
          dark: "#2E2E2E",
          slate: "#4E6A72",
        },
        semantic: {
          success: "#2ECC71",
          warning: "#F4B400",
          error: "#E74C3C",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};

export default config;
