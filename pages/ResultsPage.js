const assert = require('assert');
const { I } = inject();
const BasePage = require('./BasePage');

const SELECTORES = {
  listaResultados: '#plp-page-card-product-list',
  tituloResultados: '[data-testid="plp-page-heading-title-title"], h1',
  tarjetasProducto: '#plp-page-card-product-list a[data-testid$="-card-card-link"]'
};

class ResultsPage extends BasePage {
  async esperarCargaDeResultados() {
    const selector = [SELECTORES.listaResultados, SELECTORES.tituloResultados].join(', ');

    await I.usePlaywrightTo('esperar a que la PLP renderice', async ({ page }) => {
      try {
        await page.waitForSelector(selector, { state: 'attached', timeout: 20000 });
      } catch (e) {
        // Algunas búsquedas sin coincidencias no renderizan grid ni encabezado
        await page.waitForLoadState('domcontentloaded');
      }
    });
  }

  async validarResultados() {
    await this.esperarCargaDeResultados();
    I.seeElement(SELECTORES.listaResultados);
    this.esperarElemento(SELECTORES.tarjetasProducto);
  }

  async validarSinResultados(producto) {
    await this.esperarCargaDeResultados();

    const titulos = await I.grabTextFromAll(SELECTORES.tarjetasProducto);
    const coincidencias = titulos.filter((t) =>
      t.toLowerCase().includes(producto.toLowerCase())
    );

    I.say(`"${producto}": ${titulos.length} tarjetas, ${coincidencias.length} coinciden`);

    assert.strictEqual(
      coincidencias.length,
      0,
      `Se esperaban 0 productos relacionados con "${producto}" pero se encontraron ${coincidencias.length}`
    );
  }

  async validarProductoRelacionado(producto) {
    await this.esperarCargaDeResultados();

    const titulo = await I.grabTextFrom(SELECTORES.tituloResultados);
    assert.ok(
      titulo.toLowerCase().includes(producto.toLowerCase()),
      `El título "${titulo}" no contiene el término buscado "${producto}"`
    );

    const tarjetas = await this.contarElementos(SELECTORES.tarjetasProducto);
    assert.ok(tarjetas > 0, `No se encontraron productos para "${producto}"`);
  }
}

module.exports = new ResultsPage();