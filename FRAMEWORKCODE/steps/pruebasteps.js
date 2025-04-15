const { I } = inject();
const TelcelHomePage = require('../pages/TelcelHomePage');
const BusquedaPage = require('../pages/BusquedaPage');
const PagoFacturaPage = require('../pages/PagoFacturaPage');
const TiendaPage = require('../pages/TiendaPage');
const CompararPage = require('../pages/CompararPage');

Given("Estoy en telcel", () => {
    TelcelHomePage.home();
});

When(/^Buscar "([^"]*)"$/, (producto) => {
    BusquedaPage.searchProduct(producto);
});

Then("ver los resultados en la busqueda", () => {
    BusquedaPage.waitForResults();
});

When("Presiono el boton de paga tu factura", () => {
    PagoFacturaPage.clickPagaTuFactura();
});

When("Escribo el número de teléfono", () => {
    PagoFacturaPage.fillPhoneNumber();
});

When("Escribo el número adicional", () => {
    PagoFacturaPage.fillConfirmationNumber();
});

When("Presiono el botón de continuar si está habilitado", async () => {
    await PagoFacturaPage.clickIfEnabled();
});

Then("verifico si el botón de continuar estaba habilitado", async () => {
    await PagoFacturaPage.verifyIfEnabled();
});

When("Presiono el boton para entrar a la tienda en linea", () => {
    TiendaPage.entrarTienda();
});

When("Presiono el boton de telefonos", () => {
    TiendaPage.clickTelefonos();
});

When("presiono el boton de Lo quiero para el primer resultado", () => {
    TiendaPage.clickLoQuiero();
});

When("presiono el boton de agregar al carrito", () => {
    TiendaPage.agregarAlCarrito();
});

Then("presiono el boton de ir al carrito para ver si se agrego", () => {
    TiendaPage.irAlCarrito();
});

When("Presiono el boton comparar del segundo dispositivo", () => {
    CompararPage.compararSegundoDispositivo();
});

When("Selecciono una marca", () => {
    CompararPage.seleccionarMarca();
});

Then("Selecciono un modelo", () => {
    CompararPage.seleccionarModelo();
});
