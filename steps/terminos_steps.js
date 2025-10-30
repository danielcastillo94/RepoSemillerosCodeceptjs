const { terminos_page } = inject();

Given(/^el usuario accede dentro de la página principal de Telcel$/, () => {
    terminos_page.abrirPagina();
});

When(/^selecciona el enlace "Términos y Condiciones" en el pie de página$/, () => {
    terminos_page.accederTerminos();
});

Then(/^la página de términos y condiciones se carga correctamente$/, () => {
    terminos_page.validarCargaDocumento();
});

Then(/^el texto del documento es visible$/, () => {
    terminos_page.validarContenido();
});