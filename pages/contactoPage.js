const { I } = inject();

class contactoPage {
    elements = {
        opcionCorreo: '//a[contains(text(), "Correo Electrónico")]',
        campoNombre: '//input[@id="contacto"]',
        campoApPaterno: '//input[@id="Apaterno"]',
        campoApMaterno: '//input[@id="Amaterno"]',
        campoCorreo: '//input[@id="email"]',
        campoTelefono: '//input[@id="telefono"]',
        selectEstado: '//select[@id="state_0"]',
        selectComentario: '//select[@id="Comentarios"]',
        campoConsulta: '//textarea[@id="Consulta"]',
        botonEnviar: '//a[@id="form-btn" and contains(text(), "Enviar")]',
        botonBorrar: '//button[contains(text(), "Borrar")]',
        formulario: 'form.validar-telcel',
    };

    abrirModuloContacto() {
        I.amOnPage('https://www.telcel.com/personas/atencion-a-clientes/puntos-de-contacto');
        I.waitForElement(this.elements.opcionCorreo, 10);
    }

    seleccionarCorreoElectronico() {
        I.waitForVisible(this.elements.opcionCorreo, 10);
        I.click(this.elements.opcionCorreo);
    }

    validarFormulario() {
        I.waitForVisible(this.elements.formulario, 10);
        I.seeElement(this.elements.campoNombre);
        I.seeElement(this.elements.campoApPaterno);
        I.seeElement(this.elements.campoApMaterno);
        I.seeElement(this.elements.campoCorreo);
        I.seeElement(this.elements.campoTelefono);
        I.seeElement(this.elements.selectEstado);
        I.seeElement(this.elements.selectComentario);
        I.seeElement(this.elements.campoConsulta);
    }
    
    validarBotonesFormulario(){
        I.seeElement(this.elements.botonEnviar);
        I.seeElement(this.elements.botonBorrar);
    }
}

module.exports = new contactoPage();
