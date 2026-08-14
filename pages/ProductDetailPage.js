const {I} = inject();

class ProductDetailPage{
    url = {
        urlcatplayera: 'https://www.liverpool.com.mx/tienda/playeras/catst16655654',
        urlplayeraelejida: 'https://www.liverpool.com.mx/tienda/pdp/playera-aeropostale-cuello-redondo-para-hombre/1191575057?skuid=1191575101',

    };

    locator = {
        enlaceproducto: '//a[@data-testid="1191575057-card-card-link"]',
        textdetalleprod: '//h2[contains(text(),"Detalles del Producto")]',
        btncaracteristicas: '//button[@data-testid="ml-list-item-specs"]',
        textgeneral: '//h4[contains(text(),"General")]',
        textdetalles: '//h4[contains(text(),"Detalles")]',
        textcomposicion: '//h4[contains(text(),"Composición")]',
        textdimenciones: '//h4[contains(text(),"Dimensiones")]',
        spantallagrande: '//span[@data-testid="plp-page-plp-filter-attributes.rzlv_tallaRopa-attributes.rzlv_tallaRopa-checkbox-group-4-checkbox"]',
        btnborrartalla: '//button[@data-testid="Grande"]',
        spancolorazuloscuro: '//span[@data-testid="plp-page-plp-filter-colors-filter-:R1csl48pb9utsq:-color-checkbox-group-3-checkbox"]',
        btnborrarcolor: '//button[@data-testid="Azul Oscuro"]',
        imgproducto: '//img[@data-testid="pdp-1191575057-gallery__gallery-0__image__image"]',
        nombreproducto: '//h1[@class="text-body-2xl text-heading-xs text-base"]',
        precioproducto: '//span[@class="text-heading-2xl font-bold text-price-primary font-bold"]',
        color: '//p[contains(text(),"Color")]',
        tamanio: '//p[contains(text(),"Tamaño")]',
        btnenvio: '//button[@data-testid="product-configurator-delivery-selection-card-Recibe a domicilio"]',
        btnrecoger: '//button[@data-testid="product-configurator-delivery-selection-card-Click & Collect"]',
        btncerrarimg: '//span[@data-testid="pdp-1191575057-gallery-details__close-btn-icon"]',
        btnzooimg: '//span[@data-testid="pdp-1191575057-gallery-details__close-zoom-in-icon"]',
        numeroimge: '//span[@class="font-semibold text-body-xl"]',
        btnimgantes: '//button[@data-testid="pdp-1191575057-gallery-details__previous-item-btn"]',
        btnimgsiguiente: '//button[@data-testid="pdp-1191575057-gallery-details__next-item-btn"]',
    };

    //Given--------------------------------
    iniciocatplayera(){
        I.amOnPage(this.url.urlcatplayera);
    }
    aplicacionfiltros(){
        I.click(this.locator.spantallagrande);
        I.waitForVisible(this.locator.btnborrartalla, 10);
        I.click(this.locator.spancolorazuloscuro);
        I.waitForVisible(this.locator.btnborrarcolor, 10);
    }
    productoelejido(){
        I.click(this.locator.enlaceproducto);
        I.waitForURL(this.url.urlplayeraelejida);
    }

    //TC020------------------------------
    detallesproducto(){
        I.scrollTo(this.locator.textdetalleprod);
        I.click(this.locator.btncaracteristicas);
        I.waitForVisible(this.locator.textgeneral,
                        this.locator.textdetalles,
                        this.locator.textcomposicion,
                        this.locator.textdimenciones, 5
        );
        
    }
    //TC021------------------------------
    caracteristicasbasicas(){
        I.waitForVisible(this.locator.nombreproducto,
                        this.locator.color,
                        this.locator.tamanio,
                        this.locator.btnenvio,
                        this.locator.btnrecoger, 10
        );
    }
    //TC022------------------------------
    galeriaimagenes(){
        I.click(this.locator.imgproducto);
        I.waitForVisible(this.locator.btncerrarimg,
                        this.locator.btnimgsiguiente, 
                        this.locator.numeroimge, 5
        );
        
    }
}

module.exports = new ProductDetailPage();