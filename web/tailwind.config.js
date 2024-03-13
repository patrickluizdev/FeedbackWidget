/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontSize:{
        'xs': 12,
        'sm': 14,
        'md': 16,
        'lg': 20,
      },
      colors:{
        'black': '#000',
        'white': '#FFF',
        'transparent': 'transparent',
        brand: {
          500: '#8257E5',
          300: '#996DFF',
          "on-brand-color": '#FFF'
        },
      },
      fontFamily:{
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}

