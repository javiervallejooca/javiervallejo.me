/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        dmsans: ["DM Sans", ...defaultTheme.fontFamily.sans],
      },
      margin: {
        "70px": "70px",
      },
      colors: {
        cinder: {
          50: "#f4f5fb",
          100: "#e8e9f6",
          200: "#cbd1ec",
          300: "#9ea9db",
          400: "#6a7cc6",
          500: "#475bb0",
          600: "#354594",
          700: "#2c3778",
          800: "#283164",
          900: "#262c54",
          950: "#080912",
        },
        firefly: {
          50: "#f2f9f8",
          100: "#ddf0f0",
          200: "#bfe2e2",
          300: "#92ccce",
          400: "#5eaeb2",
          500: "#439297",
          600: "#3a7880",
          700: "#34626a",
          800: "#315259",
          900: "#2d474c",
          950: "#152529",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  darkMode: "class",
};
