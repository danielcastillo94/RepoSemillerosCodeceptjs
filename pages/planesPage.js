const { I } = inject();

class PlanesPage {
  constructor() {
    this.fields = {
      tituloTelcelLibre:
        '//h2[@class="content-title text-left f-z-28 text-center-xs ng-binding" and text() = "Telcel Libre"]',
    };
  }

  verifyTelcelLibre() {
    I.waitForElement(this.fields.tituloTelcelLibre, 5);
    I.seeElement(this.fields.tituloTelcelLibre);
    I.say("Verificación de Telcel Plus exitosa");
  }
}

module.exports = new PlanesPage();
