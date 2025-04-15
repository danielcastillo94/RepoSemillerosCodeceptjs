const { I } = inject();

class CompararPage {
    constructor() {
        this.fields = {
            compararBtn: '(//a[(@class="btn btn--link")])[2]',
            marcaDropdown: '(//span[@class="ng-arrow-wrapper"])[3]',
            marcaOption: '(//span[@class="ng-option-label ng-star-inserted"])[6]',
            modeloDropdown: '(//span[@class="ng-arrow-wrapper"])[4]',
            modeloOption: '(//span[@class="ng-option-label ng-star-inserted"])[85]'
        };
    }

    compararSegundoDispositivo() {
        I.click(this.fields.compararBtn);
        I.wait(2);
    }

    seleccionarMarca() {
        I.click(this.fields.marcaDropdown);
        I.click(this.fields.marcaOption);
        I.wait(2);
    }

    seleccionarModelo() {
        I.click(this.fields.modeloDropdown);
        I.click(this.fields.modeloOption);
    }
}

module.exports = new CompararPage();
