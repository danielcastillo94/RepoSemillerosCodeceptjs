const liverpoolPage = require('../pages/liverpoolPage');

Given(/^que el usuario se encuentra en la página principal de Liverpool$/, () => {
    liverpoolPage.abrirLiverpool();
});

Given(/^que el usuario se encuentra en la página principal de Liverpool en vista móvil$/, () => {
    liverpoolPage.abrirLiverpoolMovil();
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

When(/^abre el filtro de precios$/, () => {
    liverpoolPage.abrirFiltroPrecios();
});

When(/^selecciona un rango de precio$/, () => {
    liverpoolPage.seleccionarRangoPrecio();
});

Then(/^se muestran productos filtrados por precio$/, () => {
    liverpoolPage.validarFiltroPrecio();
});

When(/^ingresa un precio mínimo de "([^"]*)" y un precio máximo de "([^"]*)"$/, (minimo, maximo) => {
    liverpoolPage.ingresarRangoPrecio(minimo, maximo);
});

Then(/^se muestran productos dentro del rango de precio$/, () => {
    liverpoolPage.validarResultados();
});

Then(/^todos los productos mostrados tienen precio entre "([^"]*)" y "([^"]*)"$/, async (minimo, maximo) => {
    await liverpoolPage.validarPreciosEnRango(minimo, maximo);
});

When(/^abre el filtro de marcas$/, () => {
    liverpoolPage.abrirFiltroMarcas();
});

When(/^busca la marca "([^"]*)"$/, (marca) => {
    liverpoolPage.buscarMarca(marca);
});

When(/^selecciona la marca "PS5"$/, () => {
    liverpoolPage.seleccionarMarcaPS5();
});

Then(/^se muestran productos filtrados por la marca seleccionada$/, () => {
    liverpoolPage.validarResultados();
});