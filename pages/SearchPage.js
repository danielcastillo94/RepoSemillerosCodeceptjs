const {I} = inject();

class SearchPage {
    urls = {
        urlpantalo: 'https://www.liverpool.com.mx/tienda?s=pantalon%20hombre',
        urldid: 'https://www.liverpool.com.mx/tienda?s=didi',
        urlinfopantalon: 'https://www.liverpool.com.mx/tienda/pdp/jeans-slim-aero-lavado-stone-wash-para-hombre/1180850367',

    };

    locator = {
        searchbar: '//input[@placeholder="Buscar por producto, categoría y más..."]',
        headerresult: '//h1[contains(text(), "Pantalon hombre")]',
        imgresult: '//*[@id="plp-page-card-product-list"]/a[2]/section/div[1]/div/div[2]/div[1]/div/div[1]/img',
        precioresult: '//span[@class="text-heading-2xl font-bold text-price-primary font-bold"]',
        colorresult: '//p[contains(text(), "Color")]',
        btnenvio: '//span[contains(text(), "Recibe a domicilio")]',
        btnrecoger: '//span[contains(text(), "Recoge en tienda")]',
        headerdetails: '//h2[contains(text(), "Detalles del Producto")]',
        headerfail: '//h2[@class="w-full text-body-base font-normal mb-6 md:mb-4"]',

    };

    //GIVEN-----------
    inicio(){
        //validar la pagina de inicio
        I.amOnPage('/');
    }

    //TC01------------
    busquedavalida(){
        I.fillField(this.locator.searchbar, "pantalon hombre");
        I.pressKey('Enter');
    }
    //esperamos a que los resulatdos se muestren
    async resultadosbuscados(){
        I.waitForURL(this.urls.urlpantalo);
        I.see('Pantalon hombre',this.locator.headerresult);
    }

    //TC02------------
    busquedainvalida(){
        I.fillField(this.locator.searchbar, "Didi");
        I.pressKey('Enter');
    }
    //esperamos a que la ulr responda
    async resultadosinvalidos(){
        I.waitForURL(this.urls.urldid);
        I.see('Lo sentimos',this.locator.headerfail);
    }
}

module.exports = new SearchPage();