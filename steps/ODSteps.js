const { ODPage } = inject();

//TC0016----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de calzado$/, () => {
    livFilterPage.homeCalzado();
});

When(/^El usuario selecciona la opción de ordenar por relevancia$/, () => {
    livFilterPage.ordenarPorRelevancia();
});

Then(/^El usuario valida que los productos mostrados estén ordenados correctamente$/, () => {
    livFilterPage.validarOrdenamientoResultados();
});

//TC0017----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de calzado$/, () => {
    livFilterPage.homeCalzado();
});

When(/^El usuario selecciona la opción de ordenar por precio de menor a mayor$/, () => {
    livFilterPage.ordenarMenorMayor();
});

Then(/^El usuario valida que los productos mostrados estén ordenados correctamente$/, () => {
    livFilterPage.validarOrdenamientoResultados();
});

//TC0018----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de calzado$/, () => {
    livFilterPage.homeCalzado();
});

When(/^El usuario selecciona la opción de ordenar por precio de mayor a menor$/, () => {
    livFilterPage.ordenarMayorMenor();
});

Then(/^El usuario valida que los productos mostrados estén ordenados correctamente$/, () => {
    livFilterPage.validarOrdenamientoResultados();
});

//TC0019----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de calzado$/, () => {
    livFilterPage.homeCalzado();
});

When(/^El usuario selecciona la opción de ordenar por productos más nuevos$/, () => {
    livFilterPage.ordenarMasNuevos();
});

Then(/^El usuario valida que los productos mostrados estén ordenados correctamente$/, () => {
    livFilterPage.validarOrdenamientoResultados();
});

//TC0020----------------------------------------------------------------------------
Given(/^El usuario se encuentra en una página de resultados de productos$/, () => {
    livFilterPage.homeCalzado();
});

When(/^El usuario selecciona un producto$/, () => {
    livFilterPage.seleccionarProducto();
});

Then(/^El usuario valida que se muestre la página de detalle del producto$/, () => {
    livFilterPage.validarPDP();
});

//TC0021----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de detalle de un producto$/, () => {
    livFilterPage.homePDP();
});

Then(/^El usuario valida que el nombre, precio y descripción del producto sean correctos y correspondan al producto seleccionado$/, () => {
    livFilterPage.validarInformacionBasicaPDP();
});

//TC0022----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de detalle de un producto$/, () => {
    livFilterPage.homePDP();
});

Then(/^El usuario valida que las imágenes sean correctas y correspondan al producto seleccionado$/, () => {
    livFilterPage.validarGaleria();
});

//TC0023----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de detalle de un producto\.?$/, () => {
    livFilterPage.homePDP();
});

Then(/^El usuario valida que la información de stock y disponibilidad sea correcta y corresponda al producto seleccionado$/, () => {
    livFilterPage.validarStockDisponibilidad();
});

//TC0024----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de detalle de un producto$/, () => {
    livFilterPage.homePDP();
});

When(/^El usuario consulta la disponibilidad del producto en tiendas cercanas$/, () => {
    livFilterPage.consultarTiendasCercanas();
});

Then(/^El usuario valida que las tiendas cercanas muestren el producto con stock disponible$/, () => {
    livFilterPage.validarStockTiendasCercanas();
});

//TC0025----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de detalle de un producto$/, () => {
    livFilterPage.homePDP();
});

Then(/^El usuario valida que el SKU y el código de producto sean correctos y correspondan al producto seleccionado$/, () => {
    livFilterPage.validarSKU();
});

//TC0026----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de detalle de un producto$/, () => {

});

Then(/^El usuario valida que las reseñas del producto sean correctas y correspondan al producto seleccionado$/, () => {
    livFilterPage.validarResenasProducto();
});

//TC0027----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de reseñas de un producto$/, () => {
    livFilterPage.homePDP();
    livFilterPage.validarResenasProducto();
});

When(/^El usuario selecciona una calificación de estrellas$/, () => {
    livFilterPage.filtrarCalificacionEstrellas();
});

Then(/^El usuario valida que se muestren las reseñas correspondientes a la calificación seleccionada$/, () => {
    livFilterPage.validarResenasFiltradas();
});

//TC0028----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de reseñas de un producto$/, () => {
    livFilterPage.homePDP();
    livFilterPage.validarResenasProducto();
});

When(/^El usuario consulta las reseñas que contienen fotografías$/, () => {
    livFilterPage.consultarResenasConFotos();
});

Then(/^El usuario valida que las fotografías correspondan al producto seleccionado$/, () => {
    livFilterPage.validarFotosEnResenas();
});