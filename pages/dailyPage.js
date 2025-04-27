const { I } = inject();
const assert = require('assert');
const { expect } = require("chai");

class dailyPage {
  constructor() {
    this.elements = {
      mainContainer: '//div[@id="root"]',
      header: '//div[@class="ResponsiveSubheader__subheader___1z-cj"]',
      videoSection: '//div[@class="HomeVideoFeed__homeFeedItem___1CUT1"]',
      firstVideo: '//div[@class="HomeVideoFeed__homeFeedItem___1CUT1"][1]',
    };

    this.fields = {
      boton: '(//span[@class="Typography__labelLarge___lT31e HomeItemLink__label___39p21"])[2]',
      ref: 'a[href="/explore"]'
    };
  }

  home() {
    I.amOnPage("https://www.dailymotion.com/mx");
    I.wait(2); 
  }

  async waitForCompleteLoad() {
    try {
      await I.usePlaywrightTo('Wait for network idle', async ({ page }) => {
        await page.waitForLoadState('networkidle', { timeout: 30000 });

        await page.waitForFunction(() => {
          const videos = document.querySelectorAll('.HomeVideoFeed__homeFeedItem___1CUT1');
          return videos.length > 0 &&
            document.querySelector('.ResponsiveSubheader__subheader___1z-cj') !== null;
        }, { timeout: 15000 });
        console.log('Componentes renderizados correctamente');
      });

      await I.waitForVisible(this.elements.mainContainer, 10);
      await I.waitForVisible(this.elements.header, 5);
      await I.waitForVisible(this.elements.firstVideo, 15);

      console.log('Todos los elementos están visibles');
    } catch (error) {
      console.error('Error durante la carga:', error.message);
      throw new Error(`Fallo en la carga completa: ${error.message}`);
    }
  }

  async verifyContentLoaded() {
    const videoCount = await I.grabNumberOfVisibleElements(this.elements.videoSection);
    console.log(`Videos encontrados: ${videoCount}`);
    assert.ok(videoCount >= 3, `Se esperaban al menos 3 videos, pero solo se encontraron ${videoCount}`);

    const headerVisible = await I.grabNumberOfVisibleElements(this.elements.header) > 0;
    console.log(`Header visible: ${headerVisible}`);
    assert.strictEqual(headerVisible, true, 'El header no está visible');

    const mainContainerVisible = await I.grabNumberOfVisibleElements(this.elements.mainContainer) > 0;
    console.log(`Contenedor principal visible: ${mainContainerVisible}`);
    assert.strictEqual(mainContainerVisible, true, 'El contenedor principal no está visible');

    console.log('Verificación de contenido completada con éxito');
  }

  clickBoton() {
    I.click(this.fields.boton);
  }

  async verificarHref() {
    const href = await I.grabAttributeFrom(this.fields.ref, 'href');
    console.log("HREF capturado:", href);
    expect(href).to.include("/explore");
  }
}

module.exports = new dailyPage();
