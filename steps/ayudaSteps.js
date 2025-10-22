const { ayudaPage } = inject();

Given(/^el usuario accede a la página principal de Telcel$/, () => {
    ayudaPage.abrirPagina();
});

When(/^da clic en el menú a la sección "Ayuda"$/, () => {
    ayudaPage.accederMenuAyuda();
});

Then(/^las categorías desplegables están disponibles$/, () => {
    ayudaPage.validarCategorias();
});

Then(/^los enlaces resultantes son visibles$/, () => {
    ayudaPage.validarEnlaces();
});
