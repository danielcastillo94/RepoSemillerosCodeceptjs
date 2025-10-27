const { TC008Page } = inject();

Given(/^el usuario accede al portal principal de Telcel$/, () => {
    TC008Page.abrirPag();
});

When(/^se encuentra en la sección "Ayuda"$/, () => {
    TC008Page.accederMenuA();
});

Then(/^las categorías desplegables están disponibles$/, () => {
    TC008Page.validarC();
});

Then(/^los enlaces resultantes son visibles$/, () => {
    TC008Page.validarE();
});