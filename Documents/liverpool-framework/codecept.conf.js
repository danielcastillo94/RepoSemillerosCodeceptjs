exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.liverpool.com.mx/tienda/home',
      show: true,
      video: true,
      pressKeyDelay: 100,
      trace: true,
      keepTraceForPassedTests: true,
    },
    PlaywrightVideoAllure: {
        require: './utils/playwrightVideoAllure_helper'
    }
  },
  include: {
    I: './steps_file.js',
    liverpoolPage: './pages/liverpoolPage.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/liverpoolSteps.js']
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
    }
  },
 
  tests: './tests/*_test.js',
  //noGlobals: false,
  name: 'liverpool-framework'
}