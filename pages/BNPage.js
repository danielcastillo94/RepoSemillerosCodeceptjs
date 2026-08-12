const { I } = inject();

class BNPage {
    urls = {
        urlLiverpool: 'https://www.liverpool.com.mx/tienda/home',
        urlZapatillas: 'https://www.liverpool.com.mx/tienda?s=zapatillas',
        urlInexistente: 'https://www.liverpool.com.mx/tienda?s=qwerty12345xyz',
        urlLady: 'https://www.liverpool.com.mx/tienda/pdp/zapatilla-lady-paulina/99990115809',
        urlMuebles: 'https://www.liverpool.com.mx/tienda/muebles/cat860739'
    };

    fields = {
        searchBar: '[data-testid="blt26617d4f2e17657d-header-search-input"]',
        zapatillas: '//h1[contains(text(), "Zapatillas")]',
        ProductoInexistente: '//h2[contains(text(),"Lo sentimos, no encontramos nada para ")]',
        zapatillaLady: '//img[@data-testid="99990115809-image-slider-image-0"]',
        textZapatillaLady: '//span[contains(text(),"LADY PAULINA")]',
        categorias: '[data-testid="blt26617d4f2e17657d-header-button-category"]',
        mueblesCategoria: '//span[contains(text(),"Muebles")]',
        homeMuebles: '//h2[contains(text(), "Muebles")]'



    };
    //Given-----------------------------------------------------------------
    login() {
        //Página principal de Liverpool
        I.amOnPage(this.urls.urlLiverpool);
        I.executeScript(() => {
            window.scrollBy(0, 500);
        });
    }
    //TC0001--------------------------------------------------------------------
    paginaInicial() {
        I.amOnPage(this.urls.urlLiverpool);
    }

    busquedaZapatillas() {
        I.waitForElement(this.fields.searchBar, 5);
        I.click(this.fields.searchBar)
        I.fillField(this.fields.searchBar, "zapatillas");
        I.pressKey('Enter');

    }

    resultadosZapatillas() {
        //Espera de resultados de la página
        I.waitForURL(this.urls.urlZapatillas);
        I.waitForElement(this.fields.zapatillas);
    }

    //TC002--------------------------------------------------------------------------
    busquedaInexistente() {
        I.waitForElement(this.fields.searchBar, 5);
        I.click(this.fields.searchBar)
        I.fillField(this.fields.searchBar, "qwerty12345xyz");
        I.pressKey('Enter');
    }
    //Espera del resultado.
    resultadoInexistente() {
        I.waitForURL(this.urls.urlInexistente);
        I.waitForElement(this.fields.ProductoInexistente);
    }

    //TC003-----------------------------------------------------------------------
    resultadosLady() {
        I.scrollTo(this.fields.zapatillaLady)
        I.waitForElement(this.fields.zapatillaLady, 5);
        I.click(this.fields.zapatillaLady)
        I.waitForURL(this.urls.urlLady);
        I.seeElement(this.fields.textZapatillaLady);
    }
    //TC0004--------------------------------------------------------------
    categorias() {
        I.waitForElement(this.fields.categorias);
        I.click(this.fields.categorias);
    }

    categoriaPrincipal() {
        I.waitForElement(this.fields.mueblesCategoria, 5);
        I.click(this.fields.mueblesCategoria);
    }

    resultadoMuebles() {
        I.waitForURL(this.urls.urlMuebles);
        I.seeElement(this.fields.homeMuebles);
    }
    //TC0005

    Subcategorias() {
        I.waitForElement(this.fields.mueblesCategoria, 5);
        I.moveCursorTo(this.fields.mueblesCategoria);
        I.wait(5);
    }


}

module.exports = new BNPage();