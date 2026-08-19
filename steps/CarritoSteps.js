const { CarritoPage } = inject();

//TC0029----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de detalle de un producto$/, () => {
    CarritoPage.homePDP();
});

When(/^El usuario selecciona el producto y hace clic en "Agregar al carrito"$/, () => {
    CarritoPage.agregarProducto();
});

When(/^El usuario confirma si quiere o no el seguro para su producto$/, () => {
    CarritoPage.agregarProductoConSeguroOpcional();

});

Then(/^El usuario valida que el GalaxyS25 se haya agregado correctamente al carrito$/, () => {
    CarritoPage.validarProductoAgregado();
});

//TC0030----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de detalle de un producto$/, () => {
    CarritoPage.homePDP();
});

When(/^El usuario selecciona el producto y hace clic en "Agregar al carrito"$/, () => {
    CarritoPage.agregarProducto();
});

When(/^El usuario confirma si quiere o no el seguro para su producto$/, () => {
    CarritoPage.agregarProductoConSeguroOpcional();

});

When(/^El usuario va a la página de carrito$/, () => {
    CarritoPage.validarProductoAgregado();
});

When(/^El usuario se encuentra en la página del carrito$/, () => {
    CarritoPage.homeCart();
});

Then(/^El usuario valida que la cantidad de producto en el carrito sea correcta y corresponda a los productos agregados$/, () => {
    CarritoPage.validarCantidadCarrito();
});


//TC0031----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de detalle de varios productos$/, () => {
    CarritoPage.homeLiverpool();
});

When(/^El usuario agrega más de tres productos al carrito$/, () => {
    CarritoPage.agregarMultiplesProductos();
});

//TC0032----------------------------------------------------------------------------
Then(/^El usuario valida que el subtotal del carrito se haya actualizado correctamente según los productos agregados$/, () => {
    CarritoPage.validarSubtotalActualizado();
});

//TC0033----------------------------------------------------------------------------
When(/^El usuario selecciona el icono de favoritos$/, () => {
    CarritoPage.agregarAFavoritos();
});

Then(/^El usuario valida que el producto se haya agregado a su lista de favoritos$/, () => {
    CarritoPage.validarProductoEnFavoritos();
});

//TC0034----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de favoritos$/, () => {
    CarritoPage.homeWishlist();
});

Then(/^El usuario valida que la cantidad de productos en favoritos sea correcta y corresponda a los productos agregados$/, () => {
    CarritoPage.validarCantidadFavoritos();
});

//TC0035----------------------------------------------------------------------------
When(/^El usuario selecciona un producto y hace clic en "Remover de favoritos"$/, () => {
    CarritoPage.removerDeFavoritos();
});

Then(/^El usuario valida que el producto se haya removido correctamente de favoritos$/, () => {
    CarritoPage.validarFavoritoRemovido();
});

//TC0036----------------------------------------------------------------------------
When(/^El usuario aumenta la cantidad de un producto$/, () => {
    CarritoPage.aumentarCantidad();
});

Then(/^El usuario valida que la cantidad del producto se haya actualizado correctamente en el carrito$/, () => {
    CarritoPage.validarCantidadActualizada();
});

//TC0037----------------------------------------------------------------------------
When(/^El usuario disminuye la cantidad de un producto$/, () => {
    CarritoPage.disminuirCantidad();
});

//TC0038----------------------------------------------------------------------------
When(/^El usuario selecciona un producto y hace clic en "Remover del carrito"$/, () => {
    CarritoPage.removerDelCarrito();
});

Then(/^El usuario valida que el producto se haya removido correctamente del carrito$/, () => {
    CarritoPage.validarCarritoVacio();
});

//TC0039----------------------------------------------------------------------------
Then(/^El usuario valida que el subtotal del carrito sea correcto y corresponda a los productos agregados$/, () => {
    CarritoPage.validarSubtotalActualizado();
});

//TC0040----------------------------------------------------------------------------
Then(/^El usuario valida que los impuestos del carrito sean correctos y correspondan a los productos agregados$/, () => {
    CarritoPage.validarImpuestos();
});

//TC0041----------------------------------------------------------------------------
Then(/^El usuario valida que el total del carrito sea correcto y corresponda a los productos agregados, incluyendo impuestos y descuentos aplicables$/, () => {
    CarritoPage.validarTotalFinal();
});