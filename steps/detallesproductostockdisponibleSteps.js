const {ProductDetailPage,StockPage} = inject();

Given(/^El usuario se encuentar en la categora de playeres$/, () => {
    ProductDetailPage.iniciocatplayera();
});
When(/^El usuario aplica filtros$/, () => {
    ProductDetailPage.aplicacionfiltros();
});
When(/^El usuario da clic en un producto de su agrado$/, () => {
    ProductDetailPage.productoelejido();
});

//TC023------------------
When(/^El usuario escoge la talla de su agrado$/, () => {
    StockPage.selecciontalla();
});
When(/^El usuario da clic en "Ver disponibilidad en tienda" y escoge su pais$/, () => {
    StockPage.seleccionregion();
});
Then(/^El usuario ve las diferentes sucursales con stock disponible$/, () => {
    StockPage.verstock();
});

//TC024------------------
When(/^El usuario da clic en "Recogen en tienda"$/, () => {
    StockPage.recogertienda();
});
When(/^El usuario da clic en "Selecciona una tienda"$/, () => {
    StockPage.seleccionartienda();
});
When(/^El usuario ingresa su cp y da clic en "Buscar"$/, () => {
    StockPage.cp();
});
Then(/^El usuario ve las tiendas cercanas$/, () => {
    StockPage.tiendascercanas();
});

//TC25------------------
Then(/^El usuario ve el codigo del producto$/, () => {
    StockPage.codigoproducto();
})