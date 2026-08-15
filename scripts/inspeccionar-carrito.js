/**
 * Diagnóstico del flujo de bolsa.
 *
 * Abre una PDP, imprime los botones candidatos a "Agregar a la bolsa",
 * agrega el producto y luego imprime los controles reales de la bolsa
 * (cantidad, eliminar, subtotal). Sirve para confirmar los selectores de
 * CartPage.js sin ir a ciegas.
 *
 * Uso (desde la raíz del repo):
 *   node scripts/inspeccionar-carrito.js mochila
 */
const { chromium } = require('playwright')
require('dotenv').config({ path: './secreto.env' })

const BASE_URL = process.env.BASE_URL || 'https://www.liverpool.com.mx'
const TERMINO = process.argv[2] || 'mochila'

const TARJETAS = '#plp-page-card-product-list a[data-testid$="-card-card-link"]'

async function describirBotones(page, titulo, limite = 40) {
  console.log(`\n=========== ${titulo} ===========`)

  const botones = await page.locator('button, [role="button"]').all()
  let mostrados = 0

  for (const boton of botones) {
    if (mostrados >= limite) break
    if (!(await boton.isVisible().catch(() => false))) continue

    const texto = ((await boton.innerText().catch(() => '')) || '').trim().replace(/\s+/g, ' ')
    const testid = await boton.getAttribute('data-testid')
    const aria = await boton.getAttribute('aria-label')

    if (!texto && !testid && !aria) continue

    console.log({ texto: texto.slice(0, 60), testid, aria })
    mostrados++
  }
}

;(async () => {
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()

  // 1) PLP -> primera tarjeta -> PDP
  await page.goto(`${BASE_URL}/tienda?s=${encodeURIComponent(TERMINO)}`, {
    waitUntil: 'domcontentloaded'
  })
  await page.locator(TARJETAS).first().waitFor({ state: 'visible', timeout: 30000 })

  const href = await page.locator(TARJETAS).first().getAttribute('href')
  console.log('PDP:', href)

  await page.goto(new URL(href, BASE_URL).toString(), { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(3000)

  await describirBotones(page, 'BOTONES VISIBLES EN LA PDP')

  console.log('\n=========== ENLACES CON PINTA DE BOLSA ===========')
  for (const enlace of await page
    .locator('a[href*="carrito" i], a[href*="cart" i], a[href*="bolsa" i], a[href*="checkout" i]')
    .all()) {
    console.log({
      href: await enlace.getAttribute('href'),
      aria: await enlace.getAttribute('aria-label'),
      texto: ((await enlace.innerText().catch(() => '')) || '').trim().slice(0, 40),
      visible: await enlace.isVisible().catch(() => false)
    })
  }

  console.log(
    '\n>>> Agrega el producto A MANO en el navegador y entra a la bolsa. Tienes 60 s.'
  )
  await page.waitForTimeout(60000)

  console.log('\nURL actual:', page.url())
  await describirBotones(page, 'CONTROLES VISIBLES EN LA BOLSA')

  console.log('\n=========== POSIBLES CAMPOS DE CANTIDAD ===========')
  for (const campo of await page
    .locator('input[data-testid*="quantity" i], select, input[name*="cantidad" i], [data-testid*="quantity" i]')
    .all()) {
    if (!(await campo.isVisible().catch(() => false))) continue
    console.log({
      tag: await campo.evaluate((n) => n.tagName),
      testid: await campo.getAttribute('data-testid'),
      name: await campo.getAttribute('name'),
      aria: await campo.getAttribute('aria-label'),
      valor: await campo.inputValue().catch(() => null)
    })
  }

  console.log('\n=========== TEXTOS CON PINTA DE SUBTOTAL ===========')
  for (const bloque of await page
    .locator('[data-testid*="subtotal" i], [class*="subtotal" i], [data-testid*="total" i], [class*="summary" i]')
    .all()) {
    if (!(await bloque.isVisible().catch(() => false))) continue
    console.log({
      testid: await bloque.getAttribute('data-testid'),
      clase: (await bloque.getAttribute('class'))?.slice(0, 60),
      texto: ((await bloque.innerText().catch(() => '')) || '').trim().replace(/\s+/g, ' ').slice(0, 80)
    })
  }

  console.log('\nRevisa el navegador. Se cierra en 60s.')
  await page.waitForTimeout(60000)
  await browser.close()
})()
