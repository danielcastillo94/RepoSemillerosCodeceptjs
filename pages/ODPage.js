const { I } = inject();

class ODPage {
    urls = {
        urlPDPProducto: ''
    };
    fields = {
        // --- Ordenamiento (PLP) ---
        botonOrdenar: '//span[@class="body-sm-regular ml-1 whitespace-nowrap"]', // Ya lo tenías
        opcionRelevancia: 'PENDIENTE_XPATH_OPCION_RELEVANCIA',      // Ej: '//li[contains(text(),"Relevancia")]'
        opcionMenorPrecio: '//li[contains(text(),"Menor precio")]',  // Ya lo tenías
        opcionMayorPrecio: 'PENDIENTE_XPATH_OPCION_MAYOR_PRECIO',   // Ej: '//li[contains(text(),"Mayor precio")]'
        opcionLoMasNuevo: 'PENDIENTE_XPATH_OPCION_LO_MAS_NUEVO',    // Ej: '//li[contains(text(),"Lo más nuevo")]'
        tarjetaPrimerProducto: 'PENDIENTE_XPATH_PRIMER_PRODUCTO',   // Ej: '(//div[contains(@data-testid, "plp-grid-item")])[1]'

        // --- Detalle de Producto (PDP) ---
        tituloProductoPDP: 'PENDIENTE_XPATH_TITULO_PDP',            // Ej: '//h1[contains(@class, "a-product__information--title")]'
        precioProductoPDP: 'PENDIENTE_XPATH_PRECIO_PDP',            // Ej: '//p[contains(@class, "a-product__paragraphDiscountPrice")]'
        descripcionPDP: 'PENDIENTE_XPATH_DESCRIPCION_PDP',          // Ej: '//div[@id="opc-product-description"]'
        galeriaImagenes: 'PENDIENTE_XPATH_GALERIA_IMG',             // Ej: '//img[contains(@id, "pdp-gallery-image")]'

        // --- Stock y Disponibilidad ---
        indicadorStock: 'PENDIENTE_XPATH_INDICADOR_STOCK',          // Ej: '//span[contains(text(),"Disponible")]'
        botonBuscarTienda: 'PENDIENTE_XPATH_BOTON_DISPONIBILIDAD_TIENDA', // Ej: '//button[contains(text(),"Consultar inventario")]'
        modalTiendasCercanas: 'PENDIENTE_XPATH_MODAL_TIENDAS',      // Ej: '//div[contains(@class, "modal-store-availability")]'
        codigoSKU: 'PENDIENTE_XPATH_SKU_PRODUCTO',                  // Ej: '//p[contains(text(),"Código de producto")]'

        // --- Reseñas y Fotografías ---
        seccionResenas: 'PENDIENTE_XPATH_SECCION_RESENAS',          // Ej: '//div[@id="pdp-ratings-reviews"]'
        filtroEstrellas: 'PENDIENTE_XPATH_FILTRO_ESTRELLAS',        // Ej: '//button[contains(@data-testid, "rating-filter-5")]'
        filtroConFotos: 'PENDIENTE_XPATH_FILTRO_CON_FOTOS',          // Ej: '//label[contains(text(),"Con foto")]'
        fotoResena: 'PENDIENTE_XPATH_FOTO_EN_RESENA'                // Ej: '//img[contains(@class, "review-user-image")]'
    };

    // TC0016 -------------------------------------------------------------------
    ordenarPorRelevancia() {
        I.waitForElement(this.fields.botonOrdenar, 5);
        I.click(this.fields.botonOrdenar);
        I.waitForElement(this.fields.opcionRelevancia, 5);
        I.click(this.fields.opcionRelevancia);
    }

    // TC0017 -------------------------------------------------------------------
    ordenarMenorMayor() {
        I.waitForElement(this.fields.botonOrdenar, 5);
        I.click(this.fields.botonOrdenar);
        I.waitForElement(this.fields.opcionMenorPrecio, 5);
        I.click(this.fields.opcionMenorPrecio);
    }

    // TC0018 -------------------------------------------------------------------
    ordenarMayorMenor() {
        I.waitForElement(this.fields.botonOrdenar, 5);
        I.click(this.fields.botonOrdenar);
        I.waitForElement(this.fields.opcionMayorPrecio, 5);
        I.click(this.fields.opcionMayorPrecio);
    }

    // TC0019 -------------------------------------------------------------------
    ordenarMasNuevos() {
        I.waitForElement(this.fields.botonOrdenar, 5);
        I.click(this.fields.botonOrdenar);
        I.waitForElement(this.fields.opcionLoMasNuevo, 5);
        I.click(this.fields.opcionLoMasNuevo);
    }

    validarOrdenamientoResultados() {
        I.wait(3);
        I.scrollPageToTop();
        I.waitForElement(this.fields.tarjetaPrimerProducto, 5);
        I.seeElement(this.fields.tarjetaPrimerProducto);
    }

    // TC0020 -------------------------------------------------------------------
    seleccionarProducto() {
        I.waitForElement(this.fields.tarjetaPrimerProducto, 5);
        I.scrollTo(this.fields.tarjetaPrimerProducto);
        I.click(this.fields.tarjetaPrimerProducto);
    }

    validarPDP() {
        I.wait(2);
        I.waitForElement(this.fields.tituloProductoPDP, 10);
        I.seeElement(this.fields.tituloProductoPDP);
    }

    // TC0021 -------------------------------------------------------------------
    homePDP() {
        I.amOnPage(this.urls.urlPDPProducto);
    }

    validarInformacionBasicaPDP() {
        I.waitForElement(this.fields.tituloProductoPDP, 5);
        I.seeElement(this.fields.tituloProductoPDP);
        I.seeElement(this.fields.precioProductoPDP);
        I.scrollTo(this.fields.descripcionPDP);
        I.seeElement(this.fields.descripcionPDP);
    }

    // TC0022 -------------------------------------------------------------------
    validarGaleria() {
        I.waitForElement(this.fields.galeriaImagenes, 5);
        I.seeElement(this.fields.galeriaImagenes);
    }

    // TC0023 -------------------------------------------------------------------
    validarStockDisponibilidad() {
        I.waitForElement(this.fields.indicadorStock, 5);
        I.seeElement(this.fields.indicadorStock);
    }

    // TC0024 -------------------------------------------------------------------
    consultarTiendasCercanas() {
        I.scrollTo(this.fields.botonBuscarTienda);
        I.waitForElement(this.fields.botonBuscarTienda, 5);
        I.click(this.fields.botonBuscarTienda);
    }

    validarStockTiendasCercanas() {
        I.waitForElement(this.fields.modalTiendasCercanas, 5);
        I.seeElement(this.fields.modalTiendasCercanas);
    }

    // TC0025 -------------------------------------------------------------------
    validarSKU() {
        I.scrollTo(this.fields.codigoSKU);
        I.waitForElement(this.fields.codigoSKU, 5);
        I.seeElement(this.fields.codigoSKU);
    }

    // TC0026 -------------------------------------------------------------------
    validarResenasProducto() {
        I.scrollTo(this.fields.seccionResenas);
        I.waitForElement(this.fields.seccionResenas, 5);
        I.seeElement(this.fields.seccionResenas);
    }

    // TC0027 -------------------------------------------------------------------
    filtrarCalificacionEstrellas() {
        I.scrollTo(this.fields.seccionResenas);
        I.waitForElement(this.fields.filtroEstrellas, 5);
        I.click(this.fields.filtroEstrellas);
    }

    validarResenasFiltradas() {
        I.wait(2);
        I.seeElement(this.fields.seccionResenas);
    }

    // TC0028 -------------------------------------------------------------------
    consultarResenasConFotos() {
        I.scrollTo(this.fields.seccionResenas);
        I.waitForElement(this.fields.filtroConFotos, 5);
        I.click(this.fields.filtroConFotos);
    }

    validarFotosEnResenas() {
        I.wait(2);
        I.waitForElement(this.fields.fotoResena, 5);
        I.seeElement(this.fields.fotoResena);
    }

}
module.exports = new ODPage();