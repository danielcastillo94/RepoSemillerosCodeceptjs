const { buscadorPage, detalleEquipoPage } = inject();

// Reutiliza TC004
Given(/^el usuario se encuentra en la página principal de Telcel$/, () => {
    buscadorPage.abrirPaginaPrincipal();
});

When(/^busca el término "iPhone"$/, () => {
    buscadorPage.ingresarTerminoBusqueda("iPhone");
});

// Pasos específicos TC005
When(/^selecciona el primer equipo de los resultados$/, () => {
    detalleEquipoPage.abrirDetallePrimerEquipo();
});

Then(/^se muestra el detalle del equipo con imágenes, precio y especificaciones visibles$/, () => {
    detalleEquipoPage.validarDetalles();
});
