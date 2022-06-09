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
      darkBlue: "#010920",
      blue: "#5981e8",
      lightBlue: "#dce0ef",
      orange: "#ff8368",
      grey: "#252e42",
      white: "#fff",
    },
  },
  plugins: [],
};
