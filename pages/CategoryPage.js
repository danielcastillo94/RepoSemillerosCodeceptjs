const {I} = inject();

class CategoryPage {
    urls = {
        urlcathombre: 'https://www.liverpool.com.mx/tienda/hombre/cat5020003',
        urlsubcatzapatios: 'https://www.liverpool.com.mx/tienda/zapatos/cat5040004',
        urlvalidarproductenis: 'https://www.liverpool.com.mx/tienda/tenis-casuales-de-hombre/catst7543627'
        };

    locator = {
        categoriahombre: '//a[@href="/tienda/hombre/cat5020003"]',
        imgtenis: '//img[@data-testid="Tenis-image"]',
        subcatzapatos: '//a[@href="/tienda/zapatos/cat5040004"]',
        headersubcatzapatos: '//h1[contains(text(),"Zapatos")]',
        enlacezapatoscasuales:'//a[@data-testid="CATST7543627-card"]',
        imgsubcatteniscasual: '//img[@alt="Tenis Casuales de Hombre"]',
        textsubcatteniscasual:'//h3[contains(text(),"Tenis Casuales")]',
        imgsubcattendepo: '//img[@alt="Tenis Deportivos de Hombre"]',
        textsubcattendepo: '//h3[contains(text(),"Tenis Deportivos")]',
        imgsubcatzapa: '//img[@alt="Zapatos Casuales"]',
        textsubcatzapa: '//h3[contains(text(),"Zapatos Casuales")]',
        headerteniscasual: '//h1[contains(text(),"Tenis Casuales")]',
        imgteniscasual: '//img[@data-testid="1144488671-image-slider-image-0"]',
        nombretenis: '//h3[contains(text(), "Tenis vl court 3.0")]',
        calificaciontenis: '//div[@data-testid="1144488671-rating"]',
        btnordenadar: '//button[@id="sorting-button"]',
        textarticulos: '//p[@class="font-semibold text-body-base"]',
    };
    
    //TC005----------
    //acceso a la categoria Hombre
    categoria(){
        I.click(this.locator.categoriahombre);
        I.waitForURL(this.urls.urlcathombre);
        I.waitForVisible(this.locator.imgtenis, 5);
    }
    //entrando a la subcategoria de hombre, zapatos
    subcategoria(){
        I.click(this.locator.subcatzapatos);
        I.waitForURL(this.urls.urlsubcatzapatios);
    }
    resultadosubcategoria(){
        I.see('Zapatos', this.locator.headersubcatzapatos);
        I.waitForElement(this.locator.imgsubcatteniscasual, 
                        this.locator.textsubcatteniscasual,
                        this.locator.imgsubcattendepo,
                        this.locator.textsubcattendepo,
                        this.locator.imgsubcatzapa,
                        this.locator.textsubcatzapa
        );
    }

    //TC006-------------
    accesosubcattenis(){
        I.click(this.locator.imgsubcatteniscasual);
        I.waitForURL(this.urls.urlvalidarproductenis);
    }
    validarproductos(){
        I.see('Tenis Casuales de Hombre', this.locator.headerteniscasual);
        I.waitForElement(this.locator.textarticulos,
                        this.locator.btnordenadar,
                        this.locator.imgteniscasual,
                        this.locator.nombretenis,
                        this.locator.calificaciontenis, 5);
    }

}

module.exports = new CategoryPage();