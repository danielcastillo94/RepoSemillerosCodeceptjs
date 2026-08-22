
const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

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
        restart: 'context',
        windowSize: '1280x720',
        
        video: true,
        keepVideoForPassedTests: true,

        trace: true,
        keepTraceForPassedTests: true,

        waitForNavigation: 'domcontentloaded',
        getPageTimeout: 60000
    },

    PlaywrightVideoAllure: {
        require: './utils/playwrightVideoAllure_helper.js'
    }
  },

  include: {
    I: './steps_file.js',

    searchPage: './pages/searchPage.js',
    resultsPage: './pages/resultsPage.js',

    productDetailPage: './pages/productDetailPage.js',
    stockPage: './pages/stockPage.js',
    reviewsPage: './pages/reviewsPage.js',
    filterPage: './pages/filterPage.js'
  },

  gherkin: {
      features: [
          './features/search_product.feature',
          './features/product_detail.feature',
          './features/product_stock.feature',
          './features/product_reviews.feature',
          './features/product_filters.feature'
      ],

      steps: [
          './step_definitions/searchSteps.js',
          './step_definitions/productDetailSteps.js',
          './step_definitions/stockSteps.js',
          './step_definitions/reviewsSteps.js',
          './step_definitions/filterSteps.js'
      ]
  },
  plugins: {
    allure: {
      enabled: true,
      require: 'allure-codeceptjs',
      resultsDir: './output/allure-results'
    },
    stepByStepReport: {
      enabled: false 
    }
  },
  name: 'RepoSemillerosCodeceptjs'
}