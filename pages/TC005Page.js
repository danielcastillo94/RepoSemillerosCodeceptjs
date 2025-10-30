const { I } = inject();

module.exports = {
  buscador: '#buscador-menu-input',
  primerResultado: 'a[data-titulo*="Resultados buscador"]',

  // Selectores reales de la página actual de Telcel
  detalleSelectors: {
    nombre: 'h1[_ngcontent-mvy-c659]',
    precio: 'span[_ngcontent-mvy-c426]',
    imagen: 'img[_ngcontent-mvy-c336]'
  },

  /**
   * Busca y selecciona un equipo desde el buscador.
   */
  async seleccionarEquipo(termino) {
    I.fillField(this.buscador, termino);
    I.pressKey('Enter');

    I.waitForVisible(this.primerResultado, 30);
    I.click(this.primerResultado);

    I.wait(2); // espera corta para render dinámico
    I.waitForURL(/(producto|telefonos|productos)/, 90);
    I.wait(2);
  },

  /**
   * Valida que el detalle del producto esté visible.
   */
  validarDetalleVisible() {
    I.wait(2); // espera corta

    // Validar nombre
    const nombreVisible = I.grabNumberOfVisibleElements(this.detalleSelectors.nombre);
    if (nombreVisible === 0) throw new Error('Nombre del producto no visible');

    // Validar precio
    const precioVisible = I.grabNumberOfVisibleElements(this.detalleSelectors.precio);
    if (precioVisible === 0) throw new Error('Precio del producto no visible');

    // Validar imagen
    const imagenVisible = I.grabNumberOfVisibleElements(this.detalleSelectors.imagen);
    if (imagenVisible === 0) throw new Error('Imagen del producto no visible');

    // Screenshot de evidencia
    I.saveScreenshot('detalleProducto_ok.png');
  }
};
