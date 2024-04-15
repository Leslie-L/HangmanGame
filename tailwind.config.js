/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blueModal:'#263eaa',
        blueButton:'#2263fb'
      }
    },
  },
  plugins: [],
}

