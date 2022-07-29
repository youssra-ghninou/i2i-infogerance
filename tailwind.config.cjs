/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce': 'bouce 0.3s infinite',
        'wiggle': 'wiggle 1s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform : 'scale(1.2) rotate(7deg)',
          },
          '50%': {
            transform : 'scale(0.8) rotate(-7deg)',
          },
        },
      },
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
