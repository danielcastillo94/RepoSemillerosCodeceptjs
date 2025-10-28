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
    youtubePage: "./pages/youtubePage.js",
    TC001home_page: "./pages/TC001home_page.js",
    TC002planes_page: "./pages/TC002planes_page.js",
    TC003plan5g_page: "./pages/TC003plan5g_page.js",
    TC004buscador_page: "./pages/TC004buscador_page.js",
    TC005detalle_equipo_page: "./pages/TC005detalle_equipo_page.js",
    TC006cobertura_page: "./pages/TC006cobertura_page.js",
    TC007contacto_page: "./pages/TC007contacto_page.js",
    TC008ayuda_page: "./pages/TC008ayuda_page.js",
    TC009region_page: "./pages/TC009region_page.js",
    TC010footer_page: "./pages/TC010footer_page.js",
    TC011mobile_menu_page: "./pages/TC011mobile_menu_page.js",
    TC012terminos_page: "./pages/TC012terminos_page.js"
  },
  plugins: {
    allure: {
      enabled: true, // activar el plugin
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    }
  },


  gherkin: {
    features: "./features/*.feature",
    steps: [
      "./steps/loginSteps.js",
      "./steps/TC001Steps.js",
      "./steps/TC002Steps.js",
      "./steps/TC003Steps.js",
      "./steps/TC004Steps.js",
      "./steps/TC005Steps.js",
      "./steps/TC006Steps.js",
      "./steps/TC007Steps.js",
      "./steps/TC008Steps.js",
      "./steps/TC009Steps.js",
      "./steps/TC010Steps.js",
      "./steps/TC011Steps.js",
      "./steps/TC012Steps.js"
    ]
  },


  name: "Actividad youtube y Telcel"

};


