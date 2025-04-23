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
    validacionesYoutubeSteps: './steps/videoYoutubeSteps.js',
    youtubeMainPage: './pages/youtubeMainPage.js',
  },
  gherkin: {
    features: './features/*.feature',
    steps: ['./steps/videoYoutubeSteps.js'],
  },
  name: 'Actividad youtube'
};
