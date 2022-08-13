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
        wadah: "#d1d5db",
        primary: "#14b8a6",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
