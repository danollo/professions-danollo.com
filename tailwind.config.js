/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./acuity.html", "./all-professions.html", "./new/*.html", "./crafting/**/*.{html,js}", "./gathering/**/*.{html,js}", "./*/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')],
  daisyui: {
    themes: ["lemonade", "coffee"],
    lightTheme: "lemonade",
    darkTheme: "coffee"
  }
};