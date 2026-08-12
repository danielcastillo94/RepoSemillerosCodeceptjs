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
        resultado: '//button[normalize-space()="NINTENDO"]'

    };

//GIVEN---------------------------------------------------------------------------------------------------------------
    home(){
        I.amOnPage(this.urls.home);
        I.wait(2);
    }
//TC001---------------------------------------------------------------------------------------------------------------
    darClicEnBuscador() {
        I.waitForVisible(this.fields.buscador, 5);
        I.forceClick(this.fields.buscador);
    }
    escribirProducto() {
        I.fillField(this.fields.buscador, "Videojuegos");
    }

    presionarEnter() {
        I.pressKey('Enter');
    }

    validarResultados() {
        I.waitForElement(this.fields.resultado,4);

    }

//TC002---------------------------------------------------------------------------------------------------------------
    darClicEnBuscadorI() {
        I.waitForVisible(this.fields.buscador, 5);
        I.forceClick(this.fields.buscador);
    }


    escribirProductoInexistente() {
        I.fillField(this.fields.buscador, "vvnvnvnc");
    }

    presionarEnterI() {
        I.pressKey('Enter');
    }


    validarResultadosInexistentes(){
        I.waitForVisible(this.fields.textoSinResultados,5);

    }

}

module.exports = new searchPage();

