/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#002349", // Custom primary color
        secondary: "#ffde00", // Custom secondary color
        lightpink: "#ffe9d4",
        lightblue: "#effafc"
      },
      fontFamily:{
        Poppins: ["Poppins"],
        Montserrat: ["Montserrat"]

      }
    },
  },
  plugins: [],
}

