/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",        // if index.html is in root
    "./public/index.html", // include public folder too
    "./src/**/*.{js,jsx,ts,tsx}", // all source files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
