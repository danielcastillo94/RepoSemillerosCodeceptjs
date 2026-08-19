const { I } = inject();

class resultsPage {
    fields = {
        textoSinResultados: '//p[contains(text(), "¿Quizá quisiste decir?")]',
        xboxTitulo: '//h3[text()="Consola fija xbox one series x de 2 tb edición especial"]',
        indicePagina: '//a[@data-testid="plp-page-pagination-link" and text()="1"]'
    };

    resultadoDinamico(producto) {
        return `//h1[normalize-space()="${producto}"]`;
    }

    resultadoGeneralDinamico(producto) {
        return `//h1[@data-testid="plp-page-heading-title-title" and normalize-space()="${producto}"]`;
    }

    validarResultados(producto) {
        I.waitForElement(this.resultadoDinamico(producto), 5);
    }

    verCardXbox() {
        I.scrollTo(this.fields.xboxTitulo);
        I.click(this.fields.xboxTitulo);
    }

    validarResultadosInexistentes() {
        I.waitForVisible(this.fields.textoSinResultados, 7);
    }

    validarResultadosGenerales(producto) {
        I.waitForElement(this.resultadoGeneralDinamico(producto), 5);
        I.scrollTo(this.fields.indicePagina);
    }
}

module.exports = new resultsPage();