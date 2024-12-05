/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#047857',
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#047857',
          600: '#065f46',
          700: '#064e3b',
        },
        secondary: {
          DEFAULT: '#F97316',
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#F97316',
          600: '#ea580c',
          700: '#c2410c',
        }
      },
      fontFamily: {
        script: ['Dancing Script', 'cursive'],
      }
    },
  },
  plugins: [],
};