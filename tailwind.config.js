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
        800: '#7AA96C',
        900: '#9BBE90',
      },
      'yellow': {
        100: '#C8A438',
        'base': '#F0C543',
      },
      'shades': {
        'black': '#102127',
        'white': '#ffffff',
      },
      'grey': {
        70: '#475367',
        60: '#667185',
        50: '#F9FAFB',
        20: '#F7F9FC',
        30: '#F0F2F5',
        40: '#E4E7EC',
        'base': '#98A2B3',
      },
      'red': {'400' : '#FF0000'},
      'blue': {'400' : '#102127'},
    },
    extend: {
      backgroundImage: {
        'loginbg': "url('/src/assets/bg image.png')",
        'illustration': "url('/src/assets/illustration 1.png')",
      }
    },
  },
  plugins: [],
}
