const { I } = inject();
const { expect } = require("chai");

class dailyPage {
  constructor() {
    this.fields = {
      boton: '(//span[@class="Typography__labelLarge___lT31e HomeItemLink__label___39p21"])[2]',
      ref: 'a[href="/explore"]'
    };
  }

  home() {
    I.amOnPage("https://www.dailymotion.com/mx");
    I.wait(2);
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
