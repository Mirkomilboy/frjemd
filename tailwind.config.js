module.exports = {
  mode: 'jit',
  purge: [
    './public/**/*.{html,js}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '1432': '1432px',
        '1310': '1310px',
        '1700': '1700px',
      },
      fontFamily: {
        'CloserText': ['CloserText', 'sans-serif'],
      },
      colors: {
        brand: {
          'dark': '#474959',
          'blue': '#6A7BD9',
          'dark-blue': '#2C3359',
          'light-blue': '#B0B7DF',
          'gradient-dark': '#495280',
          'gradient-middle': '#515EA6',
          'gradient-light': '#6A7BD9',
        }
      },
      boxShadow: {
        'custom': '0px 0px 7px 5px rgba(0,0,0,0.2)',
        'custom-wider': '0px 0px 20px 10px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        '65': '65px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
