/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "https://www.youtube.com",
      show: false,
      locale: "es-MX",
    },
  },
  include: {
    I: "./steps_file.js",
    youtubePage: "./pages/youtubePage.js",              //Ejemplo
    homePage: "./pages/homePage.js",                    //TC001
    planesPage: "./pages/planesPage.js",                //TC002, TC003
    buscadorPage: "./pages/buscadorPage.js",            //TC004
    detalleEquipoPage: "./pages/detalleEquipoPage.js",  //TC005
    coberturaPage: "./pages/coberturaPage.js",          //TC006
    contactoPage: "./pages/contactoPage.js",            //TC007
    ayudaPage:"./pages/ayudaPage.js",                   //TC008
    regionPage: "./pages/regionPage.js",                //TC009
    footertelcelPage: "./pages/pruebaTC010Page.js",     //TC010
    mobileMenuPage: "./pages/mobileMenuPage.js",        //TC011
    terminosPage: "./pages/terminosPage.js"             //TC012
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    }
  },
  gherkin: {
    features: "./features/!(ejemplo).feature",
    steps: [
      "./steps/loginSteps.js",
      "./steps/homeSteps.js",           //TC001
      "./steps/planesSteps.js",         //TC002, TC003
      "./steps/buscadorSteps.js",       //TC004
      "./steps/detalleEquipoSteps.js",  //TC005
      "./steps/coberturaSteps.js",      //TC006
      "./steps/contactoSteps.js",       //TC007
      "./steps/ayudaSteps.js",          //TC008
      "./steps/regionSteps.js",         //TC009
      "./steps/pruebaTC010Steps.js",    //TC010
      "./steps/mobileMenuSteps.js",     //TC011
      "./steps/terminosSteps.js"        //TC012
    ],
  },
  name: "Actividad youtube",
};
