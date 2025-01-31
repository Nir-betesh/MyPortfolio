/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',         
  ],
  safelist: [
    'animate-appear', 
  ],
    theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': { opacity: '0.1', transform: 'scale(0.7)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        appear: 'appear 1s linear',
      },
    },
  },
  plugins: [],
};
