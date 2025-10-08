/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {},
  },
  safelist: ['scrollbar-hide'],
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}