const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*ejercicio2.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: '',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  plugins: {
    htmlReporter: {
      enabled: false
    }
  },
  name: 'framework prueba'
}