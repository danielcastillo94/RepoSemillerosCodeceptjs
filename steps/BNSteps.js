const { BNPage } = inject();

Given(/^El usuario ingresa a la página de Liverpool$/, () => {

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

//TC0002---------------------------------------------------------------------------------------------

Given(/^El usuario ingresa a la página de Liverpool$/, () => {
    BNPage.login();
});

When(/^El usuario ingresa un producto inexistente en la barra de búsqueda$/, () => {
    BNPage.busquedaInexistente();
});

Then(/^El usuario valida que no se muestren resultados para la búsqueda$/, () => {
    BNPage.resultadoInexistente();
});

//TC0003
Given(/^El usuario ingresa a la página de Liverpool$/, () => {
    BNPage.login();
});

When(/^El usuario ingresa la palabra "zapatillas" en la barra de búsqueda$/, () => {
    BNPage.busquedaZapatillas();
});

Then(/^El usuario da click en zapatillas Lady Paulina$/, () => {
    BNPage.resultadosLady();
});

//TC0004-------------------------------------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de Liverpool$/, () => {
    BNPage.login();
});

When(/^El usuario localiza el menú de categorías de Liverpool$/, () => {
    BNPage.categorias();
});

When(/^El usuario selecciona una categoría principal de la página de Liverpool$/, () => {
    BNPage.categoriaPrincipal()
});

Then(/^El usuario valida que la categoría seleccionada se despliegue correctamente$/, () => {
    BNPage.resultadoMuebles()
});
//TC005---------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de Liverpool$/, () => {
    BNPage.login();
});

When(/^El usuario localiza el menú de categorías$/, () => {
    BNPage.categorias();
});

Then(/^El usuario valida que se desplieguen las subcategorías correspondientes$/, () => {
    BNPage.Subcategorias();
});