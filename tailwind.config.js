/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        ncs: {
          black: "#050505",
          dark: "#0A0A0C",
          panel: "#101114",

          gold: "#D6A52C",
          goldLight: "#F1CE65",

          blue: "#0759B8",
          blueLight: "#1680FF",

          white: "#FFFFFF",
          gray: "#9B9DA3",
        },
      },

      fontFamily: {
        display: ["Barlow Condensed", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};