/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#fdfdfb',
          100: '#faf8f2',
          200: '#f4f0e6',
          300: '#ebe4d3',
          400: '#ded3bc',
          DEFAULT: '#f7f5ef',
        },
        charcoal: {
          50: '#888888',
          100: '#555555',
          200: '#333333',
          300: '#262626',
          800: '#1a1a1a',
          900: '#111111',
          DEFAULT: '#161616',
        },
        sand: {
          DEFAULT: '#d8cbbe',
          light: '#e9e3dc',
          dark: '#b6a695',
        },
        clay: '#8c7b6d',
        accent: {
          gold: '#c5a880',
          bronze: '#9d7a54',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Noto Serif Tamil"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Cinzel"', '"Cormorant Garamond"', 'serif'],
        tamil: ['"Noto Serif Tamil"', '"Latha"', '"Mukta Malar"', 'serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.3em',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'luxury': 'cubic-bezier(0.25, 1, 0.5, 1)',
      }
    },
  },
  plugins: [],
}

