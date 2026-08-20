const { CarritoPage } = inject();

//TC0029----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de detalle de un producto$/, () => {
    CarritoPage.homePDP();
});

When(/^El usuario selecciona el producto y hace clic en "Agregar al carrito"$/, () => {
    CarritoPage.agregarProductoAlCarrito();
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
    CarritoPage.agregarProductoAlCarrito();
});

When(/^El usuario confirma si quiere o no el seguro para su producto$/, async () => {
    await CarritoPage.agregarProductoConSeguroOpcional();

});

When(/^El usuario va a la página de carrito$/, () => {
    CarritoPage.validarProductoAgregado();
});

When(/^El usuario se encuentra en la página del carrito$/, () => {
    CarritoPage.homeCart();
});

Then(/^El usuario valida que la cantidad de "([^"]*)" producto en el carrito sea correcta y corresponda a los productos agregados$/, async (cantidadEsperada) => {
    CarritoPage.validarCantidadCarrito(cantidadEsperada);
});


//TC0031----------------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de celulares$/, () => {
    CarritoPage.homeCelularesLiverpool();
});

When(/^El usuario agrega los productos Apple, Motorola y Samsung al carrito$/, async () => {
    await CarritoPage.agregarMultiplesProductos("Apple");
    await CarritoPage.agregarMultiplesProductos("Motorola");
    await CarritoPage.agregarMultiplesProductos("Samsung");

});
Then(/^El usuario valida que los productos se hayan agregado correctamente al carrito$/, () => {
    CarritoPage.validarProductoAgregado();
});
Then(/^El usuario valida que la cantidad de "([^"]*)" productos en el carrito sea correcta y corresponda a los productos agregados$/, async (cantidadEsperada) => {
    await CarritoPage.validarCantidadCarrito(cantidadEsperada);
});
Then(/^El usuario valida que el subtotal del carrito se haya actualizado correctamente según los productos agregados$/, () => {
    CarritoPage.validarSubtotalActualizado();
});




// Paso de inicio de sesión leyendo de .env
Given(/^El usuario ha iniciado sesión en Liverpool$/, async () => {
    await CarritoPage.iniciarSesion();
});

When(/^El usuario se encuentra en la página de detalle de un producto$/, async () => {
    // Lógica para ir a un producto (por ejemplo, mediante búsqueda direct a URL)
    await CarritoPage.homeCelularesLiverpool();
});

When(/^El usuario selecciona un producto del listado que es Apple$/, async () => {
    await CarritoPage.agregarUnProductoAFavoritos("Apple");
});

When(/^El usuario selecciona el icono de favoritos$/, async () => {
    await CarritoPage.agregarAFavoritos();
});

Then(/^El usuario valida que el producto se haya agregado a su lista de favoritos$/, async () => {
    await CarritoPage.validarProductoEnFavoritos();
});

When(/^El usuario se navega a la página de favoritos$/, async () => {
    await CarritoPage.homeWishlist();
});

Then(/^El usuario valida que la cantidad de productos en favoritos sea "([^"]*)"$/, async (cantidad) => {
    await CarritoPage.validarCantidadFavoritos(cantidad);
});

When(/^El usuario selecciona un producto y hace clic en "Remover de favoritos"$/, async () => {
    await CarritoPage.removerDeFavoritos();
});

Then(/^El usuario valida que el producto se haya removido correctamente de favoritos$/, async () => {
    await CarritoPage.validarFavoritoRemovido();
});
//TC0033----------------------------------------------------------------------------------------------------------
// ==========================================
// PASOS COMPARTIDOS / PREPARACIÓN (GIVENS)
// (Usados por TC0033, TC0034 y TC0035)
// ==========================================

Given(/^El usuario se encuentra en la página de celulares$/, async () => {
    await CarritoPage.homeCelularesLiverpool();
});

Given(/^El usuario agrega los productos Apple al carrito$/, async () => {
    await CarritoPage.agregarMultiplesProductos("Apple");

});

Given(/^El usuario se encuentra en la página del carrito$/, async () => {
    await CarritoPage.irAlCarrito();
});


// ==========================================
// TC0033: AUMENTAR CANTIDAD DE UN PRODUCTO
// ==========================================

// Acción de TC0033
When(/^El usuario aumenta la cantidad del producto a "([^"]*)"$/, async (cantidad) => {
    await CarritoPage.aumentarCantidadProducto(cantidad);
});

// Validación de TC0033 (y reutilizable para TC0034)
Then(/^El usuario valida que la cantidad del producto sea "([^"]*)" en el carrito$/, async (cantidadEsperada) => {
    await CarritoPage.validarCantidadCarrito(cantidadEsperada);
});


// ==========================================
// TC0034: DISMINUIR CANTIDAD DE UN PRODUCTO
// ==========================================

// Acción de TC0034
When(/^El usuario disminuye la cantidad del producto a "([^"]*)"$/, async (cantidad) => {
    await CarritoPage.disminuirCantidadProducto(cantidad);
});

// Nota: El 'Then' de la cantidad se reutiliza del bloque de TC0033 arriba 
// debido a que la expresión regex es idéntica:
// Then(/^El usuario valida que la cantidad del producto sea "([^"]*)" en el carrito$/)


// ==========================================
// TC0035: REMOVER PRODUCTO DEL CARRITO
// ==========================================

// Acción de TC0035
When(/^El usuario elimina el producto del carrito$/, async () => {
    await CarritoPage.removerProductoDelCarrito();
});

// Validación de TC0035
Then(/^El usuario valida que el carrito se encuentre vacío$/, async () => {
    await CarritoPage.validarCarritoVacio();
});


//TC0040----------------------------------------------------------------------------
Then(/^El usuario valida que los impuestos del carrito sean correctos y correspondan a los productos agregados$/, () => {
    CarritoPage.validarImpuestos();
});

//TC0041----------------------------------------------------------------------------
Then(/^El usuario valida que el total del carrito sea correcto y corresponda a los productos agregados, incluyendo impuestos y descuentos aplicables$/, () => {
    CarritoPage.validarTotalFinal();
});