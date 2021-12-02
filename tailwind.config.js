module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    plugings: [
      require('@tailwindcss/typography')
    ],
    extend: {
      colors: {
        primary : '#FFCC00',
        secondary: {
          100: '#F2E2D5',
          200: '#888883',
        },
        darkBg: '#121212',
        darkCardBg: '#121212',
        darkText: '#F2F2F2',
        github: '#1B1F23',
      },
      fontFamily: {
        body: ['Overpass']
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
