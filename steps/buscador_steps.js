const { buscador_page } = inject();

Given(/^el usuario se encuentra dentro de la página principal de Telcel$/, () => {
    buscador_page.abrirPaginaPrincipal();
});

When(/^busca el término "iPhone"$/, () => {
    buscador_page.ingresarTerminoBusqueda("iPhone");
});

Then(/^se muestran resultados visibles que contienen el término "iPhone"$/, () => {
    buscador_page.validarResultados();
});