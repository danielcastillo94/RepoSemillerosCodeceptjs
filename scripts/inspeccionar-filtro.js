/**
 * Diagnóstico del facet de precio.
 *
 * Abre la PLP, despliega "Precios", imprime el HTML del facet (para ver cuál
 * es el control de aplicar) y muestra la URL antes y después de intentar
 * aplicar el rango.
 *
 * Uso (desde la raíz del repo):
 *   node scripts/inspeccionar-filtro.js mochila 500 2000
 */
const { chromium } = require('playwright')
require('dotenv').config({ path: './secreto.env' })

const BASE_URL = process.env.BASE_URL || 'https://www.liverpool.com.mx'
const TERMINO = process.argv[2] || 'mochila'
const MINIMO = process.argv[3] || '500'
const MAXIMO = process.argv[4] || '2000'

const TARJETAS = '#plp-page-card-product-list a[data-testid$="-card-card-link"]'
const MIN = '[data-testid="at-text-min-input"]'
const MAX = '[data-testid="at-text-max-input"]'

;(async () => {
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()

  await page.goto(`${BASE_URL}/tienda?s=${encodeURIComponent(TERMINO)}`, {
    waitUntil: 'domcontentloaded'
  })
  await page.locator(TARJETAS).first().waitFor({ state: 'visible', timeout: 30000 })

  const campoMin = page.locator(MIN).first()

  if (!(await campoMin.isVisible().catch(() => false))) {
    await page
      .locator('[data-testid="button-dropdown-filter"]')
      .filter({ hasText: /precio/i })
      .first()
      .click()
    await campoMin.waitFor({ state: 'visible', timeout: 10000 })
  }

  // Contenedor del facet: se sube 4 niveles desde el input para abarcarlo todo.
  const facet = campoMin.locator('xpath=ancestor::*[4]')
  console.log('\n=========== HTML DEL FACET DE PRECIO ===========')
  console.log((await facet.innerHTML()).slice(0, 3000))

  console.log('\n=========== BOTONES DENTRO DEL FACET ===========')
  for (const boton of await facet.locator('button').all()) {
    console.log({
      texto: (await boton.innerText().catch(() => '')).trim(),
      testid: await boton.getAttribute('data-testid'),
      type: await boton.getAttribute('type'),
      aria: await boton.getAttribute('aria-label'),
      visible: await boton.isVisible().catch(() => false)
    })
  }

  const urlAntes = page.url()
  console.log('\nURL ANTES:', urlAntes)

  await campoMin.fill(MINIMO)
  await campoMin.blur()
  await page.locator(MAX).first().fill(MAXIMO)
  await page.locator(MAX).first().press('Enter')

  await page.waitForTimeout(5000)
  console.log('URL DESPUÉS:', page.url())
  console.log('¿Cambió la URL?', page.url() !== urlAntes)

  console.log('\nRevisa el navegador. Se cierra en 60s.')
  await page.waitForTimeout(60000)
  await browser.close()
})()
