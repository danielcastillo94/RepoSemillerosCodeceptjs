const { Helper } = require('codeceptjs');

class DailyHelpers extends Helper {

  async waitPageLoaded() {
    const { page } = this.helpers.Playwright;
    await page.waitForSelector('//div[@id="root"]', { timeout: 30000 });
  }

  async seeElement(selector, timeout = 10000) {
    const { page } = this.helpers.Playwright;
    await page.waitForSelector(selector, { timeout });
  }

  async seeMinElements(selector, minCount) {
    const { page } = this.helpers.Playwright;
    const elements = await page.$$(selector);
    if (elements.length < minCount) {
      throw new Error(`Mínimo ${minCount} elementos requeridos, pero se encontraron ${elements.length}`);
    }
  }
}

module.exports = DailyHelpers;
