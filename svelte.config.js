const autoPreprocess = require("svelte-preprocess");
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

const preprocess = autoPreprocess({
  defaults: {
    script: "typescript",
  },
  postcss: {
    plugins: [tailwindcss, autoprefixer],
  },
});

module.exports = {
  preprocess,
};
