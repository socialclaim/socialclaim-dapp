module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Poppins"']
    },
    extend: {
      colors: {
        primary: '#61adc3ff',
        primaryLight: '#d2eaf3'
      },
      backgroundImage: () => ({
        dunes: "url('/images/bg.jpg')",
      })
    }
  },
  variants: {
    extend: {

    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
