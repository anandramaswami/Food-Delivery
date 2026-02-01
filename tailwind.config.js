/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fc8019", // Typical Swiggy orange
        secondary: "#60b246", // Green for veg/success
        dark: "#02060c",
        gray: {
           100: "#f0f0f5",
           200: "#e0e0e0",
           300: "#d4d5d9",
           400: "#93959f",
           500: "#686b78",
           800: "#282c3f",
        }
      },
      fontFamily: {
        sans: ['"Basis Grotesque Pro"', 'Inter', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}
