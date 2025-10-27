const { TC007Page } = inject();

Given(/^el usuario está en el módulo de Contáctanos de Telcel$/, () => {
    TC007Page.abrirModuloC();
});

When(/^da clic en la opción "Correo Electrónico"$/, () => {
    TC007Page.seleccionarCorreoE();
});

Then(/^se muestra el formulario de contacto con los campos requeridos$/, () => {
    TC007Page.validarF();
});

Then(/^el botón de envío es visible$/, () => {
    TC007Page.validarBotonesF();
});