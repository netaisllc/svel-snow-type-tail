const colors = require("tailwindcss/colors");
const production = process.env.NODE_ENV === "production" ? true : false;

module.exports = {
  purge: {
    purge: ["./src/**/*.svelte", "./public/*.html"],
    enabled: production, // disable purge in dev
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      gray: colors.blueGray,
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif", "system-ui"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
