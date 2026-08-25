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
});

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

When('se desplaza en el submenu del lado izquierdo buscando el apartado "Tamaño"', async () => {
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

//Ya existe la funcion de este caso en TC-007

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

When('da clic sobre el producto {string}', async (producto) => {
    await detalleProductoPage.clicProducto(producto);
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

// TC023--------------------------------------------------------------------------------------------------------------------

When('se desplaza hasta el boton de comprar ahora', () => {
    detalleProductoPage.desplazarseAComprarAhora();
});

Then('si el boton esta habilitado hay stock disponible', async () => {
    await detalleProductoPage.verificarStockDisponible();
});

// TC-024--------------------------------------------------------------------------------------------------------------------

When('da clic en el boton de ver disponibilidad en tienda', async () => {
    await detalleProductoPage.clicDisponibilidadTienda();
});

When('el submenu de la derecha se habilita', async () => {
    await detalleProductoPage.verificarSubmenuDisponibilidad();
});

When('se desplaza hasta el estado {string}', async (estado) => {
    await detalleProductoPage.desplazarseHastaEstado(estado);
});

When(/^da clic en el estado "(.*)"$/, async (estado) => {
    await detalleProductoPage.seleccionarEstado(estado);
});

Then('se muestran tiendas con stock disponible en {string}', async () => {
    await detalleProductoPage.verificarTiendasConStock();
});

// TC-025--------------------------------------------------------------------------------------------------------------------

Then('el usuario verifica que el producto muestre su código', async () => {
    await detalleProductoPage.verificarCodigoProducto();
});

// TC-026--------------------------------------------------------------------------------------------------------------------

When(/^desliza la pagina$/, () => {
    detalleProductoPage.desplazarseAOpiniones();
});

Then(/^aparecen las opiniones del producto$/, () => {
    detalleProductoPage.verificarOpinionesProducto();
});

// TC-027--------------------------------------------------------------------------------------------------------------------

When(/^el boton de "ordenar por" aparece en el lado derecho y el usuario da clic$/, () => {
    detalleProductoPage.clicOrdenarOpiniones();
});

When(/^el submenu de filtros aparece$/, () => {
    detalleProductoPage.verificarSubmenuFiltros();
});

When(/^el usuario da clic en: mayor calificación$/, () => {
    detalleProductoPage.seleccionarMayorCalificacion();
});

Then(/^las opiniones se actualizan de mayor a menor calificación$/, () => {
    detalleProductoPage.verificarOrdenEstrellas();
});

// TC-029--------------------------------------------------------------------------------------------------------------------

Then(/^el boton de "agregar a mi bolsa" aparece$/, () => {
    carritoPage.desplazarseAgregarBolsa();
});

When(/^el usuario da clic en agregar a mi bolsa$/, () => {
    carritoPage.clicAgregarBolsa();
});

Then(/^el articulo se agrega al carrito$/, () => {
    carritoPage.verificarArticuloAgregado();
});

// TC-030--------------------------------------------------------------------------------------------------------------------

Then(/^el badge del carrito muestra la cantidad de productos agregados$/, async () => {
    await carritoPage.verificarBadgeCarrito();
});

//TC031--------------------------------------------------------------------------------------------------------------------

//Ya existe la funcion de este caso en TC-029

//TC032--------------------------------------------------------------------------------------------------------------------

Then(/^el boton de bolsa indica el numero de productos agregados$/, async () => {
    await carritoPage.verificarCantidadProductosTresOMas();
});

When(/^limpia la barra de búsqueda$/, () => {
    carritoPage.limpiarBarraBusqueda();
});

//TC033--------------------------------------------------------------------------------------------------------------------

Given(/^el usuario ya agrego productos a su bolsa$/, async () => {
    await flujoE2EPage.agregarTresProductosAlCarrito();
});

When(/^da clic en el boton del carrito al lado derecho de la pagina$/, async () => {
    await carritoPage.clicBolsa();
});

When(/^la pagina del carrito carga$/, async () => {
    await carritoPage.verificarPaginaCarrito();
});

Then(/^el carrito muestra la cantidad total de productos agregados$/, async () => {
    await carritoPage.verificarCantidadTotalProductos();
});

// TC-034--------------------------------------------------------------------------------------------------------------------

When(/^el subtotal inicial aparece$/, async () => {
    await carritoPage.guardarSubtotalInicial();
});

When(/^el usuario da clic en el boton de eliminar de un producto$/, async () => {
    await carritoPage.eliminarProducto();
});

When(/^el mensaje de confirmacion aparece$/, async () => {
    await carritoPage.verificarModalConfirmacion();
});

When(/^el usuario da clic en aceptar eliminacion$/, async () => {
    await carritoPage.aceptarEliminacion();
});

When(/^el articulo eliminado muestra el mensaje de confirmacion$/, async () => {
    await carritoPage.verificarProductoEliminado();
});

Then(/^el subtotal se actualiza correctamente$/, async () => {
    await carritoPage.verificarSubtotalActualizado();
});

// TC-035--------------------------------------------------------------------------------------------------------------------

When(/^da clic en el boton de: Mover a wishlist junto a la imagen del producto$/, async () => {
    await wishlistPage.clicMoverWishlist();
});

When(/^el submenu del lado derecho aparece$/, async () => {
    await wishlistPage.verificarSubmenuWishlist();
});

When(/^selecciona una lista$/, async () => {
    await wishlistPage.seleccionarWishlist();
});

Then(/^aparece un mensaje de confirmacion que indica que el producto fue movido a la lista de deseos$/, async () => {
    await wishlistPage.verificarMensajeWishlistMovida();
});

// TC-036--------------------------------------------------------------------------------------------------------------------

When(/^el usuario da clic en el icono de perfil$/, async () => {
    await wishlistPage.clicPerfil();
});

When(/^da clic en wishlist$/, async () => {
    await wishlistPage.clicWishlist();
});

When(/^se muestra una de sus listas$/, async () => {
    await wishlistPage.verificarListaWishlist();
});

When(/^da clic sobre ella$/, async () => {
    await wishlistPage.abrirListaWishlist();
});

Then(/^la pagina se actualiza y se muestran los productos de la lista de deseos$/, async () => {
    await wishlistPage.verificarProductoWishlist();
});

// TC-037--------------------------------------------------------------------------------------------------------------------

When(/^el usuario da clic en los 3 puntitos que aparecen en el lado derecho del producto$/, async () => {
    await wishlistPage.clicTresPuntosProducto();
});

When(/^da clic en eliminar$/, async () => {
    await wishlistPage.clicEliminar();
});

When(/^aparece el mensaje de confirmacion para eliminar el producto$/, async () => {
    await wishlistPage.verificarModalEliminacion();
});

When(/^el usuario da clic en el boton eliminar$/, async () => {
    await wishlistPage.confirmarEliminacion();
});

Then(/^la pagina se actualiza y desaparece el producto$/, async () => {
    await wishlistPage.verificarMensajeEliminacion();
});

// TC-041--------------------------------------------------------------------------------------------------------------------

When(/^el usuario aumenta en uno la cantidad de un producto$/, async () => {
    await carritoPage.guardarCantidadInicial();
    await carritoPage.aumentarCantidadProducto();
});

Then(/^la cantidad del producto aumenta en uno$/, async () => {
    await carritoPage.verificarCantidadAumentada();
});

// TC-042-------------------------------------------------------------------------------------------------------------------

When(/^el usuario disminuye en uno la cantidad del producto$/, async () => {
    await carritoPage.guardarCantidadDespuesDeAumentar();
    await carritoPage.disminuirCantidadProducto();
});

Then(/^la cantidad del producto disminuye$/, async () => {
    await carritoPage.verificarCantidadDisminuida();
});

// TC-044-------------------------------------------------------------------------------------------------------------------

When(/^el usuario obtiene los precios de los productos$/, async () => {
    await carritoPage.obtenerPreciosProductos();
});

Then(/^la suma de los precios coincide con el subtotal mostrado$/, async () => {
    await carritoPage.verificarSubtotalCorrecto();
});

// TC-046-------------------------------------------------------------------------------------------------------------------

When(/^el subtotal y descuento aparecen$/, async () => {
    await carritoPage.obtenerSubtotalYDescuento();
});

Then(/^el total final se calcula correctamente$/, async () => {
    await carritoPage.verificarTotalFinal();
});

// TC-047-------------------------------------------------------------------------------------------------------------------


// TC-048-------------------------------------------------------------------------------------------------------------------


// TC-049-------------------------------------------------------------------------------------------------------------------

// TC-053-------------------------------------------------------------------------------------------------------------------

// TC-054-------------------------------------------------------------------------------------------------------------------

// TC-055-------------------------------------------------------------------------------------------------------------------

// TC-056-------------------------------------------------------------------------------------------------------------------

// TC-059-------------------------------------------------------------------------------------------------------------------

// TC-060-------------------------------------------------------------------------------------------------------------------

// TC-061-------------------------------------------------------------------------------------------------------------------

// TC-062-------------------------------------------------------------------------------------------------------------------

// TC-063-------------------------------------------------------------------------------------------------------------------

// TC-064-------------------------------------------------------------------------------------------------------------------

// TC-065-------------------------------------------------------------------------------------------------------------------

When(/^el usuario visualiza la pagina de login$/, async () => {
    await loginCuentaPage.abrirLogin();
});

When(/^da clic en "Crear cuenta"$/, async () => {
    await loginCuentaPage.abrirRegistro();
});

Then(/^la pagina de registro se muestra$/, async () => {
    await loginCuentaPage.verificarPaginaRegistro();
});

Then(/^el usuario ve el formulario "Crear cuenta"$/, async () => {
    await loginCuentaPage.verificarPaginaRegistro();
});

When(/^el usuario ingresa su correo de registro$/, async () => {
    await loginCuentaPage.ingresarCorreoRegistro();
});

When(/^ingresa su contraseña de registro$/, async () => {
    await loginCuentaPage.ingresarContrasenaRegistro();
});

When(/^da clic en el boton "Crear cuenta"$/, async () => {
    await loginCuentaPage.clicCrearCuenta();
});

Then(/^el formulario de datos personales se muestra$/, async () => {
    await loginCuentaPage.verificarFormularioDatosPersonales();
});

// TC-066-------------------------------------------------------------------------------------------------------------------

Given(/^el usuario se encuentra en la pagina de login$/, () => {
    loginCuentaPage.abrirLogin();
});

When(/^ingresa su correo electronico$/, async () => {
    await loginCuentaPage.ingresarCorreo();
});

When(/^ingresa su contraseña$/, async () => {
    await loginCuentaPage.ingresarContrasena();
});

When(/^da clic en el boton de iniciar sesion$/, async () => {
    await loginCuentaPage.clicIniciarSesion();
});

When(/^el usuario ingresa manualmente el codigo de verificacion$/, async () => {
    await loginCuentaPage.ingresarCodigoVerificacion();
});

When(/^da clic en el boton continuar$/, async () => {
    await loginCuentaPage.clicContinuarVerificacion();
});

// TC-067-------------------------------------------------------------------------------------------------------------------

Given(/^el usuario ha iniciado sesion$/, async () => {
    await loginCuentaPage.iniciarSesion();
});

When(/^da clic en el icono o nombre de su perfil$/, async () => {
    await loginCuentaPage.clicPerfil();
});

When(/^la pagina de mi cuenta se muestra$/, async () => {
    await loginCuentaPage.verificarPaginaMiCuenta();
});

When(/^da clic en direcciones$/, async () => {
    await loginCuentaPage.clicDirecciones();
});

Then(/^las direcciones guardadas aparecen$/, async () => {
    await loginCuentaPage.verificarDirecciones();
});

