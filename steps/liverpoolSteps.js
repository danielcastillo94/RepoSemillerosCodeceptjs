const liverpoolPage = require('../pages/liverpoolPage');

Given(/^Victor ingresa al portal principal de Liverpool$/, () => {
    liverpoolPage.abrirPortal();
});

When(/^busca el artículo "([^"]*)" en la barra superior$/, (articulo) => {
    liverpoolPage.ejecutarBusqueda(articulo);
});

Then(/^el sistema despliega una lista de opciones para "([^"]*)"$/, (articulo) => {
    liverpoolPage.validarListaResultados(articulo);
});

When(/^ingresa al detalle del primer resultado$/, () => {
    liverpoolPage.entrarAlPrimerItem();
});

Then(/^la página muestra el título y precio del artículo$/, () => {
    liverpoolPage.validarDetalleCargado();
});

When(/^hace clic en el botón para agregar a mi bolsa$/, () => {
    liverpoolPage.agregarABolsa();
});

Then(/^el contador de la bolsa refleja el nuevo artículo$/, () => {
    liverpoolPage.validarBolsaActualizada();
});

Then(/^el sistema no devuelve ningún producto en la cuadrícula$/, () => {
    liverpoolPage.validarBusquedaVacia();
});

When(/^hace clic en el icono superior de la bolsa de compras$/, () => {
    liverpoolPage.navegarABolsa();
});

Then(/^el sistema redirige a la pantalla del carrito$/, () => {
    liverpoolPage.validarPaginaCarrito();
});