const { terminosPage } = inject();

Given(/^el usuario accede al sitio principal de Telcel$/, () => {
    terminosPage.abrirPagina();
});

When(/^selecciona el enlace "Términos y Condiciones" en el pie de página$/, () => {
    terminosPage.accederTerminos();
});

Then(/^la página de términos y condiciones se carga correctamente$/, () => {
    terminosPage.validarCargaDocumento();
});

Then(/^el texto del documento es visible$/, () => {
    terminosPage.validarContenido();
});
