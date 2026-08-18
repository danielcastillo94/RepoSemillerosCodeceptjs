const { ODPage } = inject();

//TC0016----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de calzado$/, () => {
    ODPage.homeCalzado();
});

When(/^El usuario selecciona la opción de ordenar por destacado$/, () => {
    ODPage.ordenarPorRelevancia();
});

Then(/^El usuario valida que los productos mostrados estén ordenados correctamente con lo destacado$/, () => {
    ODPage.validarOrdenamientoResultados1();
});

//TC0017----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de calzado$/, () => {
    ODPage.homeCalzado();
});

When(/^El usuario selecciona la opción de ordenar por precio de menor a mayor$/, () => {
    ODPage.ordenarMenorMayor();
});

Then(/^El usuario valida que los productos esten ordenados de menor precio a mayor precio$/, () => {
    ODPage.validarOrdenamientoResultados2();
});

//TC0018----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de calzado$/, () => {
    ODPage.homeCalzado();
});

When(/^El usuario selecciona la opción de ordenar por precio de mayor a menor$/, () => {
    ODPage.ordenarMayorMenor();
});

Then(/^El usuario valida que los productos mostrados estén ordenados correctamente de mayor a menor precio$/, () => {
    ODPage.validarOrdenamientoResultados3();
});

//TC0019----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de calzado$/, () => {
    ODPage.homeCalzado();
});

When(/^El usuario selecciona la opción de ordenar por productos más nuevos$/, () => {
    ODPage.ordenarMasNuevos();
});

Then(/^El usuario valida que los productos mostrados estén conforme a lo más nuevo de la tienda$/, () => {
    ODPage.validarOrdenamientoResultados4();
});

//TC0020----------------------------------------------------------------------------
Given(/^El usuario se encuentra en una página de celulares$/, () => {
    ODPage.homeCelulares();
});

When(/^El usuario selecciona un producto$/, () => {
    ODPage.seleccionarProducto();
});

Then(/^El usuario valida que se muestre la página de detalle del producto$/, () => {
    ODPage.validarGalaxydescripcion();
});

//TC0021----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de detalle de el Galaxy S25 Ultra Dynamic$/, () => {
    ODPage.homeGalaxy();
});

Then(/^El usuario valida que el nombre, precio y descripción del producto sean correctos y correspondan al producto seleccionado$/, () => {
    ODPage.validarInformacionBasicaGalaxy();
});

//TC0022----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de detalle del Galaxy S25 Ultra$/, () => {
    ODPage.homeGalaxy();
});

Then(/^El usuario valida que las imágenes sean correctas y correspondan al producto seleccionado$/, () => {
    ODPage.validarGaleria();
});

//TC0023----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de detalles del galaxyS25$/, () => {
    ODPage.homeGalaxy();
});

Then(/^El usuario valida que la información de stock y disponibilidad sea correcta y corresponda al producto seleccionado$/, () => {
    ODPage.validarStockDisponibilidad();
});

//TC0024----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de detalle de un producto$/, () => {
    ODPage.homeGalaxy();
});

When(/^El usuario consulta la disponibilidad del producto en tiendas cercanas$/, () => {
    ODPage.consultarTiendasCercanas();
});

Then(/^El usuario valida que las tiendas cercanas muestren el producto con stock disponible$/, () => {
    ODPage.validarStockTiendasCercanas();
});

//TC0025----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de detalle de un celular GalaxyS25$/, () => {
    ODPage.homeGalaxy();
});

Then(/^El usuario valida que el SKU y el código de producto sean correctos y correspondan al producto seleccionado$/, () => {
    ODPage.validarSKU();
});

//TC0026----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de un celular GalaxyS25 Omolet$/, () => {
    ODPage.homeOmelet();
});

Then(/^El usuario valida que las reseñas del producto sean correctas y correspondan al producto seleccionado$/, () => {
    ODPage.validarResenasProducto();
});

//TC0027----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de un celular GalaxyS25 Omolet$/, () => {
    ODPage.homeOmelet();
});

When(/^El usuario selecciona una calificación de estrellas$/, () => {
    ODPage.filtrarCalificacionEstrellas();
});

Then(/^El usuario valida que se muestren las reseñas correspondientes a la calificación seleccionada$/, () => {
    ODPage.validarResenasFiltradas();
});

//TC0028----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de reseñas de un producto$/, () => {
    ODPage.homeOmelet();
    ODPage.validarResenasProducto();
});

When(/^El usuario consulta las reseñas que contienen fotografías$/, () => {
    ODPage.consultarResenasConFotos();
});

Then(/^El usuario valida que las fotografías correspondan al producto seleccionado$/, () => {
    ODPage.validarFotosEnResenas();
});