const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// Activar modo headless si se pasa la variable de entorno HEADLESS=true
setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.liverpool.com.mx',
      show: true,
      browser: 'chromium',
      video: true,
      trace: true,
      keepVideoForPassedTests: false
    },
    PlaywrightVideoAllure: {
      require: './utils/playwrightVideoAllure_helper.js'
    }
  },
  include: {
    I: './steps_file.js',
  },
  gherkin: {
    features: './features/**/*.feature',
    steps: ['./step_definitions/**/*.js']
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    },
    stepByStepReport: {
      enabled: false 
    }
  },
  name: 'RepoSemillerosCodeceptjs'
}