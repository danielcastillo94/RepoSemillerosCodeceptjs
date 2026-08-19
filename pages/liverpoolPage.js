const { I } = inject();

module.exports = {

    /*
     * Page Object Liverpool
     * Los selectores viven en fields y las acciones se reutilizan entre escenarios.
     * Los métodos "Disponible" se usan cuando talla/color son prerrequisitos y no el objetivo de la prueba.
     */


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
        '[data-testid="button-dropdown-filter"]',

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
        'h1:visible',

    precioProducto:
        '[data-testid$="-configurator-price"] [data-testid="discounted"]',

    botonCaracteristicas:
        '[data-testid="ml-list-item-specs"]',

    galeriaProducto:
    'button[data-testid^="pdp-"][data-testid*="gallery-details__thumbnail"]',
    
    botonAumentarCantidad:
    'button[aria-label="increase"]',

    botonDisponibilidadTienda:
    '[data-testid="or-find-in-store-modal-button"]',

    botonAgregarBolsa:
    '[data-testid="add-to-bag-button"]',

    cantidadCarrito:
    '[data-testid="blt26617d4f2e17657d-header-shopping-cart-header-cart-quantity"]',

    botonBolsa:
    '[data-testid="blt26617d4f2e17657d-header-shopping-cart-shopping-link"]',

    botonDisminuirCantidadCarrito: 'button[aria-label="decrease"]',
    botonAumentarCantidadCarrito: 'button[aria-label="increase"]',

    descuentoCarrito:
    '[data-testid="checkout-payment-summary-discount"]',

    totalCarrito:
    '[data-testid="checkout-payment-summary-total"]',

    opcionesEntrega:
    '[data-testid^="product-configurator-delivery-selection-card-"]',

    checkEntrega:
    '[data-testid="selection-checkmark"]',

    // Variantes reutilizables: evitan amarrar carrito/entrega a una talla o color específico.
    tallasProducto:
    'input[name="size-picker"]:not([disabled])',

    coloresProducto:
    'button[data-testid^="ml-image-picker-image-"]',

    inputCantidadCarrito:
    'input[name="quantity"]',

    botonConfirmarEliminacion:
    '[data-testid="delete-product-modal-modal-modal-footer-primary-button"]',
},

    abrirLiverpool() {
    I.amOnPage('/');
    I.waitForElement(this.fields.buscadorHome, 10);
},

    abrirLiverpoolMovil() {
    I.usePlaywrightTo('usar vista móvil', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
    });

    I.amOnPage('/');
    I.waitForElement(this.fields.botonMenu, 10);
},

  async buscarProducto(producto) {
    await I.usePlaywrightTo('buscar producto en Liverpool', async ({ page }) => {
        const buscador = page.locator(this.fields.buscadorHome).first();

        await buscador.waitFor({ state: 'visible', timeout: 10000 });
        await buscador.click();
        await buscador.fill(producto);
        await buscador.press('Enter');

        await page.waitForLoadState('domcontentloaded');
    });

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

    irAVinosGourmet() {
        I.click(this.fields.botonMenu);
        I.waitForElement(this.fields.botonCategorias, 10);
        I.click(this.fields.botonCategorias);

        I.waitForElement(this.fields.vinosGourmet, 10);
        I.click(this.fields.vinosGourmet);
    },

    validarPaginaVinosGourmet() {
        I.waitForElement(this.fields.tituloVinosGourmet, 10);
        I.see('Vinos y Gourmet', this.fields.tituloVinosGourmet);
    },

    abrirFiltroPrecios() {
    I.waitForVisible(this.fields.botonFiltrar, 10);
    I.click(this.fields.botonFiltrar);

    I.waitForVisible(this.fields.filtroPrecios, 10);
    I.click(this.fields.filtroPrecios);
},

seleccionarRangoPrecio() {
    I.waitForElement(this.fields.rangoPrecio, 10);
    I.click(this.fields.rangoPrecio);
    I.wait(3);
},

validarFiltroPrecio() {
    // Reutiliza la validación general del listado.
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

async validarPreciosEnRango(minimo, maximo) {

    const min = Number(minimo);
    const max = Number(maximo);

    await I.usePlaywrightTo('validar precios dentro del rango', async ({ page }) => {

        const precios = page.locator(this.fields.preciosProductos);

        const cantidad = await precios.count();

        for (let i = 0; i < cantidad; i++) {

            const textoPrecio = await precios.nth(i).innerText();

            const precio = Number(
                textoPrecio
                    .replace('$', '')
                    .replace(',', '')
                    .replace(/\s/g, '')
            );

            if (precio < min || precio > max) {
                throw new Error(
                    `El precio ${precio} está fuera del rango ${min} - ${max}`
                );
            }
        }
    });
},

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

seleccionarMarca(marca) {
    const selectorMarca =
        `//label[.//*[@data-testid="item-${marca}"]]`;

    I.waitForVisible(selectorMarca, 10);
    I.click(selectorMarca);
    I.wait(3);
},

deseleccionarMarca(marca) {
    // El mismo click activa o desactiva el checkbox de marca.
    return this.seleccionarMarca(marca);
},

async abrirFiltroTalla() {
    await I.usePlaywrightTo('abrir filtro Talla', async ({ page }) => {

        const botonTalla = page
            .locator('button[data-testid="button-dropdown-filter"]:visible')
            .filter({ hasText: 'Talla' })
            .first();

        await botonTalla.waitFor({
            state: 'visible',
            timeout: 10000
        });

        const estaAbierto = await botonTalla
            .locator('[data-testid="keyboard-arrow-up-icon"]')
            .count();

        if (estaAbierto === 0) {
            await botonTalla.click();
        }
    });
},

async seleccionarTalla(talla) {
    await I.usePlaywrightTo(`seleccionar talla ${talla}`, async ({ page }) => {

        const opcion = page.locator(
            `[data-testid="item-${talla}"]`
        ).first();

        await opcion.waitFor({
            state: 'visible',
            timeout: 10000
        });

        const label = opcion.locator('xpath=ancestor::label[1]');

        await label.click();
    });

    I.wait(3);
},

async abrirFiltroColor() {
    await I.usePlaywrightTo('abrir filtro Color', async ({ page }) => {

        const botonColor = page
            .locator('button[data-testid="button-dropdown-filter"]:visible')
            .filter({ hasText: 'Color' })
            .first();

        await botonColor.waitFor({
            state: 'visible',
            timeout: 10000
        });

        const estaAbierto = await botonColor
            .locator('[data-testid="keyboard-arrow-up-icon"]')
            .count();

        if (estaAbierto === 0) {
            await botonColor.click();
        }
    });
},

async seleccionarColor(color) {
    await I.usePlaywrightTo(`seleccionar color ${color}`, async ({ page }) => {

        const checkbox = page.locator(
            `input[type="checkbox"][value^="${color}~~"]`
        ).first();

        await checkbox.waitFor({
            state: 'attached',
            timeout: 10000
        });

        const label = checkbox.locator('xpath=ancestor::label[1]');

        await label.waitFor({
            state: 'visible',
            timeout: 10000
        });

        await label.click();
    });

    I.wait(3);
},

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

async seleccionarPrimerProducto() {
    await I.usePlaywrightTo('seleccionar primer producto', async ({ page }) => {

        const producto = page
            .locator(this.fields.tarjetasProducto)
            .first();

        await producto.waitFor({
            state: 'visible',
            timeout: 10000
        });

        const urlInicial = page.url();

        await producto.click();

        await page.waitForURL(
            url => url.toString() !== urlInicial,
            { timeout: 10000 }
        );

        await page.waitForLoadState('domcontentloaded');
    });

    I.wait(3);
},

async validarDetalleProducto() {
    await I.usePlaywrightTo('validar detalle del producto', async ({ page }) => {

        const tarjetas = page.locator(this.fields.tarjetasProducto);

        const cantidadTarjetas = await tarjetas.count();

        if (cantidadTarjetas > 0) {
            throw new Error(
                'El usuario continúa visualizando la lista de productos'
            );
        }
    });
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

async seleccionarProducto(producto) {
    await I.usePlaywrightTo(`seleccionar producto ${producto}`, async ({ page }) => {

        const tarjeta = page
            .locator(this.fields.tarjetasProducto)
            .filter({ has: page.getByText(producto, { exact: true }) })
            .first();

        await tarjeta.waitFor({
            state: 'visible',
            timeout: 10000
        });

        await tarjeta.click();

        await page.waitForLoadState('domcontentloaded');
    });

    I.wait(3);
},

async validarGaleriaProducto() {
    await I.usePlaywrightTo('validar galería del producto', async ({ page }) => {

        const miniaturas = page.locator(this.fields.galeriaProducto);

        await miniaturas.first().waitFor({
            state: 'attached',
            timeout: 10000
        });

        const cantidad = await miniaturas.count();

        if (cantidad < 2) {
            throw new Error(
                `Se esperaban al menos 2 imágenes y se encontraron ${cantidad}`
            );
        }
    });
},    

async validarStockDisponible() {
    await I.usePlaywrightTo('validar disponibilidad del producto', async ({ page }) => {

        const botonAumentar = page
            .locator(this.fields.botonAumentarCantidad)
            .first();

        await botonAumentar.waitFor({
            state: 'visible',
            timeout: 10000
        });

        const estaDeshabilitado = await botonAumentar.isDisabled();

        if (estaDeshabilitado) {
            throw new Error('El producto no permite aumentar la cantidad');
        }
    });
},

consultarDisponibilidadTienda() {
    I.waitForVisible(this.fields.botonDisponibilidadTienda, 10);
    I.click(this.fields.botonDisponibilidadTienda);
    I.wait(2);
},

validarDisponibilidadTienda() {
    I.see('Ver disponibilidad en tienda');
},

validarCodigoProducto() {
    I.waitForText('Código de producto:', 10);
},


validarSeccionOpiniones() {
    I.waitForText('Opiniones del artículo', 10);
},

validarDistribucionCalificaciones() {
    I.waitForText('5 estrellas', 10);
    I.see('2 estrellas');
},

seleccionarTallaProducto(talla) {
    const opcionTalla =
        `label:has(input[name="size-picker"][value="${talla}"])`;

    I.waitForVisible(opcionTalla, 10);
    I.click(opcionTalla);
    I.wait(1);
},

// Reutilizable para casos donde la talla solo es un requisito para agregar al carrito.
async seleccionarTallaDisponibleProducto() {
    await I.usePlaywrightTo('seleccionar una talla disponible del producto', async ({ page }) => {
        const tallas = page.locator(this.fields.tallasProducto);
        await tallas.first().waitFor({ state: 'attached', timeout: 10000 });

        const label = tallas.first().locator('xpath=ancestor::label[1]');
        await label.waitFor({ state: 'visible', timeout: 10000 });
        await label.click();
    });

    I.wait(1);
},

agregarProductoBolsa() {
    I.waitForVisible(this.fields.botonAgregarBolsa, 10);
    I.click(this.fields.botonAgregarBolsa);
    I.wait(3);
},

validarProductoAgregado() {
    // Reutiliza la misma validación del badge del carrito.
    return this.validarCantidadCarrito('1');
},

validarCantidadCarrito(cantidad) {
    I.waitForVisible(this.fields.cantidadCarrito, 10);
    I.see(cantidad, this.fields.cantidadCarrito);
},

validarConfirmacionAgregado() {
    // Misma evidencia que LP030, sin duplicar lógica.
    return this.validarCantidadCarrito('1');
},

seleccionarColorProducto(color) {
    // Se conserva para los casos que realmente necesitan un color específico.
    const opcionColor = `//p[normalize-space(.)="${color}"]`;

    I.waitForVisible(opcionColor, 10);
    I.click(opcionColor);
    I.wait(1);
},

// Reutilizable para carrito, entrega y E2E: evita fallos cuando cambia el catálogo.
async seleccionarColorDisponible() {
    await I.usePlaywrightTo('seleccionar un color disponible del producto', async ({ page }) => {
        const colores = page.locator(this.fields.coloresProducto);
        const cantidad = await colores.count();

        if (cantidad === 0) {
            // Algunos productos no requieren seleccionar color.
            return;
        }

        const primerColor = colores.first();
        await primerColor.waitFor({ state: 'visible', timeout: 10000 });

        if (await primerColor.isEnabled()) {
            await primerColor.click();
        }
    });

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

aumentarCantidadCarrito() {
    I.waitForVisible(this.fields.botonAumentarCantidadCarrito, 10);
    I.click(this.fields.botonAumentarCantidadCarrito);
    I.wait(1);
},

disminuirCantidadCarrito() {
    I.waitForVisible(this.fields.botonDisminuirCantidadCarrito, 10);
    I.click(this.fields.botonDisminuirCantidadCarrito);
    I.wait(1);
},

validarCantidadCarritoProducto(cantidad) {
    I.seeInField(this.fields.inputCantidadCarrito, cantidad);
},

removerProductoCarrito() {
    // Con cantidad 1 Liverpool reutiliza decrease como acción de eliminar.
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
    I.dontSeeElement('input[name="quantity"]');
},

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

validarOpcionesEntrega() {
    I.waitForElement(this.fields.opcionesEntrega, 10);
},

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
    I.seeElement(`${selector} [data-testid="selection-checkmark"]`);
},

validarResultadosBusqueda() {
    // LP062 reutiliza la validación general ya usada desde LP001.
    return this.validarResultados();
},

}