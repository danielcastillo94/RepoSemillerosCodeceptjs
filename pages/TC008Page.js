const { I } = inject();

class TC008Page {
    elementos = {
        menuPrincipal: 'a#telcel-menu-principal-boton',
        menuDesplegado: '#menu-principal.active-menu',
        menuAyuda: 'a[data-menuprin="Ayuda"].black-mobile',

        tituloPreguntas: '//span[@id="comp-preguntas-frecuentes-preguntas-query" and contains(text(), "Preguntas frecuentes")]',
        categorias: '//a[contains(@class, "sc-category-option") and not(contains(@class, "filteractive"))]',
        enlacesInformativos: '//div[contains(@class, "sc-content-item")]/a[contains(@class, "sc-result-item")]',
        paginacion: '//ul[contains(@class, "sc-pagination")]'
    };

    abrirPag() {
        I.amOnPage('https://www.telcel.com/');
        I.waitForElement(this.elementos.menuPrincipal, 10);
    }

    accederMenuA() {
        I.moveCursorTo(this.elementos.menuPrincipal);
        I.waitForVisible(this.elementos.menuDesplegado, 10);
        I.click(this.elementos.menuAyuda);
    }

    validarC() {
        I.waitForVisible(this.elementos.categorias, 10);
        I.seeElement(this.elementos.categorias);
        I.grabNumberOfVisibleElements(this.elementos.categorias).then((totalCategorias) => {
            console.log(`Se encontraron ${totalCategorias} categorías`);
        });

    }

    validarE() {
        I.waitForVisible(this.elementos.enlacesInformativos, 10);
        I.seeElement(this.elementos.enlacesInformativos);
        I.seeElement(this.elementos.paginacion);
    }
}

module.exports = new TC008Page();