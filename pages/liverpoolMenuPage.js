const { I } = inject();

module.exports = {
  botonMenu: '[data-testid="blt26617d4f2e17657d-header-button-menu"]',
  botonCategorias: '[data-testid="blt26617d4f2e17657d-header-menu-mobile-menu-items-submenu-0"]',
  categoriaMujer: '[data-testid="blt26617d4f2e17657d-header-menu-mobile-submenu-Mujer-0"]',
  subcategoriaRopa: 'a[href="/tienda/ropa/catst4003074"]',

  abrirMenu() {
  I.waitForElement(this.botonMenu, 10);
  I.wait(2);
  I.forceClick(this.botonMenu);
  I.waitForElement(this.botonCategorias, 10);
},

  abrirCategorias() {
    I.waitForElement(this.botonCategorias, 10);
    I.wait(2);
    I.forceClick(this.botonCategorias);
  },

  seleccionarMujer() {
    I.waitForElement(this.categoriaMujer, 10);
    I.wait(2);
    I.forceClick(this.categoriaMujer);
  },

  seleccionarRopa() {
    I.waitForElement(this.subcategoriaRopa, 10);
    I.wait(2);
    I.forceClick(this.subcategoriaRopa);
  },

  validarPaginaRopa() {
    I.seeInCurrentUrl('/tienda/ropa/catst4003074');
  }
};