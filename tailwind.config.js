const colors = require("tailwindcss/colors");
const { convertCompilerOptionsFromJson } = require("typescript");

module.exports = {
  /* Tailwind dark mode feature */
  darkMode: false,

  /* Plugin declarations */
  plugins: [],

  /* Purge unused CSS directive; automatically executes
   * when NODE_ENV === 'production' (as in Snowpack's 'yarn build`)
   */
  purge: ["./src/**/*.svelte", "./public/*.html"],

  /* Your application theme */
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      blue: colors.lightBlue,
      gray: colors.blueGray,
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif", "system-ui"],
    },
  },

  /* Tailwind variant declarations */
  variants: {
    extend: {},
  },
};
