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
    home_page: "./pages/TC001_Home_page.js",
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    }
  },
  gherkin: {
    features: "./features/TC001_Home_page.feature",
    steps: ["./steps/TC001_Home_page_steps.js"],
  },
  name: "Telcel es la red",
};
