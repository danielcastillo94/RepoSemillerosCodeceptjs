const { I } = inject();
class TC007contacto_page {
    fields = {
        Cookies: '[class="telcel-banner-aviso-cookies"]',
        Formulario: "img[src*=\'contactanos-por-mail-octubre-2023\']",
        Nombre: "input[name='contacto']",
        APaterno: "input[name='Apaterno']",
        AMaterno: "input[name='Amaterno']",
        Telefono: "input[name='telefono']",
        Correo: "input[name='email']",
        Consulta: "textarea[name='Consulta']",
        Enviar: "a[data-nombreboton='Enviar']"




    };
    async pagContacto() {
        await I.amOnPage('https://www.telcel.com/personas/atencion-a-clientes/puntos-de-contacto');
        if (await I.grabNumberOfVisibleElements(this.fields.Cookies)) {
            await I.click('//a[@id="acepto-cookies"]');

        }
    }
    validarFormulario() {
        I.waitForVisible(this.fields.Formulario);
        I.click(this.fields.Formulario);
        I.wait(10);

    }
    validarCampos() {

        I.seeElement(this.fields.Nombre);
        I.seeElement(this.fields.APaterno);
        I.seeElement(this.fields.AMaterno);
        I.seeElement(this.fields.Telefono);
        I.seeElement(this.fields.Correo);
        I.seeElement(this.fields.Consulta);
        I.seeElement(this.fields.Enviar);
        I.scrollTo(this.fields.Enviar);
        I.wait(5);


    }

}







module.exports = new TC007contacto_page(); //exportar la clase*/