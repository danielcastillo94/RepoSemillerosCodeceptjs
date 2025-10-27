const { I } = inject();

class home_page {

    homeElements = {
        //Elementos para "Verificar la carga del portal y de los elementos"
        logo: '//a[@title="Telcel"]',
        menu: '//*[@class="navbar-nuevo-menu btn"]',
        banner: '//*[@id="pagina-contenido-d670c30d2d"]/div[2]/div[1]/div/div/div[1]/div/div[1]/div[2]',

        //Elementos para "Verificar navegacion hacia la seccion de planes y submenus"
        movil: '//a[text()="Móvil"]',
        ppr: '//*[@id="level-1"]/li[1]/div/div[1]/ul/li[3]/a', //pagos paquetes y recargas (ppr)

        //Elementos para "Verificar ingreso al detalle de un plan especifico"
        button5g: '//button[text()="Conoce más"]',
        moreButton: '//*[@id="telcel_backoffice_banner"]/div[1]/div[2]/div[1]/div[2]/div/a',

    }
    searchBarElements = {
        //Elmentos para "Verificar funcionalidad de la barra de busqueda"
        searchBar: '//*[@name="search"]',
        searchButton: '//button[text()="Buscar"]',
        oppoText: '//*/swiper-slide[1]/div/a/div/div[3]/div[1]/p[2]',
        oppoImage: '//*[@id="slide-ngb-slide-2"]/div/cx-media/img',
        oppoMemory: '//h3[text()="Memoria"]',
        oppoPrice: '.cx-product-price-plan[class]',
    }

    countryElements = {
        countryIcon: '//*[@id="lista-subopciones-menu"]/ul/li[2]/a',
        countrySelection: '//a[text()="Baja California"]',
        countryText: '//span[text()="Baja California"]'
    }

    linksElements = {
        //Elementos para "Verficar que los enlaces redirigen correctamente a sus paginas"
        twitterIcon: 'a[href*="twitter.com/telcel"]',
        facebookIcon: 'a[href*="facebook.com/Telcel"]',
        youtubeIcon: 'a[href*="youtube.com/user/Telceloficial"]'
    }

    //Metodo para "Verficar que los enlaces redirigen correctamente a sus paginas"
    verifyLinks() {
        I.scrollPageToBottom();
        // Verificar que los enlaces existen y son clickeables
        I.waitForElement(this.linksElements.twitterIcon, 2);
        I.seeElement(this.linksElements.twitterIcon);
        I.seeElement(this.linksElements.facebookIcon);
        I.seeElement(this.linksElements.youtubeIcon);

    }

    //Metodo para verificar el cambio de regionalizacion
    verifyCountryChange() {
        I.click(this.countryElements.countryIcon);
        I.click(this.countryElements.countrySelection);
        I.waitForElement(this.countryElements.countryText, 5)
        I.seeElement(this.countryElements.countryText);
    }

    //Metodos para "Verificar ingreso al detalle de un plan especifico"
    verifyElement5gButton() {
        I.scrollTo(this.homeElements.button5g);
        I.click(this.homeElements.button5g);
        I.waitForElement(this.homeElements.moreButton, 5);
        I.seeElement(this.homeElements.moreButton);
    }

    //Metodo para "Verificar funcionalidad de la barra de busqueda"
    verifySearchBar() {
        I.click(this.searchBarElements.searchBar);
        I.fillField("search", "oppo");
        I.pressKey("Enter");
        I.waitForElement(this.searchBarElements.oppoText, 5);
    }

    verifySearchBarElement(){
        I.seeElement(this.searchBarElements.oppoText);
        I.click(this.searchBarElements.oppoText);
        I.waitForElement(this.searchBarElements.oppoImage, 5);
        I.seeElement(this.searchBarElements.oppoImage);
        I.waitForElement(this.searchBarElements.oppoPrice, 3);
        I.seeElement(this.searchBarElements.oppoPrice);
        I.seeElement(this.searchBarElements.oppoMemory);
    }

    goToTelcel() {
        I.amOnPage("/");
    }

    seeElementsLogo() {
        I.waitForElement(this.homeElements.logo, 5);
        I.seeElement(this.homeElements.logo);
    }

    seeElementsMenu() {
        I.seeElement(this.homeElements.menu);
    }

    seeElementsBanner() {
        I.seeElement(this.homeElements.banner);
    }

    clickElementMenu(acces) {
        const selector = `//a[@id="telcel-menu-principal-boton" and contains(text(), "${acces}")]`;
        I.moveCursorTo(selector);
    }

    seeElementsMenuMovil() {
        I.seeElement(this.homeElements.movil);
    }

    seeElementsMenuPPR() {
        I.seeElement(this.homeElements.ppr);
    }

    goToPageEnd() {
        I.scrollPageToBottom();
        I.click('//*[@id="acepto-cookies"]');
    }

    clickLink() {
        I.click('//*[@id="telcel-footer-copyright-derecha-contenido"]/ul/li[2]/a');
    }

    seeResults() {
        I.waitForElement('//h1[text()="Términos y condiciones"]', 3);
        I.seeElement('//h1[text()="Términos y condiciones"]');
    }

}

module.exports = new home_page();
