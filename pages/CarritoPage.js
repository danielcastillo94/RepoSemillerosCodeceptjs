const { I } = inject();

class CarritoPage {
  buscarProductoDesdeInicio(producto) {
    I.amOnPage('https://www.amazon.com.mx/ref=nav_logo');
    I.waitForElement('#twotabsearchtextbox', 10);
    I.fillField('#twotabsearchtextbox', producto);
    I.click('#nav-search-submit-button');
  }

  seleccionarPrimerProductoDisponible() {
    I.waitForElement('(//div[@data-component-type="s-search-result"]//a)[1]', 10);
    I.click('(//div[@data-component-type="s-search-result"]//a)[1]');
  }

  agregarAlCarrito() {
    I.waitForElement('#add-to-cart-button', 10);
    I.click('#add-to-cart-button');
  }

  verificarProductoEnCarrito() {
    I.waitForElement('#nav-cart', 10);
    I.click('#nav-cart');
    I.waitForElement('span.sc-price', 10);
    I.seeElement('span.sc-price');
  }
}

module.exports = new CarritoPage();
