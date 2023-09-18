/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'dark':'#000',
        'light':'#fff'
        
      }
    },
  },
  plugins: [],
}

