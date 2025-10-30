const { I } = inject();

module.exports = {

  // Selectores del buscador y resultados
  fields: {
    buscador: '#buscador-menu-input',
  },

  results: {
    producto: 'a.tc-cta.tc-cta--secondary',
    precio: '.card-products--acquire_price',
    capacidad: '.card-products--data_capacity'
  },

  // --- Acciones ---
  ingresarTerminoDeBusqueda(termino) {
    I.fillField(this.fields.buscador, termino);
    I.pressKey('Enter');
  },

  validarResultadosVisibles() {
    I.waitForElement(this.results.producto, 10);
    I.seeElement(this.results.producto);
    I.seeElement(this.results.precio);
    I.seeElement(this.results.capacidad);
  }
};
