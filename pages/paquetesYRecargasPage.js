const { I } = inject();

class PaquetesYRecargasPage {
  constructor() {
    this.fields = {
      iframe: '//iframe[contains(@class, "iframePackagesRoaming-SIN_LIMITE")]',
      numeroInput: '//input[@name="mdn"]',
      numeroValidator: '//input[@name="confirmMdn"]',
      tipoCompra: ".form-field-text.text-placeholder",
      tipoCompraSaldo:
        '//button[@class="select-option " and text()="Recarga tu Saldo Amigo"]',
      siguienteButton: '//button[@aria-label="Continuar al siguiente paso"]',
      formaPago: '//p[@class="fw-bold" and contains(text(), "Forma de pago")]',
    };
  }

  async verificarResumenYFormulario() {
    const count = await I.grabNumberOfElements('.success-step');
    I.assertEqual(count, 2, "Se esperaban exactamente 2 elementos con la clase '.success-step'");
    I.waitForVisible(this.fields.formaPago, 10);
    I.wait(2);
    I.say(`validoción de resumen y formulario de pago correctamente`);

  }
}

module.exports = new PaquetesYRecargasPage();
