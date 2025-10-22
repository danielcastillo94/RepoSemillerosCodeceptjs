const { regionPage } = inject();

Given(/^el usuario accede a la página principal de Telcel$/, () => {
    regionPage.abrirPagina();
});

When(/^cambia el estado a "Coahuila"$/, () => {
    regionPage.cambiarRegion('Coahuila');
});

Then(/^el estado seleccionado se actualiza correctamente$/, () => {
    regionPage.validarRegionActual('Coahuila');
});
