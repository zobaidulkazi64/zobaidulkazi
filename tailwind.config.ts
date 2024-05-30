import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
import HeroImages from "../../assets/images/zobaidulkazi.png";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({}),
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
