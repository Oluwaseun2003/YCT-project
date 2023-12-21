/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'green': {
        100: '#0B1907',
        200: '#122A0B',
        300: '#122A0B',
        400: '#255417',
        500: '#2E691C',
        'base': '#377E22',
        600: '#589347',
        700: '#D7E5D3',
      },
      'yellow': {
        100: '#C8A438',
        'base': '#F0C543',
      },
      'shades': {
        'black': '#102127',
        'white': '#ffffff',
      },
    },
    extend: {
      backgroundImage: {
        'loginbg': "url('/src/assets/bg image.png')",
      }
    },
  },
  plugins: [],
}
