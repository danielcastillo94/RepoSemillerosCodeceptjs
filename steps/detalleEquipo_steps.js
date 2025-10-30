const { buscador_page, detalleEquipo_page } = inject();

Given(/^el usuario se encuentra dnetro de la página principal de Telcel$/, () => {
    buscador_page.abrirPaginaPrincipal();
});

When(/^busca el término "iPhone"$/, () => {
    buscador_page.ingresarTerminoBusqueda("iPhone");
});


When(/^selecciona el primer equipo de los resultados$/, () => {
    detalleEquipo_page.abrirDetallePrimerEquipo();
});

Then(/^se muestra el detalle del equipo con imágenes, precio y especificaciones visibles$/, () => {
    detalleEquipo_page.validarDetalles();
});