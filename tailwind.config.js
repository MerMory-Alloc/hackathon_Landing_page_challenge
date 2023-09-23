/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1500px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      content: {
        'ellipse': 'url("../public/assets/images/ellipse.svg")',
        'lightbulb':'url("../public/assets/images/light.png")',
      },
      fontFamily: {
        displayed : ['Clash Display'],
        montserrat: ['Montserrat'],
        unica: ['Unica One']
      },
      colors: {
        'pri': '#FE34B9',
        'sec': '#150E28',
        'ter': '#903AFF',
        'qua': '#D434FE',
        'err' : '#FF26B9',
      }
    },
  },
  plugins: [],
}
