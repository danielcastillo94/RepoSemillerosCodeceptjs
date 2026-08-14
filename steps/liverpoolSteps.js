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


When(/^selecciona las marcas "PS5" y "PS4"$/, () => {
    liverpoolPage.seleccionarMultiplesMarcas();
});

Then(/^se muestran productos filtrados por (?:la marca|las marcas) seleccionadas?$/, () => {
    liverpoolPage.validarResultados();
});

When(/^selecciona la marca "([^"]*)"$/, (marca) => {
    liverpoolPage.seleccionarMarca(marca);
});

When(/^deselecciona la marca "([^"]*)"$/, (marca) => {
    liverpoolPage.deseleccionarMarca(marca);
});

When(/^abre el filtro de talla$/, () => {
    liverpoolPage.abrirFiltroTalla();
});

When(/^selecciona la talla "([^"]*)"$/, (talla) => {
    liverpoolPage.seleccionarTalla(talla);
});

Then(/^se muestran productos filtrados por la talla seleccionada$/, () => {
    liverpoolPage.validarResultados();
});

When(/^abre el filtro de color$/, () => {
    liverpoolPage.abrirFiltroColor();
});

When(/^selecciona el color "([^"]*)"$/, (color) => {
    liverpoolPage.seleccionarColor(color);
});

Then(/^se muestran productos filtrados por el color seleccionado$/, () => {
    liverpoolPage.validarResultados();
});

Then(/^se muestran productos filtrados por talla y color$/, () => {
    liverpoolPage.validarResultados();
});

When(/^abre las opciones de ordenamiento$/, () => {
    liverpoolPage.abrirOrdenamiento();
});

When(/^selecciona el orden "([^"]*)"$/, (orden) => {
    liverpoolPage.seleccionarOrden(orden);
});

Then(/^se muestran los productos ordenados correctamente$/, () => {
    liverpoolPage.validarResultados();
});

When(/^selecciona el primer producto de los resultados$/, () => {
    liverpoolPage.seleccionarPrimerProducto();
});

Then(/^se muestra el detalle del producto$/, () => {
    liverpoolPage.validarDetalleProducto();
});

Then(/^se muestra el nombre del producto$/, () => {
    liverpoolPage.validarNombreProducto();
});

Then(/^se muestra el precio del producto$/, () => {
    liverpoolPage.validarPrecioProducto();
});

Then(/^se muestra la sección de características del producto$/, () => {
    liverpoolPage.validarCaracteristicasProducto();
});

When(/^selecciona el producto "([^"]*)"$/, (producto) => {
    liverpoolPage.seleccionarProducto(producto);
});

Then(/^se muestra la galería de imágenes del producto$/, () => {
    liverpoolPage.validarGaleriaProducto();
});

Then(/^el producto muestra disponibilidad para seleccionar cantidad$/, () => {
    liverpoolPage.validarStockDisponible();
});

When(/^consulta la disponibilidad en tienda$/, () => {
    liverpoolPage.consultarDisponibilidadTienda();
});

Then(/^se muestra la opción para buscar disponibilidad en tiendas$/, () => {
    liverpoolPage.validarDisponibilidadTienda();
});

Then(/^se muestra el código de producto$/, () => {
    liverpoolPage.validarCodigoProducto();
});

Then(/^se muestra la sección de opiniones del artículo$/, () => {
    liverpoolPage.validarSeccionOpiniones();
});

Then(/^se muestra la distribución de calificaciones por estrellas$/, () => {
    liverpoolPage.validarDistribucionCalificaciones();
});

When(/^selecciona la talla "([^"]*)" del producto$/, (talla) => {
    liverpoolPage.seleccionarTallaProducto(talla);
});

When(/^agrega el producto a la bolsa$/, () => {
    liverpoolPage.agregarProductoBolsa();
});

Then(/^el producto se agrega correctamente a la bolsa$/, () => {
    liverpoolPage.validarProductoAgregado();
});


Then(/^el carrito muestra "([^"]*)" producto$/, (cantidad) => {
    liverpoolPage.validarCantidadCarrito(cantidad);
});

Then(/^se confirma que el producto fue agregado a la bolsa$/, () => {
    liverpoolPage.validarConfirmacionAgregado();
});

When(/^selecciona el color "([^"]*)" del producto$/, (color) => {
    liverpoolPage.seleccionarColorProducto(color);
});

Then(/^la bolsa contiene productos agregados$/, () => {
    liverpoolPage.validarCarritoConProductos();
});

Then(/^el carrito muestra "([^"]*)" productos$/, (cantidad) => {
    liverpoolPage.validarCantidadCarrito(cantidad);
});

When(/^abre la bolsa de compras$/, () => {
    liverpoolPage.abrirBolsa();
});

Then(/^se muestra el subtotal de "([^"]*)" productos$/, (cantidad) => {
    liverpoolPage.validarSubtotal(cantidad);
});