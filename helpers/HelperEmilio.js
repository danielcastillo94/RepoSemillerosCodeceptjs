const { Helper } = require('codeceptjs');
const { expect } = require('chai');

class DailyHelper extends Helper {

  async irADailyMotion() {
    const { page } = this.helpers.Playwright;
    await page.goto('https://www.dailymotion.com/mx');
    await page.waitForTimeout(2000);
  }

  async clickExplorar() {
    const { page } = this.helpers.Playwright;
    const botonSelector = '//main//a[@href="/mx"]';
    await page.waitForSelector(botonSelector, { timeout: 20000 });
    await page.click(botonSelector);
  }

  async obtenerAtributo(selector, atributo) {
    const { page } = this.helpers.Playwright;
    await page.waitForSelector(selector, { timeout: 10000 });
    const valor = await page.getAttribute(selector, atributo);
    console.log(`${atributo} capturado:`, valor);
    return valor;
  }

}

module.exports = DailyHelper;