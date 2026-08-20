const { I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */

class navegacionCategoriasPage{

    urls={
        urlhome: 'https://www.liverpool.com.mx/tienda/home',
        urlvideojuegos: 'https://www.liverpool.com.mx/tienda/videojuegos/cat670055',
    };

    fields={
        // Home
        barraBusqueda:'[data-testid="blt26617d4f2e17657d-header-search-input"]',
        categorias:'[data-testid="blt26617d4f2e17657d-header-button-category"]',
        //Categorias
        submenuCategorias: '[data-testid="blt26617d4f2e17657d-header-menu-categories-menu-category-item--label"]',
        opcionProductoVideojuegos: '//h3[normalize-space()="Juegos XBOX"]',
        videojuegos:'//span[@data-testid="blt26617d4f2e17657d-header-menu-categories-menu-category-item--label" and normalize-space()="Videojuegos"]',
    };

    //Metodos categorias

    // TC-004
    clicCategorias() {
    I.click(this.fields.categorias);
    }

    verificarSubmenuCategorias() {
    I.waitForElement(this.fields.submenuCategorias, 10);
    I.seeElement(this.fields.submenuCategorias);
    }

    // TC-005
    clicVideojuegos() {
    I.click(this.fields.videojuegos);
    }

    verificarCategoriaVideojuegos() {
    I.waitForURL(this.urls.urlvideojuegos);
    }

    // TC-006

    verificarOpcionesVideojuegos() {
    I.waitForElement(this.fields.opcionProductoVideojuegos, 10);
    I.scrollTo(this.fields.opcionProductoVideojuegos);
    I.seeElement(this.fields.opcionProductoVideojuegos);
    }
}
module.exports = new navegacionCategoriasPage();