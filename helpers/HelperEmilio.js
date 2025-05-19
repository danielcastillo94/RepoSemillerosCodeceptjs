const { Helper } = require('codeceptjs');
const { expect } = require('chai');

class DailyHelper extends Helper {
  async irADailyMotion() {
    const { page } = this.helpers.Playwright;
    await page.goto('https://www.dailymotion.com/mx');
  }

  async clickEnSeguidos() {
    const { page } = this.helpers.Playwright;
    await page.click('//main//a[@href="/mx#following"]');
  }

  async validarEnlaceSeguidos() {
    const { page } = this.helpers.Playwright;
    const selector = '//main//a[@href="/mx#following"]';
    const atributo = 'href';
    await page.waitForSelector(selector, { timeout: 10000 });
    const valor = await page.getAttribute(selector, atributo);
    console.log(`${atributo} capturado:`, valor);
    expect(valor).to.include('#following');
  }
}

module.exports = DailyHelper;
