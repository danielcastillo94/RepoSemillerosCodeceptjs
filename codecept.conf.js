//const FilterPage = require("./pages/FilterPage");

/** @type {CodeceptJS.MainConfig} */
const urls = {
  telcel: 'https://www.telcel.com/',
  liverpool: 'https://www.liverpool.com.mx'
};
exports.config = {
  tests: './steps/*_steps.js',
  output: './output',

  helpers: {
    Playwright: {
      browser: "chromium",
      url: urls.liverpool,
      show: true,
      locale: "es-MX",
      video: true,
      pressKeyDelay: 100,
      trace: true,
      keepTraceForPassedTests: true,
      getPageTimeout: 60000,
    },
    PlaywrightVideoAllure: {
        require: './utils/playwrightVideoAllure_helper'
    }
  },

  include: {
    I: "./steps_file.js",
    karelPage: "./pages/karelPage.js",
    buscarPage: "./pages/buscarPage.js",
    resultsPage: "./pages/ResultsPage.js",
    CategoryPage: "./pages/categoryPage.js",
    MenuPage: "./pages/menuPage.js",
    FilterPage: "./pages/FilterPage.js",
    ProductoDetail: "./pages/productDetailPage.js"
  },

  gherkin: {
    features: './features/*.feature',
    steps: [
      "./steps/karelSteps.js",
      "./steps/buscarSteps.js",
      "./steps/categoriasSteps.js",
      "./steps/filtrosporPrecioSteps.js",
      "./steps/filtrarporMarcaSteps.js",
      "./steps/filtrosTallaMedidaSteps.js",
      "./steps/detalledeProductoBasicoSteps.js",
      "./steps/ordenamientoResultadosSteps.js"
    ],
  },

  plugins: {
    screenshotOnFail: {
    enabled: true
  },
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
