const assert = require('assert')
const { I } = inject()
const BasePage = require('./BasePage')
const { parsearPrecio } = require('../utils/precio')

const SELECTORES = {
  nombre: '[data-testid*="pdp" i][data-testid*="title" i], [data-testid*="product-title" i], h1',
  precio: '[data-testid*="pdp" i][data-testid*="price" i], [data-testid*="price" i], [class*="price" i]',
  descripcion:
    '[data-testid*="description" i], [id*="description" i], [class*="description" i], [data-testid*="detail" i]'
}

// Longitud mínima razonable para considerar que hay una descripción real
// y no un contenedor vacío o un placeholder.
const LARGO_MINIMO_DESCRIPCION = 20

class ProductDetailPage extends BasePage {
  /**
   * TC-020 — confirma que estamos en una página de detalle (PDP)
   * y no seguimos en la lista de resultados.
   */
  async validarQueEstoyEnElDetalle() {
    this.esperarElemento(SELECTORES.nombre)

    const nombre = (await I.grabTextFrom(SELECTORES.nombre)).trim()

    assert.ok(
      nombre.length > 0,
      'Se abrió la página de detalle pero el nombre del producto está vacío'
    )

    I.say(`Detalle abierto: "${nombre}"`)
    return nombre
  }

  async obtenerNombre() {
    this.esperarElemento(SELECTORES.nombre)
    return (await I.grabTextFrom(SELECTORES.nombre)).trim()
  }

  /**
   * Devuelve el primer precio legible de la PDP, ya convertido a número.
   */
  async obtenerPrecio() {
    const textos = await I.grabTextFromAll(SELECTORES.precio)

    for (const texto of textos) {
      const precio = parsearPrecio(texto)
      if (precio !== null && precio > 0) return precio
    }

    return null
  }

  /**
   * La descripción de Liverpool suele vivir en un acordeón. Se intenta con
   * los selectores conocidos y, si no aparece, se busca el bloque que sigue
   * al encabezado "Descripción".
   */
  async obtenerDescripcion() {
    return I.usePlaywrightTo('leer la descripción del producto', async ({ page }) => {
      const bloques = await page.locator(SELECTORES.descripcion).allTextContents()
      const candidato = bloques
        .map((t) => t.trim())
        .find((t) => t.length >= LARGO_MINIMO_DESCRIPCION)

      if (candidato) return candidato

      const encabezado = page.getByText(/descripci[óo]n/i).first()
      if ((await encabezado.count()) > 0) {
        const contenedor = encabezado.locator('xpath=..')
        return (await contenedor.innerText()).trim()
      }

      return ''
    })
  }

  /**
   * TC-021 — nombre, precio y descripción presentes y con contenido real.
   * Se validan los tres en una sola aserción compuesta para que el reporte
   * diga exactamente cuál faltó, en lugar de fallar en el primero y ocultar
   * los otros dos.
   */
  async validarDatosDelProducto() {
    const faltantes = []

    const nombre = await this.obtenerNombre()
    if (!nombre) faltantes.push('nombre')

    const precio = await this.obtenerPrecio()
    if (precio === null) faltantes.push('precio')

    const descripcion = await this.obtenerDescripcion()
    if (!descripcion || descripcion.length < LARGO_MINIMO_DESCRIPCION) faltantes.push('descripción')

    I.say(`Nombre: "${nombre}" | Precio: ${precio} | Descripción: ${descripcion.length} caracteres`)

    assert.strictEqual(
      faltantes.length,
      0,
      `Faltan datos en el detalle del producto: ${faltantes.join(', ')}`
    )
  }
}

module.exports = new ProductDetailPage()
