const assert = require('assert')
const { I } = inject()
const BasePage = require('./BasePage')
const contexto = require('../utils/contexto')
const { parsearPrecio } = require('../utils/precio')

const SELECTORES = {
  nombre: '[data-testid*="pdp" i][data-testid*="title" i], [data-testid*="product-title" i], h1',
  precio: '[data-testid*="pdp" i][data-testid*="price" i], [data-testid*="price" i], [class*="price" i]',
  descripcion:
    '[data-testid*="description" i], [id*="description" i], [class*="description" i], [data-testid*="detail" i]',

  // Update 4 — botón de agregar a la bolsa, en orden de especificidad.
  botonAgregar: [
    '[data-testid*="add-to-cart" i]',
    '[data-testid*="addtocart" i]',
    '[data-testid*="add-to-bag" i]',
    '[data-testid*="addtobag" i]',
    'button[id*="add-to-cart" i]',
    'button[aria-label*="bolsa" i]',
    'button[aria-label*="carrito" i]'
  ]
}

// Longitud mínima razonable para considerar que hay una descripción real
// y no un contenedor vacío o un placeholder.
const LARGO_MINIMO_DESCRIPCION = 20

/**
 * "Agregar a la bolsa" y "Comprar ahora" están uno al lado del otro y su texto
 * se parece. El segundo salta directo al checkout, que este reto excluye
 * explícitamente del alcance. El patrón NEGATIVO evita esa confusión: sin él,
 * un mal día la suite terminaría en el flujo de pago.
 */
const TEXTO_AGREGAR = /agregar a (la )?(bolsa|carrito)|a[ñn]adir a (la )?(bolsa|carrito)|agregar al carrito/i
const TEXTO_NO_DESEADO = /comprar ahora|pagar|checkout|finalizar compra/i

const TEXTO_CONFIRMACION = /agregad[oa]|a[ñn]adid[oa]|se agreg[óo]|producto agregado|tu bolsa/i
const TEXTO_SEGUIR = /seguir comprando|continuar comprando|seguir navegando/i

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

  /* ------------------------------------------------------------------ *
   * Update 4 — agregar a la bolsa (TC-029, TC-031)
   * ------------------------------------------------------------------ */

  /**
   * TC-029 — agrega el producto abierto a la bolsa.
   *
   * Antes de hacer clic guarda nombre y precio en el contexto compartido:
   * después del clic, la PDP puede quedar tapada por un modal o el sitio puede
   * navegar a la bolsa, y ya no habría de dónde leerlos. Capturar el estado
   * ANTES de la acción que lo destruye es un hábito que evita muchas
   * validaciones imposibles.
   */
  async agregarAlCarrito() {
    const nombre = await this.obtenerNombre()
    const precio = await this.obtenerPrecio()

    contexto.guardar('productoAgregado', { nombre, precio })
    I.say(`Agregando a la bolsa: "${nombre}" ($${precio})`)

    await this.hacerClicEnAgregar()
    await this.cerrarConfirmacion()
  }

  async hacerClicEnAgregar() {
    await I.usePlaywrightTo('hacer clic en "Agregar a la bolsa"', async ({ page }) => {
      // 1) Selectores específicos (data-testid / id / aria-label).
      for (const selector of SELECTORES.botonAgregar) {
        const boton = page.locator(selector).first()

        const usable =
          (await boton.isVisible().catch(() => false)) &&
          !(await boton.isDisabled().catch(() => false))

        if (usable) {
          await boton.scrollIntoViewIfNeeded()
          await boton.click()
          return
        }
      }

      // 2) Plan B: por texto, descartando explícitamente "Comprar ahora".
      const botones = page.locator('button, [role="button"]')
      const total = Math.min(await botones.count(), 120)

      for (let i = 0; i < total; i++) {
        const boton = botones.nth(i)

        if (!(await boton.isVisible().catch(() => false))) continue
        if (await boton.isDisabled().catch(() => false)) continue

        const texto = ((await boton.innerText().catch(() => '')) || '').trim()

        if (TEXTO_AGREGAR.test(texto) && !TEXTO_NO_DESEADO.test(texto)) {
          await boton.scrollIntoViewIfNeeded()
          await boton.click()
          return
        }
      }

      throw new Error(
        'No se encontró el botón para agregar a la bolsa. ' +
          'Ejecuta "node scripts/inspeccionar-carrito.js" para ver los botones reales de la PDP.'
      )
    })
  }

  /**
   * TC-031 — tras agregar, Liverpool abre un modal de confirmación que tapa
   * el header. Si no se cierra, la lectura del contador falla por un motivo
   * que no tiene nada que ver con el defecto que se busca.
   */
  async cerrarConfirmacion() {
    await I.usePlaywrightTo('cerrar el modal de confirmación', async ({ page }) => {
      const confirmacion = page.getByText(TEXTO_CONFIRMACION).first()
      await confirmacion.waitFor({ state: 'visible', timeout: 8000 }).catch(() => null)

      const seguir = page.getByRole('button', { name: TEXTO_SEGUIR }).first()

      if (await seguir.isVisible({ timeout: 2000 }).catch(() => false)) {
        await seguir.click()
        return
      }
    })

    await this.descartarModales()
  }
}

module.exports = new ProductDetailPage()
