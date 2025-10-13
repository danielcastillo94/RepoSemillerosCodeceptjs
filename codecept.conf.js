/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "https://www.telcel.com",
      show: true,
      locale: "es-MX",
    },
  },

  include: {
    I: "./steps_file.js",
    terminos_page: "./pages/terminos_page.js",
  },
  gherkin: {
    features: "./features/terminos_page.feature",
    steps: ["./steps/pageStep.js"],
  },
  name: "Telcel es la red",
};
