const { I } = inject();
const { output, container } = require('codeceptjs');

class YoutubeVideoMainPage {
  goToHome() {
    I.amOnPage("https://www.youtube.com");
    I.waitForElement('input[name="search_query"]', 10);
    I.wait(2);
  }

  async buscarVideo(texto) {
    I.fillField('input[name="search_query"]', texto);
    I.pressKey('Enter');
    I.waitForElement('ytd-video-renderer', 10);
  }

  async seleccionarPrimerVideo() {
    const primerVideo = '(//ytd-video-renderer//a[@id="thumbnail"])[1]';
    I.waitForElement(primerVideo, 10);
    I.click(primerVideo);
    I.waitForElement('h1.ytd-watch-metadata yt-formatted-string', 10);
  }

  async verificarTituloVideo(tituloEsperado) {
    const helper = container.helpers('MiHelperYoutube');
    const selector = 'h1.style-scope.ytd-watch-metadata yt-formatted-string';
    await helper.esperarYValidarTexto(selector, tituloEsperado);
    output.step(`Titulo verificado con helper: ${tituloEsperado}`);
  }

  async verificarVideosRecomendados() {
    const helper = container.helpers('MiHelperYoutube');
    const selector = 'ytd-compact-video-renderer';
    await helper.validarCantidadDeElementos(selector, 5);
    output.step(`Se verificaron al menos 5 videos recomendados`);
  }
}

module.exports = new YoutubeVideoMainPage();
