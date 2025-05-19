const { Helper } = require('codeceptjs');
const dailyPage = require('../pages/dailyPage');

class DailyHelpers extends Helper {
  async goToHome() {
    const { page } = this.helpers.Playwright;
    await page.goto('https://www.dailymotion.com/mx');
  }

  async seeElement(selector, timeout = 10000) {
    const { page } = this.helpers.Playwright;
    await page.waitForSelector(selector, { timeout });
    console.log(`Elemento cargado: ${selector}`);
  }

  async seeMinElements(selector, minCount) {
    const { page } = this.helpers.Playwright;
    const elements = await page.$$(selector);
    const count = elements.length;
    console.log(`Se encontraron ${count} videos`);
    if (count < minCount) {
      throw new Error(`Se esperaban al menos ${minCount} elementos, pero se encontraron ${count}`);
    }
  }

  async verifyAllContentVisible() {
    const { page } = this.helpers.Playwright;
    await this.seeElement(dailyPage.elements.mainContainer);
    await this.seeElement(dailyPage.elements.header);
    await this.seeMinElements(dailyPage.elements.videoSection, 3);
    const title = await page.title();
    console.log(`Título: ${title}`);
  }
}

module.exports = DailyHelpers;
