const {CheckoutPage, CartPage, WishlistPage} = inject();

//Background------------------
Given(/^El usuario tiene una sesion activa$/, () => {
    WishlistPage.iniciarsesion();
});
When(/^El usuario ve el resumen de su compra$/, () => {
    CartPage.carritolleno();
});

//TC047----------------------
When(/^El usuario aplica un cupon valido$/, () => {
    CheckoutPage.validarcupon();
})
Then(/^El usuario ve su nuevo total$/, () => {
    CheckoutPage.validardescuento();
})

//NO puede hacer el caso TC049 porque no me deja aplciar cupones