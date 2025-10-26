const {I} = inject();

class TC001Page{
    elements = {
        busqueda: 'textarea[title="Buscar"]',        
    }

    urls = {
        telcel: 'https://www.telcel.com',
    }

    carga(){
        I.amOnPage(this.urls.telcel);
    }

    portal(){
        I.waitForURL(this.urls.telcel);
        I.waitForElement('//title[contains(text(), "Telcel es la Red - Sitio Oficial")]');
        
    }

    verelementos(){
    I.seeElement('a[title=Telcel]', //logo
                     'a[id="telcel-menu-principal-boton"]', //boton menu
                     '//div[contains(@class, "bannerprincipal")]'); //banner principal
    I.saveScreenshot('TC001.png');
    }
    
}

module.exports = new TC001Page();