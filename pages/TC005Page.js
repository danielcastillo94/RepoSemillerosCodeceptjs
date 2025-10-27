const { I } = inject();

class TC005Page {

fields = {
    Cookies: '[class="telcel-banner-aviso-cookies"]',
    Buscador: '#buscador-menu-input',
    Resultado: 'h3.results-num span.filled',
    Producto: 'p.card-products--data_name',
    Detalle: 'custom-product-intro h1'

  };
   async portal() {
    await I.amOnPage('https://www.telcel.com/')
    if (await I.grabNumberOfVisibleElements(this.fields.Cookies)) {
      await I.click('//a[@id="acepto-cookies"]');
    }
  }

  busqueda() {
    I.waitForElement(this.fields.Buscador)
    I.fillField(this.fields.Buscador, 'Redmi Note 13');
    I.pressKey('Enter');
  }

   async resultados() {
    await I.waitForElement(this.fields.Resultado, 10);
  }
  
  detalles() {
    I.waitForElement(this.fields.Producto, 10);
    I.click(this.fields.Producto);
    I.waitForElement(this.fields.Detalle, 10);
    I.seeElement(this.fields.Detalle);
  }
}

module.exports = new TC005Page();