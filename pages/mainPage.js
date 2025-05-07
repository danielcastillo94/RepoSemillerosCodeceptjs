const {I} = inject();

class MainPage {
  constructor() {
    this.fields = {
      verPlanesButton: ".btn.btn-link.btn-lg",
      paquetesYRecargasButton: "#paquetes-recarga",
      politicasYCodigosButton: 'a[data-nombreboton="Políticas y códigos"]',
    };
  }

  home() {
    I.amOnPage("/");
    I.wait(2);
  }

  clickVerPlanes() {
    I.scrollTo(this.fields.verPlanesButton);
    I.waitForVisible(this.fields.verPlanesButton, 5);
    I.click(this.fields.verPlanesButton);
    I.say("Click en el botón 'Ver todos los Planes' realizado");
  }

    async navegarASeccion(seccion) {
        I.scrollTo(this.fields.paquetesYRecargasButton);
        I.waitForVisible(this.fields.paquetesYRecargasButton, 5);
        I.click(this.fields.paquetesYRecargasButton);
        I.usePlaywrightTo('espera a network idle en Paquetes y Recargas',async ({ page}) => {
          await page.waitForLoadState('networkidle', { timeout: 10000 });
        });
        I.say(`Navegando a la sección ${seccion}`);
    }

    goTo(section) {
        const selector  = `a[data-nombreboton="${section}"]`;
        I.scrollTo(selector);
        I.waitForVisible(selector, 5);
        I.click(selector);
        I.wait(2);
        I.say(`Navegando a la sección ${section}`);
    }
}

module.exports = new MainPage();