const { I } = inject();

class searchPage {
    urls = {
        home: 'https://www.liverpool.com.mx/tienda/home',
    };

    fields = {
        buscador: '//input[@data-testid="blt26617d4f2e17657d-header-search-input"]',
    };

    home() {
        I.amOnPage(this.urls.home);
        I.wait(2);
    }

    darClicEnBuscador() {
        I.waitForVisible(this.fields.buscador, 5);
        I.forceClick(this.fields.buscador);
    }

    escribirProducto(producto) {
        I.fillField(this.fields.buscador, producto); 
    }

    presionarEnter() {
        I.pressKey('Enter');
    }


    realizarBusquedaRapida(producto) {
        this.darClicEnBuscador();
        this.escribirProducto(producto);
        this.presionarEnter();
    }
}

module.exports = new searchPage();
