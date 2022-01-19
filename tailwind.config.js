module.exports = {

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        dunes: "url('/images/bg.jpg')",
      }),
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
