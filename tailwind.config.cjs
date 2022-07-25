/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3B71FE',
        'text': '#0E0E2C',
        'white': '#FFFFFF',
        'gray': '#A0A4AB',
        'dark': '#262A31',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      transitionProperty: {
        'left': 'left',
      }
    },

  },
  plugins: [],
}
