const { I } = inject();
class TC005detalle_equipo_page {
  fields = {
    Cookies: '[class="telcel-banner-aviso-cookies"]',
    Buscador: '#buscador-menu-input',
    Resultado: 'h3.results-num span.filled',
    Producto: 'p.card-products--data_name',
    Detalle: 'custom-product-intro h1'

  };
  async Home() {
    await I.amOnPage('https://www.telcel.com/')
    if (await I.grabNumberOfVisibleElements(this.fields.Cookies)) {
      await I.click('//a[@id="acepto-cookies"]');
    }
  }

  Search() {
    I.waitForElement(this.fields.Buscador)
    I.fillField(this.fields.Buscador, 'Redmi A5');
    I.pressKey('Enter');
  }
  async Results() {
    await I.waitForElement(this.fields.Resultado, 10);
    await I.wait(5);
  }
  Details() {
    I.waitForElement(this.fields.Producto, 10);
    I.click(this.fields.Producto);
    I.waitForElement(this.fields.Detalle, 10);
    I.seeElement(this.fields.Detalle);
  }
}
module.exports = new TC005detalle_equipo_page(); //exportar la clase