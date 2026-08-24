const { I } = inject();
const { assert } = require('chai');

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
        btnDisminuirCantidadRespuesta: '//button[@aria-label="decrease" and not(@disabled)]',
        btnDisminuirCantidad: '//button[@aria-label="decrease"]//span[text()="remove"]',
        controlCantidadProducto: '//button[@aria-label="increase"]/parent::*',
        btnEliminarProducto: '//button[span[text()="Eliminar"]]',
        btnaceptar: '//button[span[text()="Aceptar"]]',
        resultadoCarrito: '//h1[contains(text(),"Mi bolsa")]',
        samsung: '//img[@data-testid="1203150314-image-slider-image-0"]',
        apple: '//a[@data-testid="9956148790-card-card-link"]',
        motorola: '//a[@data-testid="1197256522-card-card-link"]',

        //inicio de sesion
        inputEmail: '//input[@inputmode="email"]',
        inputPassword: '//input[@name="password"]',
        btnIniciarSesionSubmit: '//div[@class="cf0eb74dd"]',
        usuarioLogueado: '//span[contains(text(),"Leonel Perez")]',


        // Totales Carrito
        lblSubtotal: '//div[@data-testid="checkout-payment-summary-subtotal"]/span',
        lblDescuento: '//div[@data-testid="checkout-payment-summary-discount"]/span',
        lblTotal: '//div[@data-testid="checkout-payment-summary-total"]/span',

        // Favoritos (Wishlist)
        itemFavorito: '//div[contains(@class,"wishlist-item")] | //div[contains(@class,"m-product")]',
        btnRemoverFavorito: '//button[contains(text(),"Eliminar")] | //i[contains(@class,"icon-close")]',

        //Impuestos 

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
        I.waitForElement(this.fields.resultadoCarrito, 10);

    }

    homeWishlist() {
        I.amOnPage(this.urls.urlWishlist);

    }

    async iniciarSesion() {
        I.amOnPage(this.urls.urlHome);

        I.wait(5);

        const sesionActiva = await I.usePlaywrightTo(
            'Verificar sesión',
            async ({ page }) => {

                const usuario = page.locator(
                    this.fields.usuarioLogueado
                );

                return await usuario.isVisible().catch(() => false);
            }
        );

        // Si ya está logueado, continuamos
        if (sesionActiva) {

            console.log('✅ Sesión ya iniciada.');

            return;
        }

        console.log('⚠️ No hay una sesión activa.');
        console.log('Iniciando sesión...');

        // Aquí necesitamos los selectores reales
        I.waitForElement(this.fields.btnIniciarSesionHeader, 10);
        I.click(this.fields.btnIniciarSesionHeader);

        I.waitForElement(this.fields.inputEmail, 10);

        I.fillField(
            this.fields.inputEmail,
            process.env.LIVERPOOL_USER
        );

        I.fillField(
            this.fields.inputPassword,
            process.env.LIVERPOOL_PASSWORD
        );

        I.click(this.fields.btnIniciarSesionSubmit);

        console.log('📱 Liverpool debería solicitar ahora el código SMS.');
        console.log('👉 Introduce el código manualmente en el navegador.');

        // Pausamos CodeceptJS
        await I.usePlaywrightTo(
            'Esperar código SMS',
            async ({ page }) => {

                await new Promise(resolve => {

                    process.stdin.resume();

                    process.stdin.once('data', () => {

                        process.stdin.pause();

                        resolve();

                    });

                });

            }
        );

        console.log('Continuando prueba...');

        // Verificamos que realmente haya iniciado sesión
        I.waitForElement(
            '//span[contains(text(),"Leonel Perez")] | //span[contains(text(),"Hola,")]',
            30
        );

        console.log('✅ Sesión iniciada correctamente.');

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

    async seleccionarProducto(producto) {

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

        I.waitForElement(selector, 5);
        I.click(selector);

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

        I.waitForElement(this.fields.itemFavorito, 5);
        I.seeElement(this.fields.itemFavorito);
    }

    validarCantidadFavoritos(cantidad) {
        I.waitForElement(this.fields.itemFavorito, 5);

        I.seeNumberOfVisibleElements(
            this.fields.itemFavorito,
            parseInt(cantidad)
        );
    }

    removerDeFavoritos() {
        I.waitForElement(this.fields.btnRemoverFavorito, 5);
        I.click(this.fields.btnRemoverFavorito);
        I.wait(2);
        I.waitForElement();
    }

    validarFavoritoRemovido() {
        I.wait(2);
        I.dontSeeElement(this.fields.itemFavorito);
    }

    aumentarCantidadProducto(cantidad) {
        I.waitForElement(this.fields.btnAumentarCantidad, 10);

        const objetivo = parseInt(cantidad, 10);

        for (let i = 1; i < objetivo; i++) {
            I.click(this.fields.btnAumentarCantidad);
            I.wait(2);
        }

        I.wait(3);
    }

    async disminuirCantidadProducto(cantidad) {
        I.usePlaywrightTo('Verificar botones disminuir', async ({ page }) => {

            const botones = page.locator('button[aria-label="decrease"]');

            console.log('Botones decrease encontrados:', await botones.count());

            for (let i = 0; i < await botones.count(); i++) {
                console.log(
                    `Botón ${i}: visible=${await botones.nth(i).isVisible()}, habilitado=${await botones.nth(i).isEnabled()}`
                );
            }

        });

        I.waitForElement(this.fields.btnDisminuirCantidad, 10);

        I.click(this.fields.btnDisminuirCantidad);

        I.wait(4);
    }

    extraerCantidad(texto) {
        const coincidencia = texto.match(/\d+/);
        return coincidencia ? parseInt(coincidencia[0], 10) : 0;
    }

    validarCantidadActualizada() {
        I.waitForElement(this.fields.lblCantidadItems, 5);
        I.seeElement(this.fields.lblCantidadItems);
    }

    removerDelCarrito() {
        I.waitForElement(this.fields.btnEliminarProducto, 5);
        I.click(this.fields.btnEliminarProducto);
        I.wait(2);
        I.waitForElement(this.fields.btnaceptar);
        I.click(this.fields.btnaceptar);
        I.wait(3);
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

    // En tu CarritoPage.js
    async validarCalculoTotal() {
        // 1. Obtener los textos de la interfaz
        const subtotalText = await I.grabTextFrom(this.fields.lblSubtotal);
        const descuentoText = await I.grabTextFrom(this.fields.lblDescuento);
        const totalText = await I.grabTextFrom(this.fields.lblTotal);


        // 2. Limpiar cadenas a números (ej: "$22,499.00" -> 22499.00)
        const parseMoneda = (texto) =>
            parseFloat(texto.replace(/[^0-9.-]+/g, "")) || 0;

        const subtotal = parseMoneda(subtotalText);
        const descuento = parseMoneda(descuentoText);
        const totalUI = parseMoneda(totalText);

        // 3. Calcular el total esperado
        const totalCalculado = subtotal - descuento;

        // 4. Aserción con margen por redondeos
        const esCorrecto = Math.abs(totalUI - totalCalculado) < 0.01;

        assert.isTrue(
            esCorrecto,
            `El cálculo del total es incorrecto. Subtotal: ${subtotal}, Descuento: ${descuento}, Total en UI: ${totalUI}, Esperado: ${totalCalculado}`
        );
    }
}

module.exports = new CarritoPage();