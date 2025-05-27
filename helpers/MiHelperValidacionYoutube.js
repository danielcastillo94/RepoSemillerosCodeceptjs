const { Helper } = require('codeceptjs');

class MiHelperValidacionYoutube extends Helper {
  async verificarMiniaturas() {
    const { page } = this.helpers.Playwright;
    const selector = 'ytd-video-renderer a#thumbnail';

    // Scroll y espera para cargar elementos dinámicos
    for (let i = 0; i < 3; i++) {
      await page.evaluate(() => window.scrollBy(0, 1000));
      await page.waitForTimeout(3000);
    }

    await page.waitForSelector(selector, { timeout: 20000 });

    const miniaturas = await page.$$(selector);
    const cantidad = miniaturas.length;

    console.log(`Se encontraron ${cantidad} miniaturas`);

    if (cantidad < 10) {
      throw new Error(`Se esperaban al menos 10 miniaturas, pero solo se encontraron ${cantidad}`);
    }
  }
}

module.exports = MiHelperValidacionYoutube;
