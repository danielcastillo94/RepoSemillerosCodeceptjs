const {I} = inject();

class FilterPage {
    urls = {
        urlpag2: 'https://www.liverpool.com.mx/tienda/tenis-casuales-de-hombre/catst7543627/page-2',
    };
    locator = {
        btnordenadar: '//button[@id="sorting-button"]',
        inputminimo: '//input[@data-testid="at-text-min-input"]',
        inputmaximo: '//input[@data-testid="at-text-max-input"]',
        btnaplicarfiltro: '//button[@data-testid="chevron-right-icon-btn"]',
        btnsiguientepagina: '//a[contains(text(),"2")]',
        opcionmenorprecio: '//*[@id="sorting-options"]/li[3]',
    };
    //TC007-----------------
    opcionesorden(){
        I.click(this.locator.btnordenadar);
        I.waitForVisible(this.locator.opcionmenorprecio, 5);
    }
    ordenmenorprecio(){
        I.click(this.locator.opcionmenorprecio);
    }

    //TC008-----------------
    rangoprecio(){
        I.fillField(this.locator.inputminimo, "1000");
        I.fillField(this.locator.inputmaximo, "5000");
    }
    aplicarrangoprecio(){
        I.click(this.locator.btnaplicarfiltro);
    }
    validarprecios(){
        I.scrollPageToBottom();
        I.click(this.locator.btnsiguientepagina);
        I.waitForURL(this.urls.urlpag2);
        I.scrollPageToBottom();
    }
}

module.exports = new FilterPage();