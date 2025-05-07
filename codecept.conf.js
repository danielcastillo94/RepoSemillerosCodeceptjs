
/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.telcel.com/',
      show: false,

      locale: 'es-MX',
    },
    MiHelper: {
      require: './helpers/MiHelper.js'
    }
  },
  include: {
    I: './steps_file.js',
    validacionesYoutubeSteps: './steps/videoYoutubeSteps.js',
    youtubeMainPage: './pages/youtubeMainPage.js',
    youtubeVideoPage: './pages/youtubeVideoMainPage.js', 
    youtubeLoginPage: './pages/youtubeLoginPage.js',
  },
  gherkin: {
    features: "./features/*.feature",
    steps: ["./steps/pruebaSteps.js", "./steps/loginSteps.js", "./steps/youtubeLoginSteps.js", "./steps/validacionesYoutubeSteps.js", "./steps/dailySteps.js", './steps/telcelSteps.js', "./steps/videoYoutubeSteps.js",],
  },
  name: 'Actividad youtube'
};
