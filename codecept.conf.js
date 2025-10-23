/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: 'https://www.telcel.com',
      show: false ,
      locale: "es-MX"
    },
    ScreenshotHelper: {
        require: './helpers/ScreenshotHelper.js'
    }
  },

  include: {
    I: "./steps_file.js",
    TC001Page: "./pages/TC001Page.js",
    TC002Page: "./pages/TC002Page.js",
    TC003Page: "./pages/TC003Page.js",
    TC004Page: "./pages/TC004Page.js",
    TC005Page: "./pages/TC005Page.js",
    TC006Page: "./pages/TC006Page.js",
    TC007Page: "./pages/TC007Page.js",
    TC008Page: "./pages/TC008Page.js",
    TC009Page: "./pages/TC009Page.js",
    TC010Page: "./pages/TC010Page.js",
    TC011Page: "./pages/TC011Page.js",
    TC012Page: "./pages/TC012Page.js"
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    },
    screenshotOnFail: {
      enabled: true
    }
  },

  gherkin: {
    features: "./features/*.feature",
    steps: [
      "./steps/TC001Steps.js",
      "./steps/TC002Steps.js",
      "./steps/TC003Steps.js",
      "./steps/TC004Steps.js",
      "./steps/TC005Steps.js",
      "./steps/TC006Steps.js",
      "./steps/TC007Steps.js",
      "./steps/TC008Steps.js",
      "./steps/TC009Steps.js",
      "./steps/TC010Steps.js",
      "./steps/TC011Steps.js",
      "./steps/TC012Steps.js"
  ]
  },


  name: "Actividad youtube y Telcel"
    
};


