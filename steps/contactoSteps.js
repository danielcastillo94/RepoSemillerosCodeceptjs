const { contactoPage } = inject();

Given(/^el usuario se encuentra en el módulo de Contáctanos de Telcel$/, () => {
    contactoPage.abrirModuloContacto();
});

When(/^da clic en la opción "Correo Electrónico"$/, () => {
    contactoPage.seleccionarCorreoElectronico();
});

Then(/^se muestra el formulario de contacto con los campos requeridos$/, () => {
    contactoPage.validarFormulario();
});

Then(/^el botón de envío es visible$/, () => {
    contactoPage.validarBotonesFormulario();
});
