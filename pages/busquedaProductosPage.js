const { I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */

class busquedaProductosPage{

    urls={
        urlhome: 'https://www.liverpool.com.mx/tienda/home'
    };

    fields={
        // Home
        barraBusqueda:'[data-testid="blt26617d4f2e17657d-header-search-input"]',
        // Busqueda
        resultadoBusqueda: '[data-testid="plp-page-heading-title-title"]',
        mensajeSinResultados: '//h2[contains(., "Lo sentimos, no encontramos nada para")]',
    };

    //Metodos busqueda de productos

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

}

module.exports = new busquedaProductosPage();