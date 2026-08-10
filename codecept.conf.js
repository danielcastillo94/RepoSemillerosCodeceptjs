/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './features/*.feature',
  output: './output',

  helpers: {
    Playwright: {
      url: 'https://www.saucedemo.com/',
      show: true,
      browser: 'chromium',
      video: true,
      pressKeyDelay: 100,
      trace: true,
      keepTraceForPassedTests: true,
    },
    PlaywrightVideoAllure: {
        require: './utils/playwrightVideoAllure_helper'
  },
  },

  include: {
    I: './steps_file.js',
    sauceDemoPage: './pages/sauceDemoPage.js'
  },

  gherkin: {
    features: './features/*.feature',
    steps: './step_definitions/*.js'
  },

  plugins: {
  screenshot: {
    enabled: true
  },

  allure: {
    enabled: true,
    require: "allure-codeceptjs"
  }
},

  name: 'sauce-demo-automation'
}