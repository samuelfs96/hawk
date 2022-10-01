/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    fontFamily: {
      'sans': ['Mulish', 'sans-serif'],
    },
    extend: {
      colors: {
        'hawk-red': '#E01616',
        'hawk-blue': '#67B7F1',
        'hawk-yellow': '#FEC208',
        'hawk-green': '#16F153',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
