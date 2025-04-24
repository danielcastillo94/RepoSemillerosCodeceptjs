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

  ingresarNumero(numero) {
    I.waitForElement(this.fields.iframe, 20);

    // Cambiar al contexto del iframe
    within({ frame: this.fields.iframe }, () => {
      I.waitForVisible(this.fields.numeroInput, 10);
      I.fillField(this.fields.numeroInput, numero);

      I.waitForVisible(this.fields.numeroValidator, 10);
      I.fillField(this.fields.numeroValidator, numero);
    });

    console.log(`Número ingresado dentro del iframe correctamente: ${numero}`);
  }

  seleccionarOpcion(opcion) {
    within({ frame: this.fields.iframe }, () => {
      const selector = `//button[@class="select-option " and text()="${opcion}"]`;
      I.waitForVisible(this.fields.tipoCompra, 10);
      I.click(this.fields.tipoCompra);
      I.waitForVisible(selector, 10);
      I.click(selector);
      I.wait(2);
      I.waitForElement(this.fields.siguienteButton, 10);
      I.click(this.fields.siguienteButton);
    });

    console.log(`Opción seleccionada: ${opcion}`);
  }

  seleccionarMonto(monto) {
    within({ frame: this.fields.iframe }, () => {
      const selector = `//div[contains(@class, "btn-selectable")]//button[.//span[text()="${monto}"]]`;
      I.waitForVisible(selector, 10);
      I.click(selector);
      I.waitForElement(this.fields.siguienteButton, 10);
      I.click(this.fields.siguienteButton);
      I.wait(2);
    });

    console.log(`Monto seleccionado: ${monto}`);
  }

  async verificarResumenYFormulario() {
    const count = await I.grabNumberOfElements('.success-step');
    I.assertEqual(count, 2, "Se esperaban exactamente 2 elementos con la clase '.success-step'");
    I.waitForVisible(this.fields.formaPago, 10);
    I.wait(2);
    console.log(`validoción de resumen y formulario de pago correctamente`);

  }
}

module.exports = new PaquetesYRecargasPage();
