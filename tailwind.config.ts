const withMT = require("@material-tailwind/react/utils/withMT");

import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        manRope: ["Manrope", "sans-serif"],
      },
      colors: {
        primaryColor: "#004e89",
        lighterGray: "#f3f9ff",
        lightgray: "#e5edf3",
        buttonColor: "#1b96f3",
        darkBlueColor: "#192a56",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};

module.exports = withMT(config);
