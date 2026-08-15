const {ProductDetailPage, StockPage, CartPage} = inject();

Given(/^El usuario se encuentar en la categora de playeres$/, () => {
    ProductDetailPage.iniciocatplayera();
});
When(/^El usuario aplica filtros$/, () => {
    ProductDetailPage.aplicacionfiltros();
});
When(/^El usuario da clic en un producto de su agrado$/, () => {
    ProductDetailPage.productoelejido();
});
When(/^El usuario escoge la talla de su agrado$/, () => {
    StockPage.selecciontalla();
});

//TC029-------------------
When(/^El usuario da clic en "Agregar a mi bolsa"$/, () => {
    CartPage.agregarbolsa();
});

//TC030-------------------
When(/^El usuario escoge la cantidad de productos agregados$/, () => {
    CartPage.cantidadproducto();
});

//TC031-------------------
Then(/^El usuario ve un mensaje de operacion exitosa$/, () => {
    CartPage.validarmensaje();
});