
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
    home_page: "./pages/Lvht_Home_page.js",
    planes_5G: "./pages/Lvht_Planes_page.js",
    contact_page: "./pages/Lvht_Contact_page.js",
    mobile_page: "./pages/Lvht_Mobil_page.js"
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    }
  },
  gherkin: {
    features: "./features/*_page.feature",
    steps: ["./steps/Lvht_Home_page_steps.js",
           "./steps/Lvht_Planes_page_steps.js",
           "./steps/Lvht_Contact_page_steps.js",
           "./steps/Lvht_Mobile_page_steps.js"],
  },
  name: "Telcel es la red",
};
