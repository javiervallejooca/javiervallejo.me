/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      dmsans: ["DM Sans", "sans-serif"],
    },
    extend: {
      margin: {
        "70px": "70px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

/*
theme: {
  extend: {},
},
*/
