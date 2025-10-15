/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: 'https://www.telcel.com',
      show: true,
      locale: "es-MX"
    }
  },

  include: {
    I: "./steps_file.js",
    planesPage: "./pages/planesPage.js",
    youtubePage: "./pages/youtubePage.js",
    plan5g_page: "./pages/plan5g_page.js",
    footertelcelPage: "./pages/pruebaTC010Page.js",
    TC005Page: "./pages/TC005Page.js",
    terminos_page: "./pages/terminos_page.js",
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    }
  },

  gherkin: {
    features: "./features/*.feature",
    steps: [
      "./steps/loginSteps.js",
      "./steps/plan5gSteps.js",
      "./steps/pruebaTC010Steps.js",
      "./steps/TC005Steps.js",
      "./steps/pageStep.js",
      "/steps/planSteps.js"
  ]
  },


  name: "Actividad youtube y Telcel"
    
};


