const { busquedaProductosPage,
        carritoPage,
        checkoutPage,
        codigoPromocionalPage,
        detalleProductoPage,
        filtrosProductosPage,
        flujoE2EPage,
        loginCuentaPage,
        navegacionCategoriasPage,
        ordenamientoResultadosPage,
        smokePage,
        wishlistPage
} = inject();

Given(/^el usuario se encuentra en la página principal de Liverpool$/, () => {
    smokePage.abrirHome();
});

Then(/^los elementos principales del home son visibles$/, () => {
    smokePage.verificarElementosHome();
});

//TC001--------------------------------------------------------------------------------------------------------------------

When(/^el usuario da clic en la barra de busqueda$/, () => {
    busquedaProductosPage.clicBarraBusqueda();
});

When(/^el usuario ingresa "(.*)"$/, (producto) => {
    busquedaProductosPage.ingresarProducto(producto);
});

When(/^da enter$/, () => {
    busquedaProductosPage.presionarEnter();
});

Then(/^la pagina carga y muestra los resultados relacionados a "(.*)"$/, (producto) => {
    busquedaProductosPage.verificarResultados(producto);
});

//TC002--------------------------------------------------------------------------------------------------------------------

Then(/^la pagina muestra el mensaje de producto no encontrado para "(.*)"$/, (producto) => {
    busquedaProductosPage.verificarMensajeSinResultados(producto);
});

//TC003--------------------------------------------------------------------------------------------------------------------

Then(/^la URL contiene "(.*)"$/, (producto) => {
    busquedaProductosPage.verificarURL(producto);
});

//TC004--------------------------------------------------------------------------------------------------------------------

When(/^el usuario da clic en categorias$/, () => {
    navegacionCategoriasPage.clicCategorias();
});

Then(/^el submenu de categorias carga al lado izquierdo de la pagina$/, () => {
    navegacionCategoriasPage.verificarSubmenuCategorias();
});

//TC005--------------------------------------------------------------------------------------------------------------------

When('da clic en "Videojuegos"', () => {
    navegacionCategoriasPage.clicVideojuegos();
});

Then('la pagina carga y muestra la categoria "Videojuegos"', () => {
    navegacionCategoriasPage.verificarCategoriaVideojuegos();
});

//TC006--------------------------------------------------------------------------------------------------------------------

Then('podemos ver las opciones de productos de "Videojuegos"', () => {
    navegacionCategoriasPage.verificarOpcionesVideojuegos();
})

//TC007--------------------------------------------------------------------------------------------------------------------

Given('el usuario busca el producto {string}', async (producto) => {
    await busquedaProductosPage.clicBarraBusqueda();
    await busquedaProductosPage.ingresarProducto(producto);
    await busquedaProductosPage.presionarEnter();
    await ordenamientoResultadosPage.guardarURLResultados();
});

When('da clic en el boton "Ordenar por:"', async () => {
    await ordenamientoResultadosPage.clicOrdenarPor();
});

When('selecciona "Menor precio"', async () => {
    await ordenamientoResultadosPage.seleccionarMenorPrecio();
});

Then('los resultados se ordenan de precio menor a mayor', async () => {
    await ordenamientoResultadosPage.verificarOrdenPrecioMenorMayor();
});


//TC008--------------------------------------------------------------------------------------------------------------------

When('se desplaza en el submenu del lado izquierdo buscando el apartado precios', async () => {
    await filtrosProductosPage.desplazarseASeccionPrecios();
});

When('coloca el rango $500 - $2000', async () => {
    await filtrosProductosPage.ingresarRangoPrecio('500', '2000');
});

When('da clic en el botón para aplicar el rango', async () => {
    await filtrosProductosPage.aplicarRangoPrecio();
});

Then('los resultados se actualizan aplicando el rango de $500 a $2000', async () => {
    await filtrosProductosPage.verificarRangoPrecio('500', '2000');
});

//TC009--------------------------------------------------------------------------------------------------------------------

Then('la pagina muestra unicamente productos entre $500 y $2000', async () => {
    await filtrosProductosPage.verificarProductosEnRango('500', '2000');
});

//TC010--------------------------------------------------------------------------------------------------------------------

When('se desplaza en el submenu del lado izquierdo buscando el apartado marcas', async () => {
    await filtrosProductosPage.desplazarseASeccionMarcas();
});

When('selecciona la marca {string}', async (marca) => {
    await filtrosProductosPage.seleccionarMarca(marca);
});

Then('la pagina carga los productos de la marca {string}', async (marca) => {
    await filtrosProductosPage.verificarMarcaSeleccionada(marca);
});

//TC011--------------------------------------------------------------------------------------------------------------------

When('da clic en "Ver más" de marcas', async () => {
    await filtrosProductosPage.mostrarMasMarcas();
});

Then('la pagina carga los productos de las marcas {string} y {string}', async (marca1, marca2) => {
    await filtrosProductosPage.verificarMarcasSeleccionadas([marca1, marca2]);
    smokePage.volverAlInicio();
});

//TC012--------------------------------------------------------------------------------------------------------------------

When('da clic en la marca {string} para eliminarla', (marca) => {
    filtrosProductosPage.eliminarMarca(marca);
});

Then('la pagina carga los productos de la marca restante {string}', (marca) => {
    filtrosProductosPage.verificarMarcasSeleccionadas([marca]);
    smokePage.volverAlInicio();
});

//TC013--------------------------------------------------------------------------------------------------------------------

When('se desplaza en el submenu del lado izquierdo buscando el apartado "Talla"', async () => {
    await filtrosProductosPage.desplazarseASeccionTalla();
});

When('selecciona la talla {string}', async (talla) => {
    await filtrosProductosPage.seleccionarTalla(talla);
});

Then('la pagina carga los productos de la talla {string}', async (talla) => {
    await filtrosProductosPage.verificarTallaSeleccionada(talla);
    smokePage.volverAlInicio();
});

//TC014--------------------------------------------------------------------------------------------------------------------

When('se desplaza en el submenu del lado izquierdo buscando el apartado "Color"', async () => {
    await filtrosProductosPage.desplazarseASeccionColor();
});

When('selecciona el color {string}', async (color) => {
    await filtrosProductosPage.seleccionarColor(color);
});

Then('la pagina carga los productos del color {string}', async (color) => {
    await filtrosProductosPage.verificarColorSeleccionado(color);
    smokePage.volverAlInicio();
});

//TC015--------------------------------------------------------------------------------------------------------------------

Then('la pagina carga los productos del color {string} y talla {string}', async (color, talla) => {
    await filtrosProductosPage.verificarTallaYColorSeleccionados(talla, color);
    smokePage.volverAlInicio();
});

//TC016--------------------------------------------------------------------------------------------------------------------

When('selecciona "Destacados"', () => {
    ordenamientoResultadosPage.seleccionarDestacados();
});

Then('los resultados se ordenan por relevancia', () => {
    smokePage.volverAlInicio();
    ordenamientoResultadosPage.verificarOrdenDestacados();
});

//TC017--------------------------------------------------------------------------------------------------------------------

//Ya existe la funcion de este caso e TC-007

//TC018--------------------------------------------------------------------------------------------------------------------

When('selecciona "Mayor precio"', () => {
    ordenamientoResultadosPage.seleccionarMayorPrecio();
});

Then('los resultados se ordenan de precio mayor a menor', () => {
    ordenamientoResultadosPage.verificarOrdenPrecioMayor();
});

//TC019--------------------------------------------------------------------------------------------------------------------

When('selecciona "Novedades"', () => {
    ordenamientoResultadosPage.seleccionarNovedades();
});

Then('los resultados se ordenan de más nuevo a más antiguo', () => {
    ordenamientoResultadosPage.verificarOrdenNovedades();
});

//TC020--------------------------------------------------------------------------------------------------------------------

When('da clic sobre un producto', async () => {
    await detalleProductoPage.clicProducto();
});

Then('la página de detalle del producto se muestra', async () => {
    await detalleProductoPage.verificarDetalleProducto();
});

//TC021--------------------------------------------------------------------------------------------------------------------

Then('la pagina carga y se muestran los detalles del producto', async () => {
    await detalleProductoPage.verificarDetallesProducto();
});

//TC022--------------------------------------------------------------------------------------------------------------------

Then('desplazamos la pagina para ver la galeria de imagenes', async () => {
    await detalleProductoPage.desplazarseAGaleria();
    await detalleProductoPage.verificarGaleria();
});