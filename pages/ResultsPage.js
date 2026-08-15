const assert = require('assert')
const { I } = inject()
const BasePage = require('./BasePage')
const { extraerPrecios, verificarOrden, preciosFueraDeRango } = require('../utils/precio')

const SELECTORES = {
  listaResultados: '#plp-page-card-product-list',
  tituloResultados: '[data-testid="plp-page-heading-title-title"], h1',
  tarjetasProducto: '#plp-page-card-product-list a[data-testid$="-card-card-link"]',
  precioEnTarjeta:
    '#plp-page-card-product-list [data-testid*="price" i], #plp-page-card-product-list [class*="price" i]'
}

/**
 * XPath que sube desde el <a> de la tarjeta hasta el contenedor que es hijo
 * DIRECTO del grid de resultados.
 *
 * Por qué hace falta: la etiqueta "Patrocinado" NO siempre vive dentro del
 * <a>. En muchas tarjetas es hermana del enlace, dentro del wrapper. Si sólo
 * se lee el texto del <a>, los anuncios pasan desapercibidos.
 */
const CONTENEDOR_DE_TARJETA =
  'xpath=ancestor-or-self::*[parent::*[@id="plp-page-card-product-list"]][1]'

/**
 * Los productos patrocinados son publicidad pagada: se insertan al inicio y
 * de forma periódica en la lista, y NO respetan el criterio de ordenamiento
 * ni los filtros aplicados. Incluirlos produciría fallos que no corresponden
 * a un bug del sitio.
 */
const PATROCINADO = /patrocinado|publicidad|sponsored|anuncio/i

class ResultsPage extends BasePage {
  async esperarCargaDeResultados() {
    const selector = [SELECTORES.listaResultados, SELECTORES.tituloResultados].join(', ')

    await I.usePlaywrightTo('esperar a que la PLP renderice', async ({ page }) => {
      try {
        await page.waitForSelector(selector, { state: 'attached', timeout: 20000 })
      } catch (e) {
        await page.waitForLoadState('domcontentloaded')
      }
    })
  }

  async validarResultados() {
    await this.esperarCargaDeResultados()
    I.seeElement(SELECTORES.listaResultados)
    this.esperarElemento(SELECTORES.tarjetasProducto)
  }

  async validarSinResultados(producto) {
    await this.esperarCargaDeResultados()

    const titulos = await I.grabTextFromAll(SELECTORES.tarjetasProducto)
    const coincidencias = titulos.filter((t) =>
      t.toLowerCase().includes(producto.toLowerCase())
    )

    I.say(`"${producto}": ${titulos.length} tarjetas, ${coincidencias.length} coinciden`)

    assert.strictEqual(
      coincidencias.length,
      0,
      `Se esperaban 0 productos relacionados con "${producto}" pero se encontraron ${coincidencias.length}`
    )
  }

  async validarProductoRelacionado(producto) {
    await this.esperarCargaDeResultados()

    const titulo = await I.grabTextFrom(SELECTORES.tituloResultados)
    assert.ok(
      titulo.toLowerCase().includes(producto.toLowerCase()),
      `El título "${titulo}" no contiene el término buscado "${producto}"`
    )

    const tarjetas = await this.contarElementos(SELECTORES.tarjetasProducto)
    assert.ok(tarjetas > 0, `No se encontraron productos para "${producto}"`)
  }

  /* ------------------------------------------------------------------ *
   * Update 3 — lectura de precios y navegación al detalle
   * ------------------------------------------------------------------ */

  /**
   * Devuelve el texto de cada tarjeta leyendo su CONTENEDOR completo,
   * no sólo el <a>. Así la etiqueta "Patrocinado" queda incluida.
   */
  async obtenerTextosDeTarjetas() {
    return I.usePlaywrightTo('leer el texto de cada tarjeta de producto', async ({ page }) => {
      const anclas = await page.locator(SELECTORES.tarjetasProducto).all()
      const textos = []

      for (const ancla of anclas) {
        const contenedor = ancla.locator(CONTENEDOR_DE_TARJETA)

        try {
          textos.push(await contenedor.innerText({ timeout: 3000 }))
        } catch (e) {
          // Si la estructura cambia y el contenedor no resuelve, se usa el <a>.
          textos.push(await ancla.innerText())
        }
      }

      return textos
    })
  }

  /**
   * Lee los precios realmente renderizados en la PLP, excluyendo publicidad.
   */
  async obtenerPrecios() {
    await this.esperarCargaDeResultados()

    const textos = await this.obtenerTextosDeTarjetas()
    const organicas = textos.filter((texto) => !PATROCINADO.test(texto))
    const descartadas = textos.length - organicas.length

    I.say(`Tarjetas: ${textos.length} totales, ${descartadas} patrocinadas excluidas`)

    let precios = extraerPrecios(organicas)

    if (precios.length === 0) {
      const textosDePrecio = await I.grabTextFromAll(SELECTORES.precioEnTarjeta)
      precios = extraerPrecios(textosDePrecio)
    }

    I.say(`Precios leídos de la PLP: [${precios.join(', ')}]`)
    return precios
  }

  /**
   * TC-016 / TC-017 / TC-018 — el ordenamiento realmente ordena.
   */
  async validarOrdenPorPrecio(direccion) {
    const precios = await this.obtenerPrecios()

    assert.ok(
      precios.length >= 2,
      `Se necesitan al menos 2 precios para validar el orden, se leyeron ${precios.length}.`
    )

    const resultado = verificarOrden(precios, direccion)
    I.say(resultado.mensaje)
    assert.ok(resultado.ordenado, resultado.mensaje)
  }

  /**
   * TC-009 — el filtro de precio realmente filtra.
   */
  async validarPreciosEnRango(minimo, maximo) {
    const precios = await this.obtenerPrecios()

    assert.ok(
      precios.length > 0,
      `El filtro de $${minimo} a $${maximo} no dejó ningún producto visible con precio legible.`
    )

    const fuera = preciosFueraDeRango(precios, minimo, maximo)

    assert.strictEqual(
      fuera.length,
      0,
      `Se encontraron ${fuera.length} productos fuera del rango $${minimo}–$${maximo}: [${fuera.join(', ')}]. ` +
        `Precios leídos: [${precios.join(', ')}]`
    )

    I.say(`Los ${precios.length} precios visibles están dentro de $${minimo}–$${maximo}`)
  }

  /**
   * TC-020 — abre el detalle del producto en la posición indicada (1-based).
   */
  async abrirProductoEnPosicion(posicion = 1) {
    await this.validarResultados()

    const tarjeta = locate(SELECTORES.tarjetasProducto).at(posicion)
    const ruta = await I.grabAttributeFrom(tarjeta, 'href')

    assert.ok(ruta, `La tarjeta en la posición ${posicion} no tiene atributo href`)

    I.say(`Abriendo el producto #${posicion}: ${ruta}`)
    await this.abrir(ruta)
  }
}

module.exports = new ResultsPage()
