/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_steps.js', /** Indica donde se encuentran las pruebas a ejecutar */
  output: './output', /** indica donde se guardaran los resultados de las pruebas*/

  helpers: { /** Ayudantes para realizar las acciones, configura el motor de automatizacion */
    Playwright: {
      browser: "chromium", /** Navegador que se va a utilizar */
      url: 'https://www.telcel.com', /** Url de los casos a probar */
      show: true, /** Muestra o no el navegador al ejecutar las pruebas */
      video: true,
      pressKeyDelay: 100,
      trace: true,
      keepTraceForPassedTests: true,
      locale: "es-MX" /** Configuracion regional */
    },
    PlaywrightVideoAllure:{
      require: './utils/playwrightVideoAllure_helper.js'
    }
  },

  include: {
    I: "./steps_file.js", /** Crear al actor, quien va a realizar las acciones */
    karelPage: "./pages/karelPage.js", /** Creacion de la page Object */
    busquedaProductosPage: "./pages/busquedaProductosPage.js",
    carritoPage: "./pages/carritoPage.js",
    checkoutPage: "./pages/checkoutPage.js",
    codigoPromocionalPage: "./pages/codigoPromocionalPage.js",
    detalleProductoPage: "./pages/detalleProductoPage.js",
    filtrosProductosPage: "./pages/filtrosProductosPage.js",
    flujoE2EPage: "./pages/flujoE2EPage.js",
    loginCuentaPage: "./pages/loginCuentaPage.js",
    navegacionCategoriasPage: "./pages/navegacionCategoriasPage.js",
    ordenamientoResultadosPage: "./pages/ordenamientoResultadosPage.js",
    smokePage: "./pages/smokePage.js",
    wishlistPage: "./pages/wishlistPage.js",
  },

  gherkin: {
    features: './features/*.feature', /** Ubicacion de los archivos features */
    steps: [
      "./steps/karelSteps.js", /** Ubicaciones de los archivos que traducen Given,When y Then a javascript */
      "./steps/liverpoolSteps.js",
    ],
  },

  plugins: { /**Son las funcionalidades extra */
    allure: { /** Generador de reportes */
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    }
  },

  bootstrap: null, /**Archivo opcional que se ejecuta antes de realizar las pruebas */
  mocha: {}, /** Motor de ejecucion */
  name: "Actividad youtube y Telcel" /**Nombre del proyecto */
};