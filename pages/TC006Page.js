class TC006Page {
  constructor(I) {
    this.I = I;

    // Elementos
    this.buscador = '#buscador-menu-input';
    this.resultadoPrimero = 'p.tc_card-basic-img--title';
    this.tituloCobertura = 'h1';
    this.mapaInteractivo = 'iframe[src*="mapas/coberturas"]';
  }

  // Buscar y abrir la sección Cobertura
  async buscarCobertura() {
    const I = this.I;
    I.fillField(this.buscador, 'mapas de cobertura telcel');
    I.pressKey('Enter');
    I.waitForElement(this.resultadoPrimero, 10);
    I.click(this.resultadoPrimero);
    I.wait(3);
  }

  // Validar título visible
  async verificarTituloVisible() {
    const I = this.I;
    I.waitForElement(this.tituloCobertura, 10);
    I.seeElement(this.tituloCobertura);
  }

  // Validar mapa visible
  async verificarMapaVisible() {
    const I = this.I;
    I.waitForElement(this.mapaInteractivo, 10);
    I.seeElement(this.mapaInteractivo);
  }
}

module.exports = TC006Page;
