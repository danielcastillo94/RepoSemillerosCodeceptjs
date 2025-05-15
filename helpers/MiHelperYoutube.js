const { Helper } = require('codeceptjs');

class MiHelperYoutube extends Helper {
  constructor(config) {
    super(config);
    console.log('MiHelperYoutube cargado');
  }

  async esperarYValidarTexto(selector, textoEsperado) {
    const { page } = this.helpers.Playwright;
    await page.waitForSelector(selector, { timeout: 10000 });
    const textoActual = await page.$eval(selector, el => el.textContent.trim());
    if (textoActual !== textoEsperado) {
      throw new Error(`Texto esperado: "${textoEsperado}", pero se encontró: "${textoActual}"`);
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

  async esperarQueContengaTexto(selector, textoParcial) {
    const { page } = this.helpers.Playwright;
    await page.waitForSelector(selector, { timeout: 10000 });
    const textoActual = await page.$eval(selector, el => el.textContent.trim());
    if (!textoActual.includes(textoParcial)) {
      throw new Error(`El texto no contiene "${textoParcial}". Actual: "${textoActual}"`);
    }
  }

  async esperarElementoVisible(selector) {
    const { page } = this.helpers.Playwright;
    const elemento = await page.waitForSelector(selector, {
      timeout: 10000,
      state: 'visible'
    });
    if (!elemento) {
      throw new Error(`El elemento ${selector} no está visible`);
    }
  }

  async validarTextoExactoLista(selector, textoEsperado) {
    const { page } = this.helpers.Playwright;
    const elementos = await page.$$(selector);
    const coincidencia = await Promise.any(
      elementos.map(async el => {
        const text = (await el.textContent()).trim();
        return text === textoEsperado ? true : Promise.reject();
      })
    ).catch(() => false);

    if (!coincidencia) {
      throw new Error(`Ninguno de los elementos tiene el texto exacto: "${textoEsperado}"`);
    }
  }
}

module.exports = MiHelperYoutube;
