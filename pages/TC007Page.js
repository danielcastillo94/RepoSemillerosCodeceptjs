class ContactoPage {
  constructor(I) {
    this.I = I;

    // Selectores
    this.formulario = 'form.form-normal';
    this.inputNombre = '#contacto';
    this.inputApaterno = '#Apaterno';
    this.inputAmaterno = '#Amaterno';
    this.inputEmail = '#email';
    this.selectEstado = '#state_0_chosen';
    this.inputTelefono = '#telefono';
    this.selectComentarios = '#Comentarios_chosen';
    this.textareaConsulta = '#Consulta';
    this.botonEnviar = '#form-btn';
    this.botonBorrar = '.js-hard-reset-form';
  }

  // Abrir página directa del módulo
  async abrirPagina() {
    const I = this.I;
    I.amOnPage('https://www.telcel.com/personas/atencion-a-clientes/puntos-de-contacto/e-mail', { waitUntil: 'networkidle', timeout: 120000 });
  }

  // Validar formulario y todos los campos visibles
  async validarFormularioVisible() {
    const I = this.I;
    I.waitForElement(this.formulario, 10);
    I.seeElement(this.formulario);
    I.seeElement(this.inputNombre);
    I.seeElement(this.inputApaterno);
    I.seeElement(this.inputAmaterno);
    I.seeElement(this.inputEmail);
    I.seeElement(this.selectEstado);
    I.seeElement(this.inputTelefono);
    I.seeElement(this.selectComentarios);
    I.seeElement(this.textareaConsulta);
    I.seeElement(this.botonEnviar);
    I.seeElement(this.botonBorrar);
  }
}

module.exports = ContactoPage;
