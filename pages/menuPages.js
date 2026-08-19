const { I } = inject();

class menuPage {

    urls = {
        home: 'https://www.liverpool.com.mx/tienda/home'
    }
    fields = {

        btnMenuCategorias: '//span[@data-testid="blt26617d4f2e17657d-header-icon-category"]',
        contenedorCategorias: '//div[contains(@class, "MuiDrawer-paper") and contains(@class, "w-72") and contains(@class, "h-full")]',
        categoriaHombre: '//span[text()="Hombre"]/ancestor::a',
        contenedorSubcategorias: '//div[contains(@class, "MuiDrawer-paper")]//a[contains(text(), "Hombre")]/parent::div/div/div',
        //subCategoria: 
    };


    home() {
        I.amOnPage(this.urls.home);
        I.wait(2);
    }


    abrirMenu() {
        I.waitForVisible(this.fields.btnMenuCategorias, 5);
        I.click(this.fields.btnMenuCategorias);
    }

    validarCategoriaVisible() {
        I.waitForVisible(this.categoriaHombre, 5);
    }

    hacerHoverEnCategoria() {

        I.waitForVisible(this.categoriaDinamica(categoriaHombre), 5);
        I.moveCursorTo(this.categoriaDinamica(categoriaHombre));
    }

    seleccionarSubcategoria() {
        I.waitForVisible(this.fields.contenedorSubcategorias, 5);
        I.click(this.fields.);
    }
}

module.exports = new menuPage();