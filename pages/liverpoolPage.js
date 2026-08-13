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
        'h1.text-body-2xl',

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
    I.waitForElement(this.fields.resultados, 10);
    I.seeElement(this.fields.resultados);
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
    const selectorMarca =
        `//label[.//*[@data-testid="item-${marca}"]]`;

    I.waitForVisible(selectorMarca, 10);
    I.click(selectorMarca);
    I.wait(3);
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
            .filter({ hasText: producto })
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

}