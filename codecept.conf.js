const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    FileSystem: {},
    MyHelper: {
        require: "./helpers/MyHelper.js",
      },
    Puppeteer: {
      url: "https://demoqa.com",
      show: true,
      windowSize: "1200x900",
      waitForTimeout: 10000,
    },
  },

  include: {
    I: "./steps_file.js",
  },
  gherkin: {
    features: "./features/*.feature",
    steps: ["./steps/demoqaSteps.js", "./steps/youtubeSteps.js"],
  },
  name: "demoQA",
};