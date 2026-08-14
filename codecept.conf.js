/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_steps.js',
  output: './output',

  helpers: {
    Playwright: {
      browser: "chromium",
      url: 'https://www.liverpool.com.mx/tienda/home',
      show: true,
      locale: "es-MX"
    }
  },

  include: {
    I: "./steps_file.js",
    SearchPage: './pages/SearchPage.js',
    ResultPage: './pages/ResultPage.js',
    MenuPage: './pages/MenuPage.js',
    CategoryPage: './pages/CategoryPage.js',
    FilterPage: './pages/FilterPage.js',
    ProductDetailPage: './pages/ProductDetailPage.js',
  },

  gherkin: {
    features: './features/*.feature',
    steps: [
      "./steps/buscarprodcutoSteps.js",
      "./steps/navegarporcategoriaSteps.js",
      "./steps/filtroporprecioSteps.js",
      "./steps/filtropormarcaSteps.js",
      "./steps/filtroportallaSteps.js",
      "./steps/detallesproductobasicoSteps.js",
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
