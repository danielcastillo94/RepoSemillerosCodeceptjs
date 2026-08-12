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
        'input[type="radio"][value=\'{"low":100,"high":500}\']'
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
}

















}