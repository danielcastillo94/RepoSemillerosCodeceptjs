// scripts/diagnostico-headless.js
const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto('https://www.liverpool.com.mx', { waitUntil: 'domcontentloaded' })
  await page.waitForTimeout(5000)

  console.log('URL :', page.url())
  console.log('Title:', await page.title())
  console.log('testids:', await page.locator('[data-testid]').count())
  console.log('viewport:', page.viewportSize())

  await page.screenshot({ path: 'headless.png', fullPage: true })
  require('fs').writeFileSync('headless.html', await page.content())
  await browser.close()
})()