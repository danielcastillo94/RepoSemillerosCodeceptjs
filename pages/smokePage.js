const { I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */

class smokePage{

    urls={
        urlhome: 'https://www.liverpool.com.mx/tienda/home'
    };

    fields={
        // Home
        barraBusqueda:'[data-testid="blt26617d4f2e17657d-header-search-input"]',
        categorias:'[data-testid="blt26617d4f2e17657d-header-button-category"]',
        perfil:'//span[normalize-space()="Iniciar sesión"]',
        bolsa:'//span[normalize-space()="shopping_bag"]'
    };

    //Metodos
    abrirHome() {
        I.amOnPage(this.urls.urlhome);
    }

    volverAlInicio() {
    I.scrollPageToTop();
    I.wait(3);
    }

    //SmokeTest
    verificarElementosHome() {

        I.waitForElement(this.fields.barraBusqueda, 10);
        I.seeElement(this.fields.barraBusqueda);

        I.waitForElement(this.fields.categorias, 10);
        I.seeElement(this.fields.categorias);

        I.waitForElement(this.fields.perfil, 10);
        I.seeElement(this.fields.perfil);

        I.waitForElement(this.fields.bolsa, 10);
        I.seeElement(this.fields.bolsa);
    }
}

module.exports = new smokePage();