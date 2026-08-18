const {CartPage} = inject();

//Given--------------------
Given(/^El usuario ve el resumen de su compra$/, () => {
    CartPage.carritolleno();
});

//TC044--------------------
Then(/^El usuario ve el subtotal de la compra$/, () => {
    CartPage.subtotal();
});

//TC045--------------------
Then(/^El usuario ve que "IVA incluido"$/, () => {
    CartPage.IVA();
});

//TC046--------------------
Then(/^El usuario ve el total a pagar$/, () => {
    CartPage.total();
});