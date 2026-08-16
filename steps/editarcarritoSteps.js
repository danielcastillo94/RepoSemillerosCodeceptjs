const {CartPage} = inject();

//background
Given(/^El usuario agrego 3 productos a su carrito$/, () => {
    CartPage.carritolleno();
});

//TC041-------------------------------
When(/^El usuario agrega un producto mas desde su carrito$/,() => {
    CartPage.aumentarcantidadcarrito();
});

//TC042-------------------------------
When(/^El usuario resta una unidad a un producto$/,() => {
    CartPage.disminuircantidadcarrito();
});

//TC043-------------------------------
When(/^El usuario elimina un producto desde su carrito$/,() => {
    CartPage.borrarproductocarrito();
});