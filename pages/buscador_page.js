const { I } = inject();
module.exports = {
url: 'https://www.telcel.com/',
// Selector busqueda
searchInput: 'input#buscador-menu-input',
// el botón buscar
  searchButton: 'span#nuevo-menu-buscador-boton-buscar, span#nuevo-menu-buscador-boton-lupa',
// Métodos
  abrirPortal() {
    I.amOnPage(this.url);
    I.wait(3);
  },

  escribirTELEFONO(TELEFONO) {
    I.fillField(this.searchInput, TELEFONO);
    I.wait(5);
  },

  hacerBusqueda() {
    I.click(this.searchButton);
    I.wait(5);
  },

  validarResultados(termino) {
    I.see(termino);
  }
};
