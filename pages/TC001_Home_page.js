const { I } = inject();

class home_page {

    elements = {
        //Elementos para "Verificar la carga del portal y de los elementos"
        logo: 'img.js-responsive-image',
        menu: '//*[@id="pagina-contenido-d670c30d2d"]/div[1]/div/div/div[1]/header/div/div[2]/div',
        banner: '//*[@id="pagina-contenido-d670c30d2d"]/div[2]/div[1]/div/div/div[1]/div/div[1]/div[2]',

        //Elementos para "Verificar navegacion hacia la seccion de planes y submenus"
        movil: '//*[@id="level-1"]/li[1]/a',
        ppr: '//*[@id="level-1"]/li[1]/div/div[1]/ul/li[3]/a', //pagos paquetes y recargas (ppr)

        //Elementos para "Verificar ingreso al detalle de un plan especifico"
        button5g: '//button[text()="Conoce más"]',
        moreButton: '//*[@id="telcel_backoffice_banner"]/div[1]/div[2]/div[1]/div[2]/div/a',

        //Elmentos para "Verificar funcionalidad de la barra de busqueda"
        searchBar: '//*[@id="nuevo-menu-buscador-boton-buscar"]'
    }

    goToTelcel() {
        I.amOnPage("/");
    }

    seeElementsLogo() {
        I.seeElement(this.elements.logo);
    }

    seeElementsMenu() {
        I.seeElement(this.elements.menu);
    }

    seeElementsBanner() {
        I.seeElement(this.elements.banner);
    }

    clickElementMenu(acces) {
        const selector = `//a[@id="telcel-menu-principal-boton" and contains(text(), "${acces}")]`;
        I.moveCursorTo(selector);
    }

    seeElementsMenuMovil() {
        I.seeElement(this.elements.movil);
    }

    seeElementsMenuPPR() {
        I.seeElement(this.elements.ppr);
    }

    //Metodos para "Verificar ingreso al detalle de un plan especifico"
    verifyElement5gButton() {
        I.scrollTo(this.elements.button5g);
        I.click(this.elements.button5g);
        I.waitForElement(this.elements.moreButton, 5);
        I.seeElement(this.elements.moreButton);
    }

    //Metodos para "Verificar funcionalidad de la barra de busqueda"
    verifySearchBar(){
        I.click(this.elements.searchBar);
        I.fillField("search", "oppo");
        I.pressKey("Enter");
    }
}

module.exports = new home_page();
