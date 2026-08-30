const { I } = inject(); /**Definimos al actor "I" como constante y inject busca y pone a disposicion los objetos de I */

class carritoPage{

    urls={
        urlhome: 'https://www.liverpool.com.mx/tienda/home'
    };
    
    fields={
        // Home
        barraBusqueda:'[data-testid="blt26617d4f2e17657d-header-search-input"]',
        bolsa: 'a[data-testid="blt26617d4f2e17657-header-shopping-cart-shopping-link"]',
         // Carrito
        botonAgregarBolsa: '[data-testid="add-to-bag-button"]',
        mensajeConfirmacion: '[data-testid^="toast-"]',
        botonBolsa: '[data-testid="blt26617d4f2e17657d-header-shopping-cart-shopping-link"]',
        badgeCarrito: '[data-testid="blt26617d4f2e17657d-header-shopping-cart-header-cart-quantity"]',
        cantidadTotalProductos: '//p[contains(normalize-space(), "Subtotal") and contains(normalize-space(), "productos")]',
        totalCarrito: '[data-testid="checkout-payment-summary-total"]',
        subtotalCarrito: '[data-testid="checkout-payment-summary-subtotal"]',
        preciosProductos: '[data-testid$="-input-cart-item-price"]',
        botonEliminarProducto: '[data-testid$="-input-cart-item-quantity-decrease"]',
        botonAceptarEliminarProducto: '[data-testid="delete-product-modal-modal-modal-footer-primary-button"]',
        mensajeConfirmacionEliminar:'[data-testid="delete-product-modal-modal-modal-message"]',
        mensajeProductoEliminado: '[data-testid="icon-toast-success"]',
        botonAumentarCantidad: '[data-testid$="-input-cart-item-quantity-increase"]',
        inputCantidad: '[data-testid$="-input-cart-item-quantity-input"]',
        botonDisminuirCantidad:'[data-testid$="-input-cart-item-quantity-decrease"]',
        descuentoCarrito: '[data-testid="checkout-payment-summary-discount"]',
    };

    //Metodos

    //TC-029

    desplazarseAgregarBolsa() {
    I.waitForElement(this.fields.botonAgregarBolsa, 10);
    I.scrollTo(this.fields.botonAgregarBolsa);
    I.wait(1);
    }

    clicAgregarBolsa() {
    I.waitForElement(this.fields.botonAgregarBolsa, 10);
    I.click(this.fields.botonAgregarBolsa);
    }

    verificarArticuloAgregado() {
    I.waitForElement(this.fields.mensajeConfirmacion, 5);
    I.see('Agregaste 1 artículo(s) a tu bolsa.');
    }

     //TC-030

    verificarBadgeCarrito() {
    I.waitForElement(this.fields.botonBolsa, 10);
    I.seeElement(this.fields.botonBolsa);
    I.waitForElement(this.fields.badgeCarrito, 10);
    I.seeElement(this.fields.badgeCarrito);
    }

    async verificarBadgeCarrito() {
    I.waitForElement(this.fields.botonBolsa, 10);    
    I.scrollTo(this.fields.botonBolsa);    
    I.waitForElement(this.fields.badgeCarrito, 10);
    const cantidad = await I.grabTextFrom(this.fields.badgeCarrito);
    const cantidadNumerica = parseInt(cantidad, 10);
    if (cantidadNumerica < 1) {
        throw new Error(
            `El badge debería mostrar al menos 1 producto, pero muestra: ${cantidad}`
        );
    }
    }

    // TC-031

    //Ya existe la funcion de este caso en TC-029

    // TC-032

    limpiarBarraBusqueda() {
    I.click(this.fields.barraBusqueda);
    I.fillField(this.fields.barraBusqueda, '');
    }

    async verificarCantidadProductosTresOMas() {
    I.waitForElement(this.fields.botonBolsa, 10);
    I.waitForElement(this.fields.badgeCarrito, 10);
    const cantidad = await I.grabTextFrom(this.fields.badgeCarrito);
    const cantidadNumerica = parseInt(cantidad, 10);
    if (cantidadNumerica < 3) {
        throw new Error(
            `El badge debería mostrar al menos 3 productos, pero muestra: ${cantidad}`
        );
    }
    }

    // TC-033

    clicBolsa() {
    I.waitForElement(this.fields.botonBolsa, 10);    
    I.scrollTo(this.fields.botonBolsa);    
    I.click(this.fields.botonBolsa);
    }

    verificarPaginaCarrito() {
    I.waitInUrl('/tienda/cart', 10);
    }

    async verificarCantidadTotalProductos() {
    const texto = await I.grabTextFrom(this.fields.cantidadTotalProductos);
    console.log(`Texto del subtotal: ${texto}`);
    if (!texto.includes('3 productos')) {
        throw new Error(
            `Se esperaba "3 productos", pero se encontró: "${texto}"`
        );
        }
    }

    // TC-034

    async guardarTotalInicial() {
    await I.waitForElement(this.fields.totalCarrito, 10);
    const total = await I.grabTextFrom(this.fields.totalCarrito);
    this.totalInicial = parseFloat(
        total.replace('$', '').replace(',', '')
    );
    console.log(`Total inicial: ${this.totalInicial}`);
    }

    async guardarSubtotalInicial() {
    await I.waitForElement(this.fields.subtotalCarrito, 10);
    const subtotal = await I.grabTextFrom(this.fields.subtotalCarrito);
    this.subtotalInicial = parseFloat(subtotal.replace('$', '').replace(',', ''));
    console.log(`Subtotal inicial: ${this.subtotalInicial}`);
    }

    async eliminarProducto() {
    await I.waitForElement(this.fields.botonEliminarProducto,10);
    await I.click(this.fields.botonEliminarProducto);
    }

    async verificarModalConfirmacion() {
    await I.waitForElement(this.fields.mensajeConfirmacionEliminar,10);
    I.see('¿Estás seguro de que quieres eliminar este artículo?',this.fields.mensajeConfirmacionEliminar);
    }
    
    async aceptarEliminacion() {
    await I.waitForElement(this.fields.botonAceptarEliminarProducto,10);
    await I.click(this.fields.botonAceptarEliminarProducto);
    }

    async verificarProductoEliminado() {
    await I.waitForElement(this.fields.mensajeProductoEliminado,10);
    I.see('Artículo eliminado correctamente');
    }

    async verificarSubtotalActualizado() {
    await I.waitForElement(this.fields.subtotalCarrito,10);
    const subtotal = await I.grabTextFrom(this.fields.subtotalCarrito);
    const subtotalFinal = parseFloat(subtotal.replace('$', '').replace(',', ''));
    console.log(`Subtotal inicial: ${this.subtotalInicial}`);
    console.log(`Subtotal final: ${subtotalFinal}`);
    if (subtotalFinal >= this.subtotalInicial) {
        throw new Error(`El subtotal no disminuyó. ` +`Inicial: ${this.subtotalInicial}, ` 
            + `Final: ${subtotalFinal}`);
        }
    }

    // TC-041

    async aumentarCantidadProducto() {
    await I.waitForElement(this.fields.botonAumentarCantidad,10);
    await I.click(this.fields.botonAumentarCantidad);
    await I.wait(2);
    }

    async guardarCantidadInicial() {
    await I.waitForElement(this.fields.inputCantidad,10);
    this.cantidadInicial = await I.grabValueFrom(this.fields.inputCantidad);
    console.log(`Cantidad inicial: ${this.cantidadInicial}`);
    }

    async verificarCantidadAumentada() {
    const cantidadFinal = await I.grabValueFrom(this.fields.inputCantidad);
    console.log(`Cantidad inicial: ${this.cantidadInicial}`);
    console.log(`Cantidad final: ${cantidadFinal}`);
    const cantidadEsperada =Number(this.cantidadInicial) + 1;
    if (Number(cantidadFinal) !== cantidadEsperada) {
        throw new Error(
            `La cantidad no aumentó correctamente. ` +
            `Esperada: ${cantidadEsperada}, ` +
            `Actual: ${cantidadFinal}`
        );
        }
    }

    // TC-042

    async guardarCantidadDespuesDeAumentar() {
    await I.waitForElement(this.fields.inputCantidad,10);
    this.cantidadAntesDeDisminuir = await I.grabValueFrom(this.fields.inputCantidad);
    console.log(`Cantidad antes de disminuir: ${this.cantidadAntesDeDisminuir}`);
    }

    async disminuirCantidadProducto() {
    await I.waitForElement(this.fields.botonDisminuirCantidad,10);
    await I.click(this.fields.botonDisminuirCantidad);
    await I.wait(2);
    }

    async verificarCantidadDisminuida() {
    const cantidadFinal = await I.grabValueFrom(this.fields.inputCantidad);
    console.log(`Cantidad antes de disminuir: ${this.cantidadAntesDeDisminuir}`);
    console.log(`Cantidad final: ${cantidadFinal}`);
    const cantidadEsperada = Number(this.cantidadAntesDeDisminuir) - 1;
    if (Number(cantidadFinal) !== cantidadEsperada) {
        throw new Error(
            `La cantidad no disminuyó correctamente. ` +
            `Esperada: ${cantidadEsperada}, ` +
            `Actual: ${cantidadFinal}`
        );
        }
    }

    // TC-044

    async obtenerPreciosProductos() {
    await I.waitForElement(this.fields.preciosProductos, 10);
    this.preciosProductos = await I.grabTextFromAll(this.fields.preciosProductos);
    console.log(`Precios encontrados: ${this.preciosProductos}`);
    }

    async verificarSubtotalCorrecto() {
    await I.waitForElement(this.fields.preciosProductos, 10);
    const precios = await I.grabTextFromAll(this.fields.preciosProductos);
    const preciosNumericos = precios.map(precio =>parseFloat(precio.replace('$', '').replace(',', ''))/ 100);
    const sumaPrecios = preciosNumericos.reduce((total, precio) => total + precio,0);
    const subtotalTexto = await I.grabTextFrom(this.fields.subtotalCarrito);
    const subtotal = parseFloat(subtotalTexto.replace('$', '').replace(',', ''));
    console.log(`Precios de productos: ${preciosNumericos}`);
    console.log(`Suma de productos: ${sumaPrecios}`);
    console.log(`Subtotal mostrado: ${subtotal}`);
    if (sumaPrecios !== subtotal) {
        throw new Error(
            `El subtotal es incorrecto. ` +
            `Esperado: ${sumaPrecios}, ` +
            `Actual: ${subtotal}`
        );
        }
    }

    // TC-046

    async obtenerSubtotalYDescuento() {
    await I.waitForElement(this.fields.subtotalCarrito, 10);
    await I.waitForElement(this.fields.descuentoCarrito, 10);
    const subtotalTexto = await I.grabTextFrom(this.fields.subtotalCarrito);
    const descuentoTexto = await I.grabTextFrom(this.fields.descuentoCarrito);
    this.subtotal = parseFloat(subtotalTexto.replace('$', '').replace(',', ''));
    this.descuento = parseFloat(descuentoTexto.replace('$', '').replace(',', ''));
    console.log(`Subtotal: ${this.subtotal}`);
    console.log(`Descuento: ${this.descuento}`);
    }

    async verificarTotalFinal() {
    await I.waitForElement(this.fields.totalCarrito, 10);
    const totalTexto = await I.grabTextFrom(this.fields.totalCarrito);
    const totalMostrado = parseFloat(totalTexto.replace('$', '').replace(',', ''));
    const totalEsperado = this.subtotal - this.descuento;
    console.log(`Subtotal: ${this.subtotal}`);
    console.log(`Descuento: ${this.descuento}`);
    console.log(`Total esperado: ${totalEsperado}`);
    console.log(`Total mostrado: ${totalMostrado}`);
    if (totalEsperado !== totalMostrado) {
        throw new Error(
            `El total final es incorrecto. ` +
            `Esperado: ${totalEsperado}, ` +
            `Actual: ${totalMostrado}`
        );
        }
    }
}

module.exports = new carritoPage();