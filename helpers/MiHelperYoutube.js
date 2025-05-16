const { Helper } = require('codeceptjs');

class MiHelperYoutube extends Helper {
  constructor(config) {
    super(config);
  }

  async esperarYValidarTexto(selector, textoEsperado) {
    const { page } = this.helpers.Playwright;

    for (let i = 0; i < 5; i++) {
      try {
        await page.waitForSelector(selector, { timeout: 3000 });
        const textoActual = await page.$eval(selector, el => el.innerText.trim());

        if (textoActual.includes(textoEsperado)) return;
      } catch (_) {
      }
    }

    throw new Error(`No se encontró el texto esperado: "${textoEsperado}" tras 5 intentos`);
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
