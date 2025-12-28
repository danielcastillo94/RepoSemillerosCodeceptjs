const { I } = inject();

class contact_page {
    elements = {
        attentionLink: '//a[text()="Centro de Atención"]',
        zacatecasText: '//p[text()="Zacatecas"]',
        veracruzText: '//p[text()="Veracruz"]'
    }

    formElements = {
        //Elementos para Verificar la carga correcta de los elementos del formulario
        helpText: '//*[@id="level-1"]/li[5]/a',
        contactText: '//a[text()="Contáctanos"]',
        emailText: '//span/a[text()="Correo Electrónico"]',
        nameInput: '//input[@id="contacto"]',
        phoneInput: '//input[@id="telefono"]',
        sendButton: '//a[@id="form-btn"]'
    }

    goToPage() {
        I.amOnPage("https://www.telcel.com/personas/atencion-a-clientes/puntos-de-contacto");
    }

    verifyElements() {
        I.click(this.elements.attentionLink);
        I.scrollTo(this.elements.veracruzText);
        I.seeElement(this.elements.veracruzText);
        I.seeElement(this.elements.zacatecasText);
    }

    //Metodo para "Verificar la carga correcta de los elementos del formulario"
    verifyFormElements() {
        //verificacion
        I.waitForElement(this.formElements.emailText, 3);
        I.click(this.formElements.emailText);
        I.scrollTo(this.formElements.nameInput);
        I.seeElement(this.formElements.nameInput);
        I.seeElement(this.formElements.phoneInput);
        I.seeElement(this.formElements.sendButton);
    }
}

module.exports = new contact_page();