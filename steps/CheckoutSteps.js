const {CheckoutPage} = inject();

//Background
Given(/^El usuario tiene una sesion habierta$/, () => {
    CheckoutPage.iniciarsesion();
});
When(/^El usuario entra a la captegoria "playeras"$/, () => {
    CheckoutPage.categoriaplayera();
});
When(/^El usuario escoge un producto$/, () => {
    CheckoutPage.elegirproducto();
});
When(/^El usuario agrega el producto al carrito$/, () => {
    CheckoutPage.agregarproductocarrito();
});

//Checkout - Dirección de Envío -----------------
//TC053----------------------------
When(/^Seleccionar dirección guardada$/, () => {
    CheckoutPage.direccionguardada();
});
//TC054----------------------------
When(/^Agregar dirección nueva$/, () => {
    CheckoutPage.agregardireccionnueva();
});
//TC055----------------------------
When(/^Validar campos de dirección$/, () => {
    CheckoutPage.validarcamposdireccion();
});

//Checkout - Método de Pago----------------------
//TC059----------------------------
When(/^Seleccionar pago con tarjeta$/, () => {
    CheckoutPage.seleccionartarjeta();
});
//TC060----------------------------
When(/^Validar campos de tarjeta$/, () => {
    CheckoutPage.validarcampostarjeta();
});
//TC061----------------------------
Then(/^Ver resumen antes de pagar$/, () => {
    CheckoutPage.resumencompra();
});