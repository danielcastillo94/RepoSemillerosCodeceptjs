const {ProductDetailPage,StockPage,WishlistPage, CartPage} = inject();

Given(/^El usuario tiene una sesion iniciada$/, () => {
    WishlistPage.iniciarsesion();
})
When(/^El usuario tiene un producto en su carrito$/, () => {
    ProductDetailPage.iniciocatplayera();
    ProductDetailPage.aplicacionfiltros();
    ProductDetailPage.productoelejido();
    StockPage.selecciontalla();
    CartPage.agregarbolsa();
})

//TC035----------------------------
When(/^El usuario da clic en "mover a"$/, () => {
    WishlistPage.agregarwishlist();
});

//TC036----------------------------
When(/^El usuario da clic en "wishlist"$/, () => {
    WishlistPage.verwishlist();
});

//TC037----------------------------
//recomenble ejecutar el ultimo tag(TC037) para validar todo el flujo de Wishlist
When(/^El usuario remueve el producto de su wishlist$/, () => {
    WishlistPage.removerdewishlist();
});