/** @type {import('tailwindcss').Config} */



export default {
  content: [
    'node_modules/preline/dist/*.js',
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dosis: ["'Dosis', 'sans-serif'"]
      }
    },
  },
  plugins: [ require('preline/plugin'),],
}

