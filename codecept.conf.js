/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.amazon.com.mx',
      show: true,
      restart: false,
    }
  },
  include: {
    I: './steps_file.js'
  },
  gherkin: {
    features: './features/*.feature',
    steps: [
      './steps/loginSteps.js',
      './steps/busquedaSteps.js',
      './steps/carritoSteps.js'
    ]
  },
  name: 'framework codeceptjs'
}
