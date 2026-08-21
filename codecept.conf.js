/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_steps.js', /** Indica donde se encuentran las pruebas a ejecutar */
  output: './output', /** indica donde se guardaran los resultados de las pruebas*/

  helpers: { /** Ayudantes para realizar las acciones, configura el motor de automatizacion */
    Playwright: {
      browser: "chromium", /** Navegador que se va a utilizar */
      url: 'https://www.liverpool.com.mx', /** Url de los casos a probar */
      show: true, /** En local muestra el navegador; en CI (GitHub Actions) corre headless */
      locale: "es-MX" /** Configuracion regional */
    }
  },

  include: {
    I: "./steps_file.js", /** Crear al actor, quien va a realizar las acciones */
    karelPage: "./pages/karelPage.js", /** Creacion de la page Object */
    rickMortyMockPage: "./pages/rickMortyMockPage.js", /** Page Object para demo de Network Mocking */
  },

  gherkin: {
    features: './features/*.feature', /** Ubicacion de los archivos features */
    steps: [
      "./steps/karelSteps.js", /** Ubicaciones de los archivos que traducen Given,When y Then a javascript */
      "./steps/liverpoolSteps.js",
      "./steps/rickMortyMockSteps.js", /** Steps para demo de Network Mocking */
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
  name: "Actividad youtube y Liverpool" /**Nombre del proyecto */
};