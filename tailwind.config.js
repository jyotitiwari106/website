/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'pulse-blue': {
          '100%': {
            boxShadow: '0 0 0 45px rgba(0, 153, 255, 0)',
          },
        },
      },
      animation: {
        'pulse-blue': 'pulse-blue 1.2s cubic-bezier(0.8, 0, 0, 1) infinite',
      },
    },
  },
  plugins: [],
}
