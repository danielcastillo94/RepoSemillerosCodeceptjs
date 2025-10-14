import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import homeSteps from '../steps/homeSteps';

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      //url: "https://www.youtube.com",
      url: "https://www.telcel.com",
      show: true,
      locale: "es-MX",
    },
  },

  include: {
    /*I: "./steps_file.js",
    youtubePage: "./pages/youtubePage.js", */
    I: "./homeSteps.js",
    home_page: "./pages/homePage.js",
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
    steps: ["./steps/loginSteps.js"],
  },
  //name: "Actividad youtube",
  name: "Página Telcel",
};
