const assert = require('assert')
const { I } = inject()
const BasePage = require('./BasePage')
const contexto = require('../utils/contexto')
const { parsearPrecio } = require('../utils/precio')

/**
 * SELECTORES REALES, confirmados con scripts/inspeccionar-carrito.js.
 *
 * La primera versión de este archivo usaba listas de candidatos genéricos
 * (`[class*="cart-item" i]`, `[class*="summary" i]`). Falló por dos motivos
 * que vale la pena recordar:
 *
 *   1. `[class*="cart-item" i]` también matcheaba las tarjetas de los
 *      carruseles de recomendaciones -> la bolsa "contenía" 10 productos.
 *   2. `[class*="summary" i]` matcheaba un nodo SVG, y `grabTextFromAll`
 *      revienta con "Node is not an HTMLElement" al intentar leerlo.
 *
 * Moraleja: un selector amplio no es más robusto, es más ruidoso. Cuando el
 * sitio SÍ expone `data-testid` estables, hay que usarlos y punto.
 *
 * Los data-testid de la bolsa llevan el UUID de la línea en medio
 * (ml-card-product-mybag-<uuid>-input-cart-item-quantity-input), así que se
 * ancla por el FINAL con `$=` o por el INICIO con `^=`.
 */
const SELECTORES = {
  // Header: el enlace a la bolsa es literal y estable.
  enlaceBolsa: 'a[href="/tienda/cart"]',

  // Un input de cantidad = una línea de producto en la bolsa.
  cantidadPorLinea: 'input[data-testid$="-input-cart-item-quantity-input"]',

  botonAumentar: 'button[data-testid$="-input-cart-item-quantity-increase"]',
  botonDisminuir: 'button[data-testid$="-input-cart-item-quantity-decrease"]',
  botonEliminar: 'button[data-testid^="delete-button-"]',

  totalPorLinea: '[data-testid$="-input-cart-item-total"]',
  subtotal: '[data-testid="checkout-payment-summary-subtotal"]',
  total: '[data-testid="checkout-payment-summary-total"]'
}

const TEXTO_BOLSA_VACIA =
  /(bolsa|carrito)[^.]{0,40}(vac[íi]a|vac[íi]o)|no (tienes|hay)[^.]{0,40}(productos|art[íi]culos)|a[úu]n no has agregado/i

const TEXTO_CONFIRMAR_BORRADO = /s[íi],? eliminar|confirmar|aceptar|s[íi], quitar/i

const INTENTOS = 20
const ESPERA_MS = 500

const pausa = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * Espera explícita sobre una CONDICIÓN, no sobre el reloj.
 * Relee el valor real hasta que cumple, y corta en cuanto cumple. Si nunca
 * cumple devuelve el último valor leído, para que la aserción pueda decir
 * exactamente qué encontró en lugar de un timeout mudo.
 */
async function esperarCondicion(leer, condicion, intentos = INTENTOS) {
  let ultimo = null

  for (let i = 0; i < intentos; i++) {
    ultimo = await leer()
    if (condicion(ultimo)) return ultimo
    await pausa(ESPERA_MS)
  }

  return ultimo
}

class CartPage extends BasePage {
  /* ------------------------------------------------------------------ *
   * Lectura de estado
   * ------------------------------------------------------------------ */

  /**
   * TC-030 — contador (badge) del ícono de la bolsa en el header.
   * El número puede estar en el texto o en el aria-label según el breakpoint,
   * así que se leen los dos y se toma el primer entero que aparezca.
   */
  async obtenerContadorDeBolsa() {
    return I.usePlaywrightTo('leer el contador de la bolsa', async ({ page }) => {
      const enlaces = page.locator(SELECTORES.enlaceBolsa)
      const total = await enlaces.count()

      for (let i = 0; i < total; i++) {
        const enlace = enlaces.nth(i)

        if (!(await enlace.isVisible().catch(() => false))) continue

        const texto = [
          await enlace.innerText().catch(() => ''),
          (await enlace.getAttribute('aria-label').catch(() => '')) || ''
        ].join(' ')

        const numero = texto.match(/\d+/)
        if (numero) return Number(numero[0])
      }

      return 0
    })
  }

  /** Una línea de producto = un input de cantidad. */
  async contarArticulos() {
    return I.usePlaywrightTo('contar las líneas de la bolsa', async ({ page }) =>
      page.locator(SELECTORES.cantidadPorLinea).count()
    )
  }

  async obtenerCantidadDelPrimerProducto() {
    return I.usePlaywrightTo('leer la cantidad del primer producto', async ({ page }) => {
      const campo = page.locator(SELECTORES.cantidadPorLinea).first()

      if ((await campo.count()) === 0) return null

      const valor = await campo.inputValue().catch(() => '')
      const numero = String(valor).match(/\d+/)

      return numero ? Number(numero[0]) : null
    })
  }

  /**
   * TC-034 — subtotal del resumen de compra.
   *
   * Se lee el bloque "subtotal" y no el "total": el total ya trae descuentos
   * aplicados, así que no es una función lineal de la cantidad y sería una
   * mala referencia para comprobar que el carrito recalcula.
   *
   * El parseo se delega a utils/precio.js, que ya sabe leer tanto "$799.00"
   * como "$47940" (centavos pegados por el <sup>).
   */
  async obtenerSubtotal() {
    const texto = await I.usePlaywrightTo('leer el subtotal del resumen', async ({ page }) => {
      const bloque = page.locator(SELECTORES.subtotal).first()

      if ((await bloque.count()) === 0) return ''
      return (await bloque.innerText().catch(() => '')) || ''
    })

    return parsearPrecio(texto)
  }

  /* ------------------------------------------------------------------ *
   * Acciones
   * ------------------------------------------------------------------ */

  /**
   * Abre la bolsa navegando por el href en lugar de hacer clic: el ícono vive
   * en un header sticky que se re-renderiza y que a veces queda tapado por
   * banners. Un clic ahí es una fuente clásica de flakiness.
   */
  async abrirBolsa() {
    const ruta = await I.usePlaywrightTo('localizar el acceso a la bolsa', async ({ page }) => {
      const enlaces = page.locator(SELECTORES.enlaceBolsa)
      const total = await enlaces.count()

      for (let i = 0; i < total; i++) {
        const href = await enlaces.nth(i).getAttribute('href')
        if (href) return href
      }

      return null
    })

    assert.ok(ruta, 'No se encontró el enlace a la bolsa en el header')

    I.say(`Abriendo la bolsa: ${ruta}`)
    await this.abrir(ruta)
    await this.esperarBolsaCargada()
  }

  /**
   * La bolsa tiene DOS estados válidos: con productos o vacía. Esperar solo
   * uno haría que el escenario de "eliminar producto" expirara justo cuando
   * funciona. Se espera al primero de los dos que aparezca.
   */
  async esperarBolsaCargada() {
    await I.usePlaywrightTo('esperar a que la bolsa renderice', async ({ page }) => {
      const conProductos = page.locator(SELECTORES.cantidadPorLinea).first()
      const vacia = page.getByText(TEXTO_BOLSA_VACIA).first()

      await Promise.race([
        conProductos.waitFor({ state: 'visible', timeout: 20000 }).catch(() => null),
        vacia.waitFor({ state: 'visible', timeout: 20000 }).catch(() => null)
      ])
    })
  }

  /** TC-041 — aumentar la cantidad del primer producto. */
  async aumentarCantidad() {
    const antes = await this.obtenerCantidadDelPrimerProducto()

    I.click(SELECTORES.botonAumentar)

    const despues = await esperarCondicion(
      () => this.obtenerCantidadDelPrimerProducto(),
      (valor) => valor !== null && valor !== antes
    )

    I.say(`Cantidad del primer producto: ${antes} → ${despues}`)
    return despues
  }

  /**
   * TC-042 — disminuir la cantidad del primer producto.
   *
   * OJO: cuando la cantidad es 1, este botón cambia de ícono a un bote de
   * basura y ELIMINA la línea. Es comportamiento del sitio, no un bug: el
   * escenario que lo use debe partir de una cantidad mayor a 1.
   */
  async disminuirCantidad() {
    const antes = await this.obtenerCantidadDelPrimerProducto()

    I.click(SELECTORES.botonDisminuir)

    const despues = await esperarCondicion(
      () => this.obtenerCantidadDelPrimerProducto(),
      (valor) => valor !== antes
    )

    I.say(`Cantidad del primer producto: ${antes} → ${despues}`)
    return despues
  }

  /**
   * TC-043 — eliminar el primer producto.
   *
   * Se usa el botón explícito "Eliminar" (delete-button-<uuid>) y no el de
   * disminuir: aunque con cantidad 1 los dos terminan borrando la línea, el
   * botón explícito expresa la INTENCIÓN de la prueba. Una prueba que hace lo
   * correcto por accidente es una prueba que mañana falla por accidente.
   */
  async eliminarPrimerProducto() {
    const antes = await this.contarArticulos()

    assert.ok(antes > 0, 'Se intentó eliminar un producto pero la bolsa ya estaba vacía')

    I.click(SELECTORES.botonEliminar)
    await this.confirmarSiHayModal()

    const despues = await esperarCondicion(
      () => this.contarArticulos(),
      (valor) => valor < antes
    )

    I.say(`Líneas en la bolsa: ${antes} → ${despues}`)
    return despues
  }

  /**
   * Liverpool pide confirmación al eliminar: modal "Eliminar artículo"
   * con un único botón "Aceptar".
   *
   * OJO CON isVisible(): NO espera. Es una foto del estado actual y descarta
   * el parámetro `timeout`. Como el modal tiene animación de entrada, un
   * `if (await boton.isVisible())` da false y el clic nunca ocurre. Hay que
   * usar waitFor(), que sí reintenta.
   *
   * El nombre va anclado con ^...$ para no confundir el "Aceptar" del modal
   * con el "Eliminar" de la fila que lo abrió.
   */
async confirmarSiHayModal() {
    await I.usePlaywrightTo('confirmar la eliminación en el modal', async ({ page }) => {
      // 1) Confirmar que el modal apareció, anclando en su TÍTULO, no en el botón.
      const titulo = page.getByText(/eliminar art[íi]culo|¿est[áa]s seguro/i).first()

      const aparecio = await titulo
        .waitFor({ state: 'visible', timeout: 8000 })
        .then(() => true)
        .catch(() => false)

      if (!aparecio) {
        return
      }

      // 2) Buscar "Aceptar" SIN asumir el rol: puede ser <button>, <a> o <div>.
      //    getByRole('button') falla si el elemento no expone ese rol ARIA.
      const aceptar = page
        .locator('button, [role="button"], a, div[class*="btn" i], span[class*="btn" i]')
        .filter({ hasText: /^\s*(aceptar|confirmar|s[íi],? eliminar)\s*$/i })
        .first()

      const cuantos = await aceptar.count()

      if (cuantos === 0) {
        const html = await page.locator('[role="dialog"], [class*="modal" i]').first().innerHTML().catch(() => '')
        return
      }

      await aceptar.click()
      await titulo.waitFor({ state: 'hidden', timeout: 8000 }).catch(() => null)
    })
  }

  /** Guarda el subtotal actual para comparar contra él más adelante. */
  async capturarSubtotal() {
    const subtotal = await esperarCondicion(
      () => this.obtenerSubtotal(),
      (valor) => valor !== null && valor > 0
    )

    assert.ok(
      subtotal !== null && subtotal > 0,
      'No se pudo leer el subtotal de la bolsa para tomarlo como referencia'
    )

    contexto.guardar('subtotalPrevio', subtotal)
    I.say(`Subtotal de referencia: $${subtotal}`)
    return subtotal
  }

  /* ------------------------------------------------------------------ *
   * Validaciones
   * ------------------------------------------------------------------ */

  /** TC-030 — el badge del header refleja lo que hay en la bolsa. */
  async validarContadorDeBolsa(esperado) {
    const contador = await esperarCondicion(
      () => this.obtenerContadorDeBolsa(),
      (valor) => valor === esperado
    )

    assert.strictEqual(
      contador,
      esperado,
      `El contador de la bolsa muestra ${contador} y se esperaba ${esperado}`
    )

    I.say(`Contador de la bolsa: ${contador}`)
  }

  async validarCantidadDeArticulos(esperado) {
    const articulos = await esperarCondicion(
      () => this.contarArticulos(),
      (valor) => valor === esperado
    )

    assert.strictEqual(
      articulos,
      esperado,
      `La bolsa contiene ${articulos} líneas de producto y se esperaban ${esperado}`
    )
  }

  /**
   * TC-029 — el producto que está en la bolsa es el que se agregó.
   *
   * La comparación es por PALABRAS CLAVE, no por igualdad exacta: la bolsa
   * recorta el nombre y a veces le antepone la marca. Exigir igualdad daría
   * un fallo que no corresponde a un defecto del sitio.
   */
  async validarProductoAgregado() {
    const producto = contexto.leer('productoAgregado')

    assert.ok(
      producto && producto.nombre,
      'No hay producto registrado en el contexto: ¿corrió el paso de agregar a la bolsa?'
    )

    const contenido = await I.usePlaywrightTo('leer el contenido de la bolsa', async ({ page }) =>
      (await page.locator('body').innerText()).toLowerCase()
    )

    const palabrasClave = producto.nombre
      .toLowerCase()
      .split(/\s+/)
      .filter((palabra) => palabra.length >= 4)
      .slice(0, 3)

    const encontradas = palabrasClave.filter((palabra) => contenido.includes(palabra))

    assert.ok(
      encontradas.length > 0,
      `La bolsa no muestra el producto agregado. Se buscaron [${palabrasClave.join(', ')}] ` +
        `del nombre "${producto.nombre}" y no apareció ninguna.`
    )

    I.say(`Producto confirmado en la bolsa (coincidencias: ${encontradas.join(', ')})`)
  }

  async validarCantidadDelPrimerProducto(esperada) {
    const cantidad = await esperarCondicion(
      () => this.obtenerCantidadDelPrimerProducto(),
      (valor) => valor === esperada
    )

    assert.strictEqual(
      cantidad,
      esperada,
      `La cantidad del primer producto es ${cantidad} y se esperaba ${esperada}`
    )
  }

  async validarSubtotalPositivo() {
    const subtotal = await esperarCondicion(
      () => this.obtenerSubtotal(),
      (valor) => valor !== null && valor > 0
    )

    assert.ok(
      subtotal !== null && subtotal > 0,
      `El subtotal de la bolsa no es un importe válido: ${subtotal}`
    )

    I.say(`Subtotal de la bolsa: $${subtotal}`)
  }

  /** TC-034 — al cambiar la cantidad, el subtotal se recalcula. */
  async validarSubtotalAumento() {
    const previo = contexto.leer('subtotalPrevio')

    assert.ok(typeof previo === 'number', 'No se capturó un subtotal previo con el que comparar')

    const actual = await esperarCondicion(
      () => this.obtenerSubtotal(),
      (valor) => valor !== null && valor > previo
    )

    assert.ok(
      actual !== null && actual > previo,
      `El subtotal no aumentó tras cambiar la cantidad: antes $${previo}, ahora $${actual}`
    )

    I.say(`Subtotal: $${previo} → $${actual}`)
  }

  async validarBolsaVacia() {
    const articulos = await esperarCondicion(
      () => this.contarArticulos(),
      (valor) => valor === 0
    )

    assert.strictEqual(
      articulos,
      0,
      `La bolsa debería estar vacía pero todavía muestra ${articulos} líneas`
    )

    I.say('La bolsa quedó vacía')
  }
}

module.exports = new CartPage()
