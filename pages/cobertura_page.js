class CoberturaPage {
  constructor(I) {
    this.I = I;

    this.buscador = '#buscador-menu-input';
    this.resultadoPrimero = 'p.tc_card-basic-img--title'; 
    this.tituloCobertura = 'h1'; 
    this.mapaInteractivo = 'iframe[src*="mapas/coberturas"]';
  }

  async buscarCobertura() {
    const I = this.I;
    I.fillField(this.buscador, 'mapas de cobertura telcel');
    I.pressKey('Enter');
    I.waitForElement(this.resultadoPrimero, 10);
    I.click(this.resultadoPrimero);
    I.wait(2);
  }

  async verificarTituloVisible() {
    const I = this.I;
    I.waitForElement(this.tituloCobertura, 10);
    await I.seeElement(this.tituloCobertura); 
  }

  async verificarMapaVisible() {
    const I = this.I;
    I.waitForElement(this.mapaInteractivo, 10);
    await I.seeElement(this.mapaInteractivo); 
  }
}

module.exports = CoberturaPage;