const { I } = inject();

class BusquedaPage {
  irAPaginaPrincipal() {
    I.amOnPage('https://www.amazon.com.mx/ref=nav_logo');
    I.waitForElement('#twotabsearchtextbox', 10);
  }

  buscarProducto(producto) {
    I.fillField('#twotabsearchtextbox', producto);
    I.click('#nav-search-submit-button');
  }

  aplicarFiltroMayorAMenor() {
    I.waitForElement('#s-result-sort-select', 10);
    I.selectOption('#s-result-sort-select', 'price-desc-rank');
    I.wait(3);
  }

  seleccionarPrimerProducto() {
    I.waitForElement('(//div[@data-component-type="s-search-result"]//a)[1]', 10);
    I.click('(//div[@data-component-type="s-search-result"]//a)[1]');
  }

  verificarNombreYPrecio() {
    I.waitForElement('#productTitle', 10);
    I.seeElement('#productTitle');
    I.seeElement('span.a-price .a-offscreen');
  }
}

module.exports = new BusquedaPage();
