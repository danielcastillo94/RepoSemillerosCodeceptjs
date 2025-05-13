const { I } = inject();
const { output } = require('codeceptjs');

module.exports = {
  goToHome() {
    I.amOnPage("https://www.youtube.com");
    I.waitForElement('input[name="search_query"]', 10);
    I.wait(2);
  },

  async buscarVideo(texto) {
    I.fillField('input[name="search_query"]', texto);
    I.pressKey('Enter');
    I.waitForElement('ytd-video-renderer', 10);
  },

  async seleccionarPrimerVideo() {
    const primerVideo = '(//ytd-video-renderer//a[@id="thumbnail"])[1]';
    I.waitForElement(primerVideo, 10);
    I.click(primerVideo);
    I.waitForElement('h1.ytd-watch-metadata yt-formatted-string', 10);
  },

  async verificarTituloVideo(tituloEsperado) {
    const selector = 'h1.style-scope.ytd-watch-metadata yt-formatted-string';
  
    I.waitForElement(selector, 10);
    I.wait(5);
  
    const tituloReal = await I.grabTextFrom(selector);
  
    if (!tituloReal || tituloReal.trim() === '') {
      await I.saveScreenshot('fallo_titulo_vacio.png');
      throw new Error('No se encontró texto visible en el selector del título.');
    }
  
    if (!tituloReal.includes(tituloEsperado)) {
      await I.saveScreenshot('fallo_titulo_mismatch.png');
      throw new Error(`El título no coincide.\nObtenido: "${tituloReal}"\nEsperado: "${tituloEsperado}"`);
    }
  
    output.step('Título validado correctamente: ' + tituloReal);
  },

  async verificarVideosRecomendados() {
    const selector = 'ytd-compact-video-renderer';
  
    // Espera a que aparezca al menos uno
    I.waitForElement(selector, 20);
  
    // Cuenta cuántos elementos están visibles
    const cantidad = await I.grabNumberOfVisibleElements(selector);
  
    if (cantidad < 5) {
      await I.saveScreenshot('fallo_videos_recomendados.png');
      throw new Error(`Se esperaban al menos 5 videos recomendados, pero solo se encontraron ${cantidad}.`);
    }
  
    output.step(`Se encontraron ${cantidad} videos recomendados en la barra lateral.`);
  }
  
  
  

};
