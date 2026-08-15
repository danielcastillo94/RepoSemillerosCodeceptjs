/**
 * Diagnóstico de los precios "fuera de orden".
 *
 * Ordena por mayor precio e imprime el texto CRUDO de cada tarjeta junto al
 * precio que extrae el parser. Marca con >>> las que rompen el orden.
 *
 * Uso (desde la raíz del repo):
 *   node scripts/inspeccionar-orden.js zapatillas
 */
const { chromium } = require('playwright')
require('dotenv').config({ path: './secreto.env' })
const { parsearPrecio } = require('../utils/precio')

const BASE_URL = process.env.BASE_URL || 'https://www.liverpool.com.mx'
const TERMINO = process.argv[2] || 'zapatillas'

const TARJETAS = '#plp-page-card-product-list a[data-testid$="-card-card-link"]'
// Misma lista que usa FilterPage: las opciones NO son [role="option"].
const OPCIONES =
  '[role="option"], [role="menuitem"], [data-testid*="sorting" i] li, [data-testid*="sorting" i] button'
const CONTENEDOR = 'xpath=ancestor-or-self::*[parent::*[@id="plp-page-card-product-list"]][1]'

;(async () => {
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()

  await page.goto(`${BASE_URL}/tienda?s=${encodeURIComponent(TERMINO)}`, {
    waitUntil: 'domcontentloaded'
  })
  await page.locator(TARJETAS).first().waitFor({ state: 'visible', timeout: 30000 })

  const urlAnterior = page.url()

  await page.locator('[data-testid="dropdown-sorting-button"]').first().click()

  const opciones = page.locator(OPCIONES)
  await opciones.first().waitFor({ state: 'visible', timeout: 10000 })

  const textos = await opciones.allTextContents()
  console.log('OPCIONES DE ORDEN:', textos.map((t) => t.trim()))

  const indice = textos.findIndex((t) => /mayor/i.test(t))
  if (indice === -1) {
    console.log('No hay opción con "mayor". Revisa la lista de arriba.')
    await browser.close()
    return
  }

  await opciones.nth(indice).click()
  await page.waitForURL((url) => url.href !== urlAnterior, { timeout: 15000 }).catch(() => {})
  await page.locator(TARJETAS).first().waitFor({ state: 'visible', timeout: 20000 })
  await page.waitForTimeout(3000)

  const anclas = await page.locator(TARJETAS).all()
  console.log(`\nTarjetas: ${anclas.length}\n`)

  let anterior = Infinity

  for (let i = 0; i < anclas.length; i++) {
    const contenedor = anclas[i].locator(CONTENEDOR)
    const texto = (await contenedor.innerText().catch(() => anclas[i].innerText()))
      .replace(/\n/g, ' | ')
    const precio = parsearPrecio(texto)
    const rompe = precio !== null && precio > anterior

    console.log(`${rompe ? '>>>' : '   '} [${i}] parseado=${precio}`)
    console.log(`       texto: ${texto}`)

    if (rompe) {
      const html = await contenedor.innerHTML().catch(() => '')
      console.log(`       HTML: ${html.slice(0, 800)}`)
    }

    if (precio !== null) anterior = precio
  }

  await browser.close()
})()
