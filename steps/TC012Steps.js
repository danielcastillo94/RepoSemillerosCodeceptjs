const { TC012Page } = inject();

Given(/^el usuario accede al portal principal de Telcel$/, () => {
    TC012Page.abrirPagina();
});

When(/^selecciona el enlace "Términos y Condiciones" en el pie de página$/, () => {
    TC012Page.accederTerminos();
});

Then(/^la página de términos y condiciones se carga correctamente$/, () => {
    TC012Page.validarCargaDocumentos();
});

Then(/^el texto del documento es visible$/, () => {
    TC012Page.validarContenido();
});