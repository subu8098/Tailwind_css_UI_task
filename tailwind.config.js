/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    //  require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
}