/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d204d", // Custom primary color
        secondary: "#ffde00", // Custom secondary color
      },
    },
  },
  plugins: [],
}

