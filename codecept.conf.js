const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS === 'true');
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './steps/*.js',
  output: './output',

  helpers: {
    Playwright: {
      url: 'https://www.liverpool.com.mx/tienda/home',
      show: true,
      browser: 'chromium',
      restart: 'context',
      windowSize: '1440x900',
      locale: 'es-MX',
      video: true,
      keepVideoForPassedTests: true,
      trace: true,
      keepTraceForPassedTests: true,
      waitForNavigation: 'domcontentloaded',
      getPageTimeout: 60000
    },
    
  },

  include: {
    I: './steps_file.js',
    rickMortyEpisodiosPage: './pages/rickMortyEpisodiosPage.js'
  },

  gherkin: {
    features: './features/*.feature',
    steps: [
      './steps/rickMortyEpisodiosSteps.js'
    ]
  },

  plugins: {
    allure: {
      enabled: true,
      require: 'allure-codeceptjs',
      resultsDir: './output/allure-results'
    }
  },

  bootstrap: null,
  mocha: {},
  name: 'RepoSemillerosCodeceptjs'
};