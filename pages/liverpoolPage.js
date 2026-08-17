const { I } = inject();

class LiverpoolPage {
  elementos = {
    buscador: '[data-testid="blt26617d4f2e17657d-header-search-input"]',
    contenedorResultados: '#plp-page-card-product-list',
    enlaceItem: '#plp-page-card-product-list a[data-testid$="-card-card-link"]',
    tituloProducto: 'h1.text-body-2xl',
    precioProducto: '[data-testid$="-configurator-price"] [data-testid="discounted"]',
    btnAgregarBolsa: '[data-testid="add-to-bag-button"]',
    contadorBolsa: '[data-testid="blt26617d4f2e17657d-header-shopping-cart-header-cart-quantity"]',
    iconoBolsa: 'button.a-header__bag, [data-testid="blt26617d4f2e17657d-header-shopping-cart-shopping-link"]', 
  };

  abrirPortal() {
    I.amOnPage('/');
    I.waitForElement(this.elementos.buscador, 15);
  }

  ejecutarBusqueda(articulo) {
    I.waitForElement(this.elementos.buscador, 15);
    I.click(this.elementos.buscador);
    I.fillField(this.elementos.buscador, articulo);
    I.pressKey('Enter');
    I.wait(3);
  }

  validarListaResultados(articulo) {
    I.waitForElement(this.elementos.contenedorResultados, 15);
    I.seeElement(this.elementos.contenedorResultados);
  }

  entrarAlPrimerItem() {
    I.waitForElement(this.elementos.enlaceItem, 15);
    I.click(locate(this.elementos.enlaceItem).first());
    I.waitForElement(this.elementos.tituloProducto, 20);
  }

  validarDetalleCargado() {
    I.seeElement(this.elementos.tituloProducto);
    I.seeElement(this.elementos.precioProducto);
  }

  agregarABolsa() {
    I.waitForElement(this.elementos.btnAgregarBolsa, 15);    
    I.scrollTo(this.elementos.btnAgregarBolsa); 
    I.wait(2); 
    I.click(this.elementos.btnAgregarBolsa);
    I.wait(4); 
  }

  validarBolsaActualizada() {
    I.scrollTo(this.elementos.contadorBolsa);
    I.waitForElement(this.elementos.contadorBolsa, 15);
    I.seeElement(this.elementos.contadorBolsa);
  }

  validarBusquedaVacia() {
    I.seeInCurrentUrl('s='); 
    I.seeNumberOfElements(this.elementos.enlaceItem, 0);
  }

  navegarABolsa() {
    I.waitForElement(this.elementos.iconoBolsa, 15);
    I.click(locate(this.elementos.iconoBolsa).first());
  }

  validarPaginaCarrito() {
    I.wait(2);
    I.seeInCurrentUrl('cart');
  }
}

module.exports = new LiverpoolPage();