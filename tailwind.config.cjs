/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B3B3B",
        secondary: "#A259FF",
        secondaryHoverFocus: "#7b14ff",
        bg: "#2B2B2B",
      },
      lineHeight: {
        xs: "0.1rem",
      },
    },
  },
  plugins: [require("daisyui")],
};
