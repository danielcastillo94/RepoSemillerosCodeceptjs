const { BNPage } = inject();

Given(/^Localización de la página de liverpool$/, () => {

    BNPage.login();
});
//TC001-----------------------------------------------------------------------------------

Given(/^El usuario ingresa a la página de Liverpool$/, () => {
    BNPage.paginaInicial();
});

When(/^El usuario ingresa la palabra "zapatillas" en la barra de búsqueda$/, () => {
    BNPage.busquedaZapatillas();
});

Then(/^El usuario valida que se muestren resultados para la búsqueda$/, () => {
    BNPage.resultadosZapatillas();
});