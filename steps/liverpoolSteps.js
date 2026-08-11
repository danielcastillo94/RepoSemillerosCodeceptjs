const liverpoolPage = require('../pages/liverpoolPage');

Given(/^que el usuario se encuentra en la página principal de Liverpool$/, () => {
    liverpoolPage.abrirLiverpool();
});

When(/^busca el producto "([^"]*)"$/, (producto) => {
    liverpoolPage.buscarProducto(producto);
});

Then(/^se muestran resultados relacionados con la búsqueda$/, () => {
    liverpoolPage.validarResultados();
});

Then(/^no se muestran productos para "([^"]*)"$/, (producto) => {
    liverpoolPage.validarSinResultados(producto);
});

Then(/^los resultados muestran productos relacionados con "([^"]*)"$/, (producto) => {
    liverpoolPage.validarProductoRelacionado(producto);
});