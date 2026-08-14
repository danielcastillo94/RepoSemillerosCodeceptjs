const { I } = inject();

class livFilterPage {
    urls = {
        urlMuebles: 'https://www.liverpool.com.mx/tienda/muebles/cat860739',
        urlRopa: 'https://www.liverpool.com.mx/tienda?s=ropa',
        urlCalzado: 'https://www.liverpool.com.mx/tienda?s=calzado',
        urlpagina2Calzado: 'https://www.liverpool.com.mx/tienda/N-a55H%2BwvpGpiXn5TAkYDIhBNe8hVTD0RkMz8eLpj%2B7eo%3D/page-2?s=calzado',
        urlTallaPantalon: 'https://www.liverpool.com.mx/tienda/pdp/pantalon-gap-877625-su26-baggy-algodon/1195133890?skuid=1195134410',
        urlColorCamisa: 'https://www.liverpool.com.mx/tienda/pdp/playera-aeropostale-manga-corta-para-hombre/1193552241?skuid=1197369007',
        urlVestido: 'https://www.liverpool.com.mx/tienda/pdp/vestido-midi-casual-para-mujer/1197915917?skuid=1197917535'

    };
    fields = {
        categoriasPrincipal: '[data-testid="blt26617d4f2e17657d-header-button-category"]',
        mueblesCategoria: '//span[contains(text(),"Muebles")]',
        homeMuebles: '//h2[contains(text(), "Muebles")]',
        buttonOrdenar: '//span[@class="body-sm-regular ml-1 whitespace-nowrap"]',
        menorPrecio: '//li[contains(text(),"Menor precio")]',
        rangoMenor: '//input[@data-testid="at-text-min-input"]',
        rangoMayor: '//input[@data-testid="at-text-max-input"]',
        botonAplicarRango: '//button[@data-testid="chevron-right-icon-btn"]',
        filtroMarca: '//input[@value="ADIDAS"]',
        resultadosmarca: '//span[contains(text(),"adidas")]',
        etiquetaTalla: '//span[contains(text(),"Talla")]',
        etiquetaColor: '//span[contains(text(),"Color")]',
        filtro24H: '//input[@value="24 HORAS"]',
        pagina2Calzado: '//a[@data-testid="plp-page-pagination-link" and contains(@href, "/page-2")]',
        resultado24H: '//*[contains(text(),"24 HORAS")]',
        resultadoAdidas: '//*[contains(text(),"ADIDAS")]',
        etnia: '//h3[contains(text(),"Zapato para mujer")]',
        filtroTalla: '//input[@value="2X-Chico"]',
        opcionTallaPantalon: '//img[@data-testid="1195133890-image-slider-image-0"]',
        resultadoTallaPantalon: '//span[contains(text(), "GAP")]',
        filtroColor: '//input[@value="Azul Claro~~#0480ed"]',
        opcionColorCamisa: '//img[@data-testid="1193552241-image-slider-image-0"]',
        resultadoColorCamisa: '//span[contains(text(), "AÉROPOSTALE")]',
        colorTallaVestido: '//img[@data-testid="1197915917-image-slider-image-0"]',
        resultadoTallaVestido: '//span[contains(text(), "GAP")]',
        resultadoColorVestido: '//img[@data-testid="pdp-1197915917-gallery__gallery-0__image__image"]'

    };

    //TC0006------------------------------------------------------------------------------
    home() {
        I.amOnPage('/');
    }
    categoriasMuebles() {
        I.waitForElement(this.fields.categoriasPrincipal);
        I.click(this.fields.categoriasPrincipal);
    }
    categoriaUnica() {
        I.waitForElement(this.fields.mueblesCategoria, 5);
        I.click(this.fields.mueblesCategoria);
        I.waitForURL(this.urls.urlMuebles);
        I.seeElement(this.fields.homeMuebles);
    }

    //TC0007---------------------------------------------------------------------   
    homeRopa() {
        I.amOnPage(this.urls.urlRopa);
    }

    ButtonRelevancia() {
        I.waitForElement(this.fields.buttonOrdenar);
        I.click(this.fields.buttonOrdenar);
    }

    ButtonMenorPrecio() {
        I.waitForElement(this.fields.menorPrecio);
        I.click(this.fields.menorPrecio);
        I.wait(5);

    }
    //TC0008---------------------------------------------------------------------------
    seleccionRango() {//Busca el cuadro para escribir el rango menor
        I.waitForElement(this.fields.rangoMenor);
        I.scrollTo(this.fields.rangoMenor);
        I.click(this.fields.rangoMenor);
        I.fillField(this.fields.rangoMenor, 500);
        //Busca el cuadro para escribir el rango de mayor precio
        I.waitForElement(this.fields.rangoMayor);
        I.scrollTo(this.fields.rangoMayor);
        I.click(this.fields.rangoMayor);
        I.fillField(this.fields.rangoMayor, 10000);
    }
    //TC0009-----------------------------------------------------------------------------------
    validarRango() {
        I.waitForElement(this.fields.botonAplicarRango);
        I.click(this.fields.botonAplicarRango);
        I.executeScript(() => {
            window.scrollBy(0, 500);
        });
        I.wait(5);
    }
    //TC0010------------------------------------------------------------------------
    homeCalzado() {
        I.amOnPage(this.urls.urlCalzado);
    }
    filtroMarca() {
        I.waitForElement(this.fields.filtroMarca);
        I.click(this.fields.filtroMarca);

    }
    resultadoAddidas() {
        I.waitForElement(this.fields.resultadosmarca);
        I.wait(5);
    }
    //TC0011---------------------------------------------------------------------------------
    filtroNike() {
        I.waitForElement(this.fields.filtro24H);
        I.click(this.fields.filtro24H);
    }
    resultadosCombinados() {
        I.wait(2);
        // Verificar si el botón de página 2 existe, si existe entonces hacer click
        // Si no existe, validar los resultados en la página actual
        I.waitForElement(this.fields.resultado24H, 5);
        I.seeElement(this.fields.resultadoAdidas);
    }
    //TC0012-----------------------------------------------------------------
    DesmarcarAddidas() {
        I.wait(3);
        I.waitForElement(this.fields.filtroMarca);
        I.click(this.fields.filtroMarca);
    }
    validarMarcaDeseleccionada() {
        I.executeScript(() => window.scrollBy(0, 500));
        I.wait(1);
        I.waitForElement(this.fields.etnia, 3);
        I.scrollPageToTop();

    }
    //TC0013---------------------------------------------------------------------
    seleccionarTalla() {
        I.waitForElement(this.fields.filtroTalla, 5);
        I.scrollTo(this.fields.filtroTalla);
        I.click(this.fields.filtroTalla);
        I.wait(4);
        I.waitForElement(this.fields.opcionTallaPantalon, 5);
        I.scrollTo(this.fields.opcionTallaPantalon);
        I.click(this.fields.opcionTallaPantalon);

    }

    validarFiltroTalla() {
        I.waitForURL(this.urls.urlTallaHollister);
        I.wait(2);
        I.scrollPageToTop();
        I.waitForElement(this.fields.resultadoTallaPantalon, 5);
        I.seeElement(this.fields.resultadoTallaPantalon);
    }
    //TC0014-----------------------------------------------------------------
    seleccionarColor() {
        I.waitForElement(this.fields.filtroColor, 5);
        I.scrollTo(this.fields.filtroColor);
        I.click(this.fields.filtroColor);
        I.wait(4);
        I.waitForElement(this.fields.opcionColorCamisa, 5);
        I.scrollTo(this.fields.opcionColorCamisa);
        I.click(this.fields.opcionColorCamisa);
    }

    validarFiltroColor() {
        I.waitForURL(this.urls.urlColorCamisa);
        I.wait(2);
        I.scrollPageToTop();
        I.seeElement(this.fields.resultadoColorCamisa);
    }
    //TC0015---------------------------------------------------------------------------------------
    validarTalla() {
        I.waitForElement(this.fields.filtroTalla, 5);
        I.scrollTo(this.fields.filtroTalla);
        I.click(this.fields.filtroTalla);
        I.wait(4);
    }
    validarcolor() {
        I.wait(3);
        I.waitForElement(this.fields.filtroColor, 5);
        I.scrollTo(this.fields.filtroColor);
        I.click(this.fields.filtroColor);
        I.wait(4);
        I.waitForElement(this.fields.colorTallaVestido, 5);
        I.scrollTo(this.fields.colorTallaVestido);
        I.click(this.fields.colorTallaVestido);
    }
    validarTallaYColor() {
        I.waitForURL(this.urls.urlVestido);
        I.wait(2);
        I.scrollPageToTop();
        I.waitForElement(this.fields.resultadoTallaVestido);
        I.seeElement(this.fields.resultadoTallaVestido);
        I.seeElement(this.fields.resultadoColorVestido);
    }
}


module.exports = new livFilterPage();