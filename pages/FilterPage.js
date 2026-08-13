const {I} = inject();

class FilterPage {
    urls = {
        urlpag2: 'https://www.liverpool.com.mx/tienda/tenis-casuales-de-hombre/catst7543627/page-2',
        urlfiltro: 'https://www.liverpool.com.mx/tienda/tenis-casuales-de-hombre/N-iT46Ie4aAvzNe8M90pRVO%2BRqonh2rxg9cRsCjK%2BF%2FAmOqf7Q1%2BawJsgofXVBQC8O',
        urltresfiltros: 'https://www.liverpool.com.mx/tienda/tenis-casuales-de-hombre/N-iT46Ie4aAvzNe8M90pRVO%2BRqonh2rxg9cRsCjK%2BF%2FAmJ8Cf2gyqO1Wdd779k7W6FzVuuU%2BqIJk%2FBpoS7Y09tztV9F0Pl0yzicihHO572ZJc%3D',
    };
    locator = {
        btnordenadar: '//button[@id="sorting-button"]',
        inputminimo: '//input[@data-testid="at-text-min-input"]',
        inputmaximo: '//input[@data-testid="at-text-max-input"]',
        btnaplicarfiltro: '//button[@data-testid="chevron-right-icon-btn"]',
        btnsiguientepagina: '//a[contains(text(),"2")]',
        opcionmenorprecio: '//*[@id="sorting-options"]/li[3]',

        textarticulos: '//p[@class="font-semibold text-body-base"]',
        textDescuento: '//span[contains(text(), "Descuentos")]',
        textmarcas: '//span[contains(text(), "Marcas")]',
        textcolor: '//span[contains(text(), "Color")]',
        headerteniscasual: '//h1[contains(text(),"Tenis Casuales")]',
        inputmarfoot: '//span[contains(text(),"360 FOOTWEAR")]',
        inputamericanfire: '//span[contains(text(),"AMERICAN FIRE")]',
        inputASICS: '//span[@data-testid="plp-page-plp-filter-brand-filter-brand-checkbox-group-14-checkbox"]',
        btnmasmarcas: '//button[@data-testid="plp-page-plp-filter-brand-filter-brand-checkbox-group-show-all-items-btn"]',
        btnamericanborrar: '//button[@data-testid="AMERICAN FIRE"]',
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

    //TC010-----------------
    filtromarcafoot(){
        I.moveCursorTo(this.locator.textDescuento);
        I.scrollTo(this.locator.textmarcas);
        I.click(this.locator.inputmarfoot);
        //esperara  que cargen los componentes de la pagina
        I.wait(5);
    }
    filtroaplicado(){
        I.waitForURL(this.urls.urlfiltro);
        I.waitForVisible(this.locator.textarticulos,
                        this.locator.btnordenadar,
                        this.locator.textDescuento, 5);
    }

    //TC011----------------
    filtroamericanfire(){
        //despues de aplcair el primer filtro navegamos a los filtros y aplciamos el segundo
        I.moveCursorTo(this.locator.textDescuento);
        I.scrollTo(this.locator.textmarcas);
        I.click(this.locator.btnmasmarcas);
        I.click(this.locator.inputamericanfire);
        //esperara  que cargen los componentes de la pagina
        I.wait(5);
    }
    filtroasics(){
        //I.scrollTo(this.locator.textmarcas);
        I.click(this.locator.btnmasmarcas);
        I.scrollTo(this.locator.inputASICS);
        I.click(this.locator.inputASICS);
    }
    filtrosaplicados(){
        I.waitForURL(this.urls.urltresfiltros);
    }

    //TC012----------------
    quitarfiltro(){
        I.scrollTo(this.locator.inputASICS);
        I.click(this.locator.inputASICS);
        I.wait(2);//esperar a que se vea el cambio
        I.scrollTo(this.locator.inputmarfoot);
        I.click(this.locator.inputmarfoot);
        I.wait(2);//esperar a que se vea el cambio
    }
    verificarfiltro(){
        I.waitForVisible(this.locator.btnamericanborrar, 5);
        I.scrollPageToBottom();
    }
}

module.exports = new FilterPage();