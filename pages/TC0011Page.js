class TC0011Page {
  constructor(I) {
    this.I = I;

    // Elementos
    this.botonMenu = '#telcel-menu-principal-boton';
    this.opcionClaroShop = '//span[text()="Claro shop"]';
    this.opcionTravelMexico = '//a[contains(text(),"Travel to México")]';
  }

  // Simular vista móvil
  async simularVistaMovil() {
    const I = this.I;
    await I.resizeWindow(375, 812); // Tamaño iPhone X / móvil
    I.wait(2);
  }

  // Abrir menú
  async abrirMenu() {
    const I = this.I;
    I.waitForElement(this.botonMenu, 10);
    I.click(this.botonMenu);
    I.wait(2);
  }

  // Verificar opciones visibles
  async verificarOpciones() {
    const I = this.I;
    I.waitForElement(this.opcionClaroShop, 10);
    I.seeElement(this.opcionClaroShop);
    I.waitForElement(this.opcionTravelMexico, 10);
    I.seeElement(this.opcionTravelMexico);
  }
}

module.exports = TC0011Page;
