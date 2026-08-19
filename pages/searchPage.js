const { locator } = require("codeceptjs");
const { expect } = require("playwright/test");
const { I } = inject();

class searchPage{
    urls = {
        home: 'https://www.liverpool.com.mx/tienda/home',
    };

    fields = {
        buscador: '//input[@data-testid="blt26617d4f2e17657d-header-search-input"]',
        textoSinResultados: '//p[contains(text(), "¿Quizá quisiste decir?")]',
        resultado: '//h1[normalize-space()="Xbox series x"]',
        resultadoGeneral: '//h1[@data-testid="plp-page-heading-title-title" and normalize-space()="Videojuegos"]',
        xboxTitulo: '//h3[text()="Consola fija xbox one series x de 2 tb edición especial"]',
        indicePagina: '//a[@data-testid="plp-page-pagination-link" and text()="1"]'

    };

//GIVEN---------------------------------------------------------------------------------------------------------------
    home(){
        I.amOnPage(this.urls.home);
        I.wait(2);
    }
//TC001---------------------------------------------------------------------------------------------------------------
    darClicEnBuscador() {
        I.waitForVisible(this.fields.buscador, 3);
        I.forceClick(this.fields.buscador);
    }
    escribirProducto() {
        I.fillField(this.fields.buscador, "Xbox series X");
    }

    presionarEnter() {
        I.pressKey('Enter');
    }

    validarResultados() {
        I.waitForElement(this.fields.resultado,5);

    }

    verCard(){
        I.scrollTo(this.fields.xboxTitulo);
        I.click(this.fields.xboxTitulo)
    }

//TC002---------------------------------------------------------------------------------------------------------------
    darClicEnBuscadorI() {
        I.waitForVisible(this.fields.buscador, 7);
        I.forceClick(this.fields.buscador);
    }


    escribirProductoInexistente() {
        I.fillField(this.fields.buscador, "vvnvnvnc");
    }

    presionarEnterI() {
        I.pressKey('Enter');
    }


    validarResultadosInexistentes(){
        I.waitForVisible(this.fields.textoSinResultados,7);

    }

//TC003---------------------------------------------------------------------------------------------------------------
    darClicEnBuscador3() {
        I.waitForVisible(this.fields.buscador, 3);
        I.forceClick(this.fields.buscador);
    }
    escribirProducto3() {
        I.fillField(this.fields.buscador, "Videojuegos");
    }

    presionarEnter3() {
        I.pressKey('Enter');
    }

    validarResultados3() {
        I.waitForElement(this.fields.resultadoGeneral,5);
        I.scrollTo(this.fields.indicePagina);

    }    

}

module.exports = new searchPage();

