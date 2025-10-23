/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "https://www.telcel.com",
      show: true,
      locale: "es-MX",
    },
  },

  include: {
     I: "./steps_file.js",
    TC001Page: "./pages/TC001Page.js",
    TC002Page: "./pages/TC002Page.js",
    TC003Page: "./pages/TC003Page.js",
    TC004Page: "./pages/TC004Page.js",
    TC005Page: "./pages/TC005Page.js",
  },

  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    }
  },
  gherkin: {
    features: "./features/*.feature",
    steps: ["./steps/loginSteps.js", 
      "./steps/TC001Steps.js",
      "./steps/TC002Steps.js",
      "./steps/TC003Steps.js",
      "./steps/TC004Steps.js",
      "./steps/TC005Steps.js",

    ]
  },
  
};