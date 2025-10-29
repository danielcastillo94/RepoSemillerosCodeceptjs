/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.telcel.com/',
      show: true,
      locale: "es-MX",
    },
  },
  include: {
    I: './steps_file.js',
    contacto_page: './pages/contacto_page.js',
  },

  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    }
  },
  gherkin: {
    features: './features/**/*.feature',
    steps: [
      './steps/contacto_steps.js'
    ],
  },
 
  name: 'Automatizacion'
};
