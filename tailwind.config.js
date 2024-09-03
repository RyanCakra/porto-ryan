const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    // Jika ada perluasan tema khusus, tambahkan di sini
    extend: {},
  },
  plugins: [
    // Plugin untuk menambahkan variabel warna CSS global
    addVariablesForColors,
  ],
};

// Plugin untuk menambahkan setiap warna Tailwind sebagai variabel CSS global, misalnya var(--gray-200)
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
