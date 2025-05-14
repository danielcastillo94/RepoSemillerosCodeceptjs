const { Helper } = require('codeceptjs');

class MiHelperYoutube extends Helper {

  constructor(config) {
    super(config);
    console.log('MiHelper cargo');
  }

  async esperarYValidarTexto(selector, textoEsperado) {
    const { page } = this.helpers.Playwright;
    await page.waitForSelector(selector, { timeout: 10000 });

    const textoActual = await page.$eval(selector, el => el.textContent.trim());

    if (textoActual !== textoEsperado) {
      throw new Error(`El texto esperado es: "${textoEsperado}", pero se encontro : "${textoActual}"`);
    }
  }

  async validarCantidadDeElementos(selector, minimo) {
    const { page } = this.helpers.Playwright;
    await page.waitForSelector(selector, { timeout: 10000 });

    const elementos = await page.$$(selector);
    const cantidad = elementos.length;

    if (cantidad < minimo) {
      throw new Error(`Se esperaban al menos ${minimo} elementos, pero solo se encontraron ${cantidad}`);
    }
  }
}

module.exports = MiHelperYoutube;
