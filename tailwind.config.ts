import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bungee: ["Bungee", "sans-serif"],
        metropolis: ["Metropolis", "sans-serif"],
      },
      colors: {
        main: "#F5F6F7",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
