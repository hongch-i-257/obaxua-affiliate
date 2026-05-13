/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      colors: {
        'obaxua-green': '#2D4628',
        'obaxua-cream': '#FDFBF7',
      },
    },
    keyframes: {
        'flame-swing': {
          '0%, 100%': { transform: 'translateX(-50%) scale(1)' },
          '50%': { transform: 'translateX(-50%) scale(1.1) translateY(-5px)' },
        },
        'fire-flicker': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        }
      },
      animation: {
        'flame': 'flame-swing 1.5s ease-in-out infinite',
        'flicker': 'fire-flicker 0.5s infinite',
      }
  },
  plugins: [],
}