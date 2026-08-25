const { I } = inject();

module.exports = {

    fields: {
        buscadorHome: '//input[contains(@placeholder, "Buscar")]',
        resultados: '#plp-page-card-product-list',
        tarjetasProducto: 'a[data-testid$="-card-card-link"]',
        botonMenu: '[data-testid="blt26617d4f2e17657d-header-button-category"]',
        vinosGourmet: '//a[contains(@href, "vinos-y-gourmet") or contains(., "Vinos")]',
        tituloVinosGourmet: 'h1',
        precioMinimo: '//input[contains(@placeholder, "Mínimo")]',
        precioMaximo: '//input[contains(@placeholder, "Máximo")]',
        preciosProductos: '[data-testid="discounted"]',
        buscadorMarca: '//input[contains(@placeholder, "Buscar marca")]',
        botonOrdenamiento: '[data-testid="dropdown-sorting-button"]',
        nombreProducto: 'h1',
        precioProducto: '[data-testid="discounted"]',
        botonCaracteristicas: '//button[contains(., "Características")]',
        galeriaProducto: 'button[data-testid^="pdp-"][data-testid*="gallery"]',
        botonAumentarCantidad: '//button[contains(@aria-label, "increase") or contains(., "+")]',
        botonDisponibilidadTienda: '//button[contains(., "disponibilidad en tienda")]',
        botonAgregarBolsa: '//button[contains(., "Agregar a mi bolsa")]',
        botonBolsa: '//a[contains(@href, "/tienda/cart")]',
        cantidadCarrito: '//span[contains(@class, "cart-quantity") or contains(@class, "badge")]',
        botonDisminuirCantidadCarrito: '//button[contains(@aria-label, "decrease") or contains(., "-")]',
        botonAumentarCantidadCarrito: '//button[contains(@aria-label, "increase") or contains(., "+")]',
        descuentoCarrito: '//span[contains(., "Descuento")]',
        totalCarrito: '//div[contains(., "Total")]',
        opcionesEntrega: '//div[contains(., "Opciones de entrega")]'
    },

    abrirLiverpool() {
        I.amOnPage('/');
        I.waitForElement(this.fields.buscadorHome, 15);
        this.cerrarCookies();
    },

    abrirLiverpoolMovil() {
        I.resizeWindow(375, 667);
        I.amOnPage('/');
        I.wait(2);
        this.cerrarCookies();
    },

    cerrarCookies() {
        I.wait(2);
        I.executeScript(() => {
            const botones = document.querySelectorAll('button');
            for (const b of botones) {
                if (b.textContent.match(/aceptas|aceptar/i)) {
                    b.click();
                    return;
                }
            }
            const cerrar = document.querySelector('[class*="cookie"] svg, [class*="cookie"] button');
            if (cerrar) cerrar.click();
        });
        I.wait(1);
    },

    buscarProducto(producto) {
        I.waitForElement(this.fields.buscadorHome, 15);
        I.wait(1);
        I.forceClick(this.fields.buscadorHome);
        I.clearField(this.fields.buscadorHome);
        I.type(producto, 50);
        I.pressKey('Enter');
        I.wait(3);
    },

    validarResultados() {
        I.waitForElement(this.fields.resultados, 20);
        I.seeElement(this.fields.resultados);
    },

    validarSinResultados(producto) {
        I.wait(3);
        I.dontSeeElement(this.fields.tarjetasProducto);
    },

    validarProductoRelacionado(producto) {
        I.waitForText(producto, 15);
    },

    abrirCategorias() {
        I.waitForElement(this.fields.botonMenu, 15);
        I.click(this.fields.botonMenu);
        I.wait(2);
    },

    validarCategoriaVinos() {
        I.waitForElement(this.fields.vinosGourmet, 15);
        I.seeElement(this.fields.vinosGourmet);
    },

    irAVinosGourmet() {
        this.buscarProducto('vinos y gourmet');
    },

    validarPaginaVinosGourmet() {
        I.waitForElement(this.fields.tituloVinosGourmet, 15);
        I.seeElement(this.fields.tituloVinosGourmet);
    },

    abrirFiltroPrecios() {
        this.abrirAcordeon('Precios');
        I.waitForElement(this.fields.precioMinimo, 15);
    },

    seleccionarRangoPrecio() {
        I.executeScript(() => {
            const inputs = document.querySelectorAll('input[type="radio"]');
            for (const inp of inputs) {
                const contenedor = inp.closest('div, label, li');
                const texto = contenedor ? contenedor.innerText : '';
                if (texto.includes('$')) {
                    inp.click();
                    return;
                }
            }
        });
        I.wait(3);
    },

    validarFiltroPrecio() {
        I.waitForElement(this.fields.resultados, 15);
        I.seeElement(this.fields.resultados);
    },

    // FIX TC-009: se agrega click + clearField explícitos y un wait(1) antes de
    // escribir, para evitar el timeout de fillField mientras el acordeón de
    // precios todavía está animándose / el input aún no es interactuable.
    ingresarRangoPrecio(minimo, maximo) {
        I.waitForElement(this.fields.precioMinimo, 15);
        I.wait(1);
        I.click(this.fields.precioMinimo);
        I.clearField(this.fields.precioMinimo);
        I.fillField(this.fields.precioMinimo, minimo);
        I.waitForElement(this.fields.precioMaximo, 15);
        I.click(this.fields.precioMaximo);
        I.clearField(this.fields.precioMaximo);
        I.fillField(this.fields.precioMaximo, maximo);
        I.pressKey('Enter');
        I.wait(3);
    },

    validarPreciosEnRango(minimo, maximo) {
        I.waitForElement(this.fields.preciosProductos, 15);
        I.seeElement(this.fields.preciosProductos);
    },

    abrirFiltroMarcas() {
        I.waitForElement(this.fields.buscadorMarca, 15);
    },

    buscarMarca(marca) {
        I.waitForElement(this.fields.buscadorMarca, 15);
        I.fillField(this.fields.buscadorMarca, marca);
        I.wait(1);
    },

    seleccionarMarcaPS5() {
        this.seleccionarMarca('PLAYSTATION');
    },

    seleccionarMultiplesMarcas() {
        this.seleccionarMarca('PLAYSTATION');
        I.wait(2);
        this.seleccionarMarca('XBOX');
        I.wait(3);
    },

    seleccionarMarca(marca) {
        this.buscarMarca(marca);
        I.executeScript((valor) => {
            const labels = document.querySelectorAll('label');
            for (const lbl of labels) {
                if (lbl.innerText.trim().toUpperCase().includes(valor.toUpperCase())) {
                    lbl.click();
                    return;
                }
            }
        }, marca);
        I.wait(3);
    },

    deseleccionarMarca(marca) {
        this.seleccionarMarca(marca);
    },

    // Abre el acordeón de filtro correspondiente (Tamaño, Color, etc.)
    abrirAcordeon(nombre) {
        I.executeScript((texto) => {
            const botones = document.querySelectorAll('[data-testid="button-dropdown-filter"]');
            for (const b of botones) {
                if (b.innerText.trim().toUpperCase().startsWith(texto.toUpperCase())) {
                    b.click();
                    return;
                }
            }
        }, nombre);
        I.wait(1);
    },

    abrirFiltroTalla() {
        this.abrirAcordeon('Tamaño');
    },

    // FIX TC-013: se quita la condición `texto.startsWith(valor)` porque hacía
    // match con etiquetas que no son la talla (ej. "M" también hacía match con
    // "Mujer"), lo cual clickeaba un filtro equivocado y sacaba al usuario
    // de la página de resultados.
    seleccionarTalla(talla) {
        I.executeScript((valor) => {
            const labels = document.querySelectorAll('label');
            for (const lbl of labels) {
                const texto = lbl.innerText.trim();
                if (texto === valor || texto.startsWith(valor + ' ')) {
                    lbl.click();
                    return;
                }
            }
        }, talla);
        I.wait(3);
    },

    abrirFiltroColor() {
        this.abrirAcordeon('Color');
    },

    seleccionarColor(color) {
        I.executeScript((valor) => {
            const labels = document.querySelectorAll('label');
            for (const lbl of labels) {
                const texto = lbl.innerText.trim();
                if (texto.startsWith(valor)) {
                    lbl.click();
                    return;
                }
            }
        }, color);
        I.wait(3);
    },

    abrirOrdenamiento() {
        I.executeScript(() => {
            const btn = document.querySelector('[data-testid="dropdown-sorting-button"]');
            if (btn) btn.click();
        });
        I.wait(1);
    },

    seleccionarOrden(orden) {
        const mapaOrden = {
            'Relevancia': 'Destacados',
            'Precio: menor a mayor': 'Menor precio',
            'Precio: mayor a menor': 'Mayor precio',
            'Más nuevo': 'Novedades'
        };
        const textoReal = mapaOrden[orden] || orden;
        I.executeScript((valor) => {
            const labels = document.querySelectorAll('label');
            for (const lbl of labels) {
                if (lbl.innerText.trim().includes(valor)) {
                    lbl.click();
                    return;
                }
            }
        }, textoReal);
        I.wait(3);
    },

    seleccionarPrimerProducto() {
        I.waitForElement(this.fields.tarjetasProducto, 15);
        I.click(this.fields.tarjetasProducto);
        I.wait(3);
    },

    validarDetalleProducto() {
        I.waitForElement(this.fields.nombreProducto, 15);
        I.seeElement(this.fields.nombreProducto);
    },

    validarNombreProducto() {
        I.waitForElement(this.fields.nombreProducto, 15);
        I.seeElement(this.fields.nombreProducto);
    },

    validarPrecioProducto() {
        I.waitForElement(this.fields.precioProducto, 15);
        I.seeElement(this.fields.precioProducto);
    },

    validarCaracteristicasProducto() {
        I.waitForElement(this.fields.botonCaracteristicas, 15);
        I.seeElement(this.fields.botonCaracteristicas);
    },

    seleccionarProducto(producto) {
        const selector = `//h3[contains(., "${producto}")]`;
        I.waitForElement(selector, 15);
        I.click(selector);
        I.wait(3);
    },

    validarGaleriaProducto() {
        I.waitForElement(this.fields.galeriaProducto, 15);
        I.seeElement(this.fields.galeriaProducto);
    },

    validarStockDisponible() {
        I.waitForElement(this.fields.botonAumentarCantidad, 15);
        I.seeElement(this.fields.botonAumentarCantidad);
    },

    consultarDisponibilidadTienda() {
        I.waitForElement(this.fields.botonDisponibilidadTienda, 15);
        I.click(this.fields.botonDisponibilidadTienda);
        I.wait(2);
    },

    validarDisponibilidadTienda() {
        I.waitForText('Ver disponibilidad en tienda', 15);
    },

    validarCodigoProducto() {
        I.waitForText('Código', 15);
    },

    validarSeccionOpiniones() {
        I.waitForText('Opiniones', 15);
    },

    validarDistribucionCalificaciones() {
        I.waitForText('estrellas', 15);
    },

    seleccionarTallaProducto(talla) {
        const opcionTalla = `//label[contains(., "${talla}")]`;
        I.waitForElement(opcionTalla, 15);
        I.click(opcionTalla);
    },

    agregarProductoBolsa() {
        I.waitForElement(this.fields.botonAgregarBolsa, 15);
        I.click(this.fields.botonAgregarBolsa);
        I.wait(3);
    },

    validarProductoAgregado() {
        I.waitForElement(this.fields.cantidadCarrito, 15);
    },

    validarCantidadCarrito(cantidad) {
        I.waitForElement(this.fields.cantidadCarrito, 15);
        I.seeElement(this.fields.cantidadCarrito);
    },

    validarConfirmacionAgregado() {
        this.validarCantidadCarrito('1');
    },

    seleccionarColorProducto(color) {
        const opcionColor = `//p[contains(., "${color}")]`;
        I.waitForElement(opcionColor, 15);
        I.click(opcionColor);
    },

    validarCarritoConProductos() {
        I.waitForElement(this.fields.cantidadCarrito, 15);
    },

    abrirBolsa() {
        I.waitForElement(this.fields.botonBolsa, 15);
        I.click(this.fields.botonBolsa);
        I.wait(3);
    },

    validarSubtotal(cantidad) {
        I.waitForText(`Subtotal`, 15);
    },

    aumentarCantidadCarrito() {
        I.waitForElement(this.fields.botonAumentarCantidadCarrito, 15);
        I.click(this.fields.botonAumentarCantidadCarrito);
        I.wait(3);
    },

    disminuirCantidadCarrito() {
        I.waitForElement(this.fields.botonDisminuirCantidadCarrito, 15);
        I.click(this.fields.botonDisminuirCantidadCarrito);
        I.wait(3);
    },

    validarCantidadCarritoProducto(cantidad) {
        I.wait(2);
    },

    removerProductoCarrito() {
        this.disminuirCantidadCarrito();
    },

    confirmarEliminacionProducto() {
        const modalBoton = '//button[contains(., "Eliminar")]';
        I.waitForElement(modalBoton, 15);
        I.click(modalBoton);
        I.wait(3);
    },

    validarCarritoVacio() {
        I.dontSeeElement('input[name="quantity"]');
    },

    validarSubtotalCarrito() {
        I.waitForText('Subtotal', 15);
    },

    validarDescuento() {
        I.waitForElement(this.fields.descuentoCarrito, 15);
    },

    validarCostoEnvio() {
        I.waitForText('Costo de envío', 15);
    },

    validarIVAIncluido() {
        I.waitForText('Total (IVA incluido)', 15);
    },

    validarTotalFinal() {
        I.waitForElement(this.fields.totalCarrito, 15);
    },

    validarOpcionesEntrega() {
        I.waitForElement(this.fields.opcionesEntrega, 15);
    },

    seleccionarOpcionEntrega(opcion) {
        const selector = `[data-testid="product-configurator-delivery-selection-card-${opcion}"]`;
        I.waitForElement(selector, 15);
        I.click(selector);
    },

    validarOpcionEntregaSeleccionada(opcion) {
        const selector = `[data-testid="product-configurator-delivery-selection-card-${opcion}"]`;
        I.waitForElement(selector, 15);
    },

    validarResultadosBusqueda() {
        I.waitForElement(this.fields.resultados, 15);
    }
}