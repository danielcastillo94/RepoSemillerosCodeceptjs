const {ProductDetailPage, StockPage, CartPage} = inject();

Given(/^El usuario se encuentar en la categora de playeres$/, () => {
    CartPage.categoriaplayera();
});
When(/^El usuario aplica filtros$/, () => {
    CartPage.filtros();
});
When(/^El usuario da clic en un producto de su agrado$/, () => {
    CartPage.productoseleccionado();
});
When(/^El usuario escoge la talla de su agrado$/, () => {
    CartPage.tallaplayera();
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