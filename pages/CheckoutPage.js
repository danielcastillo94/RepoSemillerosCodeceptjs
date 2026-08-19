const {I, CartPage, WishlistPage, CategoryPage, FilterPage, ResultPage, ProductDetailPage, StockPage} = inject();
require('dotenv').config();

class CheckoutPage{
    urls = {
        urlcheckout: 'https://www.liverpool.com.mx/tienda/oneCheckout',
    };

    locartor = {
        btncomprar: '//button[@data-testid="checkout-payment-summary-button"]',
        btncupon: '//button[@data-testid="one-checkout-page-coupons"]',
        contentcupon: '//div[@class="flex items-center h-14 w-full gap-6 px-5 py-4 md:px-4"]',
        inputcupon: '//input[@data-testid="coupon-list-coupon-input-input"]',
        btnaplicarcupon: '//span[contains(text(),"Aplicar")]',
        btnclosecupon: '//span[contains(text(),"close")]',
        btncambiardireccion: '//span[contains(text(),"Cambiar")]',
        contentnuevadireccion: '//h3[contains(text(),"Selecciona una dirección")]',
        btnagregardireccion: '//button[@data-testid="delivery-selector-add-address-button"]',
        contentagregardireccion: '//h3[contains(text(),"Agregar dirección")]',
        btnusardireccion: '//button[@data-testid="delivery-selector-form-submit-button"]',
        //tarjeta
        btntarjetas: '//button[@data-testid="credit-debit-button"] | (//span[contains(text(),"Cambiar")])[2]',
        contentformapago: '//h3[contains(text(),"Selecciona una forma de pago")]',
        btnagregartarjeta: '//button[@data-testid="payment-method-selector-add-card-button"]',
        contentdatostarjeta: '//div[@class="space-y-3"]',
        aliastarjeta: '//label[contains(text(),"Alias de tarjeta")]',
        usarnombrecuenta: '//input[@value="useAccountName"]',
        numerotarjeta: '//input[@placeholder="0000 0000 0000 0000"]',
        tarjetapordefecto: '//input[@value="isDefault"]',
        fechavencimiento: '//input[@name="expiryMonth"]',
        CVV: '//input[@name="cvv"]',
        confirmartarjeta: '//button[contains(text(),"Continuar")]',

        //localizadores para el formulario de una nueva direccion
        aliasdireccion: '//input[@placeholder="Alias de dirección"]',
        codigopostal: '//input[@placeholder="Código postal"]',
        ciudad: '//input[@placeholder="Ciudad"]',
        calle: '//input[@placeholder="Calle"]',
        numeroexterior: '//input[@placeholder="Número exterior"]',
        telefonocelular: '//input[@placeholder="Teléfono celular"]',
        telefonoparticular: '//input[@placeholder="Teléfono particular"]',
        validardireccionpordefecto: '//span[@class="text-body-sm"]',

        btnfinalizarcompra: '//button[@data-testid="one-checkout-page-button"]',

    }

    //TC047-48---------------------
    validarcupon(){
        I.scrollPageToTop();
        I.click(this.locartor.btncomprar);
        I.click(this.locartor.btncupon);
        I.waitForElement(this.locartor.contentcupon);
        I.fillField(this.locartor.inputcupon, process.env.CUPON);
        I.click(this.locartor.btnaplicarcupon);
        I.click(this.locartor.btnclosecupon);
    }
    validardescuento(){
        CartPage.total();
    }

    //Given para el Feature: Checkout-------------------------
    iniciarsesion(){
        WishlistPage.iniciarsesion();
    }
    categoriaplayera(){
        I.amOnPage('/');
        ResultPage.buscarproducto();
        //CategoryPage.categoria(); //entra a la categoria hombre
        //FilterPage.inicifiltroropa(); //entra a playeras
        //FilterPage.filtrotalla(); //aplica un filtro talla grande
        //FilterPage.filtrocolor(); //aplica filtro color azul orcuro

    }
    elegirproducto(){
        ProductDetailPage.productoelejido();
    }
    agregarproductocarrito(){
        StockPage.selecciontalla(); //escoge la talla G en el producto
        CartPage.agregarbolsa(); //Agrega a carrito
        CartPage.validarcarrito();//ve el carrito
    }

    //Checkout - Dirección de Envío ------------------
    //TC053----------------------------
    direccionguardada(){
        I.click(this.locartor.btncomprar);
        I.click(this.locartor.btncambiardireccion);
    }
    //TC054----------------------------
    agregardireccionnueva(){
        I.waitForElement(this.locartor.contentnuevadireccion,
                        this.locartor.btnagregardireccion,
                        5
        );
        I.waitForVisible(this.locartor.contentnuevadireccion,
                        this.locartor.btnagregardireccion,
                        5
        );
        I.click(this.locartor.btnagregardireccion);
        I.waitForVisible(this.locartor.contentagregardireccion,
                        this.locartor.btnusardireccion,
                        5
        );
    }
    //TC055----------------------------
    validarcamposdireccion(){
        I.fillField(this.locartor.aliasdireccion, process.env.ALIASDIRECCION);
        I.fillField(this.locartor.codigopostal, process.env.CP);
        I.wait(3);
        I.scrollTo(this.locartor.validardireccionpordefecto);
        I.fillField(this.locartor.calle, process.env.CALLE);
        I.fillField(this.locartor.numeroexterior, process.env.NUMEROEXT);
        I.fillField(this.locartor.telefonocelular, process.env.TELEFONOCEL);
        I.fillField(this.locartor.telefonoparticular, process.env.TELEFONOPART);
        I.click(this.locartor.validardireccionpordefecto);
        I.click(this.locartor.btnusardireccion)
        
    }

    //Checkout - Método de Pago-------------------------------
    //TC059----------------------------
    seleccionartarjeta(){
        I.click(this.locartor.btncomprar);
        I.click(this.locartor.btntarjetas);
        I.waitForElement(this.locartor.contentformapago, 
                        this.locartor.btnagregartarjeta, 5);
        I.waitForVisible(this.locartor.contentformapago, 
                        this.locartor.btnagregartarjeta, 5);
        I.click(this.locartor.btnagregartarjeta);
        I.waitForVisible(this.locartor.contentdatostarjeta);
    }
    //TC060----------------------------
    validarcampostarjeta(){
        I.fillField(this.locartor.aliastarjeta, process.env.ALIASTERJETA);
        I.click(this.locartor.usarnombrecuenta);
        I.fillField(this.locartor.numerotarjeta, process.env.NUMTARJETA);
        I.waitForVisible(this.locartor.fechavencimiento, this.locartor.CVV, 5);
        I.fillField(this.locartor.fechavencimiento, process.env.FECHAVENCIMIENTO);
        I.fillField(this.locartor.CVV, process.env.CVV);
        I.click(this.locartor.tarjetapordefecto);
        I.click(this.locartor.confirmartarjeta);
    }
    //TC061----------------------------
    resumencompra(){
        I.waitForURL(this.urls.urlcheckout);
    }
}

module.exports = new CheckoutPage();