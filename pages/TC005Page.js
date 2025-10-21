const {I} = inject();

class TC005Page{
    elementos = {
        buttoncookies: '//a[@id="acepto-cookies"]',
        barra: 'input[id="buscador-menu-input"]',
        iphone: '//p[contains(text(), "iPhone 17 Pro Max")]',
        botoncompra: '//button[contains(@class, "btn-primary")]',
        botoncarrito: '//button[contains(@class, "addtominicart")]'
    }

    urls = {
        telcel: 'https://www.telcel.com/',
        resultados: 'https://www.telcel.com/buscador?query=iPhone&mundo=Home&subseccion=Home',
        equipo: 'https://www.telcel.com/tienda/producto/telefonos-y-smartphones/apple-iphone-17-pro-max-azul-256gb/71002636'
    }

    busqueda(){
        I.amOnPage(this.urls.telcel);
        I.click(this.elementos.buttoncookies);
        I.fillField(this.elementos.barra, "iPhone");
        I.pressKey('Enter');
        I.waitForURL(this.urls.resultados);
        I.waitForVisible('h3[class="results-num"]');
    }

    seleccionequipo(){
        I.click(this.elementos.iphone);
        I.waitForURL(this.urls.equipo);
    }

    ventanadetalles(){
        I.waitForURL(this.urls.equipo);
        I.waitForVisible('div#slide-ngb-slide-2',//imagen
                         '//h1[contains(text(), "iPhone 17 Pro Max")]',//nombre
                         'div[class="cx-product-price-plan"]',//precio
                         'span[class="color-txt"]',//color
                         '//span[contains(@class, "capacity-txt")]',//capacidad
                         'div[class="title-sim"]',//SIM
                         'input[id="activePayment"]',//cobro
                         this.elementos.botoncarrito,//boton carrito
                         this.elementos.botoncompra);//boton compra
        I.scrollTo('//h2[contains(text(), "Características y especificaciones")]');
    }
    

}
module.exports = new TC005Page();