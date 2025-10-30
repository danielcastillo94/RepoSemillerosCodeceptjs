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
      waitForNavigation: "load",   // Espera completa de la página
      waitForTimeout: 40000        // Espera máxima de 20s para elementos
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
    // --- Agregado TC001 ---
    TC001Page: "./pages/TC001Page.js",
    TC002Page: "./pages/TC002Page.js",
    TC003Page: "./pages/TC003Page.js",
    TC004Page: "./pages/TC004Page.js",
    TC005Page: "./pages/TC005Page.js",
    TC006Page: "./pages/TC006Page.js",
    TC007Page: "./pages/TC007Page.js",
    TC008Page: "./pages/TC008Page.js",
    TC09Page: "./pages/TC09Page.js",
    TC0010Page: "./pages/TC0010Page.js",
    TC0011Page: "./pages/TC0011Page.js",
    TC0012Page: "./pages/TC0012Page.js",








    

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
      // --- Agregado TC001Steps ---
      './steps/TC001Steps.js',
      './steps/TC002Steps.js',
      './steps/TC003Steps.js',
      './steps/TC004Steps.js',
      './steps/TC005Steps.js',
      './steps/TC006Steps.js',
      './steps/TC007Steps.js',
      './steps/TC008Steps.js',
      './steps/TC09Steps.js',
      './steps/TC0010Steps.js',      
      './steps/TC0011Steps.js',
      './steps/TC0012Steps.js',







      

 

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
