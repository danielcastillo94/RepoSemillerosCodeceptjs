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
    youtubePage: "./pages/youtubePage.js",
  },

include: {
  I: './steps_file.js',
  buscadorPage: './pages/buscador_page.js',
},

allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    },

gherkin: {
  features: './features/*.feature',
  steps: [
    './steps/buscador_steps.js',
    // ...otros steps que ya tenga el proyecto
  ]
}
};
