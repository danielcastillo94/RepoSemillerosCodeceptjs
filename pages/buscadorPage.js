const { I } = inject();

class buscadorPage {
    elements = {
        barraBusqueda: 'input#buscador-menu-input',
        resultadosBusqueda: '//swiper-container[@class="swiper-buscador"]//p[contains(text(),"iPhone")]',
    };

    abrirPaginaPrincipal() {
        I.amOnPage('https://www.telcel.com/');
        I.waitForElement(this.elements.barraBusqueda, 5);
    }

    ingresarTerminoBusqueda(termino) {
        I.fillField(this.elements.barraBusqueda, termino);
        I.pressKey("Enter");
        I.waitForElement(this.elements.resultadosBusqueda, 5);
    }

    validarResultados() {
        I.seeElement(this.elements.resultadosBusqueda);
    }
}

module.exports = new buscadorPage();
