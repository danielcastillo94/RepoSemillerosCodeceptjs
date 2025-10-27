const { TC009Page } = inject();

Given(/^el usuario accede al portal principal de Telcel$/, () => {
    TC009Page.abrirPag();
});

When(/^cambia el estado a "Aguascalientes"$/, () => {
    TC009Page.cambiarReg('Aguascalientes');
});

Then(/^el estado seleccionado se actualiza correctamente$/, () => {
    TC009Page.validarRegionA('Aguascalientes');
});