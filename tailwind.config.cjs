const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
const config = {

  darkMode: "class",

  content: [
    './src/**/*.{svelte,js,ts}',
    './src/app.html',          // if you add classes in app.html
    './static/**/*.html'       // only needed if you have static HTML with classes
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        serif: ["Newsreader", ...defaultTheme.fontFamily.serif],
      },
    },
  },

  plugins: [],
};

module.exports = config;