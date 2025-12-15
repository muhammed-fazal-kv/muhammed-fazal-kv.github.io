/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // enables dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',   // main blue
        accent: '#3B82F6',    // lighter accent blue
        bgLight: '#F8FAFC',
        bgDark: '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],   // body font
        display: ['Poppins', 'sans-serif'], // headings font
      },
      keyframes: {
        'bg-move': {
          '0%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
          '100%': { backgroundPosition: '0% 0%' },
        }
      },
      animation: {
        'bg-move': 'bg-move 30s linear infinite',
      },
    },
  },
  plugins: [],
}
