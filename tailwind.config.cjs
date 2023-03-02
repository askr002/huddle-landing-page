/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pink': 'hsl(322, 100%, 66%)',
        'lightpink': 'hsl(321, 100%, 78%)',
        'lightred': 'hsl(0, 100%, 63%)',
        'verydarkcyan': 'hsl(192, 100%, 9%)',
        'verypaleblue': 'hsl(207, 100%, 98%)'
      },
      fontFamily: {
        'poppins': ["Poppins", 'sans-serif'],
        'opensans': ["Open Sans", 'sans-serif']
      }
    },
  },
  plugins: [],
}