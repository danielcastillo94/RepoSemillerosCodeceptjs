const { I } = inject();

class PlanesPage {
  constructor() {
    this.fields = {
      tituloTelcelPlus:
        '//h2[@class="content-title text-left f-z-28 text-center-xs ng-binding" and text() = "Telcel Plus"]',
    };
  }

  verifyTelcelPlus() {
    I.waitForElement(this.fields.tituloTelcelPlus, 5);
    I.seeElement(this.fields.tituloTelcelPlus);
    I.say("Verificación de Telcel Plus exitosa");
  }
}

module.exports = new PlanesPage();
