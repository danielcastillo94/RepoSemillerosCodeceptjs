const { I } = inject();

class ayudaPage {
    elements = {
        menuPrincipal: 'a#telcel-menu-principal-boton',
        menuDesplegado: '#menu-principal.active-menu',
        menuAyuda: 'a[data-menuprin="Ayuda"].black-mobile',

        tituloPreguntas: '//span[@id="comp-preguntas-frecuentes-preguntas-query" and contains(text(), "Preguntas frecuentes")]',
        categorias: '//a[contains(@class, "sc-category-option") and not(contains(@class, "filteractive"))]',
        enlacesInformativos: '//div[contains(@class, "sc-content-item")]/a[contains(@class, "sc-result-item")]',
        paginacion: '//ul[contains(@class, "sc-pagination")]'
    };

    abrirPagina() {
        I.amOnPage('https://www.telcel.com/');
        I.waitForElement(this.elements.menuPrincipal, 10);
    }

    accederMenuAyuda() {
        I.moveCursorTo(this.elements.menuPrincipal);
        I.waitForVisible(this.elements.menuDesplegado, 10);
        I.click(this.elements.menuAyuda);
    }

    validarCategorias() {
        I.waitForVisible(this.elements.categorias, 10);
        I.seeElement(this.elements.categorias);
        I.grabNumberOfVisibleElements(this.elements.categorias).then((totalCategorias) => {
            console.log(`Se encontraron ${totalCategorias} categorías`);
        });

    }
    
    validarEnlaces() {
        I.waitForVisible(this.elements.enlacesInformativos, 10);
        I.seeElement(this.elements.enlacesInformativos);
        I.seeElement(this.elements.paginacion);
    }
}

module.exports = new ayudaPage();
