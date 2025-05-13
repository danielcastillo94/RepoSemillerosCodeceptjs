const { Helper } = require('codeceptjs');

class MiHelper extends Helper {
  async esperarYValidar(selector, textoEsperado) {
    const { page } = this.helpers.Playwright;

    await page.waitForSelector(selector, { timeout: 10000 });

  }
}

module.exports = MiHelper;
