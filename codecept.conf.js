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
<<<<<<< HEAD
      require: './helpers/YouTubeHelper'
    }
=======
      require: './helpers/MiHelper.js'
    },
    DailyHelpers: {
    require: './helpers/dailyHelper.js'
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
>>>>>>> f5125749a6b327bf9c74e3b8da89c79c71c34394
  },
  
  include: {
    I: './steps_file.js', 
    dailyPage: './pages/dailyPage.js',
    validacionesYoutubeSteps: './steps/videoYoutubeSteps.js',
    youtubeMainPage: './pages/youtubeMainPage.js',
    youtubeVideoPage: './pages/youtubeVideoMainPage.js', 
    youtubeLoginPage: './pages/youtubeLoginPage.js',
  },
  gherkin: {
<<<<<<< HEAD
    features: "./features/*.feature",
    steps: ["./steps/pruebaSteps.js", "./steps/loginSteps.js", "./steps/youtubeLoginSteps.js", "./steps/validacionesYoutubeSteps.js", "./steps/dailySteps.js", './steps/telcelSteps.js', "./steps/videoYoutubeSteps.js","./steps_file.js",],
=======
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
>>>>>>> f5125749a6b327bf9c74e3b8da89c79c71c34394
  },
  plugins: {
    allure: {
      enabled: true,
      require: 'allure-codeceptjs',
      resultsDir: 'allure-results'
    }
  },
<<<<<<< HEAD
  name: 'Actividad youtube'
};
=======
  name: 'Actividad YouTube'
};
>>>>>>> f5125749a6b327bf9c74e3b8da89c79c71c34394
