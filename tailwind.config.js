/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        baskervville: ['Baskervville SC', 'serif'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

