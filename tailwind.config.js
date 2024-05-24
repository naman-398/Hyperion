/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey_cloud: '#B6B6B4',
        bee_yellow: 'DEB21B',
        night: '#0B0B0B',
        snow_drift: '#F9F9F7',
        lighting_yellow: '#F2C922',
      },
      backgroundImage: {
        yellow_gradient: 'linear-gradient(97.23deg, #F2C922 -33.73%, #B8860B 100.34%)',
        text_gradient1: 'linear-gradient(145.14deg, #F9F9F7 32.81%, #656565 115.23%)',
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif'
      },
    },
  },
  plugins: [],
}