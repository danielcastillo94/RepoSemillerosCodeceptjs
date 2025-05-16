const { container } = require('codeceptjs');
const playwright = container.helpers('Playwright');

module.exports = function () {
  return actor({

    abrirYoutube() {
      this.amOnPage('/');
      this.wait(3);
    },

    buscarVideo(texto) {
      this.waitForElement('//input[@name="search_query"]', 10);
      this.fillField('//input[@name="search_query"]', texto);
      this.pressKey('Enter');
      this.wait(3);
    },

    entrarAlPrimerVideo() {
      const selector = '//ytd-video-renderer//a[@id="thumbnail"]';
      this.waitForElement(selector, 10);
      this.click(selector);
      this.wait(5);
    },

    async validarTituloEsperado(tituloEsperado) {
      const { page } = playwright;
      const selector = 'ytd-watch-metadata h1 yt-formatted-string';

      for (let i = 0; i < 5; i++) {
        try {
          await page.waitForSelector(selector, { timeout: 3000 });
          const textoActual = await page.$eval(selector, el => el.innerText.trim());

          if (textoActual.includes(tituloEsperado)) return;
        } catch (err) {
          console.log(`Intento ${i + 1} fallido: ${err.message}`);
        }
      }

      throw new Error(`No se encontró el título esperado: "${tituloEsperado}" tras 5 intentos`);
    },

    async validarVideosRecomendados(minimo = 5) {
      const { page } = playwright;
      const selector = 'ytd-watch-next-secondary-results-renderer ytd-compact-video-renderer';

      await page.waitForSelector(selector, { timeout: 10000 });
      const elementos = await page.$$(selector);
      const cantidad = elementos.length;

      if (cantidad < minimo) {
        throw new Error(`Se esperaban al menos ${minimo} videos recomendados, pero solo se encontraron ${cantidad}`);
      }
    }

  });
};

