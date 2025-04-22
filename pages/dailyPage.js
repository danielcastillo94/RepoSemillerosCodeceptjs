const { I } = inject();

class dailyPage {
  url = 'https://www.dailymotion.com/mx';
  contentLoaded = '//div[@id="root"]';

Home() {
    I.amOnPage(this.url);
    I.wait(3);
  }

  async waitForContent() {
    await I.waitForNetworkIdle(5); 
    I.waitForElement(this.contentLoaded, 10);
  } 

  async verifyContentLoaded() {
    const isVisible = await I.grabNumberOfVisibleElements(this.contentLoadedElement);
    assert.strictEqual(isVisible > 0, true, 'El contenido principal no se cargó correctamente.');
  }

};

module.exports = new dailyPage();