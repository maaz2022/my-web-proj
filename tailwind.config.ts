import { Luckiest_Guy } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        myBlue: "#032668",
      },
      fontFamily: {
        LuckiestGuy: ["var(--font-luckiest-guy)"],
      },
    },
  },
  plugins: [],
};
export default config;
