
/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "https://www.youtube.com",
      show: true,
    },
  },
  include: {
    I: "./steps_file.js",
  },
  gherkin: {
    features: "./features/youtube.feature",
    steps: ["./steps/youtube.js"]
  },
}