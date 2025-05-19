/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.youtube.com',
      show: false,

      locale: "es-MX",
    },
    MiHelper: {
      require: './helpers/MiHelper.js'
    },
    NavigationHelper: {
      require: './helpers/NavigationHelper.js'
    },
    DailyHelper: {
    require: './helpers/HelperEmilio.js'
    },
    MiHelperYoutube: {
    require: './helpers/MiHelperYoutube.js'
    },
    RechargeHelper: {
      require: './helpers/RechargeHelper.js',
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
    './steps/stepsEmilio.js'
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
