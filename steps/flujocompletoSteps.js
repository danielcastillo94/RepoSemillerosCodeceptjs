const {FlujoCompletoPage} = inject();

Given(/^El usuario tiene una sesion iniciada$/, () => {
    FlujoCompletoPage.inicarsesion();
});

When(/^El usuario buscar el producto$/, () => {
    FlujoCompletoPage.buscarproducto();
});

When(/^El usuario agrega el producto al carrito$/, () => {
    FlujoCompletoPage.agregarcarrito();
});

When(/^confirma su metodo de pago y direccion$/, () => {
    FlujoCompletoPage.confirmarpagos();
});