const { region_page } = inject();

Given(/^el usuario accede dentro de la página principal de Telcel$/, () => {
    region_page.abrirPagina();
});

When(/^cambia el estado a "Chiapas"$/, () => {
    region_page.cambiarRegion('Chiapas');
});

Then(/^el estado seleccionado se actualiza correctamente$/, () => {
    region_page.validarRegionActual('Chiapas');
});