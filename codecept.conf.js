exports.config = {
  tests: "./steps/*_steps.js",
  output: "./output",
  helpers: {
    Playwright: {
      url: "https://www.telcel.com/",
      show: true,
      browser: "chromium",
    },
  },
  include: {
    I: "./steps_file.js",
    footertelcelPage: "./pages/pruebaTC010Page.js",
    CoberturaPage: "./pages/cobertura_page.js",
  },
  gherkin: {
    features: "./features/*.feature",
    steps: ["./steps/pruebaTC010Steps.js", "./steps/cobertura_steps.js"],
  },
  plugins: {
    allure: {
      enabled: true,
      require: "@codeceptjs/allure-legacy",
    },
  },

  bootstrap: null,
  mocha: {},
  name: "telcel-tests",
};
