const { I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */

class detalleProductoPage{

    urls={
        urlhome: 'https://www.liverpool.com.mx/tienda/home'
    };
    
    fields={
        // Home
        barraBusqueda:'[data-testid="blt26617d4f2e17657d-header-search-input"]',
        //Producto
        productoResultado: producto =>`//section[.//h3[normalize-space()="${producto}"]]`,
        tituloProducto: 'h1.text-body-2xl',
        precioProducto: '[data-testid$="-configurator-price"]',
        caracteristicasProducto: '[data-testid="ml-list-item-specs"]',
        codigoProducto: 'p.text-body-sm.text-low-emphasis',
        galeriaProducto: '[data-testid$="-gallery__gallery-0__image"]',
        //Stock
        botonComprarAhora: '[data-testid="buy-now-button"]',
        botonDisponibilidadTienda: '[data-testid="or-find-in-store-modal-button"]',
        tituloDisponibilidadTienda: '//h3[contains(., "Selecciona un estado")]',
        estadoDisponibilidad: estado =>`//div[@role="button"]//span[contains(normalize-space(), "${estado.toUpperCase()}")]`,
        resultadosDisponibilidad: '[data-testid="find-in-store-tabs"]',
        tiendasConDisponibilidad:'//div[@data-testid="find-in-store-tabs"]//p[contains(normalize-space(), "pieza")]',
        //Opiniones
        tituloOpiniones: '//span[normalize-space()="Opiniones del artículo"]',
        //Filtros
        botonOrdenarOpiniones: '//div[@role="combobox" and @aria-haspopup="listbox"]',
        opcionMayorCalificacion: '//li[@role="option" and @data-value="highestRating"]',

    };

    //Metodos detalles de producto

    // TC-020

    clicProducto(producto) {
    const selectorProducto = `//section[contains(@data-testid, "-card")][.//h3[normalize-space()="${producto}"]]`;
    I.waitForElement(selectorProducto, 10);
    I.scrollTo(selectorProducto);
    I.click(selectorProducto);
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
    
    // TC-023

    desplazarseAComprarAhora() {
    I.waitForElement(this.fields.botonComprarAhora, 10);
    I.scrollTo(this.fields.botonComprarAhora);
    I.wait(1);
    }

    async verificarStockDisponible() {
    const estadoBoton = await I.grabAttributeFrom(
        this.fields.botonComprarAhora,
        'disabled'
    );
    if (estadoBoton !== null) {
    throw new Error('El botón Comprar ahora está deshabilitado. No hay stock disponible.');
    }
    }

    //TC-024

    clicDisponibilidadTienda() {
    I.waitForElement(this.fields.botonDisponibilidadTienda, 10);
    I.click(this.fields.botonDisponibilidadTienda);
    }

    verificarSubmenuDisponibilidad() {
    I.waitForElement(this.fields.tituloDisponibilidadTienda, 10);
    I.seeElement(this.fields.tituloDisponibilidadTienda);
    }

    desplazarseDisponibilidad() {
    const estado = this.fields.estadoDisponibilidad('Puebla');
    I.waitForElement(estado, 10);
    I.scrollTo(estado);
    }

    seleccionarEstado(estado) {
    const selectorEstado = this.fields.estadoDisponibilidad(estado);
    I.waitForElement(selectorEstado, 10);
    I.click(selectorEstado);
    }

    desplazarseHastaEstado(estado) {
    const selectorEstado = this.fields.estadoDisponibilidad(estado);
    I.waitForElement(selectorEstado, 10);
    I.scrollTo(selectorEstado);
    }

    verificarTiendasConStock() {
    I.waitForElement(this.fields.resultadosDisponibilidad, 10);
    I.see('Con disponibilidad', this.fields.resultadosDisponibilidad);
    I.waitForElement(this.fields.tiendasConDisponibilidad, 10);
    I.seeElement(this.fields.tiendasConDisponibilidad);
    }

    // TC-025

    async verificarCodigoProducto() {
    const codigo = await I.grabTextFrom('//p[contains(normalize-space(.), "Código de producto:")]');
    console.log(`Código encontrado: ${codigo}`);
    if (!codigo.includes('Código de producto:')) {
        throw new Error(
            'El código de producto no se encuentra visible'
        );
    }
    }

    // TC-026

    desplazarseAOpiniones() {
    I.waitForElement(this.fields.tituloOpiniones, 10);
    I.scrollTo(this.fields.tituloOpiniones);
    }

    verificarOpinionesProducto() {
    I.waitForElement(this.fields.tituloOpiniones, 10);
    I.seeElement(this.fields.tituloOpiniones);
    }

    // TC-027

    verificarSubmenuFiltros() {
    I.scrollTo(this.fields.opcionMayorCalificacion)
    I.waitForElement(this.fields.opcionMayorCalificacion, 10);
    I.seeElement(this.fields.opcionMayorCalificacion);
    }

    clicOrdenarOpiniones() {
    I.waitForElement(this.fields.botonOrdenarOpiniones, 10);
    I.click(this.fields.botonOrdenarOpiniones);
    }

    seleccionarMayorCalificacion() {
    I.waitForElement(this.fields.opcionMayorCalificacion, 10);
    I.click(this.fields.opcionMayorCalificacion);
    }

    verificarOrdenEstrellas() {
        I.waitForText('Mayor calificación', 10, this.fields.botonOrdenarOpiniones);
        I.see('Mayor calificación', this.fields.botonOrdenarOpiniones);
    }
    
}

module.exports = new detalleProductoPage();