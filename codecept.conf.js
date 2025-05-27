/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './features/*_test.js',
  output: './output',
  helpers: {
  Playwright: {
      browser: 'chromium',
      url: 'https://www.youtube.com',
      show: true,
      locale: "es-MX",
      waitForTimeout: 10000, 
      navigationTimeout: 60000 
    },
    TestCafe: {
      url: 'https://demoqa.com',
      show: true
    },
    Puppeteer: {
      url: 'https://demoqa.com',
      show: true,
      chrome: {
        args: ['--no-sandbox'],
        defaultViewport: null
      },
      windowSize: '1200x900'
    },

  REST: {
    endpoint: 'https://example.com',
    defaultHeaders: {
      'Content-Type': 'application/json'
    }
  },

  MockRequest: {
     require: './helpers/MockRequest.js',
    endpoint: 'https://example.com',
    mocks: {
      'GET /api/users': {
        status: 200,
        body: [{ id: 1, name: 'Usuario Mockeado' }]
      }
    }
  },

  MiHelper: { require: './helpers/MiHelper.js' },
  DailyHelpers: { require: './helpers/dailyHelper.js' },
  NavigationHelper: { require: './helpers/NavigationHelper.js' },
  DailyHelper: { require: './helpers/HelperEmilio.js' },
  MiHelperYoutube: { require: './helpers/MiHelperYoutube.js' },
  RechargeHelper: { require: './helpers/RechargeHelper.js' },
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
    features: './features/*.feature',
    steps: [
      './steps/pruebaSteps.js',
      './steps/loginSteps.js',
      './steps/youtubeLoginSteps.js',
      './steps/validacionesYoutubeSteps.js',
      './steps/dailySteps.js',
      './steps/telcelSteps.js',
      './steps/videoYoutubeSteps.js',
      './steps/stepsEmilio.js',
      './steps_file.js'
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
