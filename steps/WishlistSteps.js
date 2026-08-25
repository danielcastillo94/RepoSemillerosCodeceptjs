const {WishlistPage} = inject();

Given(/^El usuario inicia sesion con su cuenta activa$/, () => {
    WishlistPage.iniciarsesionvalida();
});

//TC035----------------------------
When(/^El usuario tiene un producto en su carrito$/, () => {
    WishlistPage.agregaracarrito();
});
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