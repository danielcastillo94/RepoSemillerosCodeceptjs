const { I } = inject();

module.exports = {

    fields: {
        buscadorHome:
            '[data-testid="blt26617d4f2e17657d-header-search-input"]',

        resultados:
            '#plp-page-card-product-list',

        tituloResultados:
            '[data-testid="plp-page-heading-title-title"]',

        tarjetasProducto:
            '#plp-page-card-product-list a[data-testid$="-card-card-link"]',

        botonMenu:
            '[data-testid="blt26617d4f2e17657d-header-button-menu"]',

        botonCategorias:
            '[data-testid="blt26617d4f2e17657d-header-menu-mobile-menu-items-submenu-0"]',

        vinosGourmet:
            '[data-testid="blt26617d4f2e17657d-header-menu-mobile-submenu-Vinos y Gourmet-15"]',

        tituloVinosGourmet:
            '//h2[contains(text(),"Vinos y Gourmet")]',

        botonFiltrar:
            '[data-testid="plp-page-filter-button"]',

        filtroPrecios:
            '//button[@data-testid="button-dropdown-filter" and .//span[contains(text(),"Precio")]]',

        precioMinimo:
            '[data-testid="at-text-min-input"]',

        precioMaximo:
            '[data-testid="at-text-max-input"]',

        rangoPrecio:
            'input[type="radio"][value=\'{"low":100,"high":500}\']',

        preciosProductos:
            '[data-testid$="-card-card-price"]',

        filtroMarcas:
            '//button[@data-testid="button-dropdown-filter" and .//span[text()="Marcas"]]',

        buscadorMarca:
            'input[placeholder="Buscar marca"]',

        marcaPS5:
            '//label[.//*[@data-testid="item-PS5"]]',

        marcaPS4:
            '//label[.//*[@data-testid="item-PS4"]]',

        filtroTalla:
            '//button[@data-testid="button-dropdown-filter" and .//span[text()="Talla"]]',

        filtroColor:
            '//button[@data-testid="button-dropdown-filter" and .//span[text()="Color"]]',

        botonOrdenamiento:
            '[data-testid="dropdown-sorting-button"]',

        nombreProducto:
            'h1.text-body-2xl',

        precioProducto:
            '[data-testid$="-configurator-price"] [data-testid="discounted"]',

        botonCaracteristicas:
            '[data-testid="ml-list-item-specs"]',

        galeriaProducto:
            'button[data-testid^="pdp-"][data-testid*="gallery-details__thumbnail"]',

        botonDisminuirCantidadCarrito:
            'button[data-testid$="input-cart-item-quantity-decrease"]',

        botonAumentarCantidadCarrito:
            'button[data-testid$="input-cart-item-quantity-increase"]',

        botonAgregarBolsa:
            '[data-testid="add-to-bag-button"]',

        cantidadCarrito:
            '[data-testid="blt26617d4f2e17657d-header-shopping-cart-header-cart-quantity"]',

        botonBolsa:
            '[data-testid="blt26617d4f2e17657d-header-shopping-cart-shopping-link"]',

        descuentoCarrito:
            '[data-testid="checkout-payment-summary-discount"]',

        totalCarrito:
            '[data-testid="checkout-payment-summary-total"]',

        opcionesEntrega:
            '[data-testid^="product-configurator-delivery-selection-card-"]',

        checkEntrega:
            '[data-testid="selection-checkmark"]',

        cantidadProductoCarrito:
            'input[name="quantity"]',

        botonConfirmarEliminacion:
            '[data-testid="delete-product-modal-modal-modal-footer-primary-button"]',

        botonAumentarCantidadProducto:
            'button[aria-label="increase"]',

        botonDisponibilidadTienda:
            '[data-testid="or-find-in-store-modal-button"]',
    },

    // LP001-LP003 - Abre Liverpool y reutiliza el buscador principal.
    abrirLiverpool() {
        I.amOnPage('/');
        I.waitForElement(this.fields.buscadorHome, 10);
    },

    // LP004-LP006 - Reutiliza Liverpool en resolución móvil usando CodeceptJS.
    abrirLiverpoolMovil() {
        I.resizeWindow(375, 667);
        I.amOnPage('/');
        I.waitForElement(this.fields.botonMenu, 10);
    },

    // Función reutilizable de búsqueda para prácticamente todos los casos.
    buscarProducto(producto) {
        I.waitForVisible(this.fields.buscadorHome, 10);
        I.click(this.fields.buscadorHome);
        I.fillField(this.fields.buscadorHome, producto);
        I.pressKey('Enter');
        I.wait(3);
    },

    validarResultados() {
        I.waitForElement(this.fields.resultados, 10);
        I.seeElement(this.fields.resultados);
    },

    validarSinResultados(producto) {
        I.wait(3);
        I.seeInCurrentUrl(`s=${producto}`);
        I.seeNumberOfElements(this.fields.tarjetasProducto, 0);
    },

validarProductoRelacionado(producto) {
    I.waitForElement(this.fields.resultados, 10);
    I.seeElement(this.fields.resultados);

    I.waitForElement(this.fields.tituloResultados, 10);
    I.see(producto, this.fields.tituloResultados);
},

// LP004 - Abre el menú de categorías en vista móvil.
abrirCategorias() {
    I.waitForVisible(this.fields.botonMenu, 10);
    I.click(this.fields.botonMenu);

    I.waitForVisible(this.fields.botonCategorias, 10);
    I.click(this.fields.botonCategorias);
},

validarCategoriaVinos() {
    I.waitForElement(this.fields.vinosGourmet, 10);
    I.seeElement(this.fields.vinosGourmet);
},

// LP005-LP006 - Reutiliza los mismos selectores del menú de categorías.
irAVinosGourmet() {
    I.waitForVisible(this.fields.botonMenu, 10);
    I.click(this.fields.botonMenu);

    I.waitForVisible(this.fields.botonCategorias, 10);
    I.click(this.fields.botonCategorias);

    I.waitForVisible(this.fields.vinosGourmet, 10);
    I.click(this.fields.vinosGourmet);
},

validarPaginaVinosGourmet() {
    I.waitForElement(this.fields.tituloVinosGourmet, 10);
    I.see('Vinos y Gourmet', this.fields.tituloVinosGourmet);
},

// LP007-LP009 - Abre el filtro general y después el filtro de precios.
ubicarSeccionPrecios() {
    I.waitForVisible(this.fields.filtroPrecios, 10);
    I.scrollTo(this.fields.filtroPrecios);
},

seleccionarRangoPrecio() {
    I.waitForElement(this.fields.rangoPrecio, 10);
    I.click(this.fields.rangoPrecio);
    I.wait(3);
},

// Reutiliza la validación general de resultados.
validarFiltroPrecio() {
    return this.validarResultados();
},

ingresarRangoPrecio(minimo, maximo) {
    I.waitForVisible(this.fields.precioMinimo, 10);
    I.fillField(this.fields.precioMinimo, minimo);

    I.waitForVisible(this.fields.precioMaximo, 10);
    I.fillField(this.fields.precioMaximo, maximo);

    I.pressKey('Enter');
    I.wait(3);
},

// LP009 - Obtiene los precios visibles usando CodeceptJS y valida el rango.
async validarPreciosEnRango(minimo, maximo) {
    const min = Number(minimo);
    const max = Number(maximo);

    const textosPrecios = await I.grabTextFromAll(
        this.fields.preciosProductos
    );

    for (const textoPrecio of textosPrecios) {
        const precio = Number(
            textoPrecio
                .replace('$', '')
                .replace(/,/g, '')
                .replace(/\s/g, '')
        );

        if (precio < min || precio > max) {
            throw new Error(
                `El precio ${precio} está fuera del rango ${min} - ${max}`
            );
        }
    }
},

// LP010-LP012 - Abre el filtro de marcas.
abrirFiltroMarcas() {
    I.waitForVisible(this.fields.botonFiltrar, 10);
    I.click(this.fields.botonFiltrar);

    I.waitForVisible(this.fields.filtroMarcas, 10);
    I.click(this.fields.filtroMarcas);
},

buscarMarca(marca) {
    I.waitForVisible(this.fields.buscadorMarca, 10);
    I.fillField(this.fields.buscadorMarca, marca);
},

seleccionarMarcaPS5() {
    I.waitForElement(this.fields.marcaPS5, 10);
    I.click(this.fields.marcaPS5);
    I.wait(3);
},

seleccionarMultiplesMarcas() {
    I.waitForVisible(this.fields.marcaPS5, 10);
    I.waitForVisible(this.fields.marcaPS4, 10);

    I.click(this.fields.marcaPS5);
    I.click(this.fields.marcaPS4);

    I.wait(3);
},

// Función genérica reutilizada por LP010-LP012.
seleccionarMarca(marca) {
    const selectorMarca =
        `//label[.//*[@data-testid="item-${marca}"]]`;

    I.waitForVisible(selectorMarca, 10);
    I.click(selectorMarca);
    I.wait(3);
},

// El mismo click vuelve a desactivar el checkbox.
deseleccionarMarca(marca) {
    return this.seleccionarMarca(marca);
},

// LP013-LP015 - Abre el filtro de talla usando únicamente CodeceptJS.
ubicarSeccionTalla() {
    I.waitForVisible(this.fields.filtroTalla, 10);
    I.scrollTo(this.fields.filtroTalla);
},

seleccionarTalla(talla) {
    const opcionTalla =
        `[data-testid="item-${talla}"]`;

    I.waitForVisible(opcionTalla, 10);
    I.click(opcionTalla);
    I.wait(3);
},

// LP014-LP015 - Abre el filtro de color.
ubicarSeccionColor() {
    I.waitForVisible(this.fields.filtroColor, 10);
    I.scrollTo(this.fields.filtroColor);
},

// Selecciona un color específico cuando el color sí forma parte de la prueba.
seleccionarColor(color) {
    const opcionColor =
        `//label[.//input[@type="checkbox" and starts-with(@value,"${color}~~")] and not(ancestor::*[contains(@style,"display: none")])]`;

    I.waitForVisible(opcionColor, 10);
    I.click(opcionColor);
    I.wait(3);
},

// Reutilizable para carrito y entrega.
// Selecciona la primera variante disponible sin depender de Negro, Multicolor, etc.
seleccionarColorDisponible() {
    const colorDisponible =
        'button[data-testid^="ml-image-picker-image-"]';

    I.waitForVisible(colorDisponible, 10);
    I.click(colorDisponible);
    I.wait(1);
},

// LP016-LP019 - Ordenamiento.
// La misma función se reutiliza con Destacados, Menor precio, Mayor precio y Novedades.
abrirOrdenamiento() {
    I.waitForVisible(this.fields.botonOrdenamiento, 10);
    I.click(this.fields.botonOrdenamiento);
},

seleccionarOrden(orden) {
    const opcionOrden =
        `//li[@role="option" and normalize-space(.)="${orden}"]`;

    I.waitForVisible(opcionOrden, 10);
    I.click(opcionOrden);
    I.wait(3);
},

// LP020-LP021 - Selecciona el primer resultado.
// No se usa cuando buscamos directamente por SKU porque Liverpool abre el PDP automáticamente.
seleccionarPrimerProducto() {
    I.waitForVisible(this.fields.tarjetasProducto, 10);
    I.click(this.fields.tarjetasProducto);
    I.wait(3);
},

// Reutiliza la validación del nombre para comprobar que estamos en el PDP.
validarDetalleProducto() {
    return this.validarNombreProducto();
},

validarNombreProducto() {
    I.waitForVisible(this.fields.nombreProducto, 10);
    I.seeElement(this.fields.nombreProducto);
},

validarPrecioProducto() {
    I.waitForVisible(this.fields.precioProducto, 10);
    I.seeElement(this.fields.precioProducto);
},

validarCaracteristicasProducto() {
    I.waitForVisible(this.fields.botonCaracteristicas, 10);
    I.see('Características', this.fields.botonCaracteristicas);
},

// LP022-LP027 - Selecciona un producto por su texto.
// Se mantiene para búsquedas normales; con SKU directo este paso no es necesario.
seleccionarProducto(producto) {
    const tarjetaProducto =
        `//a[contains(@data-testid,"-card-card-link")][contains(.,"${producto}")]`;

    I.waitForVisible(tarjetaProducto, 10);
    I.click(tarjetaProducto);
    I.wait(3);
},

// LP022 - Valida que exista más de una imagen en la galería.
async validarGaleriaProducto() {
    I.waitForElement(this.fields.galeriaProducto, 10);

    const cantidad = await I.grabNumberOfVisibleElements(
        this.fields.galeriaProducto
    );

    if (cantidad < 2) {
        throw new Error(
            `Se esperaban al menos 2 imágenes y se encontraron ${cantidad}`
        );
    }
},

// LP023 - Valida que exista el control para aumentar cantidad.
validarStockDisponible() {
    I.waitForVisible(this.fields.botonAumentarCantidadProducto, 10);
    I.seeElement(this.fields.botonAumentarCantidadProducto);
},

// LP024 - Disponibilidad en tienda.
consultarDisponibilidadTienda() {
    I.waitForVisible(this.fields.botonDisponibilidadTienda, 10);
    I.click(this.fields.botonDisponibilidadTienda);
    I.wait(2);
},

validarDisponibilidadTienda() {
    I.see('Ver disponibilidad en tienda');
},

// LP025 - Permite reutilizar la validación con cualquier SKU.
validarCodigoProducto() {
    I.waitForText('Código de producto:', 10);
},

// LP026-LP027 - Opiniones y calificaciones.
validarSeccionOpiniones() {
    I.waitForText('Opiniones del artículo', 10);
},

validarDistribucionCalificaciones() {
    I.waitForText('5 estrellas', 10);
    I.see('2 estrellas');
},

// Selección de talla específica dentro del PDP.
seleccionarTallaProducto(talla) {
    const opcionTalla =
        `label:has(input[name="size-picker"][value="${talla}"])`;

    I.waitForVisible(opcionTalla, 10);
    I.click(opcionTalla);
    I.wait(1);
},

// LP029-LP034 - Agregar productos y validar carrito.
agregarProductoBolsa() {
    I.waitForVisible(this.fields.botonAgregarBolsa, 10);
    I.click(this.fields.botonAgregarBolsa);
    I.wait(3);
},

// Reutiliza la validación del badge del carrito.
validarProductoAgregado() {
    return this.validarCantidadCarrito('1');
},

validarCantidadCarrito(cantidad) {
    I.waitForVisible(this.fields.cantidadCarrito, 10);
    I.see(cantidad, this.fields.cantidadCarrito);
},

// Reutiliza la misma validación de LP030.
validarConfirmacionAgregado() {
    return this.validarCantidadCarrito('1');
},

// Se mantiene para casos que realmente necesitan un color específico.
seleccionarColorProducto(color) {
    const opcionColor =
        `//p[normalize-space(.)="${color}"]`;

    I.waitForVisible(opcionColor, 10);
    I.click(opcionColor);
    I.wait(1);
},

validarCarritoConProductos() {
    I.waitForVisible(this.fields.cantidadCarrito, 10);
},

abrirBolsa() {
    I.waitForVisible(this.fields.botonBolsa, 10);
    I.click(this.fields.botonBolsa);
    I.wait(3);
},

validarSubtotal(cantidad) {
    I.waitForText(`Subtotal (${cantidad} productos)`, 10);
},

// LP041 - Reutiliza el selector estable del botón aumentar.
aumentarCantidadCarrito() {
    I.waitForVisible(this.fields.botonAumentarCantidadCarrito, 10);
    I.click(this.fields.botonAumentarCantidadCarrito);
    I.wait(1);
},

// LP042 - Una sola función para disminuir cantidad.
disminuirCantidadCarrito() {
    I.waitForVisible(this.fields.botonDisminuirCantidadCarrito, 10);
    I.click(this.fields.botonDisminuirCantidadCarrito);
    I.wait(1);
},

validarCantidadCarritoProducto(cantidad) {
    I.seeInField(this.fields.cantidadProductoCarrito, cantidad);
},

// LP043 - Liverpool reutiliza decrease para eliminar cuando la cantidad es 1.
removerProductoCarrito() {
    I.waitForVisible(this.fields.botonDisminuirCantidadCarrito, 10);
    I.click(this.fields.botonDisminuirCantidadCarrito);
    I.wait(2);
},

confirmarEliminacionProducto() {
    I.waitForVisible(this.fields.botonConfirmarEliminacion, 10);
    I.click(this.fields.botonConfirmarEliminacion);
    I.wait(2);
},

validarCarritoVacio() {
    I.dontSeeElement(this.fields.cantidadProductoCarrito);
},

// LP044-LP046 - Resumen y totales.
validarSubtotalCarrito() {
    I.waitForText('Subtotal', 10);
},

validarDescuento() {
    I.waitForVisible(this.fields.descuentoCarrito, 10);
},

validarCostoEnvio() {
    I.waitForText('Costo de envío:', 10);
    I.see('Gratis');
},

validarIVAIncluido() {
    I.waitForText('Total (IVA incluido):', 10);
},

validarTotalFinal() {
    I.waitForVisible(this.fields.totalCarrito, 10);
},

// LP056-LP058 - Opciones de entrega.
validarOpcionesEntrega() {
    I.waitForElement(this.fields.opcionesEntrega, 10);
},

// Una sola función sirve para domicilio y Click & Collect.
seleccionarOpcionEntrega(opcion) {
    const selector =
        `[data-testid="product-configurator-delivery-selection-card-${opcion}"]`;

    I.waitForVisible(selector, 10);
    I.click(selector);
    I.wait(1);
},

validarOpcionEntregaSeleccionada(opcion) {
    const selector =
        `[data-testid="product-configurator-delivery-selection-card-${opcion}"]`;

    I.waitForVisible(selector, 10);
    I.seeElement(
        `${selector} ${this.fields.checkEntrega}`
    );
},

// LP062 - Reutiliza la validación general de resultados.
validarResultadosBusqueda() {
    return this.validarResultados();
},

}