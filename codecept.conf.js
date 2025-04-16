/** @type {CodeceptJS.MainConfig} */
exports.config = {
<<<<<<< HEAD
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.amazon.com.mx',
      show: true,
      restart: false, 
    }
  },
  include: {
    I: './steps_file.js'
  },
  gherkin: {
    features: './features/*.feature',
    steps: [
      './steps/loginSteps.js'
    ]
  },
  name: 'framework codeceptjs'
}
=======
  tests: "./*_test.js",
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "https://www.telcel.com",
      show: true,
    },
  },
  include: {
    I: "./steps_file.js",
  },
  gherkin: {
    features: "./features/*.feature",
    steps: ["./steps/pruebaSteps.js"],
  },
  name: "framework codeceptjs",
};
>>>>>>> e2c704f3260179865aa3554f0a3c9e0d2bca3570
