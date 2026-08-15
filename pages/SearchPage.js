const contexto = require('../utils/contexto')
const { I } = inject();
const BasePage = require('./BasePage');

const SELECTORES = {
  campoBusqueda: '[data-testid$="header-search-input"]',
  botonBusqueda: '[data-testid$="header-search-button"]'
};

class SearchPage extends BasePage {
  async abrirHome() {
    contexto.limpiar();
    I.amOnPage('/');
    this.esperarElemento(SELECTORES.campoBusqueda);
    await this.descartarModales();
  }

async buscarProducto(producto) {
    this.esperarElemento(SELECTORES.campoBusqueda);

    await I.usePlaywrightTo(`buscar "${producto}"`, async ({ page }) => {
      const campo = page.locator(SELECTORES.campoBusqueda).first();

      for (let intento = 1; intento <= 3; intento++) {
        await campo.click();
        await campo.fill(producto);

        if ((await campo.inputValue()) !== producto) continue;

        await campo.press('Enter');
        try {
          await page.waitForURL(/[?&]s=/, { timeout: 8000 });
          return;
        } catch (e) {
          // el header se re-renderizó y perdió el input; reintentar
        }
      }

      throw new Error(`No se pudo ejecutar la búsqueda de "${producto}" tras 3 intentos`);
    });
  }
}

module.exports = new SearchPage();