const { I } = inject();

class Busqueda_Navegacion {
    urls = {
        urlLiverpool: 'https://www.liverpool.com.mx/tienda/home'
    };

    fields = {




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
    PaginaInicial() {
        I.amOnPage(this.urls.urlLiverpool);
    }
    Busqueda() {
        I.waitForElement();
    }

}

module.exports = new Busqueda_Navegacion();