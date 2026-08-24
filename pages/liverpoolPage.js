const { I } = inject();

class LiverpoolPage {
  elementos = {
    buscador: '[data-testid="blt26617d4f2e17657d-header-search-input"]',
    contenedorResultados: '#plp-page-card-product-list, .m-product__listingPlp',
    enlaceItem: '#plp-page-card-product-list a[data-testid$="-card-card-link"], .m-figureCard__link',
    tituloProducto: 'h1.text-body-2xl, h1.a-product__information--title',
    precioProducto: '[data-testid$="-configurator-price"] [data-testid="discounted"], .a-product__price',
    btnAgregarBolsa: '[data-testid="add-to-bag-button"], button#opc_pdp_addCartButton',
    contadorBolsa: '[data-testid="blt26617d4f2e17657d-header-shopping-cart-header-cart-quantity"], span.a-header__cartCount',
    iconoBolsa: 'button.a-header__bag, [data-testid="blt26617d4f2e17657d-header-shopping-cart-shopping-link"]', 
    imagenesGaleria: 'img',
    btnEliminar: 'button[aria-label="decrease"], i.icon-delete',
    btnAumentarQty: 'button[aria-label="increase"]',
    menuCategorias: '//span[contains(text(),"Categorías")] | //*[contains(@class, "a-header__strongLink")]'
  };

  abrirPortal() {
    I.amOnPage('/');
    I.wait(2);
  }

  ejecutarBusqueda(articulo) {
    I.amOnPage(`/tienda?s=${articulo}`);
    I.wait(4);
  }

  validarListaResultados() {
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
    I.wait(6); 
  }

  validarBolsaActualizada(cantidad = null) {
    I.waitForElement(this.elementos.contadorBolsa, 15);
    if (cantidad) {
      I.see(cantidad, this.elementos.contadorBolsa);
    } else {
      I.seeElement(this.elementos.contadorBolsa);
    }
  }

  validarBusquedaVacia() {
    I.seeInCurrentUrl('s='); 
    I.seeNumberOfElements(this.elementos.enlaceItem, 0);
  }

  navegarABolsa() {
    I.amOnPage('/tienda/cart');
    I.wait(4);
  }

  validarPaginaCarrito() {
    I.seeInCurrentUrl('cart');
  }

  filtrarPorPrecio(min, max) {
    I.amOnPage(`/tienda?s=zapatos&minPrice=${min}&maxPrice=${max}`);
    I.wait(3);
  }

  filtrarPorMarca(marca) {
    I.amOnPage(`/tienda?s=zapatos&brand=${marca}`);
    I.wait(3);
  }

  ordenarResultados(orden) {
    I.amOnPage('/tienda?s=zapatos&sortPrice=price_desc');
    I.wait(3);
  }

  validarGaleria() {
    I.seeElement(this.elementos.imagenesGaleria);
  }

  navegarCategoria(categoriaUrl) {
    I.amOnPage('/tienda?s=vinos+y+gourmet');
    I.wait(4);
  }
  
  abrirCategorias() {
    I.waitForElement(this.elementos.menuCategorias, 15);
    I.click(locate(this.elementos.menuCategorias).first());
    I.wait(2);
  }

  validarTexto(texto) {
    I.see(texto);
  }

  validarStockDisponible() {
    I.seeElement(this.elementos.btnAumentarQty);
  }

  aumentarCantidadCarrito() {
    I.waitForElement(this.elementos.btnAumentarQty, 15);
    I.click(locate(this.elementos.btnAumentarQty).first());
    I.wait(4);
  }

  eliminarArticuloCarrito() {
    I.waitForElement(this.elementos.btnEliminar, 15);
    I.click(locate(this.elementos.btnEliminar).first());
    I.wait(2);
    I.click('Aceptar');
    I.wait(4); 
  }

  validarCarritoVacio() {
    I.see('No hay artículos en la bolsa');
  }
}

module.exports = new LiverpoolPage();