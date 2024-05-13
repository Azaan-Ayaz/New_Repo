/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:["Poppins", "sans-serif"]
      },
      colors:{
        custom1: "#8A181A",
        custom2: "#A9A9A9"
      }
    },
  },
  plugins: [],
}

