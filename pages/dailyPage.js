const { I } = inject();
const { expect } = require("chai");

class dailyPage {
  constructor() {
    this.fields = {
      boton: '//main//a[@href="/mx"]',
    };
  }

  home() {
    I.amOnPage("https://www.dailymotion.com/mx");
    I.wait(2);
  }

  clickBoton() {
    I.waitForElement(this.fields.boton, 20);
    I.click(this.fields.boton);
  }

  //Revisar Emilio
  async verificarHref() {
    const href = await I.grabAttributeFrom(this.fields.boton, 'href');
    I.say(`HREF capturado: ${href}`);
    expect(href).to.include("/mx", "El href no contiene '/mx'");
  }
}

module.exports = new dailyPage();
