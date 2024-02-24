/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "circular": ["Circular", "sans-serif"],
        "koulen": ["Koulen", "sans-serif"],
      },
      colors: {
        paleTeal: "#87CAC1",
        darkTurquoise: "#05C8C6",
        ebonyClay: "#232E41",
        aqua: "#E6F5F3"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

