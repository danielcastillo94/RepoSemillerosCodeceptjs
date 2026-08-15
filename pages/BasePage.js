const { I } = inject()
const { TIMEOUT, BASE_URL } = require('../utils/config')

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

/**
 * ERR_ABORTED no es un fallo del sitio ni de la prueba: ocurre cuando el
 * servidor o un script en la página cancela la navegación en curso
 * (redirecciones, prefetch, banners que recargan). Reintentar resuelve.
 *
 * ¿Por qué no lo cubre el plugin `retryFailedStep`? Porque su lista de pasos
 * ignorados incluye `amOnPage` justamente para no reintentar navegaciones a
 * ciegas. Aquí se reintenta SOLO ante este error concreto, que es lo correcto:
 * un reintento indiscriminado esconde bugs reales.
 */
const ERRORES_REINTENTABLES = /ERR_ABORTED|ERR_NETWORK_CHANGED|ERR_CONNECTION_RESET/
const INTENTOS_NAVEGACION = 3

class BasePage {
  get timeout() {
    return TIMEOUT
  }

  /**
   * Navega a una ruta relativa y deja la página lista para interactuar.
   */
  async abrir(ruta = '/') {
    const destino = new URL(ruta, BASE_URL).toString()

    await I.usePlaywrightTo(`abrir ${ruta}`, async ({ page }) => {
      let ultimoError

      for (let intento = 1; intento <= INTENTOS_NAVEGACION; intento++) {
        try {
          await page.goto(destino, { waitUntil: 'domcontentloaded' })
          return
        } catch (error) {
          ultimoError = error
          if (!ERRORES_REINTENTABLES.test(error.message)) throw error
        }
      }

      throw new Error(
        `No se pudo abrir ${destino} tras ${INTENTOS_NAVEGACION} intentos. ` +
          `Último error: ${ultimoError.message}`
      )
    })

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

  esperarElemento(selector) {
    I.waitForElement(selector, this.timeout)
  }

  async esperarUrl(patron, segundos = this.timeout) {
    await I.usePlaywrightTo(`esperar URL que coincida con ${patron}`, async ({ page }) => {
      await page.waitForURL(patron, { timeout: segundos * 1000 })
    })
  }

  async contarElementos(selector) {
    return I.grabNumberOfVisibleElements(selector)
  }
}

module.exports = BasePage
