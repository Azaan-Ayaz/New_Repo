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
        custom2: "#A9A9A9",
        color1: "#311B92",
        color2: "#006064",
        color3: "#F8BBDO",
        custom3: "#4C00EE",
        custom4: "#3AE3D8",
        custom5: "#4DCDE9",
        custom6: "#00FAAF"
      }
    },
  },
  plugins: [],
}

