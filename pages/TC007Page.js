const { I } = inject();
const { allure } = codeceptjs.container.plugins();

class TC007Page{
    elementos = {
        buttoncookies: '//a[@id="acepto-cookies"]',
        menu: 'a[id="telcel-menu-principal-boton"]',
        ayuda: 'a[data-nombreboton="Ayuda"]',
        contactanos: 'a[data-nombreboton="Contactanos"]',
        btncorreo: '//a[contains(text(), "Correo Electrónico")]'
    }

    urls = {
        telcel: 'https://www.telcel.com/',
        contactospage: 'https://www.telcel.com/personas/atencion-a-clientes/puntos-de-contacto',
        formcorreo: 'https://www.telcel.com/personas/atencion-a-clientes/puntos-de-contacto/e-mail'
    }

    formulario = {
        nombre: 'input[id="contacto"]',
        paterno: 'input[id="Apaterno"]',
        materno: 'input[id="Amaterno"]',
        email: 'input[id="email"]',
        estado: 'div[id="state_0_chosen"]',
        telefono: 'input[id="telefono"]',
        comentario: 'div[id="Comentarios_chosen"]',
        consulta: 'textarea[id="Consulta"]',
        btnborrar: 'button[type="reset"]',
        btnenviar: 'a[id="form-btn"]'
    }

    menuinicio(){
        I.amOnPage(this.urls.telcel);
        I.click(this.elementos.buttoncookies);
        I.moveCursorTo(this.elementos.menu);
        I.moveCursorTo(this.elementos.ayuda);
    }

    opcontact(){
        I.click(this.elementos.contactanos);
        I.waitForURL(this.urls.contactospage);
        I.see('¿Cómo podemos ayudarte?');
        I.click(this.elementos.btncorreo);
    }
    pagecontact(){
        I.waitForURL(this.urls.formcorreo);
        I.see('¿Cómo podemos ayudarte?');
        I.seeElement(this.formulario.nombre,
            this.formulario.paterno,
            this.formulario.materno,
            this.formulario.email,
            this.formulario.estado,
            this.formulario.telefono,
            this.formulario.comentario,
            this.formulario.consulta,
            this.formulario.btnborrar,
            this.formulario.btnenviar
        );
         this.screenshotPassed();
    }

    async screenshotPassed(){
    const fs = require('fs');
    const path = require('path');
    const className = this.constructor.name;
    const screenshotName = (`${className}`+'.png');
    await I.saveScreenshot(screenshotName);
    const screenshotPath = path.resolve('output', screenshotName);

    const dataImage = fs.readFileSync(screenshotPath);
    allure.addAttachment(`Screenshot: ${className}`, dataImage, 'image/png');
    }

}
module.exports = new TC007Page();