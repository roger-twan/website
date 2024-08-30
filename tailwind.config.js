/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron'],
      },
      keyframes: {
        'focus-in-contract': {
          '0%': {
            'letter-spacing': '1em',
            filter: 'blur(12px)',
            opacity: 0,
          },
          '100%': {
            filter: 'blur(0px)',
            opacity: 1,
          },
        },
        'blur-out-expand': {
          '0%': {
            filter: 'blur(0.01)',
          },
          '100%': {
            'letter-spacing': '0.5em',
            filter: 'blur(12px) opacity(0%)',
          },
        },
      },
      animation: {
        'focus-in-contract': 'focus-in-contract 0.5s both',
        'blur-out-expand': 'blur-out-expand 0.3s both',
      },
    },
  },
  plugins: [],
}
