/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#ECECEC',
        buttonyellow: '#FCB100',
        logobg:'#E1DCC9',
        safronetext: '#F9A83D'
      },
    },
  },
  plugins: [],
}

