const { I } = inject();

class TC009Page {
    elementos = {
        selectorRegion: '//a[contains(@class, "dropdown-toggle") and contains(@data-menuprin, "Estados")]',
        opcionRegion: (region) => `//ul[contains(@class, "dropdown-menu")]//a[text()="${region}"]`,
        textoRegionSeleccionada: '//span[contains(@class, "estado-Gluo")]'
    };

    abrirPag() {
        I.amOnPage('https://www.telcel.com/');
        I.waitForElement(this.elementos.selectorRegion, 10);
    }

    cambiarReg(region) {
        I.waitForVisible(this.elementos.selectorRegion, 10);
        I.click(this.elementos.selectorRegion);
        I.waitForElement(this.elementos.opcionRegion(region), 10);
        I.click(this.elementos.opcionRegion(region));
    }

    validarRegionA(region) {
        I.waitForVisible(this.elementos.textoRegionSeleccionada, 10);
        I.waitForText(region, 10, this.elementos.textoRegionSeleccionada);
    }
}

module.exports = new TC009Page();