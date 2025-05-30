const Helper = require("@codeceptjs/helper");

class MyHelper extends Helper {
  async customAction() {
    const { page } = this.helpers.Puppeteer;
    const url = await page.url();
    console.log("Current URL is:", url);
  }
}

module.exports = MyHelper;
