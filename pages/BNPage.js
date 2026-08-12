const { I } = inject();

class BNPage {
    urls = {
        urlLiverpool: 'https://www.liverpool.com.mx/tienda/home',
        urlZapatillas: 'https://www.liverpool.com.mx/tienda?s=zapatillas'
    };

    fields = {
        searchBar: '[data-testid="blt26617d4f2e17657d-header-search-input"]',
        zapatillas: '//h1[contains(text(), "Zapatillas")]'



    };
    //Given-----------------------------------------------------------------
    login() {
        //Página principal de Liverpool
        I.amOnPage(this.urls.urlLiverpool);
        I.executeScript(() => {
            window.scrollBy(0, 500);
        });
    }
    //TC001--------------------------------------------------------------------
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


}

module.exports = new BNPage();