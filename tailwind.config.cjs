/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
      margin: {
        "70px": "70px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  darkMode: "class",
};
