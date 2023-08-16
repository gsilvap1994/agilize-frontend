/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#efede9",
      black: "#181713",
      brown: "#483b1b",
      gold: "#aa852b",
      darkGold: "#796023",
    },
    extend: {},
  },
  plugins: [],
};
