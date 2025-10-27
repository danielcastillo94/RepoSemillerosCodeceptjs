exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: 'https://www.telcel.com',
      show: true,
      locale: "es-MX",
      // Habilita la grabación de video para cada prueba
      video: true,
      keepVideoForPassedTests: true,
      // Habilita la generación de trazas de Playwright
      trace: true, // Allure adjuntará la traza si la prueba falla
      keepTraceForPassedTests: true,

      screenshots: true, 
      keepScreenshotsForPassedTests: true
    }
  },

  include: {
    I: "./steps_file.js",
    planesPage: "./pages/planesPage.js",
    youtubePage: "./pages/youtubePage.js",
    plan5g_page: "./pages/plan5g_page.js",
    footertelcelPage: "./pages/pruebaTC010Page.js",
    marcosotoPage: "./pages/marcosotoPage.js",
    terminos_page: "./pages/terminos_page.js",
    region_page: "./pages/region_page.js"

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
      "./steps/marcosotoSteps.js",
      "./steps/pageStep.js",
      "./steps/TC009Steps.js",
      "./steps/planSteps.js",
  ]
  },


  name: "Actividad youtube y Telcel"
    
};

