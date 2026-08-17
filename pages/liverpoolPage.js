const { I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */

class liverpoolPage{

    urls={
        urlhome: 'https://www.liverpool.com.mx/tienda/home',
        urlbolsa: 'https://www.liverpool.com.mx/tienda/cart',
        urllogin: 'https://login.liverpool.com.mx/u/login',
        urlcrearCuenta: 'https://login.liverpool.com.mx/u/signup',
        urlvideojuegos: 'https://www.liverpool.com.mx/tienda/videojuegos/cat670055',
    };
    
    fields={
        // Home
        barraBusqueda:'[data-testid="blt26617d4f2e17657d-header-search-input"]',
        categorias:'[data-testid="blt26617d4f2e17657d-header-button-category"]',
        perfil:'//span[normalize-space()="Iniciar sesión"]',
        bolsa:'//span[normalize-space()="shopping_bag"]',
        // Busqueda
        resultadoBusqueda: '[data-testid="plp-page-heading-title-title"]',
        mensajeSinResultados: '//h2[contains(., "Lo sentimos, no encontramos nada para")]',
        //Categorias
        submenuCategorias: '[data-testid="blt26617d4f2e17657d-header-menu-categories-menu-category-item--label"]',
        opcionProductoVideojuegos: '//h3[normalize-space()="Juegos XBOX"]',
        videojuegos:'//span[@data-testid="blt26617d4f2e17657d-header-menu-categories-menu-category-item--label" and normalize-space()="Videojuegos"]',
        //Filtros
        botonOrdenar: '[data-testid="dropdown-sorting-button"]',
        opcionMenorPrecio: '//li[@role="option"][normalize-space(.)="Menor precio"]',
        opcionDestacados: '//li[@role="option" and normalize-space(.)="Destacados"]',
        opcionMayorPrecio: '//li[@role="option" and normalize-space(.)="Mayor precio"]',
        opcionNovedades: '//li[@role="option" and normalize-space(.)="Novedades"]',
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
        //Producto
        productoResultado: '[data-testid$="-image-slider-image-1"]',
        tituloProducto: 'h1.text-body-2xl',
        precioProducto: '[data-testid$="-configurator-price"]',
        caracteristicasProducto: '[data-testid="ml-list-item-specs"]',
        codigoProducto: 'p.text-body-sm.text-low-emphasis',
        galeriaProducto: '[data-testid$="-gallery__gallery-0__image"]',
        // Login
        correoElectronico:'#username',
        contrasena:'#password',
        botonIniciarSesion:'//button[@data-action-button-primary="true" and normalize-space()="Iniciar sesión"]',
        crearCuenta:'//a[normalize-space()="Crear cuenta"]',
        // Registro
        botonCrearCuenta:'//button[@data-action-button-primary="true" and normalize-space()="Crear cuenta"]'
    };

    //Metodos
    abrirHome() {
        I.amOnPage(this.urls.urlhome);
    }

    volverAlInicio() {
    I.scrollPageToTop();
    I.wait(3);
    }

    //SmokeTest
    verificarElementosHome() {

        I.waitForElement(this.fields.barraBusqueda, 10);
        I.seeElement(this.fields.barraBusqueda);

        I.waitForElement(this.fields.categorias, 10);
        I.seeElement(this.fields.categorias);

        I.waitForElement(this.fields.perfil, 10);
        I.seeElement(this.fields.perfil);

        I.waitForElement(this.fields.bolsa, 10);
        I.seeElement(this.fields.bolsa);
    }

    //Escenario 1: Busqueda de productos

    // TC-001 Busqueda
    
    clicBarraBusqueda() {
        I.click(this.fields.barraBusqueda);
    }

    ingresarProducto(producto) {
        I.type(producto);
    }

    presionarEnter() {
        I.pressKey('Enter');
    }

    async verificarResultados(producto) {
    I.waitForElement(this.fields.resultadoBusqueda, 10);

    const resultado = await I.grabTextFrom(this.fields.resultadoBusqueda);

    I.assertEqual(resultado.toLowerCase(),producto.toLowerCase());
    }

    // TC-002 

    verificarMensajeSinResultados(producto) {
    I.waitForElement(this.fields.mensajeSinResultados, 10);
    I.see('Lo sentimos, no encontramos nada para', this.fields.mensajeSinResultados);
    I.see(producto, this.fields.mensajeSinResultados);
    }

    // TC-003
    verificarURL(producto) {
    I.waitForElement(this.fields.resultadoBusqueda,10);    
    I.seeInCurrentUrl(producto.toLowerCase());
    }

    // TC-004
    clicCategorias() {
    I.click(this.fields.categorias);
    }

    verificarSubmenuCategorias() {
    I.waitForElement(this.fields.submenuCategorias, 10);
    I.seeElement(this.fields.submenuCategorias);
    }

    // TC-005
    clicVideojuegos() {
    I.click(this.fields.videojuegos);
    }

    verificarCategoriaVideojuegos() {
    I.waitForURL(this.urls.urlvideojuegos);
    }

    // TC-006

    verificarOpcionesVideojuegos() {
    I.waitForElement(this.fields.opcionProductoVideojuegos, 10);
    I.scrollTo(this.fields.opcionProductoVideojuegos);
    I.seeElement(this.fields.opcionProductoVideojuegos);
    }

    // TC-007

    async verificarPaginaResultados() {
    I.waitForElement(this.fields.botonOrdenar, 10);
    I.seeElement(this.fields.botonOrdenar);
    }

    clicOrdenarPor() {
        I.waitForElement(this.fields.botonOrdenar, 10);
        I.scrollTo(this.fields.botonOrdenar);
        I.seeElement(this.fields.botonOrdenar);
        I.click(this.fields.botonOrdenar);
    }

    seleccionarMenorPrecio() {
        I.waitForElement(this.fields.opcionMenorPrecio, 10);
        I.click(this.fields.opcionMenorPrecio);
    }

    verificarOrdenPrecioMenorMayor() {
        I.waitForText('Menor precio', 10, this.fields.botonOrdenar);
        I.see('Menor precio', this.fields.botonOrdenar);
    }

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

    // TC-016

    async guardarURLResultados() {
        I.waitForElement(this.fields.botonOrdenar, 10);
        this.urlResultados = await I.grabCurrentUrl();
    }

    seleccionarDestacados() {
        I.waitForElement(this.fields.opcionDestacados, 10);
        I.click(this.fields.opcionDestacados);
    }

    async verificarOrdenDestacados() {
    const urlActual = await I.grabCurrentUrl();

    if (urlActual !== this.urlResultados) {
        throw new Error(
            `La URL cambió después de seleccionar Destacados.\n` +
            `URL esperada: ${this.urlResultados}\n` +
            `URL actual: ${urlActual}`
        );
    }
    }

    //Nota: Los resultados predeterminados de liverpool a la hora de hacer una busqueda son los destacados por este motivo es que la url no cambia ni se puede apreciar el nombre del ordenamiento en el boton de Ordenar por:, como si sucdede con los otros casos

    // TC-017

    //Ya existe la funcion de este caso en TC-007

    // TC-018

    seleccionarMayorPrecio() {
        I.waitForElement(this.fields.opcionMayorPrecio, 10);
        I.click(this.fields.opcionMayorPrecio);
    }

    verificarOrdenPrecioMayor() {
        I.waitForText('Mayor precio', 10, this.fields.botonOrdenar);
        I.see('Mayor precio', this.fields.botonOrdenar);
    }

    // TC-019

    seleccionarNovedades() {
        I.waitForElement(this.fields.opcionNovedades, 10);
        I.click(this.fields.opcionNovedades);
    }

    verificarOrdenNovedades() {
        I.waitForText('Novedades', 10, this.fields.botonOrdenar);
        I.see('Novedades', this.fields.botonOrdenar);
    }

    // TC-020

    clicProducto() {
    I.waitForElement(this.fields.productoResultado, 10);
    I.click(this.fields.productoResultado);
    }

    verificarDetalleProducto() {
        I.waitForElement(this.fields.tituloProducto, 10);
        I.seeInCurrentUrl('/tienda/pdp/');
    }

    // TC-021

    verificarDetallesProducto() {
    I.waitForElement(this.fields.tituloProducto, 10);
    I.waitForElement(this.fields.precioProducto, 10);
    I.waitForElement(this.fields.caracteristicasProducto, 10);
    }

    // TC-022

    desplazarseAGaleria() {
    I.waitForElement(this.fields.galeriaProducto, 10);
    I.scrollTo(this.fields.galeriaProducto);
    I.wait(2);
    }

    verificarGaleria() {
        I.waitForElement(this.fields.galeriaProducto, 10);
    }

}

module.exports = new liverpoolPage();