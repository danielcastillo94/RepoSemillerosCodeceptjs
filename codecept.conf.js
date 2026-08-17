/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./steps/*_steps.js",
  output: "./output",

  helpers: {
    Playwright: {
      browser: "chromium",
      url: "https://www.liverpool.com.mx",
      show: true,
      locale: "es-MX",
      video: true,
      pressKeyDelay: 100,
      trace: true,
      keepTraceForPassedTests: true,
    },
    PlaywrightVideoAllure: {
      require: "./utils/playwrightVideoAllure_helper.js",
    },
  },

  include: {
    I: "./steps_file.js",
    karelPage: "./pages/karelPage.js",
    liverpoolPage: "./pages/liverpoolPage.js",
    siteLiverpoolPage: "./pages/liverpool/siteLiverpoolPage.js",
  },

  gherkin: {
    features: "./features/**/*.feature",
    steps: [
      "./steps/karelSteps.js",
      "./steps/liverpoolSteps.js",
      "./steps/liverpool/siteLiverpoolSteps.js",
    ],
  },

  plugins: {
    allure: {
      enabled: true,
      require: "@codeceptjs/allure-legacy",
      outputDir: "./output/allure-results",
    },
  },

  bootstrap: null,
  mocha: {},
  name: "Reto Liverpool",
};
