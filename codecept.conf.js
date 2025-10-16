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
    buscadorPage: "./pages/buscador_page.js",
  },
  gherkin: {
    features: "./features/*.feature",
    steps: [
      "./steps/buscador_steps.js",
    ]
  },
  plugins: {
    allure: {
      enabled: true,
      require: "@codeceptjs/allure-legacy",
      outputDir: "./output/allure-results"
    },
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  name: "Framework-Prueba"
};
