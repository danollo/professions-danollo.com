/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./acuity.html",
    "./all-professions.html",
    "./new/*.html",
    "./crafting/**/*.{html,js}",
    "./gathering/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Add DaisyUI plugin
  ],
  daisyui: {
    themes: ["light", "dark", "sunset"],
  },
}
