/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sf: ['San Francisco Pro', 'sans-serif'],
        roboto: ['Roboto Slab', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

