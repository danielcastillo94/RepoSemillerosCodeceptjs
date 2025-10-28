const { I } = inject();
class TC006cobertura_page {

  fields = {
    Cookies: '[class="telcel-banner-aviso-cookies"]',
    Buscar: '#buscador-menu-input',
    Elemento: 'h3.results-num span.filled',
    MostrarMas: '.tc_card-basic-img--body p.tc_card-basic-img--link',
    Mapa: '#iframe-recarga3'

  };
  async Inicio() {
    I.amOnPage('/');
    if (await I.grabNumberOfVisibleElements(this.fields.Cookies)) {
      I.click('//a[@id="acepto-cookies"]');

    }
  }

  Menu() {
    I.waitForElement(this.fields.Buscar)
    I.fillField(this.fields.Buscar, 'Mapas de Cobertura');
    I.pressKey('Enter');
    I.waitForElement('h3.results-num span.filled', 10);
    I.waitForElement(locate('p').withText('Mostrar más'), 10);
    I.click(locate('p').withText('Mostrar más'));
    I.wait(10);

  }

  async Mapa() {
    await I.waitForVisible(this.fields.Mapa, 5);
    await I.seeElement(this.fields.Mapa);
    I.wait(5);
  }
}

module.exports = new TC006cobertura_page(); //exportar la clase*/

