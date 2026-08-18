const {I, SearchPage, MenuPage, CategoryPage, FilterPage} = inject();
require('dotenv').config();

class ResultPage {
    urls = {
        urlpantalo: 'https://www.liverpool.com.mx/tienda?s=pantalon%20hombre',
        urlinfopantalon: 'https://www.liverpool.com.mx/tienda/pdp/jeans-slim-aeropostale-lavado-stone-wash-para-hombre/1180850367',
        urlzapatos: 'https://www.liverpool.com.mx/tienda/zapatos/cat5040004',
        urlzapatosconfiltro: 'https://www.liverpool.com.mx/tienda/tenis-casuales-de-hombre/N-iT46Ie4aAvzNe8M90pRVO5cDsozXlN996IBB7goqY12UpmVpE6wGWVOM1JHMYWOG',
    };

    locator = {
        searchbar: '//input[@placeholder="Buscar por producto, categoría y más..."]',
        headerresult: '//h1[contains(text(), "Pantalon hombre")]',
        headeroptionresult: '//h1[contains(text(), "Jeans slim")]',
        imgresult: '//img[@data-testid="1180850367-image-slider-image-0"]',////img[@data-testid="1180850367-image-slider-image-0"]
        imgdetalle: '//img[@data-testid="pdp-1180850367-gallery__gallery-1__image__image"]',
        precioresult: '//span[@class="text-heading-2xl font-bold text-price-primary font-bold"]',
        colorresult: '//p[contains(text(), "Color")]',
        tamanioresult: '//button[@data-testid="selection-button-simple-picker-undefined-button-selection"]',
        btnenvio: '//span[contains(text(), "Recibe a domicilio")]',
        btnrecoger: '//span[contains(text(), "Recoge en tienda")]',
        btncomprar: '//button[@data-testid="buy-now-button"]',
        btnagregar: '//button[@data-testid="add-to-bag-button"]',
        headerdetails: '//h2[contains(text(), "Detalles del Producto")]',
        btncaracteristicas: '//button[@data-testid="ml-list-item-specs"]',
        headerfail: '//h2[@class="w-full text-body-base font-normal mb-6 md:mb-4"]',
        paneldetallado: '//div[@class="relative min-w-0 flex-1"]',


        imgsubcatteniscasual: '//img[@alt="Tenis Casuales de Hombre"]',
        textsubcatteniscasual:'//h3[contains(text(),"Tenis Casuales")]',
        imgsubcattendepo: '//img[@alt="Tenis Deportivos de Hombre"]',
        textsubcattendepo: '//h3[contains(text(),"Tenis Deportivos")]',
        imgsubcatzapa: '//img[@alt="Zapatos Casuales"]',
        textsubcatzapa: '//h3[contains(text(),"Zapatos Casuales")]',
        headerteniscasual: '//h1[contains(text(),"Tenis Casuales")]',
        btnordenadar: '//button[@id="sorting-button"]',
        textarticulos: '//p[@class="font-semibold text-body-base"]',
        textprecios: '//span[contains(text(),"Precios")]',
        inputminimo: '//input[@data-testid="at-text-min-input"]',
        inputmaximo: '//input[@data-testid="at-text-max-input"]',
        contenprecio: '//div[@class="max-h-full overflow-y-visible pl-6 transition-all"]',
        inputseleccionvalida: '//*[@id="main-content"]/section/div[3]/section[1]/div/div/div[2]/div/div[2]/div/div/div/fieldset/div/label[1]/span[1]/input',
        btnrangoprecio: '//button[@data-testid="$100.0 -$500.0"]',

        btniniciosesion: '//button[@data-testid="blt26617d4f2e17657d-header-menu-dropdown-button"]',
        inputcorreo: '//input[@class="input cd9adde91 c2de5e435"]',
        inputcontrasenia: '//input[@class="input cd9adde91 c5c2bd33f"]',
        btniniciarsesion: '//button[@class="c73a1ad3f c39d6a68a cd1d573fa c11133b5c c91f7cb68"]',
        btnaceptarsms: '//button[@class="c73a1ad3f c39d6a68a cd1d573fa c11133b5c ca71de123"]',
        ordenrelevante: '//li[contains(text(),"Mejor calificados")]',
        ordenmenor: '//li[contains(text(),"Menor precio")]',
        ordenmayor: '//li[contains(text(),"Mayor precio")]',
        ordennovedad: '//li[contains(text(),"Novedad")]',

    };

    //Given para ordenar
    iniciarsesion(){
        I.amOnPage('/');
        I.wait(5); //tiempo de espera que que carge bien la pagina
        I.click(this.locator.btniniciosesion);
        I.wait(2); //tiempo de espera para cargar el inicio de sesion
        I.fillField(this.locator.inputcorreo, process.env.EMAIL);
        I.fillField(this.locator.inputcontrasenia, process.env.PASSWORD);
        I.click(this.locator.btniniciarsesion);
        I.wait(40);
        I.click(this.locator.btnaceptarsms);
    }
    buscarproducto(){
        MenuPage.categorias();
        CategoryPage.categoria();
        FilterPage.inicifiltroropa();
        FilterPage.filtrotalla();
        FilterPage.filtrocolor();
    }

    //TC003----------------
    resultadosbuscados(){
        //utilziando el metodo de TC001 para esperar respuesat de la url de la busqueda
        SearchPage.resultadosbuscados();
        I.waitForElement(this.locator.imgresult);
        I.click(this.locator.imgresult)
    }
    
    detallesbusqueda(){
        I.waitForURL(this.urls.urlinfopantalon);
        I.waitForVisible(this.locator.headeroptionresult,
                        this.locator.imgdetalle,
                        this.locator.precioresult,
                        this.locator.colorresult,
                        this.locator.tamanioresult,
                        this.locator.btnenvio,
                        this.locator.btnrecoger,
                        this.locator.btncomprar,
                        this.locator.btnagregar, 5);
        I.scrollTo(this.locator.headerdetails);
        I.click(this.locator.btncaracteristicas);
        I.waitForElement(this.locator.paneldetallado, 5);
    }

    //TC009----------------
    filtrounico(){
        I.click(this.locator.inputseleccionvalida);
        I.waitForVisible(this.locator.btnrangoprecio, 5);
    }
    filtroaplicado(){
        I.see('Tenis Casuales de Hombre', this.locator.headerteniscasual);
        I.waitForElement(this.locator.textarticulos,
                        this.locator.btnordenadar,
                        this.locator.contenprecio, 5);
        I.scrollPageToBottom();
    }

    //TC016----------------
    ordenrelivante(){
        I.click(this.locator.btnordenadar);
        I.waitForVisible(this.locator.ordenrelevante);
        I.click(this.locator.ordenrelevante);
    }

    //TC017----------------
    ordenmenorprecio(){
        I.click(this.locator.btnordenadar);
        I.waitForVisible(this.locator.ordenmenor);
        I.click(this.locator.ordenmenor);
    }

    //TC018----------------
    ordenmayorprecio(){
        I.click(this.locator.btnordenadar);
        I.waitForVisible(this.locator.ordenmayor);
        I.click(this.locator.ordenmayor);
    }

    //TC019----------------
    ordenmasnuevo(){
        I.click(this.locator.btnordenadar);
        I.waitForVisible(this.locator.ordennovedad);
        I.click(this.locator.ordennovedad);
    }
}

module.exports = new ResultPage();