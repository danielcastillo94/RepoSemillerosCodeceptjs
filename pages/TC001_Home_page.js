const { I } = inject();

class home_page {

    homeElements = {
        //Elementos para "Verificar la carga del portal y de los elementos"
        logo: 'img.js-responsive-image',
        menu: '//*[@class="navbar-nuevo-menu btn"]',
        banner: '//*[@id="pagina-contenido-d670c30d2d"]/div[2]/div[1]/div/div/div[1]/div/div[1]/div[2]',

        //Elementos para "Verificar navegacion hacia la seccion de planes y submenus"
        movil: '//*[@id="level-1"]/li[1]/a',
        ppr: '//*[@id="level-1"]/li[1]/div/div[1]/ul/li[3]/a', //pagos paquetes y recargas (ppr)

        //Elementos para "Verificar ingreso al detalle de un plan especifico"
        button5g: '//button[text()="Conoce más"]',
        moreButton: '//*[@id="telcel_backoffice_banner"]/div[1]/div[2]/div[1]/div[2]/div/a',

    }
    searchBarElements={
        //Elmentos para "Verificar funcionalidad de la barra de busqueda"
        searchBar: '//*[@name="search"]',
        searchButton: '//button[text()="Buscar"]',
        oppoText: '//*/swiper-slide[1]/div/a/div/div[3]/div[1]/p[2]',
        oppoImage: '//*[@id="slide-ngb-slide-2"]/div/cx-media/img',
        oppoMemory: '//h3[text()="Memoria"]',
        oppoPrice: '.cx-product-price-plan[class]',
    }

    formElements={
        //Elementos para Verificar la carga correcta de los elementos del formulario
        helpText: '//*[@id="level-1"]/li[5]/a',
        contactText: '//a[text()="Contáctanos"]',
        emailText: '//span/a[text()="Correo Electrónico"]',
        nameInput: '//input[@id="contacto"]',
        phoneInput:'//input[@id="telefono"]',
        sendButton: '//a[@id="form-btn"]'
    }

    countryElements={
        countryIcon: '//*[@id="lista-subopciones-menu"]/ul/li[2]/a',
        countrySelection: '//a[text()="Baja California"]',
        countryText: '//span[text()="Baja California"]'
    }

    //Metodo para verificar el cambio de regionalizacion
    verifyCountryChange(){
        I.click(this.countryElements.countryIcon);
        I.click(this.countryElements.countrySelection);
        I.waitForElement(this.countryElements.countryText, 3)
        I.seeElement(this.countryElements.countryText);
    }

    //Metodo para "Verificar la carga correcta de los elementos del formulario"
    verifyFormElements(){
        //navegacion
        I.moveCursorTo(this.homeElements.menu);
        I.moveCursorTo(this.formElements.helpText);
        I.click(this.formElements.contactText);
        //verificacion
        I.waitForElement(this.formElements.emailText, 3);
        I.click(this.formElements.emailText);
        I.scrollTo(this.formElements.nameInput);
        I.seeElement(this.formElements.nameInput);
        I.seeElement(this.formElements.phoneInput);
        I.seeElement(this.formElements.sendButton);        
    }

    goToTelcel() {
        I.amOnPage("/");
    }

    seeElementsLogo() {
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

    //Metodos para "Verificar ingreso al detalle de un plan especifico"
    verifyElement5gButton() {
        I.scrollTo(this.homeElements.button5g);
        I.click(this.homeElements.button5g);
        I.waitForElement(this.homeElements.moreButton, 5);
        I.seeElement(this.homeElements.moreButton);
    }

    //Metodo para "Verificar funcionalidad de la barra de busqueda"
    verifySearchBar(){
        I.click(this.homeElements.searchBar);
        I.fillField("search", "oppo");
        I.pressKey("Enter");
        I.waitForElement(this.homeElements.oppoText, 5);
        I.seeElement(this.homeElements.oppoText);
        I.click(this.homeElements.oppoText);
        I.waitForElement(this.homeElements.oppoImage, 5);
        I.seeElement(this.homeElements.oppoImage);
        I.seeElement(this.homeElements.oppoPrice);
        I.seeElement(this.homeElements.oppoMemory);    
    }

}

module.exports = new home_page();
