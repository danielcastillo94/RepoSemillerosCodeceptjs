/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "https://rickandmortyapi.com/",
      show: true,
    },
  },
  include: {
    I: "./steps_file.js",
  },
  gherkin: {
    features: "./features/*.feature",
    steps: ["./steps/pruebaSteps.js"],
  },
  name: "framework codeceptjs",
};
