/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#06B6D4",
        secondary: "#10B4CD",
        // tersier: "#CBE0E1",
      },
      fontFamily: {
        tulisan: "Candara, Verdana, Helvetica, Arial, sans-serif",
        angka: "Outfit, sans-serif",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
