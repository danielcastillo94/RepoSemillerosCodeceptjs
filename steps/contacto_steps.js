const { contacto_page } = inject();

Given(/^el usuario se encuentra en el módulo de Contáctanos de Telcel$/, () => {
   contacto_page.abrirModuloContacto();
});

When(/^da clic en la opción "Correo Electrónico"$/, () => {
   contacto_page.seleccionarCorreoElectronico();
});

Then(/^se muestra el formulario de contacto con los campos requeridos$/, () => {
   contacto_page.validarFormulario();
});

Then(/^el botón de envío es visible$/, () => {
   contacto_page.validarBotonesFormulario();
});
