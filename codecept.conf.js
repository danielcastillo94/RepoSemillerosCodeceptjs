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
    TC005Page: "./pages/TC005Page.js",
  },
  gherkin: {
    features: "./features/*.feature",
    steps: ["./steps/loginSteps.js", "./steps/TC005Steps.js"],
  },
  name: "Actividad youtube",
};
