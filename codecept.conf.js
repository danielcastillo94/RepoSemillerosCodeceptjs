/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_steps.js',
  output: './output',

  helpers: {
    Playwright: {
      browser: "chromium",
      url: '',
      show: true,
      locale: "es-MX"
    }
  },

  include: {
    I: "./steps_file.js",
    axelLiverpool: './pages/axelLiverpool.js'
  },

  gherkin: {
    features: './features/*.feature',
    steps: [
      './steps/axelSteps.js'

    ],
  },

  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    }
  },

  bootstrap: null,
  mocha: {},
  name: "Reto liverpool"
};

