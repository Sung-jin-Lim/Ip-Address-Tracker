module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "376px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    fontFamily: {
      rubic: ["Rubik", "sans-serif"],
    },
    spacing: {},
    extend: {
      colors: {
        veryDarkGray: "hsl(0, 0%, 17%)",
        darkGray: "hsl(0, 0%, 59%)",
      },
    },
  },
  plugins: [],
};
