/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.youtube.com',
      show: true,
      windowSize: '1200x900',
      locale: "es-MX"
    },
    MiHelperYoutube: {
      require: './helpers/MiHelperYoutube.js'
    },
  },
  include: {
    I: './steps_file.js'
  },
  gherkin: {
    features: './features/*.feature',
    steps: [
      './steps/pruebaSteps.js',
      './steps/loginSteps.js',
      './steps/youtubeLoginSteps.js',
      './steps/validacionesYoutubeSteps.js',
      './steps/dailySteps.js',
      './steps/telcelSteps.js',
      './steps/videoYoutubeSteps.js',
      './steps/armandoCargaDescargaMockeoSteps.js'
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
