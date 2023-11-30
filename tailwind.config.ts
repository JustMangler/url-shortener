import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [],
};
export default config;
