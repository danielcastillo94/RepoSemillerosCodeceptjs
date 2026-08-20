const {I, LoginPage, ResultPage, CartPage, CheckoutPage, MenuPage, CategoryPage, FilterPage} = inject();

class FlujoCompletoPage {
    locator = {
        productoimg: '//a[@data-testid="1186384538-card-card-link"]',
        talla: '//label[@for="size-picker-G-undefined1186384538-1186384578"]',
        envioadomicilio: '//span[contains(text(), "Recibe a domicilio")]',
        btncomprartodo: '//button[@data-testid="checkout-payment-summary-button"]',
    };

    inicarsesion(){
        LoginPage.iniciarsesion();
    }

    buscarproducto(){
        //ResultPage.buscarproducto();
            MenuPage.categorias(); //entrar a categorias
            CategoryPage.categoria(); //accedera a categoria hombre
            FilterPage.inicifiltroropa(); //accedes a subcategoria
            FilterPage.filtrocolor();
            ResultPage.ordenmenorprecio();

    }

    agregarcarrito(){
        I.click(this.locator.productoimg);
        I.wait(3); //espera a que la pagina carge
        I.click(this.locator.talla); //talla elejida
        I.click(this.locator.envioadomicilio);

        CartPage.agregarbolsa(); //agrega el producto a la bolsa
        CartPage.validarcarrito();

        CheckoutPage.comprarproducto();
        I.wait(5);
    }

    confirmarpagos(){
        //cofirma direccion
        CheckoutPage.direccionguardada();
        CheckoutPage.agregardireccionnueva();
        CheckoutPage.validarcamposdireccion();
        //confirmar tarjeta
        CheckoutPage.seleccionartarjeta();
        CheckoutPage.validarcampostarjeta();
        CheckoutPage.resumencompra();
    }
}

module.exports = new FlujoCompletoPage();