const { I } = inject();

class CanalPage {
  searchField = '//input[@name="search_query"]';
  canalLink = '(//a[@id="channel-thumbnail"])[1]';
  canalName = '//h1[@class="dynamic-text-view-model-wiz__h1"]';
  videosTab = '//yt-tab-shape[@class="yt-tab-shape-wiz yt-tab-shape-wiz--host-clickable"][2]';
  videoThumbnails = '//a[@id="thumbnail"]//img';
  videoTitles = '//yt-formatted-string[@id="video-title"]';

  irAlCanalDelPrimerVideo() {
    I.wait(2);
    I.click(this.canalLink);
    I.wait(3);
  }

  pestanaVideos() {
    I.waitForElement(this.videosTab, 10);
    I.click(this.videosTab);
    I.wait(3);
  }

  async validarNombreDelCanal() {
    const canal = await I.grabTextFrom(this.canalName);
    console.log(`Nombre del canal encontrado: ${canal}`);
    assert.ok(canal.length > 0, 'No se encontró el nombre del canal');
  }

  async validarPestanaVideos() {
    const pestana = await I.grabTextFrom(this.videosTab);
    console.log(`Pestaña encontrada: ${pestana}`);
    assert.strictEqual(pestana.trim(), 'Videos', 'No se encontró la pestaña de Videos');
  }

  async validarVideosVisibles() {
    // Esperar y validar títulos
    I.waitForElement(this.videoTitles, 10);
    const titulos = await I.grabTextFromAll(this.videoTitles);
    const primerosCincoTitulos = titulos.slice(0, 5);
    
    // Esperar y validar miniaturas
    I.waitForElement(this.videoThumbnails, 10);
    const miniaturas = await I.grabNumberOfVisibleElements(this.videoThumbnails);

    console.log(`Total de títulos encontrados: ${titulos.length}`);
    console.log(`Total de miniaturas encontradas: ${miniaturas}`);
    
    console.log(`\n Mostrando los primeros ${primerosCincoTitulos.length} títulos:`);
    primerosCincoTitulos.forEach((titulo, index) => {
      console.log(` ${index + 1}. ${titulo}`);
    });

}
}

module.exports = new CanalPage();
