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

When(/^abre el menú de categorías$/, () => {
    liverpoolPage.abrirCategorias();
});

Then(/^puede visualizar la categoría "Vinos y Gourmet"$/, () => {
    liverpoolPage.validarCategoriaVinos();
});

When(/^navega a la categoría "Vinos y Gourmet"$/, () => {
    liverpoolPage.irAVinosGourmet();
});

Then(/^se muestra la página de Vinos y Gourmet$/, () => {
    liverpoolPage.validarPaginaVinosGourmet();
});

Then(/^se visualiza el encabezado "Vinos y Gourmet"$/, () => {
    liverpoolPage.validarPaginaVinosGourmet();
});

