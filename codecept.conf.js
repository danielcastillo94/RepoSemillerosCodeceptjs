const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// Activar modo headless si se pasa la variable de entorno HEADLESS=true
setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.liverpool.com.mx/tienda/home',
      show: true,
      browser: 'chromium',
      video: true,
      trace: true,
      waitForNavigation: 'domcontentloaded',
      getPageTimeout: 60000
    },
    //PlaywrightVideoAllure: {
      //require: './utils/playwrightVideoAllure_helper.js'
    //}
  },
  include: {
    I: './steps_file.js',
    searchPage: './pages/searchPage.js',
    resultsPage: './pages/resultsPage.js'
  },
  gherkin: {
    features: './features/search_product.feature',
    steps: ['./step_definitions/searchSteps.js']
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    },
    stepByStepReport: {
      enabled: false 
    }
  },
  name: 'RepoSemillerosCodeceptjs'
}