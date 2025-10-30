class TC003Page {
  constructor(I) {
    this.I = I;
    this.buscador = '#buscador-menu-input';
    this.resultadoPrimero = '//span[contains(text(),"telcel plus 5g")]';
    // eliminar botonContratar hasta que sepamos selector real visible
  }

  async buscarPlan() {
    const I = this.I;
    I.amOnPage('https://www.telcel.com/planes');
    I.waitForElement(this.buscador, 10);
    I.fillField(this.buscador, 'telcel plus 5g');
    I.pressKey('Enter');
    I.waitForElement(this.resultadoPrimero, 15);
    I.click(this.resultadoPrimero);
  }

  async verificarPlanVisible() {
    const I = this.I;
    I.waitForElement(this.resultadoPrimero, 15);
    I.seeElement(this.resultadoPrimero);
  }
}

module.exports = TC003Page;
