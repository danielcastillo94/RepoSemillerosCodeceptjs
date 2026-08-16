const {ProductDetailPage, StockPage, CartPage} = inject();

Given(/^El usuario se encuentar en la categora de playeres$/, () => {
    ProductDetailPage.iniciocatplayera();
});
When(/^El usuario aplica filtros$/, () => {
    ProductDetailPage.aplicacionfiltros();
});

//TC032-------------------
When(/^El usuario agrega el priner producto al carrito$/, () => {
    CartPage.primerproducto();
});

When(/^El usuario agrega el segundo producto al carrito$/, () => {
    CartPage.segundoproducto();
});

When(/^El usuario agrega el tercer producto al carrito$/, () => {
    CartPage.tercerproducto();
});

//TC033-------------------
Then(/^El usuario ve su carrito de productos$/, () => {
    CartPage.validarcarrito();
});

//TC034-------------------
Then(/^El usuario ve el "Subtotal" y el "Total" de su comprar$/, () => {
    CartPage.validadprecios();
});