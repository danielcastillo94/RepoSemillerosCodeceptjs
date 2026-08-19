const { I } = inject();

class categoryPage {
    fields = {
        // Localizador genérico de la tarjeta de un producto (ajústalo a tu sitio)
        cardProducto: '//div[contains(@class, "product-card") or contains(@class, "m-product__card")]'
    };

    tituloCategoriaDinamico(titulo) {
        return `//h1[normalize-space()="${titulo}"]`;
    }

    validarTituloPagina(titulo) {
        I.waitForVisible(this.tituloCategoriaDinamico(titulo), 7);
    }

    validarGrillaDeProductos() {
        // Valida que exista al menos un producto cargado en la página
        I.waitForVisible(this.fields.cardProducto, 7);
        I.seeElement(this.fields.cardProducto);
    }
}

module.exports = new categoryPage();