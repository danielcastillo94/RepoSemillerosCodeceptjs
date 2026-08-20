require('dotenv').config();//Carga las variables del archivo . env desde el inicio
/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_steps.js',
  output: './output',

  helpers: {
    Playwright: {
      browser: "chromium",
      url: 'https://www.liverpool.com.mx/tienda/home',
      show: process.env.CI ? false : true,
      locale: "es-MX",
      storageState: './storageState.json',
      video: true,
      pressKeyDelay: 100,
      trace: true,
      keepTraceForPassedTests: true,
      waitForTimeout: 15000,
      getPageTimeout: 30000,
      emulate: {
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
      }
    },
    PlaywrightVideoAllure: {
      require: './utils/playwrightVideoAllure_helper'
    }
  },

  include: {
    I: "./steps_file.js",
    karelPage: "./pages/karelPage.js",
    BNPage: "./pages/BNPage.js",
    livFilterPage: "./pages/livFilterPage.js",
    ODPage: "./pages/ODPage.js",
    CarritoPage: './pages/CarritoPage.js'
  },

  gherkin: {
    features: './features/*.feature',
    steps: [
      "./steps/karelSteps.js",
      "./steps/BNSteps.js",
      "./steps/livFilterSteps.js",
      "./steps/ODSteps.js",
      "./steps/CarritoSteps.js"

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
