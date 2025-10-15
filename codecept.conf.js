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
    youtubePage: "./pages/youtubePage.js",
    TC005Page: "./pages/TC005Page.js",
    terminos_page: "./pages/terminos_page.js",
  },
  gherkin: {
    features: "./features/*.feature",
    steps: ["./steps/loginSteps.js", "./steps/TC005Steps.js", "./steps/pageStep.js"],
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    }
  },
  name: "Telcel es la red",
};
