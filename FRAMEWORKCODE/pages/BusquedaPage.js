const { I } = inject();

class BusquedaPage {
    constructor() {
        this.fields = {
            searchBar: '#buscador-menu-input'
        };
    }

    searchProduct(producto) {
        global.productoBuscado = producto;
        I.fillField(this.fields.searchBar, producto);
        I.pressKey("Enter");
        I.wait(2);
    }

    waitForResults() {
        const xpath = `//span[contains(text(),"${global.productoBuscado}")]`;
        I.waitForElement(xpath, 5);
    }
}

module.exports = new BusquedaPage();
