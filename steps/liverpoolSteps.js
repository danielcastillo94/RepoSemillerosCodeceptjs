const { liverpoolPage } = inject();

Given(/^el usuario se encuentra en la página principal de Liverpool$/, () => {
    liverpoolPage.abrirHome();
});

Then(/^los elementos principales del home son visibles$/, () => {
    liverpoolPage.verificarElementosHome();
});

//TC001--------------------------------------------------------------------------------------------------------------------

When(/^el usuario da clic en la barra de busqueda$/, () => {
    liverpoolPage.clicBarraBusqueda();
});

When(/^el usuario ingresa "(.*)"$/, (producto) => {
    liverpoolPage.ingresarProducto(producto);
});

When(/^da enter$/, () => {
    liverpoolPage.presionarEnter();
});

Then(/^la pagina carga y muestra los resultados relacionados a "(.*)"$/, (producto) => {
    liverpoolPage.verificarResultados(producto);
});

//TC002--------------------------------------------------------------------------------------------------------------------

Then(/^la pagina muestra el mensaje de producto no encontrado para "(.*)"$/, (producto) => {
    liverpoolPage.verificarMensajeSinResultados(producto);
});

//TC003--------------------------------------------------------------------------------------------------------------------

Then(/^la URL contiene "(.*)"$/, (producto) => {
    liverpoolPage.verificarURL(producto);
});

//TC004--------------------------------------------------------------------------------------------------------------------

When(/^el usuario da clic en categorias$/, () => {
    liverpoolPage.clicCategorias();
});

Then(/^el submenu de categorias carga al lado izquierdo de la pagina$/, () => {
    liverpoolPage.verificarSubmenuCategorias();
});

//TC005--------------------------------------------------------------------------------------------------------------------

When('da clic en "Videojuegos"', () => {
    liverpoolPage.clicVideojuegos();
});

Then('la pagina carga y muestra la categoria "Videojuegos"', () => {
    liverpoolPage.verificarCategoriaVideojuegos();
});

//TC006--------------------------------------------------------------------------------------------------------------------

Then('podemos ver las opciones de productos de "Videojuegos"', () => {
    liverpoolPage.verificarOpcionesVideojuegos();
})

//TC007--------------------------------------------------------------------------------------------------------------------

Given('el usuario busca el producto {string}', async (producto) => {
    await liverpoolPage.clicBarraBusqueda();
    await liverpoolPage.ingresarProducto(producto);
    await liverpoolPage.presionarEnter();
    await liverpoolPage.guardarURLResultados();
});

When('da clic en el boton "Ordenar por:"', async () => {
    await liverpoolPage.clicOrdenarPor();
});

When('selecciona "Menor precio"', async () => {
    await liverpoolPage.seleccionarMenorPrecio();
});

Then('los resultados se ordenan de precio menor a mayor', async () => {
    await liverpoolPage.verificarOrdenPrecioMenorMayor();
});


//TC008--------------------------------------------------------------------------------------------------------------------

When('se desplaza en el submenu del lado izquierdo buscando el apartado precios', async () => {
    await liverpoolPage.desplazarseASeccionPrecios();
});

When('coloca el rango $500 - $2000', async () => {
    await liverpoolPage.ingresarRangoPrecio('500', '2000');
});

When('da clic en el botón para aplicar el rango', async () => {
    await liverpoolPage.aplicarRangoPrecio();
});

Then('los resultados se actualizan aplicando el rango de $500 a $2000', async () => {
    await liverpoolPage.verificarRangoPrecio('500', '2000');
});

//TC009--------------------------------------------------------------------------------------------------------------------

Then('la pagina muestra unicamente productos entre $500 y $2000', async () => {
    await liverpoolPage.verificarProductosEnRango('500', '2000');
});

//TC010--------------------------------------------------------------------------------------------------------------------

When('se desplaza en el submenu del lado izquierdo buscando el apartado marcas', async () => {
    await liverpoolPage.desplazarseASeccionMarcas();
});

When('selecciona la marca {string}', async (marca) => {
    await liverpoolPage.seleccionarMarca(marca);
});

Then('la pagina carga los productos de la marca {string}', async (marca) => {
    await liverpoolPage.verificarMarcaSeleccionada(marca);
});

//TC011--------------------------------------------------------------------------------------------------------------------

When('da clic en "Ver más" de marcas', async () => {
    await liverpoolPage.mostrarMasMarcas();
});

Then('la pagina carga los productos de las marcas {string} y {string}', async (marca1, marca2) => {
    await liverpoolPage.verificarMarcasSeleccionadas([marca1, marca2]);
    liverpoolPage.volverAlInicio();
});

//TC012--------------------------------------------------------------------------------------------------------------------

When('da clic en la marca {string} para eliminarla', (marca) => {
    liverpoolPage.eliminarMarca(marca);
});

Then('la pagina carga los productos de la marca restante {string}', (marca) => {
    liverpoolPage.verificarMarcasSeleccionadas([marca]);
    liverpoolPage.volverAlInicio();
});

//TC013--------------------------------------------------------------------------------------------------------------------

When('se desplaza en el submenu del lado izquierdo buscando el apartado "Talla"', async () => {
    await liverpoolPage.desplazarseASeccionTalla();
});

When('selecciona la talla {string}', async (talla) => {
    await liverpoolPage.seleccionarTalla(talla);
});

Then('la pagina carga los productos de la talla {string}', async (talla) => {
    await liverpoolPage.verificarTallaSeleccionada(talla);
    liverpoolPage.volverAlInicio();
});

//TC014--------------------------------------------------------------------------------------------------------------------

When('se desplaza en el submenu del lado izquierdo buscando el apartado "Color"', async () => {
    await liverpoolPage.desplazarseASeccionColor();
});

When('selecciona el color {string}', async (color) => {
    await liverpoolPage.seleccionarColor(color);
});

Then('la pagina carga los productos del color {string}', async (color) => {
    await liverpoolPage.verificarColorSeleccionado(color);
    liverpoolPage.volverAlInicio();
});

//TC015--------------------------------------------------------------------------------------------------------------------

Then('la pagina carga los productos del color {string} y talla {string}', async (color, talla) => {
    await liverpoolPage.verificarTallaYColorSeleccionados(talla, color);
    liverpoolPage.volverAlInicio();
});

//TC016--------------------------------------------------------------------------------------------------------------------

When('selecciona "Destacados"', () => {
    liverpoolPage.seleccionarDestacados();
});

Then('los resultados se ordenan por relevancia', () => {
    liverpoolPage.volverAlInicio();
    liverpoolPage.verificarOrdenDestacados();
});

//TC017--------------------------------------------------------------------------------------------------------------------

//Ya existe la funcion de este caso e TC-007

//TC018--------------------------------------------------------------------------------------------------------------------

When('selecciona "Mayor precio"', () => {
    liverpoolPage.seleccionarMayorPrecio();
});

Then('los resultados se ordenan de precio mayor a menor', () => {
    liverpoolPage.verificarOrdenPrecioMayor();
});

//TC019--------------------------------------------------------------------------------------------------------------------

When('selecciona "Novedades"', () => {
    liverpoolPage.seleccionarNovedades();
});

Then('los resultados se ordenan de más nuevo a más antiguo', () => {
    liverpoolPage.verificarOrdenNovedades();
});

//TC020--------------------------------------------------------------------------------------------------------------------

When('da clic sobre un producto', async () => {
    await liverpoolPage.clicProducto();
});

Then('la página de detalle del producto se muestra', async () => {
    await liverpoolPage.verificarDetalleProducto();
});

//TC021--------------------------------------------------------------------------------------------------------------------

Then('la pagina carga y se muestran los detalles del producto', async () => {
    await liverpoolPage.verificarDetallesProducto();
});

//TC022--------------------------------------------------------------------------------------------------------------------

Then('desplazamos la pagina para ver la galeria de imagenes', async () => {
    await liverpoolPage.desplazarseAGaleria();
    await liverpoolPage.verificarGaleria();
});