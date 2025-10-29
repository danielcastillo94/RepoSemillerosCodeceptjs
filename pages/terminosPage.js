const { I } = inject();

class terminosPage {
    elements = {
        enlaceTerminos: '//a[contains(text(), "Términos y condiciones") and @href="/terminos-y-condiciones"]',
        tituloTerminos: '//h1[normalize-space(text())="Términos y condiciones"]',
        textoContenido: 'div.panel-group.glosario',
        botonCookies: '//a[@id="acepto-cookies" and contains(text(), "Acepto las Cookies")]',
    };

    abrirPagina() {
        I.amOnPage('https://www.telcel.com/');
        I.waitForElement(this.elements.botonCookies, 10);
    }

    accederTerminos() {
        I.click(this.elements.botonCookies);
        I.scrollPageToBottom();
        I.waitForElement(this.elements.enlaceTerminos, 10);
        I.click(this.elements.enlaceTerminos);
    }

    validarCargaDocumento() {
        I.waitForElement(this.elements.tituloTerminos, 10);
        I.seeElement(this.elements.tituloTerminos, 10);
    }

    validarContenido() {
        I.waitForVisible(this.elements.textoContenido, 20);
        I.scrollTo(this.elements.textoContenido);
        I.seeElement(this.elements.textoContenido);
    }
}

module.exports = new terminosPage();