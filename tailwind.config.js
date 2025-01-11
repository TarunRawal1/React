module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        other: {
          min: "180px",
          max: "650px",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
