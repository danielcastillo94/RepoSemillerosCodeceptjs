const { I } = inject();

class TC007Page {
    elementos = {
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

    abrirModuloC() {
        I.amOnPage('https://www.telcel.com/personas/atencion-a-clientes/puntos-de-contacto');
        I.waitForElement(this.elementos.opcionCorreo, 10);
    }

    seleccionarCorreoE() {
        I.waitForVisible(this.elementos.opcionCorreo, 10);
        I.click(this.elementos.opcionCorreo);
    }

    validarF() {
        I.waitForVisible(this.elementos.formulario, 10);
        I.seeElement(this.elementos.campoNombre);
        I.seeElement(this.elementos.campoApPaterno);
        I.seeElement(this.elementos.campoApMaterno);
        I.seeElement(this.elementos.campoCorreo);
        I.seeElement(this.elementos.campoTelefono);
        I.seeElement(this.elementos.selectEstado);
        I.seeElement(this.elementos.selectComentario);
        I.seeElement(this.elementos.campoConsulta);
    }

    validarBotonesF(){
        I.seeElement(this.elementos.botonEnviar);
        I.seeElement(this.elementos.botonBorrar);
    }
}

module.exports = new TC007Page();