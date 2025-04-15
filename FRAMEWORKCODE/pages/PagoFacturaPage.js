const { I } = inject();

class PagoFacturaPage {
    constructor() {
        this.fields = {
            pagaTuFacturaBtn: '(//a[@class="center-block"])[2]',
            iframe: '.iframePackagesRoaming-SIN_LIMITE',
            telefonoInput: '//input[@name="mdn"]',
            confirmInput: '//input[@name="confirmMdn"]',
            botonContinuar: '//*[@id="root"]/div/div/form/div[2]/div/button'
        };
    }

    clickPagaTuFactura() {
        I.waitForElement(this.fields.pagaTuFacturaBtn, 5);
        I.click(this.fields.pagaTuFacturaBtn);
        I.wait(3);
    }

    fillPhoneNumber() {
        I.switchTo(this.fields.iframe);
        I.waitForElement(this.fields.telefonoInput, 5);
        I.fillField(this.fields.telefonoInput, '5522502446');
    }

    fillConfirmationNumber() {
        I.fillField(this.fields.confirmInput, '5522502446');
    }

    async clickIfEnabled() {
        const isDisabled = await I.grabAttributeFrom(this.fields.botonContinuar, 'disabled');
        if (!isDisabled) {
            I.click(this.fields.botonContinuar);
            console.log("Botón habilitado. Se presionó correctamente.");
        } else {
            console.log("Botón deshabilitado. No se pudo presionar.");
        }
    }

    async verifyIfEnabled() {
        const isDisabled = await I.grabAttributeFrom(this.fields.botonContinuar, 'disabled');
        if (isDisabled) {
            console.log("No se puede continuar. El número ingresado no es válido.");
        } else {
            console.log("Se puede continuar. El número es válido.");
        }
    }
}

module.exports = new PagoFacturaPage();
