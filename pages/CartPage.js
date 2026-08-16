const { I } = inject();

class CartPage {
    urls = {
        urlimg1: 'https://www.liverpool.com.mx/tienda/pdp/playera-levi-s-cuello-redondo-para-hombre/1041644110',
        urlimg2: 'https://www.liverpool.com.mx/tienda/pdp/playera-nautica-cuello-redondo-para-hombre/1074482392?skuid=1097908733',
        urlimg3: 'https://www.liverpool.com.mx/tienda/pdp/playera-aeropostale-cuello-redondo-para-hombre/1186384538',
        urlcatplayera: 'https://www.liverpool.com.mx/tienda/playeras/catst16655654',
        urlcarrito: 'https://www.liverpool.com.mx/tienda/cart',
    };

    locator = {
         spantallagrande: '//span[@data-testid="plp-page-plp-filter-attributes.rzlv_tallaRopa-attributes.rzlv_tallaRopa-checkbox-group-4-checkbox"]',
         spancolorazuloscuro: '//span[@data-testid="plp-page-plp-filter-colors-filter-:R1csl48pb9utsq:-color-checkbox-group-3-checkbox"]',
         btnborrartalla: '//button[@data-testid="Grande"]',
         btnborrarcolor: '//button[@data-testid="Azul Oscuro"]',

        btncantidadproduc: '//button[@data-testid="1041644110-configurator-quantity-increase"]',
        btnagregarbolsa: '//button[@data-testid="add-to-bag-button"]',
        msjconfirmaccion: '//span[contains(text(),"Agregaste")]',
        btntallaproduc1: '//label[@for="size-picker-G-undefined1041644110-1041644156"]',
        btntallaproduc2: '//label[@for="size-picker-M-undefined1074482392-1074488346"]',
        btntallaproduc3: '//label[@for="size-picker-G-undefined1186384538-1186384578"]',
        btneleccioncolorproduc2: '//button[@data-testid="ml-image-picker-image-2"]',
        imgproduc1: '//a[@data-testid="1041644110-card-card-link"]',
        imgproduc2: '//a[@data-testid="1074482392-card-card-link"]',
        imgproduc3: '//a[@data-testid="1186384538-card-card-link"]',

        btncarrito: '//a[@class="flex items-center gap-1 disabled:cursor-default transition-colors p-1 text-header-primary hover:bg-header-secondary rounded-full font-bold"][1]',
        btnseleccionarproducto: '//button[@data-testid="checkout-payment-summary-select-all-btn"]',
        btneliminarproducto3: '//button[@data-testid="delete-button-b5066a6d-5ddd-4fdd-9a01-7bdb61427b56"]',
        btneliminarproducto2: '//button[@data-testid="delete-button-8ad1f84b-1665-4bdc-bf57-c9c85f75d1a0"]',
        btnaddproduc3card: '//button[@data-testid="ml-card-product-mybag-b5066a6d-5ddd-4fdd-9a01-7bdb61427b56-input-cart-item-wrapper-input-cart-item-quantity-increase"]',
        btndelitproduc3card: '//button[@data-testid="ml-card-product-mybag-b5066a6d-5ddd-4fdd-9a01-7bdb61427b56-input-cart-item-wrapper-input-cart-item-quantity-decrease"]',
        total: '//p[contains(text(),"Total")]',
        subtotal: '//p[contains(text(),"Subtotal")]',
    };
    //metodo de navegacion para el TC032
    regresarinicio(){
        I.amOnPage(this.urls.urlcatplayera);
        I.click(this.locator.spantallagrande);
        I.waitForVisible(this.locator.btnborrartalla, 10);
        I.click(this.locator.spancolorazuloscuro);
        I.waitForVisible(this.locator.btnborrarcolor, 10);
    }
    //TC029------------------
    agregarbolsa(){
        I.scrollTo(this.locator.btnagregarbolsa);
        I.click(this.locator.btnagregarbolsa);
        I.wait(3);
    }
    
    //TC030------------------
    cantidadproducto(){
        I.click(this.locator.btncantidadproduc);
    }

    //TC031------------------
    validarmensaje(){
        I.waitForElement(this.locator.msjconfirmaccion);
        I.waitForVisible(this.locator.msjconfirmaccion);
    }

    //TC032------------------
    primerproducto(){
        I.click(this.locator.imgproduc1);
        I.waitForURL(this.urls.urlimg1);
        I.click(this.locator.btntallaproduc1);
        this.agregarbolsa();
        this.regresarinicio();
    }
    segundoproducto(){
        I.scrollTo(this.locator.imgproduc2);
        I.click(this.locator.imgproduc2)
        I.waitForURL(this.urls.urlimg2);
        I.click(this.locator.btneleccioncolorproduc2);
        I.wait(2);
        I.click(this.locator.btntallaproduc2);
        this.agregarbolsa();
        this.regresarinicio();
    }
    tercerproducto(){
        I.scrollTo(this.locator.imgproduc3);
        I.click(this.locator.imgproduc3)
        I.waitForURL(this.urls.urlimg3);
        I.click(this.locator.btntallaproduc3);
        this.agregarbolsa();
    }

    //TC033------------------
    validarcarrito(){
        I.click(this.locator.btncarrito);
        I.waitForURL(this.urls.urlcarrito);
        I.waitForVisible(this.locator.btnseleccionarproducto,
                        this.locator.btneliminarproducto3,
                        this.locator.btnaddproduc3card,
                        this.locator.btndelitproduc3card, 5
        );
        I.scrollPageToBottom();
    }

    //TC034------------------
    validadprecios(){
        I.scrollPageToTop();
        I.waitForVisible(this.locator.total, this.locator.subtotal);
    }
}

module.exports = new CartPage();