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
    //youtubePage: "./pages/youtubePage.js",
    planesPage: "./pages/planesPage.js",
  },
  gherkin: {
    features: "./features/planes.feature",
    steps: ["./steps/planSteps.js"],
  },
  name: "Actividad youtube",
};
