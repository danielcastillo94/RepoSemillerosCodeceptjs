/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    validacionesYoutubeSteps: './steps/validacionesYoutubeSteps.js',
    youtubeMainPage: './pages/youtubeMainPage.js',
  },
  gherkin: {
    features: './features/*.feature',
    steps: ['./steps/validacionesYoutubeSteps.js'],
  },
  name: 'Actividad youtube'
};