const liverpoolPage = require('../pages/liverpoolPage');

Given(/^Victor ingresa al portal principal de Liverpool$/, () => {
    liverpoolPage.abrirPortal();
});

When(/^busca el artículo "([^"]*)" en la barra superior$/, (articulo) => {
    liverpoolPage.ejecutarBusqueda(articulo);
});

Then(/^el sistema despliega una lista de opciones(?: filtradas)?$/, () => {
    liverpoolPage.validarListaResultados();
});

Then(/^el sistema no devuelve ningún producto en la cuadrícula$/, () => {
    liverpoolPage.validarBusquedaVacia();
});

When(/^abre el menú de categorías principales$/, () => {
    liverpoolPage.abrirCategorias();
});

Then(/^puede visualizar la categoría "([^"]*)"$/, (categoria) => {
    liverpoolPage.validarTexto(categoria);
});

When(/^navega directamente a la categoría de Vinos y Gourmet$/, () => {
    liverpoolPage.navegarCategoria('/tienda/vinos-y-gourmet/cat5020473');
});

Then(/^la página muestra el encabezado "([^"]*)"$/, (texto) => {
    liverpoolPage.validarTexto(texto);
});

When(/^ingresa un rango de precio de "([^"]*)" a "([^"]*)"$/, (min, max) => {
    liverpoolPage.filtrarPorPrecio(min, max);
});

When(/^filtra los resultados por la marca "([^"]*)"$/, (marca) => {
    liverpoolPage.filtrarPorMarca(marca);
});

When(/^ordena los resultados por "([^"]*)"$/, (orden) => {
    liverpoolPage.ordenarResultados(orden);
});

When(/^ingresa al detalle del primer resultado$/, () => {
    liverpoolPage.entrarAlPrimerItem();
});

Then(/^la página muestra el título y precio del artículo$/, () => {
    liverpoolPage.validarDetalleCargado();
});

Then(/^la página muestra la galería de imágenes del artículo$/, () => {
    liverpoolPage.validarGaleria();
});

Then(/^el producto muestra disponibilidad para seleccionar cantidad$/, () => {
    liverpoolPage.validarStockDisponible();
});

When(/^hace clic en el icono superior de la bolsa de compras$/, () => {
    liverpoolPage.navegarABolsa();
});

Then(/^el sistema redirige a la pantalla del carrito$/, () => {
    liverpoolPage.validarPaginaCarrito();
});

When(/^hace clic en el botón para agregar a mi bolsa$/, () => {
    liverpoolPage.agregarABolsa();
});

Then(/^el contador de la bolsa refleja el nuevo artículo$/, () => {
    liverpoolPage.validarBolsaActualizada();
});

Then(/^el contador de la bolsa refleja "([^"]*)" artículo$/, (cantidad) => {
    liverpoolPage.validarBolsaActualizada(cantidad);
});

When(/^aumenta la cantidad del producto en el carrito$/, () => {
    liverpoolPage.aumentarCantidadCarrito();
});

When(/^elimina el artículo de la bolsa de compras$/, () => {
    liverpoolPage.eliminarArticuloCarrito();
});

Then(/^la bolsa de compras se muestra vacía$/, () => {
    liverpoolPage.validarCarritoVacio();
});

Then(/^se muestra el subtotal de la compra$/, () => {
    liverpoolPage.validarTexto('Subtotal');
});

Then(/^se indica que el total incluye IVA$/, () => {
    liverpoolPage.validarTexto('IVA');
});