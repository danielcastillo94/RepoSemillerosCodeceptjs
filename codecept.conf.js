exports.config = {
tests: './steps/*_steps.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.telcel.com/',
      show: true,
      browser: 'chromium',
    },
  },
  include: {
    I: './steps_file.js',                 
    CoberturaPage: './pages/cobertura_page.js',
  },



  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    },
  },

  
  bootstrap: null,
  mocha: {},
  name: 'telcel-tests',
};