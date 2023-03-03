/** @type {import('tailwindcss').Config} */
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
    },
  },
  plugins: [require("tailwind-scrollbar")],
  darkMode: "class",
};
