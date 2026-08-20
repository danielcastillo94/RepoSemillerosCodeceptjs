const { I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */

class detalleProductoPage{

    urls={
        urlhome: 'https://www.liverpool.com.mx/tienda/home'
    };
    
    fields={
        // Home
        barraBusqueda:'[data-testid="blt26617d4f2e17657d-header-search-input"]',
        //Producto
        productoResultado: '[data-testid$="-image-slider-image-1"]',
        tituloProducto: 'h1.text-body-2xl',
        precioProducto: '[data-testid$="-configurator-price"]',
        caracteristicasProducto: '[data-testid="ml-list-item-specs"]',
        codigoProducto: 'p.text-body-sm.text-low-emphasis',
        galeriaProducto: '[data-testid$="-gallery__gallery-0__image"]',
    };

    //Metodos detalles de producto

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

module.exports = new detalleProductoPage();