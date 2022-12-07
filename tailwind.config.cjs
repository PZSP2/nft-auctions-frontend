/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B3B3B",
        primaryHoverFocus: "#767676",
        secondary: "#A259FF",
        secondaryHoverFocus: "#7b14ff",
        gray: "#858584",
        bg: "#2B2B2B",
      },
      lineHeight: {
        xs: "0.1rem",
      },
      fontFamily: {
        spaceMono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
};
