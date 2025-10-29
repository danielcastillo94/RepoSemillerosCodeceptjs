/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: "chromium",
      url: 'https://www.telcel.com',
      show: false,
      locale: "es-MX"
    }
  },
  include: {
    I: "./steps_file.js",
    CoberturaPage: "./pages/cobertura_page.js",
    planesPage: "./pages/planesPage.js",
    youtubePage: "./pages/youtubePage.js",
    plan5g_page: "./pages/plan5g_page.js",
    footertelcelPage: "./pages/pruebaTC010Page.js",
    marcosotoPage: "./pages/marcosotoPage.js",
    terminos_page: "./pages/terminos_page.js",
    region_page: "./pages/region_page.js",
    kareltPage: "./pages/kareltPage.js"
    

  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    }
  },

  gherkin: {
    features: './features/*.feature',
    steps: [
      './steps/cobertura_steps.js',
      "./steps/loginSteps.js",
      "./steps/plan5gSteps.js",
      "./steps/pruebaTC010Steps.js",
      "./steps/marcosotoSteps.js",
      "./steps/pageStep.js",
      "./steps/TC009Steps.js",
      "./steps/planSteps.js",
      "./steps/kareltSteps.js",

  ]
  },

  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    }
  },
  gherkin: {
    features: './features/**/*.feature',
    steps: [
      './steps/contacto_steps.js'
    ],
  },
 
  name: 'Automatizacion'
};
