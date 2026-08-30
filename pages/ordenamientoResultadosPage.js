const { I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */

class ordenamientoResultadosPage{

    urls={
        urlhome: 'https://www.liverpool.com.mx/tienda/home'
    };
    
    fields={
        // Home
        barraBusqueda:'[data-testid="blt26617d4f2e17657d-header-search-input"]',
        //Ordenamiento
        botonOrdenar: '[data-testid="dropdown-sorting-button"]',
        opcionMenorPrecio: '//li[@role="option"][normalize-space(.)="Menor precio"]',
        opcionDestacados: '//li[@role="option" and normalize-space(.)="Destacados"]',
        opcionMayorPrecio: '//li[@role="option" and normalize-space(.)="Mayor precio"]',
        opcionNovedades: '//li[@role="option" and normalize-space(.)="Novedades"]',
    };

    //Metodos ordenamiento

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

}

module.exports = new ordenamientoResultadosPage();