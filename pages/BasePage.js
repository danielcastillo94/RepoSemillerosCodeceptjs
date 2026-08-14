const { I } = inject()
const { TIMEOUT } = require('../utils/config')

/**
 * Selectores de elementos que aparecen en CUALQUIER página de Liverpool
 * (cookies, newsletter, modales promocionales).
 * Son constantes privadas del módulo: no se exportan, por lo tanto
 * ningún step definition puede alcanzarlos.
 */
const MODALES = [
  '#onetrust-accept-btn-handler',
  '[data-testid="cookie-banner-accept"]',
  '[data-testid$="modal-close"]',
  'button[aria-label="Cerrar"]',
  'button[aria-label="Close"]'
]

class BasePage {
  get timeout() {
    return TIMEOUT
  }

  /**
   * Navega a una ruta relativa y deja la página lista para interactuar.
   */
  async abrir(ruta = '/') {
    I.amOnPage(ruta)
    await this.descartarModales()
  }

  /**
   * Cierra cookies / newsletter / promos si están presentes.
   * Se centraliza aquí para no repetir este ruido en cada test.
   */

  async descartarModales() {
    for (const selector of MODALES) {
      const visibles = await I.grabNumberOfVisibleElements(selector)
      if (visibles > 0) {
        I.click(selector)
        I.waitForInvisible(selector, 5)
      }
    }
  }

  /**
   * Espera a que la página termine de cargar sus peticiones.
   * Reemplaza los I.wait(3) fijos: espera por una condición real,
   * no por un tiempo arbitrario.
   */

  async esperarRedInactiva() {
    await I.usePlaywrightTo('esperar a que la red quede inactiva', async ({ page }) => {
      await page.waitForLoadState('networkidle')
    })
  }

  esperarElemento(selector) {
    I.waitForElement(selector, this.timeout)
  }

  async esperarUrl(patron, segundos = this.timeout) {
    await I.usePlaywrightTo(`esperar URL que coincida con ${patron}`, async ({ page }) => {
      await page.waitForURL(patron, { timeout: segundos * 1000 });
    });
  }

  async contarElementos(selector) {
    return I.grabNumberOfVisibleElements(selector)
  }
}

module.exports = BasePage
