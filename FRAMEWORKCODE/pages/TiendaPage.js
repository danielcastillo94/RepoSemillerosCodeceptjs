const { I } = inject();

class TiendaPage {
    constructor() {
        this.fields = {
            tiendaEnLineaBtn: "//img[contains(@title, 'Tienda en Línea')]",
            telefonosBtn: '(//img[@class="responsive desktop ng-star-inserted"])[1]',
            loQuieroBtn: '(//button[@class="btn btn-primary btn-block btn-lo-quiero"])[1]',
            agregarCarritoBtn: '//button[@class="btn btn-secondary addtominicart"]',
            irCarritoBtn: '//a[@class="btn btn-primary cart"]'
        };
    }

    entrarTienda() {
        I.click(this.fields.tiendaEnLineaBtn);
        I.wait(2);
    }

    clickTelefonos() {
        I.click(this.fields.telefonosBtn);
        I.wait(2);
    }

    clickLoQuiero() {
        I.click(this.fields.loQuieroBtn);
        I.wait(2);
    }

    agregarAlCarrito() {
        I.click(this.fields.agregarCarritoBtn);
        I.wait(2);
    }

    irAlCarrito() {
        I.click(this.fields.irCarritoBtn);
        I.wait(2);
    }
}

module.exports = new TiendaPage();
