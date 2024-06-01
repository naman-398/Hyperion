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
        snow_drift_light: '#F9F9F714',
        snow_drift_night: '#F9F9F70F',
        snow_drift_grey: '#F9F9F70A',
        lighting_yellow: '#F2C922',
        light_night: '#FFFFFF0A',
        dark_night: '#FFFFFF29',
        night_sky: '#232323',
        night_blue: '#191A1B3B',
        dark_red: '#1616168A',
        light_red: '#1F1F1F8A',
        dark_voilet: '#1E1E1F',
      },
      backgroundImage: {
        yellow_gradient_right: 'linear-gradient(97.23deg, #F2C922 -33.73%, #B8860B 100.34%)',
        yellow_gradient_left: 'linear-gradient(97.23deg, #B8860B  20.73%, #F2C922 100.34%)',
        grey_gradient: 'linear-gradient(145.14deg, #F9F9F7 32.81%, #656565 115.23%)',
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif'
      },
      screens: {
        '576': '576px',
        '1350': '1350px',
      },
      backgroundSize: {
        '100%': '100% 100%'
      },
      fontSize: {
        mxl: "68px",
        vxl: "56px",
        xxl: "44px",
        mlg: "40px",
        xlg: "28px",
        slg: "21.24px"
      }
    },
  },
  plugins: [],
}