/**
 * Script de descubrimiento de selectores.
 *
 * NO es un test. Es una herramienta de diagnóstico: abre una PLP de Liverpool
 * y te imprime los candidatos reales para el control de ordenamiento y para
 * el filtro de precio, con su data-testid / name / texto visible.
 *
 * Uso:
 *   node scripts/descubrir-selectores.js zapatillas
 *
 * Con esa salida, ajustas SELECTORES en pages/FilterPage.js en 2 minutos
 * en lugar de adivinar a ciegas.
 */
const { chromium } = require('playwright')
require('dotenv').config({ path: './secreto.env' })

const BASE_URL = process.env.BASE_URL || 'https://www.liverpool.com.mx'
const TERMINO = process.argv[2] || 'zapatillas'

function describir(info) {
  return Object.entries(info)
    .filter(([, valor]) => valor)
    .map(([clave, valor]) => `${clave}="${String(valor).slice(0, 60)}"`)
    .join(' ')
}

;(async () => {
  const browser = await chromium.launch({ headless: false })
  const page = await browser.newPage()

  await page.goto(`${BASE_URL}/tienda?s=${encodeURIComponent(TERMINO)}`, {
    waitUntil: 'domcontentloaded'
  })
  await page.waitForTimeout(6000)

  console.log('\n=========== SELECTS NATIVOS ===========')
  for (const select of await page.locator('select').all()) {
    console.log(
      describir({
        testid: await select.getAttribute('data-testid'),
        name: await select.getAttribute('name'),
        id: await select.getAttribute('id'),
        opciones: (await select.locator('option').allTextContents()).join(' | ')
      })
    )
  }

  console.log('\n=========== BOTONES CON TEXTO DE ORDEN/FILTRO ===========')
  for (const boton of await page.locator('button, [role="button"]').all()) {
    const texto = (await boton.innerText().catch(() => '')).trim()
    if (!/orden|filtr|precio|relevanc/i.test(texto)) continue
    console.log(
      describir({
        texto,
        testid: await boton.getAttribute('data-testid'),
        aria: await boton.getAttribute('aria-label')
      })
    )
  }

  console.log('\n=========== INPUTS (candidatos a mín/máx de precio) ===========')
  for (const input of await page.locator('input').all()) {
    console.log(
      describir({
        type: await input.getAttribute('type'),
        name: await input.getAttribute('name'),
        placeholder: await input.getAttribute('placeholder'),
        testid: await input.getAttribute('data-testid'),
        aria: await input.getAttribute('aria-label')
      })
    )
  }

  console.log('\n=========== TEXTO DE LA PRIMERA TARJETA ===========')
  const primera = page.locator('#plp-page-card-product-list a[data-testid$="-card-card-link"]').first()
  console.log(await primera.innerText().catch(() => '(no se pudo leer)'))

  console.log('\nRevisa el navegador y ciérralo cuando termines.')
  await page.waitForTimeout(60000)
  await browser.close()
})()
