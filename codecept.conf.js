require('dotenv').config({ path: './secreto.env' })

if (!process.env.BASE_URL) {
  throw new Error('Falta BASE_URL en secreto.env — copia secreto.env.example')
}

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: process.env.BASE_URL,
      show: true,
      waitForNavigation: 'domcontentloaded',
      waitForTimeout: 15000,
      video: true,
      keepVideoForPassedTests: true,
      trace: true,
      keepTraceForPassedTests: true
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
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
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
/*     screenshotOnFail: {},
    pauseOn: {},
    browser: {},
    aiTrace: {} */
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './tests/*_test.js',
  noGlobals: true,
  name: 'nuevo-framework'
}