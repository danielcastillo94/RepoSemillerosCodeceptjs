/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',

  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.youtube.com/feed/trending',
      show: true,
      locale: 'es-MX'
    },
    MiHelperValidacionYoutube: {
      require: './helpers/MiHelperValidacionYoutube.js'
    }
  },

  include: {
    I: './steps_file.js',
    youtubeMainPage: './pages/youtubeMainPage.js',
    youtubeVideoPage: './pages/youtubeVideoMainPage.js',
    youtubeLoginPage: './pages/youtubeLoginPage.js',
    validacionesYoutubeSteps: './steps/videoYoutubeSteps.js'
  },

  gherkin: {
    features: './features/*.feature',
    steps: [
      './steps/pruebaSteps.js',
      './steps/loginSteps.js',
      './steps/youtubeLoginSteps.js',
      './steps/validacionesYoutubeSteps.js',
      './steps/dailySteps.js',
      './steps/videoYoutubeSteps.js'
    ]
  },

  plugins: {
    allure: {
      enabled: true,
      require: 'allure-codeceptjs',
      resultsDir: 'allure-results'
    }
  },

  name: 'Actividad YouTube'
};