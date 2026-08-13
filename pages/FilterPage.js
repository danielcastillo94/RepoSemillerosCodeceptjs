const {I} = inject();

class FilterPage {
    urls = {
        urlpag2: 'https://www.liverpool.com.mx/tienda/tenis-casuales-de-hombre/catst7543627/page-2',
        urlfiltro: 'https://www.liverpool.com.mx/tienda/tenis-casuales-de-hombre/N-iT46Ie4aAvzNe8M90pRVO%2BRqonh2rxg9cRsCjK%2BF%2FAmOqf7Q1%2BawJsgofXVBQC8O',
        urltresfiltros: 'https://www.liverpool.com.mx/tienda/tenis-casuales-de-hombre/N-iT46Ie4aAvzNe8M90pRVO%2BRqonh2rxg9cRsCjK%2BF%2FAmJ8Cf2gyqO1Wdd779k7W6FzVuuU%2BqIJk%2FBpoS7Y09tztV9F0Pl0yzicihHO572ZJc%3D',
        urlplayeras: 'https://www.liverpool.com.mx/tienda/playeras/catst16655654',
        urlpagplaye: 'https://www.liverpool.com.mx/tienda/playeras/N-GPvjKZuZliStL3lMfgqwbqjfFRr4r3VBqADqX668fHhQzgmKvLE%2FifdWriXyIj7DBE7OKfAWFxTptyAuAdb%2FZw%3D%3D/page-2',
    };
    locator = {
        btnordenadar: '//button[@id="sorting-button"]',
        inputminimo: '//input[@data-testid="at-text-min-input"]',
        inputmaximo: '//input[@data-testid="at-text-max-input"]',
        btnaplicarfiltro: '//button[@data-testid="chevron-right-icon-btn"]',
        btnsiguientepagina: '//span[@data-testid="desktop-plp-page-pagination-chevron-right-icon"]',
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

        hrefplayeras: '//a[@data-testid="blt83f3cb6dcb412235-card"]',
        headerplayeras: '//h1[@data-testid="plp-page-heading-title-title"]',
        spanXchico: '//span[@data-testid="plp-page-plp-filter-attributes.rzlv_tallaRopa-attributes.rzlv_tallaRopa-checkbox-group-1-checkbox"]',
        btnborrartalla: '//button[@data-testid="X-Chico"]',
        btnmastallas: '//button[@data-testid="plp-page-plp-filter-attributes.rzlv_tallaRopa-attributes.rzlv_tallaRopa-checkbox-group-show-all-items-btn"]',
        spancolorazuloscuro: '//span[@data-testid="plp-page-plp-filter-colors-filter-:R1csl48pb9utsq:-color-checkbox-group-3-checkbox"]',
        btnborrarcolor: '//button[@data-testid="Azul Oscuro"]'
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

    //Given para los escenarios 13,14,15
    inicifiltroropa(){
        I.click(this.locator.hrefplayeras);
        I.waitForURL(this.urls.urlplayeras);
        I.waitForVisible( this.locator.headerplayeras, this.locator.textarticulos, this.locator.btnmastallas,10);
    }

    //TC013---------------
    filtrotalla(){
        I.click(this.locator.spanXchico);
        I.waitForVisible(this.locator.btnborrartalla, 10);
    }

    //TC014---------------
    filtrocolor(){
        I.click(this.locator.spancolorazuloscuro);
        I.waitForVisible(this.locator.btnborrarcolor, 10);
    }

    //TC015---------------
    filtrodoblecolortalla(){
        I.waitForVisible(this.locator.btnborrartalla, 
                        this.locator.btnborrarcolor, 10);
        this.revisarresultados();
    }

    //metodo compartido para revisar los resultados de cada filtro
    revisarresultados(){
        I.scrollPageToBottom();
        I.click(this.locator.btnsiguientepagina);
        I.wait(5); //tiempo de espera para que carge la pagina
        I.scrollPageToBottom();
    }
}

module.exports = new FilterPage();