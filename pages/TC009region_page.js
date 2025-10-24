const { I } = inject();
class TC009region_page {

  fields = {
    Cookies: '[class="telcel-banner-aviso-cookies"]',
    Selector: 'a.dropdown-toggle[data-menuprin="Estados"][data-nombreboton="Estados"]',
    TextoEstado: 'span.estado-Gluo',
    Estado: 'a[data-menuprin="Estados"][data-submenu="Chiapas"][data-nombreboton="Chiapas"]'

  };

  async Inicio() {
    I.amOnPage('https://www.telcel.com/');
    if (await I.grabNumberOfVisibleElements(this.fields.Cookies)) {
      await I.click('//a[@id="acepto-cookies"]');

    }
  }

  CambiarRegion() {
    I.waitForVisible(this.fields.Selector);
    I.click(this.fields.Selector);
    I.waitForElement(this.fields.Estado);
    I.click(this.fields.Estado);

  }

  ValidarCambio() {
    I.waitForVisible(this.fields.TextoEstado, 10);
    I.see('Chiapas', this.fields.TextoEstado);

  }

}

module.exports = new TC009region_page(); //exportar la clase*/