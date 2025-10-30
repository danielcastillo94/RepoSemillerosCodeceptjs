const { ayuda_page } = inject();

Given(/^el usuario accede a la página principal de Telcel$/, () => {
    ayuda_page.abrirPagina();
});

When(/^da clic en el menú a la sección "Ayuda"$/, () => {
    ayuda_page.accederMenuAyuda();
});

Then(/^las categorías desplegables están disponibles$/, () => {
    ayuda_page.validarCategorias();
});

Then(/^los enlaces resultantes son visibles$/, () => {
    ayuda_page.validarEnlaces();
});