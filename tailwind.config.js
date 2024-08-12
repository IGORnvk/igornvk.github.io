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
        'secondary': '#f43f5e'
      },
      cursor: {
        'main': 'url(./src/img/cursor.png), default'
      }
    },
  },
  plugins: []
}
