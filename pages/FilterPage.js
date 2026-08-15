const { I } = inject()
const BasePage = require('./BasePage')

/**
 * Selectores confirmados con los scripts de scripts/.
 *
 * OJO — DOM duplicado escritorio/móvil:
 * Liverpool renderiza DOS copias de varios controles (una para escritorio y
 * otra para móvil) y oculta una por CSS. Por eso los inputs de precio llevan
 * ":visible": usar .first() a secas puede devolver la copia oculta, sobre la
 * que fill() no tiene efecto real y el filtro nunca se aplica.
 */
const SELECTORES = {
  disparadorOrden: '[data-testid="dropdown-sorting-button"]',
  acordeonPrecio: '[data-testid="button-dropdown-filter"]',
  textoAcordeonPrecio: /precio/i,
  inputPrecioMinimo: '[data-testid="at-text-min-input"]:visible',
  inputPrecioMaximo: '[data-testid="at-text-max-input"]:visible',
  botonAplicar: 'button:visible:has-text("Aplicar"), button:visible:has-text("Ver resultados")',
  opcionesOrden:
    '[role="option"], [role="menuitem"], [data-testid*="sorting" i] li, [data-testid*="sorting" i] button',
  listaResultados: '#plp-page-card-product-list'
}

const ETIQUETAS_ORDEN = {
  'menor precio': ['menor a mayor', 'menor precio', 'precio más bajo', 'precio: menor', 'menor'],
  'mayor precio': ['mayor a menor', 'mayor precio', 'precio más alto', 'precio: mayor', 'mayor'],
  relevancia: ['relevancia', 'más relevante'],
  'más nuevo': ['más nuevo', 'novedades', 'lo más nuevo']
}

const INTENTOS_MAXIMOS = 3
const ESPERA_URL_MS = 15000
const ESPERA_GRID_MS = 20000

/**
 * Espera a que la PLP se actualice tras aplicar un filtro u orden.
 *
 * POR QUÉ NO SE USA waitForLoadState('networkidle'):
 * Liverpool dispara analítica y publicidad de forma continua, así que la red
 * nunca queda inactiva 500 ms seguidos. Esa espera se resuelve un día y
 * expira al siguiente: es no determinista disfrazada de espera explícita.
 * Aquí se espera una CONSECUENCIA DIRECTA de nuestra acción: el cambio de URL.
 */
async function esperarActualizacionDeResultados(page, urlAnterior) {
  try {
    await page.waitForURL((url) => url.href !== urlAnterior, { timeout: ESPERA_URL_MS })
  } catch (e) {
    // Si el sitio aplicara el cambio sin tocar la URL no se falla aquí:
    // la validación real la hace la aserción de precios del step.
  }

  await page.locator(SELECTORES.listaResultados).waitFor({
    state: 'attached',
    timeout: ESPERA_GRID_MS
  })
}

class FilterPage extends BasePage {
  async ordenarPor(criterio) {
    const etiquetas = ETIQUETAS_ORDEN[criterio.toLowerCase().trim()]

    if (!etiquetas) {
      throw new Error(
        `Criterio de orden no soportado: "${criterio}". ` +
          `Opciones válidas: ${Object.keys(ETIQUETAS_ORDEN).join(', ')}`
      )
    }

    await this.descartarModales()

    await I.usePlaywrightTo(`ordenar los resultados por ${criterio}`, async ({ page }) => {
      const urlAnterior = page.url()

      const disparador = page.locator(SELECTORES.disparadorOrden).first()
      await disparador.waitFor({ state: 'visible', timeout: 15000 })
      await disparador.click()

      const opciones = page.locator(SELECTORES.opcionesOrden)
      await opciones.first().waitFor({ state: 'visible', timeout: 10000 })

      const textos = await opciones.allTextContents()

      const indice = textos.findIndex((texto) =>
        etiquetas.some((etiqueta) => texto.toLowerCase().includes(etiqueta))
      )

      if (indice === -1) {
        throw new Error(
          `No se encontró una opción de orden para "${criterio}". ` +
            `Opciones visibles: [${textos.map((t) => t.trim()).join(' | ')}]`
        )
      }

      await opciones.nth(indice).click()
      await esperarActualizacionDeResultados(page, urlAnterior)
    })
  }

  /**
   * TC-007 / TC-008 — aplica un rango de precio en el panel de filtros.
   *
   * Se verifica el valor real del input después de escribirlo (inputValue)
   * porque el panel se re-renderiza y puede descartar lo escrito: mismo
   * patrón que ya usa SearchPage.buscarProducto().
   */
  async filtrarPorRangoDePrecio(minimo, maximo) {
    await this.descartarModales()

    await I.usePlaywrightTo(`filtrar por precio entre ${minimo} y ${maximo}`, async ({ page }) => {
      let campoMinimo = page.locator(SELECTORES.inputPrecioMinimo).first()

      // El facet puede venir colapsado: se abre SÓLO si hace falta.
      if ((await campoMinimo.count()) === 0) {
        const acordeon = page
          .locator(SELECTORES.acordeonPrecio)
          .filter({ hasText: SELECTORES.textoAcordeonPrecio })
          .first()

        await acordeon.click()
        await page
          .locator(SELECTORES.inputPrecioMinimo)
          .first()
          .waitFor({ state: 'visible', timeout: 10000 })

        campoMinimo = page.locator(SELECTORES.inputPrecioMinimo).first()
      }

      const campoMaximo = page.locator(SELECTORES.inputPrecioMaximo).first()

      for (let intento = 1; intento <= INTENTOS_MAXIMOS; intento++) {
        const urlAnterior = page.url()

        await campoMinimo.fill('')
        await campoMinimo.fill(String(minimo))
        await campoMinimo.blur()

        await campoMaximo.fill('')
        await campoMaximo.fill(String(maximo))
        await campoMaximo.blur()

        const minimoEscrito = await campoMinimo.inputValue()
        const maximoEscrito = await campoMaximo.inputValue()

        if (minimoEscrito !== String(minimo) || maximoEscrito !== String(maximo)) {
          continue
        }

        const aplicar = page.locator(SELECTORES.botonAplicar).first()

        if ((await aplicar.count()) > 0) {
          await aplicar.click()
        } else {
          await campoMaximo.press('Enter')
        }

        await esperarActualizacionDeResultados(page, urlAnterior)
        return
      }

      throw new Error(
        `No se pudo fijar el rango de precio ${minimo}-${maximo} tras ${INTENTOS_MAXIMOS} intentos.`
      )
    })
  }
}

module.exports = new FilterPage()
