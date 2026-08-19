const liverpoolPage = require('../pages/liverpoolPage');

/*
 * Step Definitions - Liverpool
 * Los steps se mantienen pequeños: traducen Gherkin y delegan la lógica al Page Object.
 * Así los mismos métodos se reutilizan en distintos LP sin duplicar selectores ni flujos.
 */

// LP001-LP003 | Búsqueda
Given(/^que el usuario se encuentra en la página principal de Liverpool$/, () => {
    return liverpoolPage.abrirLiverpool();
});

Given(/^que el usuario se encuentra en la página principal de Liverpool en vista móvil$/, () => {
    return liverpoolPage.abrirLiverpoolMovil();
});

When(/^busca el producto "([^"]*)"$/, (producto) => {
    return liverpoolPage.buscarProducto(producto);
});

Then(/^se muestran resultados relacionados con la búsqueda$/, () => {
    return liverpoolPage.validarResultados();
});

Then(/^no se muestran productos para "([^"]*)"$/, (producto) => {
    return liverpoolPage.validarSinResultados(producto);
});

Then(/^los resultados muestran productos relacionados con "([^"]*)"$/, (producto) => {
    return liverpoolPage.validarProductoRelacionado(producto);
});

// LP004-LP006 | Categorías
When(/^abre el menú de categorías$/, () => {
    return liverpoolPage.abrirCategorias();
});

Then(/^puede visualizar la categoría "Vinos y Gourmet"$/, () => {
    return liverpoolPage.validarCategoriaVinos();
});

When(/^navega a la categoría "Vinos y Gourmet"$/, () => {
    return liverpoolPage.irAVinosGourmet();
});

Then(/^se muestra la página de Vinos y Gourmet$/, () => {
    return liverpoolPage.validarPaginaVinosGourmet();
});

Then(/^se visualiza el encabezado "Vinos y Gourmet"$/, () => {
    return liverpoolPage.validarPaginaVinosGourmet();
});

// LP007-LP009 | Precio
When(/^abre el filtro de precios$/, () => {
    return liverpoolPage.abrirFiltroPrecios();
});

When(/^selecciona un rango de precio$/, () => {
    return liverpoolPage.seleccionarRangoPrecio();
});

Then(/^se muestran productos filtrados por precio$/, () => {
    return liverpoolPage.validarResultados();
});

When(/^ingresa un precio mínimo de "([^"]*)" y un precio máximo de "([^"]*)"$/, (minimo, maximo) => {
    return liverpoolPage.ingresarRangoPrecio(minimo, maximo);
});

Then(/^se muestran productos dentro del rango de precio$/, () => {
    return liverpoolPage.validarResultados();
});

Then(/^todos los productos mostrados tienen precio entre "([^"]*)" y "([^"]*)"$/, async (minimo, maximo) => {
    await liverpoolPage.validarPreciosEnRango(minimo, maximo);
});

// LP010-LP012 | Marca
When(/^abre el filtro de marcas$/, () => {
    return liverpoolPage.abrirFiltroMarcas();
});

When(/^busca la marca "([^"]*)"$/, (marca) => {
    return liverpoolPage.buscarMarca(marca);
});

When(/^selecciona las marcas "PS5" y "PS4"$/, () => {
    return liverpoolPage.seleccionarMultiplesMarcas();
});

Then(/^se muestran productos filtrados por (?:la marca|las marcas) seleccionadas?$/, () => {
    return liverpoolPage.validarResultados();
});

When(/^selecciona la marca "([^"]*)"$/, (marca) => {
    return liverpoolPage.seleccionarMarca(marca);
});

When(/^deselecciona la marca "([^"]*)"$/, (marca) => {
    return liverpoolPage.deseleccionarMarca(marca);
});

// LP013-LP015 | Talla y color en resultados
When(/^abre el filtro de talla$/, () => {
    return liverpoolPage.abrirFiltroTalla();
});

When(/^selecciona la talla "([^"]*)"$/, (talla) => {
    return liverpoolPage.seleccionarTalla(talla);
});

Then(/^se muestran productos filtrados por la talla seleccionada$/, () => {
    return liverpoolPage.validarResultados();
});

When(/^abre el filtro de color$/, () => {
    return liverpoolPage.abrirFiltroColor();
});

When(/^selecciona el color "([^"]*)"$/, (color) => {
    return liverpoolPage.seleccionarColor(color);
});

Then(/^se muestran productos filtrados por el color seleccionado$/, () => {
    return liverpoolPage.validarResultados();
});

Then(/^se muestran productos filtrados por talla y color$/, () => {
    return liverpoolPage.validarResultados();
});

// LP016-LP019 | Ordenamiento
When(/^abre las opciones de ordenamiento$/, () => {
    return liverpoolPage.abrirOrdenamiento();
});

When(/^selecciona el orden "([^"]*)"$/, (orden) => {
    return liverpoolPage.seleccionarOrden(orden);
});

Then(/^se muestran los productos ordenados correctamente$/, () => {
    return liverpoolPage.validarResultados();
});

// LP020-LP027 | Detalle de producto
When(/^selecciona el primer producto de los resultados$/, () => {
    return liverpoolPage.seleccionarPrimerProducto();
});

Then(/^se muestra el detalle del producto$/, () => {
    return liverpoolPage.validarDetalleProducto();
});

Then(/^se muestra el nombre del producto$/, () => {
    return liverpoolPage.validarNombreProducto();
});

Then(/^se muestra el precio del producto$/, () => {
    return liverpoolPage.validarPrecioProducto();
});

Then(/^se muestra la sección de características del producto$/, () => {
    return liverpoolPage.validarCaracteristicasProducto();
});

When(/^selecciona el producto "([^"]*)"$/, (producto) => {
    return liverpoolPage.seleccionarProducto(producto);
});

Then(/^se muestra la galería de imágenes del producto$/, () => {
    return liverpoolPage.validarGaleriaProducto();
});

Then(/^el producto muestra disponibilidad para seleccionar cantidad$/, () => {
    return liverpoolPage.validarStockDisponible();
});

When(/^consulta la disponibilidad en tienda$/, () => {
    return liverpoolPage.consultarDisponibilidadTienda();
});

Then(/^se muestra la opción para buscar disponibilidad en tiendas$/, () => {
    return liverpoolPage.validarDisponibilidadTienda();
});

Then(/^se muestra el código de producto$/, () => {
    return liverpoolPage.validarCodigoProducto();
});

Then(/^se muestra la sección de opiniones del artículo$/, () => {
    return liverpoolPage.validarSeccionOpiniones();
});

Then(/^se muestra la distribución de calificaciones por estrellas$/, () => {
    return liverpoolPage.validarDistribucionCalificaciones();
});

// LP029-LP034 | Variantes + carrito
When(/^selecciona la talla "([^"]*)" del producto$/, (talla) => {
    return liverpoolPage.seleccionarTallaProducto(talla);
});

// Reutilizable en carrito: selecciona la primera talla habilitada, sin hardcodear XCH/G/38B.
When(/^selecciona una talla disponible del producto$/, () => {
    return liverpoolPage.seleccionarTallaDisponibleProducto();
});

When(/^selecciona el color "([^"]*)" del producto$/, (color) => {
    return liverpoolPage.seleccionarColorProducto(color);
});

// Reutilizable en carrito/entrega: elige el primer color disponible del producto actual.
When(/^selecciona un color disponible del producto$/, () => {
    return liverpoolPage.seleccionarColorDisponible();
});

When(/^agrega el producto a la bolsa$/, () => {
    return liverpoolPage.agregarProductoBolsa();
});

Then(/^el producto se agrega correctamente a la bolsa$/, () => {
    return liverpoolPage.validarProductoAgregado();
});

// Un solo step soporta singular y plural y evita duplicar definiciones.
Then(/^el carrito muestra "([^"]*)" productos?$/, (cantidad) => {
    return liverpoolPage.validarCantidadCarrito(cantidad);
});

Then(/^se confirma que el producto fue agregado a la bolsa$/, () => {
    return liverpoolPage.validarConfirmacionAgregado();
});

Then(/^la bolsa contiene productos agregados$/, () => {
    return liverpoolPage.validarCarritoConProductos();
});

When(/^abre la bolsa de compras$/, () => {
    return liverpoolPage.abrirBolsa();
});

Then(/^se muestra el subtotal de "([^"]*)" productos$/, (cantidad) => {
    return liverpoolPage.validarSubtotal(cantidad);
});

// LP041-LP046 | Cambios y totales del carrito
When(/^aumenta la cantidad del producto en el carrito$/, () => {
    return liverpoolPage.aumentarCantidadCarrito();
});

When(/^disminuye la cantidad del producto en el carrito$/, () => {
    return liverpoolPage.disminuirCantidadCarrito();
});

Then(/^la cantidad del producto en el carrito es "([^"]*)"$/, (cantidad) => {
    return liverpoolPage.validarCantidadCarritoProducto(cantidad);
});

When(/^remueve el producto del carrito$/, () => {
    return liverpoolPage.removerProductoCarrito();
});

When(/^confirma la eliminación del producto$/, () => {
    return liverpoolPage.confirmarEliminacionProducto();
});

Then(/^el carrito queda vacío$/, () => {
    return liverpoolPage.validarCarritoVacio();
});

Then(/^se muestra el subtotal del carrito$/, () => {
    return liverpoolPage.validarSubtotalCarrito();
});

Then(/^se muestra el descuento aplicado$/, () => {
    return liverpoolPage.validarDescuento();
});

Then(/^se muestra el costo de envío$/, () => {
    return liverpoolPage.validarCostoEnvio();
});

Then(/^se indica que el total incluye IVA$/, () => {
    return liverpoolPage.validarIVAIncluido();
});

Then(/^se muestra el total final de la compra$/, () => {
    return liverpoolPage.validarTotalFinal();
});

// LP056-LP058 | Entrega
Then(/^se muestran las opciones de entrega disponibles$/, () => {
    return liverpoolPage.validarOpcionesEntrega();
});

When(/^selecciona la opción de entrega "([^"]*)"$/, (opcion) => {
    return liverpoolPage.seleccionarOpcionEntrega(opcion);
});

Then(/^la opción de entrega "([^"]*)" queda seleccionada$/, (opcion) => {
    return liverpoolPage.validarOpcionEntregaSeleccionada(opcion);
});

// LP062-LP063 | E2E - reutiliza la validación general de resultados.
Then(/^se muestran resultados de búsqueda$/, () => {
    return liverpoolPage.validarResultadosBusqueda();
});
