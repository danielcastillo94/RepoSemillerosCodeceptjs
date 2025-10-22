const { I } = inject();

class detalleEquipoPage {
    elements = {
        barraBusqueda: 'input#buscador-menu-input',
        resultadosBusqueda: '//swiper-container[@class="swiper-buscador"]//p[contains(text(),"iPhone")]',

        primerResultado: '(//swiper-container[@class="swiper-buscador"]//p[contains(@class,"card-products--data_name")])[1]/ancestor::a',
        imagenesDetalle: '//div[@class="carousel-inner"]/div[contains(@class,"carousel-item") and contains(@class,"active")]//img',
        precioDetalle: '//div[contains(@class,"cx-product-price-plan")]',
        especificaciones: '//div[@id="tab-characteristic-body"]',
    };

    abrirDetallePrimerEquipo() {
        I.waitForElement(this.elements.primerResultado, 10);
        I.click(this.elements.primerResultado);
        I.waitForElement(this.elements.imagenesDetalle, 10);
    }

    validarDetalles() {
        I.seeElement(this.elements.imagenesDetalle);
        I.seeElement(this.elements.precioDetalle);
        I.seeElement(this.elements.especificaciones);
    }
}

module.exports = new detalleEquipoPage();
