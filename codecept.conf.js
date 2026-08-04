/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_steps.js',
  output: './output',

  helpers: {
    Playwright: {
      browser: "chromium",
      url: 'https://www.telcel.com',
      show: true,
      locale: "es-MX",
      waitForNavigation: "domcontentloaded",
      getPageTimeout: 60000,
      restart: true // Reinicia el navegador/contexto en cada prueba para que no arrastren estado entre sí
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