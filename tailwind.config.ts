import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      sm: "360px",
      md: "800px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },

  extend: {
    spacing: {
      "128": "32rem",
      "144": "36rem",
    },
    borderRadius: {
      "4xl": "2rem",
    },
  },

  darkMode: "media",
  plugins: [],
};
export default config;
