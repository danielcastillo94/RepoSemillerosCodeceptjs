const { I } = inject();

class ODPage {
    urls = {
        urlcalzadohome: 'https://www.liverpool.com.mx/tienda?s=calzado',
        urlCelulares: 'https://www.liverpool.com.mx/tienda?s=celulares',
        urlGalaxyS25: 'https://www.liverpool.com.mx/tienda/pdp/samsung-galaxy-s25-ultra-dynamic-amoled-2x-6-9-pulgadas/1170197151?skuid=1184135520',
        urlGalaxyOmolet: 'https://www.liverpool.com.mx/tienda/pdp/samsung-galaxy-s26-ultra-dynamic-amoled-2x-6-9-pulgadas/1191389946?skuid=1191389961'
    };
    fields = {
        // --- Ordenamiento (PLP) ---
        botonOrdenar: '//button[@aria-controls="sorting-options"]', // Ya lo tenías
        opcionDestacados: '//li[contains(text(),"Destacados")]',      // Ej: '//li[contains(text(),"DestacadosopcionDestacados")]'
        resultadoDestacados: '//img[@data-testid="99976007223-image-slider-image-0"]',
        opcionMenorPrecio: '//li[contains(text(),"Menor precio")]',  // Ya lo tenías
        resultadoMenor: '//img[@data-testid="1181697899-image-slider-image-0"]',
        opcionMayorPrecio: '//li[contains(text(),"Mayor precio")]',   // Ej: '//li[contains(text(),"Mayor precio")]'
        resultadoMayor: '//img[@data-testid="1187774361-image-slider-image-0"]',
        opcionLoMasNuevo: '//li[contains(text(),"Novedades")]',    // Ej: '//li[contains(text(),"Lo más nuevo")]'
        resultadoNuevo: '//img[@data-testid="1170197151-image-slider-image-0"]',
        SamsumgS25UltraDynamic: '//img[@data-testid="1170197151-image-slider-image-0"]',   // Ej: '(//div[contains(@data-testid, "plp-grid-item")])[1]'

        // --- Detalle de Producto (GalaxydescripcionGalaxy) ---
        tituloCelular: '//h1[contains(text(),"Galaxy S25 Ultra Dynamic AMOLED 2X 6.9 pulgadas")]',            // Ej: '//h1[contains(@class, "a-product__information--title")]'
        precioGalaxy: '//span[@class="text-heading-2xl font-bold text-price-primary font-bold"]',            // Ej: '//p[contains(@class, "a-product__paragraphDiscountPrice")]'
        descripcionGalaxy: 'PENDIENTE_XPATH_DESCRIPCION_GalaxydescripcionGalaxy',          // Ej: '//div[@id="opc-product-description"]'
        botonDetalles: '//button[@data-testid="ml-list-item-specs"]',
        caracteristicasGalaxy: '//h4[contains(text(),"General")]',
        galeriaImagenes: '//img[@alt="Galaxy S25 Ultra Dynamic AMOLED 2X 6.9 pulgadas 1"]',             // Ej: '//img[contains(@id, "GalaxydescripcionGalaxy-gallery-image")]'

        // --- Stock y Disponibilidad ---
        tamañoAlmacenamiento: '//summary[@aria-controls=":R2927h35d7rlsq:"]',
        almacenamiento: '//label[contains(@for, "size-picker-256")]',
        botondeCompra: '//button[@data-testid="buy-now-button"]',
        botonDeProteccion: '//*[contains(text(), "No, gracias")]',
        ciudadDeBusqueda: '//input[@data-testid="search-termn-input"]',
        indicadorStock: '//*[contains(text(), "disponible") or contains(text(), "Disponible")]',          // Ej: '//span[contains(text(),"Disponible")]'

        botonBuscarTienda: '//button[contains(text(), "Click") or contains(text(), "Tienda")]', // Ej: '//button[contains(text(),"Consultar inventario")]'
        tiendaInterlomas: '//div[contains(text(), "Interlomas") or contains(text(), "tienda")]',
        modalTiendasCercanas: '//span[@data-testid="stores-radio-group-1-radio"]',      // Ej: '//div[contains(@class, "modal-store-availability")]'
        codigoSKU: '//p[@class="text-body-sm text-low-emphasis"]',                  // Ej: '//p[contains(text(),"Código de producto")]'

        // --- Reseñas y Fotografías ---
        seccionResenas: '//span[contains(text(),"Opiniones del artículo")]',          // Ej: '//div[@id="GalaxydescripcionGalaxy-ratings-reviews"]'
        filtroEstrellas: 'PENDIENTE_XPATH_FILTRO_ESTRELLAS',        // Ej: '//button[contains(@data-testid, "rating-filter-5")]'
        filtroConFotos: '//img[@data-testid="gallery-img"]',          // Ej: '//label[contains(text(),"Con foto")]'
        fotoResena: '//h3[contains(text(),"Comentarios destacados")]'                // Ej: '//img[contains(@class, "review-user-image")]'
    };
    //Homepagecalzado
    homeCalzado() {
        I.amOnPage(this.urls.urlcalzadohome);
    }
    // TC0016 -------------------------------------------------------------------
    ordenarPorRelevancia() {
        I.waitForElement(this.fields.botonOrdenar, 5);
        I.click(this.fields.botonOrdenar);
        I.waitForElement(this.fields.opcionDestacados, 5);
        I.click(this.fields.opcionDestacados);
    }
    validarOrdenamientoResultados1() {
        I.waitForElement(this.fields.resultadoDestacados);
    }

    // TC0017 -------------------------------------------------------------------
    ordenarMenorMayor() {
        I.waitForElement(this.fields.botonOrdenar, 5);
        I.click(this.fields.botonOrdenar);
        I.waitForElement(this.fields.opcionMenorPrecio, 5);
        I.click(this.fields.opcionMenorPrecio);
    }
    validarOrdenamientoResultados2() {
        I.waitForElement(this.fields.resultadoMenor);
    }

    // TC0018 -------------------------------------------------------------------
    ordenarMayorMenor() {
        I.waitForElement(this.fields.botonOrdenar, 5);
        I.click(this.fields.botonOrdenar);
        I.waitForElement(this.fields.opcionMayorPrecio, 5);
        I.click(this.fields.opcionMayorPrecio);
    }

    validarOrdenamientoResultados3() {
        I.waitForElement(this.fields.resultadoMayor, 5);
    }

    // TC0019 -------------------------------------------------------------------
    ordenarMasNuevos() {
        I.waitForElement(this.fields.botonOrdenar, 5);
        I.click(this.fields.botonOrdenar);
        I.waitForElement(this.fields.opcionLoMasNuevo, 5);
        I.click(this.fields.opcionLoMasNuevo);
    }

    validarOrdenamientoResultados4() {
        I.wait(5);
    }

    // TC0020 -------------------------------------------------------------------
    homeCelulares() {
        I.amOnPage(this.urls.urlCelulares);
    }
    seleccionarProducto() {
        I.waitForElement(this.fields.SamsumgS25UltraDynamic, 5);
        I.scrollTo(this.fields.SamsumgS25UltraDynamic);
        I.click(this.fields.SamsumgS25UltraDynamic);
    }

    validarGalaxydescripcion() {
        I.wait(2);
        I.waitForElement(this.fields.tituloCelular, 10);
        I.seeElement(this.fields.tituloCelular);
    }

    // TC0021 -------------------------------------------------------------------
    homeGalaxy() {
        I.amOnPage(this.urls.urlGalaxyS25);
    }

    validarInformacionBasicaGalaxy() {
        I.waitForElement(this.fields.tituloCelular, 5);
        I.seeElement(this.fields.tituloCelular);
        I.seeElement(this.fields.precioGalaxy);
        I.scrollTo(this.fields.botonDetalles);
        I.waitForElement(this.fields.botonDetalles);
        I.click(this.fields.botonDetalles);
        I.seeElement(this.fields.caracteristicasGalaxy, 5);
    }

    // TC0022 -------------------------------------------------------------------
    validarGaleria() {
        I.waitForElement(this.fields.galeriaImagenes, 5);
        I.seeElement(this.fields.galeriaImagenes);
    }



    // TC0023 -------------------------------------------------------------------
    validarStockDisponibilidad() {
        I.scrollTo(this.fields.almacenamiento);
        I.waitForElement(this.fields.almacenamiento, 5);
        I.seeElement(this.fields.almacenamiento);
    }

    // TC0024 -------------------------------------------------------------------
    consultarTiendasCercanas() {
        I.wait(2);
    }

    validarStockTiendasCercanas() {
        I.wait(1);
    }

    // TC0025 -------------------------------------------------------------------
    validarSKU() {
        I.waitForElement(this.fields.codigoSKU, 5);
        I.scrollTo(this.fields.codigoSKU);
        I.seeElement(this.fields.codigoSKU);
    }

    // TC0026 -------------------------------------------------------------------
    homeOmelet() {
        I.amOnPage(this.urls.urlGalaxyOmolet);

    }

    validarResenasProducto() {
        I.waitForElement(this.fields.seccionResenas, 5);
        I.scrollTo(this.fields.seccionResenas);
        I.seeElement(this.fields.seccionResenas);
    }

    // TC0027 -------------------------------------------------------------------
    filtrarCalificacionEstrellas() {
        I.scrollTo(this.fields.seccionResenas);
    }

    validarResenasFiltradas() {
        I.wait(2);
        I.seeElement(this.fields.seccionResenas);
    }

    // TC0028 -------------------------------------------------------------------
    consultarResenasConFotos() {
        I.scrollTo(this.fields.seccionResenas);
        I.waitForElement(this.fields.filtroConFotos, 5);
        I.seeElement(this.fields.filtroConFotos);
    }

    validarFotosEnResenas() {
        I.wait(2);
        I.waitForElement(this.fields.fotoResena, 5);
        I.seeElement(this.fields.fotoResena);
    }


}
module.exports = new ODPage();