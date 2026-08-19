const { I } = inject();

class CarritoPage {
    urls = {
        // Navegación
        urlhomeLiverpool: 'https://www.liverpool.com.mx/tienda?s=celulares',
        urlPDP: 'https://www.liverpool.com.mx/tienda/pdp/samsung-galaxy-s26-ultra-dynamic-amoled-2x-6-9-pulgadas/1191389946?skuid=1191389961&size=512+GB',
        urlCart: 'https://www.liverpool.com.mx/tienda/cart',
        urlWishlist: 'https://www.liverpool.com.mx/tienda/wishlist',
        urlFold8: 'https://www.liverpool.com.mx/tienda/pdp/samsung-fold8-super-amoled-plus-7-6-pulgadas/1203150349?skuid=1203150373',
        urlFold8Ultra: 'https://www.liverpool.com.mx/tienda/pdp/samsung-fold8-ultra-super-amoled-plus-8-pulgadas/1203150314?skuid=1203150853&size=512+GB'
    }


    // Locators
    fields = {
        // PDP & Acciones
        btnAgregarCarrito: '//button[@data-testid="add-to-bag-button"]',
        btnFavoritosPDP: '//button[contains(@class,"wishlist")] | //i[contains(@class,"icon-heart")]',
        icnBolsaHeader: '//div[@class="relative p-1 cursor-pointer"]',
        seguroBoton: '//button[@data-testid="1191389946-warranty-modal-modal-guarantee-modal-footer-secondary-button"]',


        // Carrito (Cart)
        itemProductoCarrito: '//a[contains(text(),"Samsung Galaxy S26 Ultra Dynamic AMOLED 2X 6.9 pulgadas")]',
        lblCantidadItems: '//input[@value="1"]',
        btnAumentarCantidad: '//button[contains(@class,"btn-plus")] | //button[text()="+"]',
        btnDisminuirCantidad: '//button[contains(@class,"btn-minus")] | //button[text()="-"]',
        btnEliminarProducto: '//button[contains(text(),"Eliminar")] | //button[contains(@class,"btn-remove")]',
        resultadoCarrito: '//h1[contains(text(),"Mi bolsa")]',

        // Totales Carrito
        lblSubtotal: '//p[contains(text(),"Subtotal")]/following-sibling::p | //span[contains(@class,"subtotal")]',
        lblImpuestos: '//p[contains(text(),"IVA")]/following-sibling::p | //p[contains(text(),"Impuestos")]',
        lblTotal: '//p[contains(text(),"Total")]/following-sibling::p | //span[contains(@class,"total-amount")]',

        // Favoritos (Wishlist)
        itemFavorito: '//div[contains(@class,"wishlist-item")] | //div[contains(@class,"m-product")]',
        btnRemoverFavorito: '//button[contains(text(),"Eliminar")] | //i[contains(@class,"icon-close")]'
    };

    productor = [
        "urlPDP",
        "urlFold8",
        "urlFold8Ultra"
    ]

    // Métodos
    homePDP() {
        I.amOnPage(this.urls.urlPDP);
        I.waitForElement(this.fields.btnAgregarCarrito, 10);
    }
    homeLiverpool() {
        I.amOnPage(this.urls.urlhomeLiverpool);
    }

    homeCart() {
        I.amOnPage(this.urls.urlCart);
        I.waitForElement(this.fields.itemProductoCarrito, 10);

    }

    homeWishlist() {
        I.amOnPage(this.urls.urlWishlist);
        I.waitForElement(this.fields.itemFavorito, 10);
    }

    agregarProducto() {
        I.waitForElement(this.fields.btnAgregarCarrito, 5);
        I.click(this.fields.btnAgregarCarrito);
        I.wait(2);
    }

    // En tu cartPage.js
    agregarProductoConSeguroOpcional() {
        // Si aparece el botón de rechazar seguro en 3 segundos, le da clic. Si no, ignora y sigue.
        I.waitForElement(this.fields.seguroBoton, 5)
        I.click(this.fields.seguroBoton);
    }
    validarProductoAgregado() {
        I.waitForElement(this.fields.icnBolsaHeader, 5);
        I.click(this.fields.icnBolsaHeader);
        I.waitForURL(this.urls.urlCart);
        I.waitForElement(this.fields.resultadoCarrito, 5);
        I.seeElement(this.fields.resultadoCarrito);
    }

    validarCantidadCarrito() {
        I.waitForElement(this.fields.lblCantidadItems, 5);
        I.seeElement(this.fields.lblCantidadItems);
    }

    irAlCarrito() {
        I.waitForElement(this.fields.icnBolsaHeader, 5);
        I.click(this.fields.icnBolsaHeader);
    }

    validarDetalleCarrito() {
        I.waitForElement(this.fields.itemProductoCarrito, 10);
        I.seeElement(this.fields.itemProductoCarrito);
    }

    agregarMultiplesProductos() {
        for (const producto of this.productos) {

            I.amOnPage(this.urls[producto]);

            I.waitForElement(this.fields.botonAgregarCarrito, 10);
            I.click(this.fields.botonAgregarCarrito);

            I.wait(2);
        }
    }

    validarSubtotalActualizado() {
        I.waitForElement(this.fields.lblSubtotal, 5);
        I.seeElement(this.fields.lblSubtotal);
    }

    agregarAFavoritos() {
        I.waitForElement(this.fields.btnFavoritosPDP, 5);
        I.click(this.fields.btnFavoritosPDP);
        I.wait(2);
    }

    validarProductoEnFavoritos() {
        I.amOnPage(this.fields.urlWishlist);
        I.waitForElement(this.fields.itemFavorito, 5);
        I.seeElement(this.fields.itemFavorito);
    }

    validarCantidadFavoritos() {
        I.waitForElement(this.fields.itemFavorito, 5);
        I.seeElement(this.fields.itemFavorito);
    }

    removerDeFavoritos() {
        I.waitForElement(this.fields.btnRemoverFavorito, 5);
        I.click(this.fields.btnRemoverFavorito);
        I.wait(2);
    }

    validarFavoritoRemovido() {
        I.dontSeeElement(this.fields.itemFavorito);
    }

    aumentarCantidad() {
        I.waitForElement(this.fields.btnAumentarCantidad, 5);
        I.click(this.fields.btnAumentarCantidad);
        I.wait(2);
    }

    disminuirCantidad() {
        I.waitForElement(this.fields.btnDisminuirCantidad, 5);
        I.click(this.fields.btnDisminuirCantidad);
        I.wait(2);
    }

    validarCantidadActualizada() {
        I.waitForElement(this.fields.lblCantidadItems, 5);
        I.seeElement(this.fields.lblCantidadItems);
    }

    removerDelCarrito() {
        I.waitForElement(this.fields.btnEliminarProducto, 5);
        I.click(this.fields.btnEliminarProducto);
        I.wait(2);
    }

    validarCarritoVacio() {
        I.dontSeeElement(this.fields.itemProductoCarrito);
    }

    validarImpuestos() {
        I.waitForElement(this.fields.lblImpuestos, 5);
        I.seeElement(this.fields.lblImpuestos);
    }

    validarTotalFinal() {
        I.waitForElement(this.fields.lblTotal, 5);
        I.seeElement(this.fields.lblTotal);
    }
}

module.exports = new CarritoPage();