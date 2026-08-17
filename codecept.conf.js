/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_steps.js',
  output: './output',

  helpers: {
    Playwright: {
      browser: "chromium",
      url: 'https://www.liverpool.com.mx',
      show: true,
      locale: "es-MX",
      video: true,
      pressKeyDelay: 100,
      trace: true,
      keepTraceForPassedTests: true
    },
    PlaywrightVideoAllure: {
      require: './utils/playwrightVideoAllure_helper.js'
    }
  },

  include: {
    I: "./steps_file.js",
    karelPage: "./pages/karelPage.js"
  },

  gherkin: {
    features: './features/*.feature',
    steps: [
      "./steps/karelSteps.js",
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
  name: "Actividad youtube y Telcel"
};
