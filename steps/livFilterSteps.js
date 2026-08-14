const { livFilterPage } = inject();
//TC0006----------------------------------------------------------------------------
Given(/^El usuario se encuentra en el menú de categorías$/, () => {
    livFilterPage.home();
});
When(/^El usuario selecciona una categoría principal$/, () => {
    livFilterPage.categoriasMuebles();
});
Then(/^El usuario valida que los productos mostrados correspondan a la categoría seleccionada$/, () => {
    livFilterPage.categoriaUnica();
});
//TC0007----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de ropa$/, () => {
    livFilterPage.homeRopa();
});
When(/^El usuario ordena los productos de menor a mayor precio$/, () => {
    livFilterPage.ButtonRelevancia();
});
Then(/^El usuario valida que los productos se muestren en orden ascendente de precio$/, () => {
    livFilterPage.ButtonMenorPrecio();
});
//TC0008
Given(/^El usuario se encuentra en la página de ropa$/, () => {
    livFilterPage.homeRopa();
});
When(/^El usuario selecciona un rango de precio específico$/, () => {
    livFilterPage.seleccionRango();
});
//TC009
Given(/^El usuario se encuentra en la página de ropa$/, () => {
    livFilterPage.homeRopa();
});
When(/^El usuario selecciona un rango de precio específico$/, () => {
    livFilterPage.seleccionRango();
});
Then(/^El usuario valida que los productos mostrados correspondan al rango de precio seleccionado$/, () => {
    livFilterPage.validarRango();
});
//TC0010-----------------------------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de calzado$/, () => {
    livFilterPage.homeCalzado();
});

When(/^El usuario selecciona una marca específica como Adidas$/, () => {
    livFilterPage.filtroMarca();
});

Then(/^El usuario valida que los productos mostrados correspondan a la marca seleccionada$/, () => {
    livFilterPage.resultadoAddidas();
});

//TC0011----------------------------------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de calzado$/, () => {
    livFilterPage.homeCalzado();
});
When(/^El usuario selecciona la marca Adidas$/, () => {
    livFilterPage.filtroMarca();
});
When(/^El usuario selecciona la marca 24 Horas$/, () => {
    livFilterPage.filtroNike();
});
Then(/^El usuario valida que los productos mostrados correspondan a las marcas seleccionadas$/, () => {
    livFilterPage.resultadosCombinados();
});

//TC0012--------------------------------------------------------------
Given(/^El usuario se encuentra en la página de calzado$/, () => {
    livFilterPage.homeCalzado();
});

When(/^El usuario selecciona la marca Adidas$/, () => {
    livFilterPage.filtroMarca();
});

When(/^El usuario deselecciona la marca Adidas$/, () => {
    livFilterPage.DesmarcarAddidas()
});

Then(/^El usuario valida que los productos mostrados ya no estén filtrados por la marca deseleccionada$/, () => {
    livFilterPage.validarMarcaDeseleccionada();
});

//TC0013---------------------------------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de ropa$/, () => {
    livFilterPage.homeRopa();
});

When(/^El usuario selecciona una talla específica de pantalon$/, () => {
    livFilterPage.seleccionarTalla();
});

Then(/^El usuario valida que los productos mostrados correspondan a la talla seleccionada$/, () => {
    livFilterPage.validarFiltroTalla();
});

//TC0014------------------------------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de ropa$/, () => {
    livFilterPage.homeRopa();
});

When(/^El usuario selecciona un color específico de una camisa$/, () => {
    livFilterPage.seleccionarColor();
});

Then(/^El usuario valida que los productos mostrados correspondan al color seleccionado$/, () => {
    livFilterPage.validarFiltroColor();
});
//TC0015--------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de ropa$/, () => {
    livFilterPage.homeRopa();
});

When(/^El usuario selecciona una talla específica de un vestido$/, () => {
    livFilterPage.validarTalla();
});

When(/^El usuario selecciona un color específico de un vestido$/, () => {
    livFilterPage.validarcolor();
});

Then(/^El usuario valida que los productos mostrados correspondan a la talla y al color seleccionados$/, () => {
    livFilterPage.validarTallaYColor();
});