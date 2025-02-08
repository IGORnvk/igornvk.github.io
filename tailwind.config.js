/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      colors: {
        'main': '#4cd0fc',
      },
      animation: {
        'slide-out': 'slideout 0.5s ease-out forwards',
        'slide-in': 'slidein 0.5s ease-out forwards',
        'appear': 'appear 0.5s ease-out forwards',
        'disappear': 'disappear 0.5s ease-out forwards',
      },
      keyframes: {
        slideout: {
          from: {
            transform: 'translateY(0) scaleX(1)',
            opacity: 1
          },
          to: {
            transform: 'translateY(100vh) scaleX(0)',
            opacity: 0
          },
        },
        slidein: {
          from: {
            transform: 'translateY(100vh) scaleX(0)',
            opacity: 0
          },
          to: {
            transform: 'translateY(0) scaleX(1)',
            opacity: 1
          },
        },
        appear: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        disappear: {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
}
