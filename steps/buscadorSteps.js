const { buscadorPage } = inject();

Given(/^el usuario se encuentra en la página principal de Telcel$/, () => {
    buscadorPage.abrirPaginaPrincipal();
});

When(/^busca el término "iPhone"$/, () => {
    buscadorPage.ingresarTerminoBusqueda("iPhone");
});

Then(/^se muestran resultados visibles que contienen el término "iPhone"$/, () => {
    buscadorPage.validarResultados();
});
