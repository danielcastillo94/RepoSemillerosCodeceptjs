/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_steps.js',
  output: './output',

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
    CoberturaPage: "./pages/cobertura_page.js",
    planesPage: "./pages/planesPage.js",
    youtubePage: "./pages/youtubePage.js",
    plan5g_page: "./pages/plan5g_page.js",
    footertelcelPage: "./pages/pruebaTC010Page.js",
    marcosotoPage: "./pages/marcosotoPage.js",
    terminos_page: "./pages/terminos_page.js",
    region_page: "./pages/region_page.js",
    karelPage: "./pages/karelPage.js",
    
    //== De Luis Valente ==//
    home_page: "./pages/Lvht_Home_page.js",
    planes_5G: "./pages/Lvht_Planes_page.js",
    contact_page: "./pages/Lvht_Contact_page.js",
    mobile_page: "./pages/Lvht_Mobil_page.js"

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
      "./steps/karelSteps.js",
      
       //== De Luis Valente ==//
      "./steps/Lvht_Home_page_steps.js",
      "./steps/Lvht_Planes_page_steps.js",
      "./steps/Lvht_Contact_Page_steps.js",
      "./steps/Lvht_Mobile_page_steps.js"

  ]
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
