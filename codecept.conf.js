require('dotenv').config({ path: './secreto.env' })

if (!process.env.BASE_URL) {
  throw new Error('Falta BASE_URL en secreto.env — copia secreto.env.example')
}

/**
 * Grabar video y traza de TODAS las pruebas hace la corrida más lenta y pesada.
 * Para la entrega hace falta (el rubro pide videos + trazas + screenshots);
 * para iterar en local, no. Se controla por variable de entorno:
 *
 *   npm test                 -> con evidencia completa
 *   EVIDENCIA=false npm test -> rápido, sin video ni traza
 */
const GRABAR_EVIDENCIA = process.env.EVIDENCIA !== 'false'

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: process.env.BASE_URL,
      show: true,
      restart: 'context',
      waitForNavigation: 'domcontentloaded',
      waitForTimeout: 15000,
      // `restart: 'context'` + video = un archivo .webm por escenario.
      video: GRABAR_EVIDENCIA,
      keepVideoForPassedTests: GRABAR_EVIDENCIA,
      trace: GRABAR_EVIDENCIA,
      keepTraceForPassedTests: GRABAR_EVIDENCIA
    },

    /**
     * Helper propio: toma el video y la traza que dejó Playwright en ./output
     * y los ADJUNTA al caso correspondiente en Allure.
     * Debe declararse DESPUÉS de Playwright: sus hooks `_after` corren en el
     * orden en que se declaran los helpers, y este necesita que Playwright ya
     * haya cerrado el contexto y escrito los archivos.
     */
    AllureEvidencia: {
      require: './utils/playwrightVideoAllure_helper.js'
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: [
      './step_definitions/busqueda_steps.js',
      './step_definitions/filtros_steps.js',
      './step_definitions/detalle_steps.js',
      './step_definitions/carrito_steps.js'
    ]
  },
  plugins: {
    // Nombre canónico del plugin de screenshots en caso de fallo.
    // Se adjunta solo a Allure cuando el plugin allure está activo.
    screenshot: {
      enabled: true,
      on: 'fail'
    },
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    },
    retryFailedStep: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './tests/*_test.js',
  noGlobals: false,
  name: 'HectorPerez_Liverpool'
}
