/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 4px 10px rgba(0, 0, 0, 0.25)', // Custom shadow
      },
    colors:{
      customGreen: '#225555',
      customYellow:'#FFDC7D ' 
    },
    },
  },
  plugins: [],}