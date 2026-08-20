const { I } = inject();

class CarritoPage {
    urls = {
        // Navegación
        urlhomeCelularesLiverpool: 'https://www.liverpool.com.mx/tienda?s=celulares',
        urlPDP: 'https://www.liverpool.com.mx/tienda/pdp/samsung-galaxy-s26-ultra-dynamic-amoled-2x-6-9-pulgadas/1191389946?skuid=1191389961&size=512+GB',
        urlCart: 'https://www.liverpool.com.mx/tienda/cart',
        urlWishlist: 'https://www.liverpool.com.mx/tienda/wishlist',
        urlFold8: 'https://www.liverpool.com.mx/tienda/pdp/samsung-fold8-super-amoled-plus-7-6-pulgadas/1203150349?skuid=1203150373',
        urlFold8Ultra: 'https://www.liverpool.com.mx/tienda/pdp/samsung-fold8-ultra-super-amoled-plus-8-pulgadas/1203150314?skuid=1203150853&size=512+GB',
        urlHome: 'https://www.liverpool.com.mx/tienda/home',
        urlLogin: 'https://login.liverpool.com.mx/u/login?state=hKFo2SB3NHVuRXY0c3h0Q3Q5NHFHcXZjLVM2TEFrWmhGSTZ3Y6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGpWZWZ4Yk1fckpmMThnSzhQdlFqZGJkSVJyUDlEdzdro2NpZNkgSjFXOVJPZ1RZaWltbkM5UGl0ZDJKd3Y3RXpqV05VQWo',
    }


    // Locators
    fields = {
        // PDP & Acciones
        btnAgregarCarrito: '//button[@data-testid="add-to-bag-button"]',
        btnFavoritosPDP: '//button[@aria-label="Marcar como favorito"]',
        icnBolsaHeader: '//div[@class="relative p-1 cursor-pointer"]',
        seguroBoton: '//button[@data-testid="1191389946-warranty-modal-modal-guarantee-modal-footer-secondary-button"]',
        btnIniciarSesionHeader: '//div[@data-testid="blt26617d4f2e17657d-header-menu-dropdown"]',


        // Carrito (Cart)
        itemProductoCarrito: '//a[contains(text(),"Samsung Galaxy S26 Ultra Dynamic AMOLED 2X 6.9 pulgadas")]',
        lblCantidadItems: '//p[contains(text(), "Subtotal") or contains(., "Subtotal")]',
        btnAumentarCantidad: '//button[@aria-label="increase"]',
        btnDisminuirCantidad: '//button[@aria-label="decrease"]',
        btnEliminarProducto: '//button[contains(text(),"Eliminar")] | //button[contains(@class,"btn-remove")]',
        resultadoCarrito: '//h1[contains(text(),"Mi bolsa")]',
        samsung: '//img[@data-testid="1203150314-image-slider-image-0"]',
        apple: '//a[@data-testid="9956148790-card-card-link"]',
        motorola: '//a[@data-testid="1197256522-card-card-link"]',

        //inicio de sesion
        inputEmail: '//input[@inputmode="email"]',
        inputPassword: '//input[@name="password"]',
        btnIniciarSesionSubmit: '//div[@class="cf0eb74dd"]',


        // Totales Carrito
        lblSubtotal: '//div[contains(text(),"Total")]',
        lblImpuestos: '//p[contains(text(),"IVA")]/following-sibling::p | //p[contains(text(),"Impuestos")]',
        lblTotal: '//p[contains(text(),"Total")]/following-sibling::p | //span[contains(@class,"total-amount")]',

        // Favoritos (Wishlist)
        itemFavorito: '//div[contains(@class,"wishlist-item")] | //div[contains(@class,"m-product")]',
        btnRemoverFavorito: '//button[contains(text(),"Eliminar")] | //i[contains(@class,"icon-close")]'
    };



    // Métodos
    homePDP() {
        I.amOnPage(this.urls.urlPDP);
        I.waitForElement(this.fields.btnAgregarCarrito, 10);
    }
    homeCelularesLiverpool() {
        I.amOnPage(this.urls.urlhomeCelularesLiverpool);
    }

    homeCart() {
        I.amOnPage(this.urls.urlCart);
        I.waitForElement(this.fields.itemProductoCarrito, 10);

    }

    homeWishlist() {
        I.amOnPage(this.urls.urlWishlist);
        I.waitForElement(this.fields.itemFavorito, 10);
    }

    async iniciarSesion() {
        // 1. Inyectamos las cookies directamente al contexto de Playwright
        I.usePlaywrightTo('Cargar cookies de sesión', async ({ context }) => {
            const fs = require('fs');
            if (fs.existsSync('./storageState.json')) {
                const state = JSON.parse(fs.readFileSync('./storageState.json', 'utf8'));
                await context.addCookies(state.cookies);
            }
        });

        // 2. Navegamos al Home
        I.amOnPage(this.urls.urlHome);
        I.wait(2);

        // 3. Validamos que el header muestre tu sesión activa
        I.waitForElement('//span[contains(text(),"Leonel Perez")] | //span[contains(text(),"Hola,")]', 15);

    }

    agregarProductoAlCarrito() {
        I.waitForElement(this.fields.btnAgregarCarrito, 5);
        I.click(this.fields.btnAgregarCarrito);
        I.wait(2);
    }

    // En tu cartPage.js
    async agregarProductoConSeguroOpcional() {
        // Si aparece el botón de rechazar, le da clic. Si no, ignora y sigue.
        const seguro = await I.grabNumberOfVisibleElements(this.fields.seguroBoton);

        if (seguro > 0) {
            I.click(this.fields.seguroBoton);
        }

    }
    //Alamacenamiento de un celular.
    async seleccionarAlmacenamiento(almacenamiento) {
        const selector = `//label[contains(., '${almacenamiento}')]`;

        const existe = await I.grabNumberOfVisibleElements(selector);

        if (existe > 0) {
            I.click(selector);
            I.wait(1);
        }
    }

    validarProductoAgregado() {
        I.waitForElement(this.fields.icnBolsaHeader, 5);
        I.click(this.fields.icnBolsaHeader);
        I.waitForURL(this.urls.urlCart);
        I.waitForElement(this.fields.resultadoCarrito, 5);
        I.seeElement(this.fields.resultadoCarrito);
        I.wait(3);
    }

    async validarCantidadCarrito(cantidadEsperada) {

        const selector = this.fields.lblCantidadItems;

        I.waitForElement(selector, 5);
        I.waitForText(cantidadEsperada.toString(), 10, selector);
    }

    irAlCarrito() {
        I.waitForElement(this.fields.icnBolsaHeader, 5);
        I.click(this.fields.icnBolsaHeader);
    }

    validarDetalleCarrito() {
        I.waitForElement(this.fields.itemProductoCarrito, 10);
        I.seeElement(this.fields.itemProductoCarrito);
    }

    async agregarMultiplesProductos(producto) {

        const productos = {
            apple: this.fields.apple,
            samsung: this.fields.samsung,
            motorola: this.fields.motorola
        };

        producto = producto.toLowerCase();
        const selector = productos[producto];

        if (!selector) {
            throw new Error(`Producto no reconocido: ${producto}`);
        }

        // 1. Asegurar visibilidad del producto antes de dar clic
        I.waitForElement(selector, 10);
        I.scrollTo(selector);
        I.click(selector);

        // 2. Seleccionar almacenamiento
        await this.seleccionarAlmacenamiento("1 TB");

        // 3. Agregar al carrito (agregamos el await que faltaba)
        await this.agregarProductoAlCarrito();

        // 4. Rechazar seguro
        await this.agregarProductoConSeguroOpcional();

        // 5. Pausa para dar tiempo a que se guarde el item en la sesión del servidor
        I.wait(5);

        // 6. Volver a celulares mediante navegación limpia
        I.amOnPage(this.urls.urlhomeCelularesLiverpool);
        I.waitForElement(selector, 10); // Esperar a que la lista cargue antes de continuar
    }

    async agregarUnProductoAFavoritos(producto) {
        const productos = {
            apple: this.fields.apple,
            samsung: this.fields.samsung,
            motorola: this.fields.motorola
        };

        producto = producto.toLowerCase();
        const selector = productos[producto];

        if (!selector) {
            throw new Error(`Producto no reconocido: ${producto}`);
        }
        // 1. Entrar al detalle del producto desde el catálogo
        I.waitForElement(selector, 5);
        I.click(selector);

        // 2. Dar clic en el botón de favoritos dentro de la PDP
        I.waitForElement(this.fields.btnFavoritosPDP, 5);
        I.click(this.fields.btnFavoritosPDP);
        I.wait(2);
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

    aumentarCantidadProducto(cantidad) {
        I.waitForElement(this.fields.btnAumentarCantidad, 10);

        // Convertimos la cantidad recibida desde Gherkin ("2") a un entero numérico (2)
        const objetivo = parseInt(cantidad, 10);

        // Como el carrito ya inicia con 1 producto, damos los clics necesarios para subir hasta el objetivo
        for (let i = 1; i < objetivo; i++) {
            I.click(this.fields.btnAumentarCantidad);
            I.wait(2); // Pausa fundamental para que el botón de React vuelva a habilitarse tras el click
        }

        I.wait(3); // Espera final a que la SPA recalcule el subtotal
    }

    disminuirCantidadProducto() {
        I.waitForElement(this.fields.btnDisminuirCantidad, 10);

        // Convertimos la cantidad de string a número
        const objetivo = parseInt(cantidad, 10);

        // Nota: Si solo necesitas dar 1 clic de restar para bajar de 2 a 1:
        I.click(this.fields.btnDisminuirCantidad);
        I.wait(4); // Esperar a que la UI actualice la vista
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