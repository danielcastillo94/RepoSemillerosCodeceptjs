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
    footertelcelPage: "./pages/pruebaTC010Page.js",
  },
  gherkin: {
    features: "./features/*.feature",
    steps: [
      "./steps/loginSteps.js",
      "./steps/pruebaTC010Steps.js"
    ],
  },
  name: "Actividad youtube",
};
