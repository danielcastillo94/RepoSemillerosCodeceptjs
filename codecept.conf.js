
/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "https://www.youtube.com",
      show: true,
      locale: "es-MX",
    },
  },

  include: {
    I: "./steps_file.js",
    youtubePage: "./pages/youtubePage.js",
    region_page: "./pages/region_page.js",
    
  },
  gherkin: {
    features: "./features/*.feature",
    steps: ["./steps/loginSteps.js", "./steps/TC009Steps.js" ],
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    }
    
  },
 
  
  name: "Actividad youtube",
};
