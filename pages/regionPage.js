const { I } = inject();

class regionPage {
    elements = {
        selectorRegion: '//a[contains(@class, "dropdown-toggle") and contains(@data-menuprin, "Estados")]',
        opcionRegion: (region) => `//ul[contains(@class, "dropdown-menu")]//a[text()="${region}"]`,
        textoRegionSeleccionada: '//span[contains(@class, "estado-Gluo")]'
    };

    abrirPagina() {
        I.amOnPage('https://www.telcel.com/');
        I.waitForElement(this.elements.selectorRegion, 10);
    }

    cambiarRegion(region) {
        I.waitForVisible(this.elements.selectorRegion, 10);
        I.click(this.elements.selectorRegion);
        I.waitForElement(this.elements.opcionRegion(region), 10);
        I.click(this.elements.opcionRegion(region));
    }

    validarRegionActual(region) {
        I.waitForVisible(this.elements.textoRegionSeleccionada, 10);
        I.waitForText(region, 10, this.elements.textoRegionSeleccionada);
    }
}

module.exports = new regionPage();
