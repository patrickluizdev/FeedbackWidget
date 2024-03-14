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
          "primary": '#8257E5',
          "hover": '#996DFF',
          "on-brand-color": '#FFF'
        },
        dark: {
          'surface-primary' : '#18181b',
          'surface-secondary': '#27272a',
          'surface-secondary-hover': '#3f3f46',
          'surface-dark' : '#121212',
          'stroke': '#52525b',
          'tooltip': '#f4f4f5',
          'text-primary' : '#f4f4f5',
          'text-secondary': '#a1a1aa',
          'text-on-tooltip' : '#27272a',
        }
      },
      fontFamily:{
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}

