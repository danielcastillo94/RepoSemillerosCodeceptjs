const fs = require('fs');
const path = require('path');
const { addAttachment } = require('@codeceptjs/allure-legacy');

class ScreenshotsHelper extends Helper {
  async _after() {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `screenshot-${timestamp}.png`;
    const filepath = path.join(global.output_dir || 'output', filename);

    const page = this.helpers.Playwright.page;
    await page.screenshot({ path: filepath });

    const image = fs.readFileSync(filepath);
    addAttachment('Captura final', image, 'image/png');
  }
}

module.exports = ScreenshotsHelper;