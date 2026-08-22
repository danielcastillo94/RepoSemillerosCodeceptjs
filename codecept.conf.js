/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*_steps.js', /** Indica donde se encuentran las pruebas a ejecutar */
  output: './output', /** indica donde se guardaran los resultados de las pruebas*/

  helpers: { /** Ayudantes para realizar las acciones, configura el motor de automatizacion */
    Playwright: {
      browser: "chromium", /** Navegador que se va a utilizar */
      url: 'https://www.telcel.com', /** Url de los casos a probar */
      show: !process.env.CI, /** En local muestra el navegador; en CI (GitHub Actions) corre headless */
      locale: "es-MX" /** Configuracion regional */
    }
  },

  include: {
  I: "./steps_file.js",
  karelPage: "./pages/karelPage.js",
  rickMortyMockPage: "./pages/rickMortyMockPage.js",
  rickMortyEpisodiosPage: "./pages/rickMortyEpisodiosPage.js",
},

  gherkin: {
    features: './features/*.feature', /** Ubicacion de los archivos features */
    steps: [
  "./steps/karelSteps.js",
  "./steps/rickMortyMockSteps.js",
  "./steps/rickMortyEpisodiosSteps.js",
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