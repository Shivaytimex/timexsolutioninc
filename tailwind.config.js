/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'shake-rotate': 'shake-rotate 0.5s ease-in-out', // New shake and rotate animation
      },
      keyframes: {
        'shake-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
          '75%': { transform: 'rotate(-15deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      colors: {
        PurpleStart: '#371f47',
        PurpleEnd: '#602692',
      },
    },
  },
  plugins: [],
}

