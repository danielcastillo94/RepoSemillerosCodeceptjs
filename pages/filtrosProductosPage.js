const { I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */

class filtrosProductosPage{

    urls={
        urlhome: 'https://www.liverpool.com.mx/tienda/home'
    };
    
    fields={
        // Home
        barraBusqueda:'[data-testid="blt26617d4f2e17657d-header-search-input"]',
        //Filtros
        preciosProductos: '[data-testid$="-price"]',
        textoOrdenMenorPrecio: '[data-testid="dropdown-sorting-button"] span.whitespace-nowrap',
        tituloPrecios: '[data-testid="at-text-min-input"]',
        precioMinimo: '[data-testid="at-text-min-input"]',
        precioMaximo: '[data-testid="at-text-max-input"]',
        botonFiltrarPrecio: '[data-testid="chevron-right-icon-btn"]',
        marcas: '//span[normalize-space(.)="Marcas"]',
        mostrarMas:'[data-testid="plp-page-plp-filter-brand-filter-brand-checkbox-group-show-all-items-btn"]',
        talla: '//span[normalize-space(.)="Talla"]',
        color: '//span[normalize-space(.)="Color"]',
    };

    //Metodos filtros

    // TC-008

    desplazarseASeccionPrecios() {
        I.waitForElement(this.fields.precioMinimo, 10);
        I.scrollTo(this.fields.precioMinimo);
    }

    ingresarRangoPrecio(minimo, maximo) {
        I.fillField(this.fields.precioMinimo, minimo);
        I.fillField(this.fields.precioMaximo, maximo);
    }

    aplicarRangoPrecio() {
        I.click(this.fields.botonFiltrarPrecio);
    }

    async verificarRangoPrecio(minimo, maximo) {
    const rango = `$${minimo}.0 -$${maximo}.0`;
    const selectorRango = `[data-testid="${rango}"]`;
    I.waitForElement(selectorRango, 10);
    I.scrollTo(selectorRango);
    I.seeElement(selectorRango);
    }

    // TC-009

    async verificarProductosEnRango(minimo, maximo) {
    const precios = await I.grabTextFromAll('div[data-testid$="-price"]');
    }

    // TC-010

    async desplazarseASeccionMarcas() {
    I.waitForElement(this.fields.marcas, 10);
    I.scrollTo(this.fields.marcas);
    }

    async seleccionarMarca(marca) {
    I.waitForElement(`input[type="checkbox"][value="${marca}"]`, 10);
    I.click(`input[type="checkbox"][value="${marca}"]`);
    I.waitForElement(`[data-testid="${marca}"]`, 10);
    }

    async verificarMarcaSeleccionada(marca) {
    I.waitForElement(`[data-testid="${marca}"]`,10);
    I.scrollTo(`[data-testid="${marca}"]`);
    I.seeElement(`[data-testid="${marca}"]`);
    }

    // TC-011

    mostrarMasMarcas() {
    I.waitForElement(this.fields.mostrarMas,10);
    I.click(this.fields.mostrarMas);
    }

    verificarMarcasSeleccionadas(marcas) {
    for (const marca of marcas) {
        const selector = `[data-testid="${marca}"]`;
        I.waitForElement(selector, 10);
    }
    I.scrollTo(`[data-testid="${marcas[0]}"]`);
    for (const marca of marcas) {
        const selector = `[data-testid="${marca}"]`;
        I.seeElement(selector);
    }
    }

    // TC-012

    eliminarMarca(marca) {
    const selector = `[data-testid="${marca}"]`;
    I.waitForElement(selector, 10);
    I.click(selector);
    }

    verificarMarcaNoSeleccionada(marca) {
    const selector = `[data-testid="${marca}"]`;

    I.dontSeeElement(selector);
    }

    // TC-013

    desplazarseASeccionTalla() {
    I.waitForElement(this.fields.talla, 10);
    I.scrollTo(this.fields.talla);
    }

    seleccionarTalla(talla) {
    const selector = `input[type="checkbox"][value="${talla}"]`;
    I.waitForElement(selector, 10);
    I.click(selector);
    }

    verificarTallaSeleccionada(talla) {
    const selector = `[data-testid="${talla}"]`;
    I.waitForElement(selector, 10);
    I.see(talla, selector);
    }

    // TC-014

    desplazarseASeccionColor() {
    I.waitForElement(this.fields.color, 10);
    I.scrollTo(this.fields.color);
    I.wait(2);
    }

    seleccionarColor(color) {
    const selector = `input[type="checkbox"][value^="${color}~~"]`;
    I.waitForElement(selector, 10);
    I.click(selector);
    }

    verificarColorSeleccionado(color) {
    const selector = `[data-testid="${color}"]`;
    I.waitForElement(selector, 10);
    I.see(color, selector);
    }

    // TC-015

    verificarTallaYColorSeleccionados(talla, color) {
    const selectorTalla = `[data-testid="${talla}"]`;
    const selectorColor = `[data-testid="${color}"]`;
    I.waitForElement(selectorTalla, 10);
    I.waitForElement(selectorColor, 10);
    I.see(talla, selectorTalla);
    I.see(color, selectorColor);
    }

}

module.exports = new filtrosProductosPage();