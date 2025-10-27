const { I } = inject();

class TC012Page {
    elementos = {
        enlaceTerminos: '//a[contains(text(), "Términos y condiciones") and @href="/terminos-y-condiciones"]',
        tituloTerminos: '//h1[normalize-space(text())="Términos y condiciones"]',
        textoContenido: '//div[@id="accordion-8831"]',
        botonCookies: '//a[@id="acepto-cookies" and contains(text(), "Acepto las Cookies")]',
    };

    abrirPagina() {
        I.amOnPage('https://www.telcel.com/');
        I.waitForElement(this.elementos.botonCookies, 10);
    }

    accederTerminos() {
        I.click(this.elementos.botonCookies);
        I.scrollPageToBottom();
        I.waitForElement(this.elementos.enlaceTerminos, 10);
        I.click(this.elementos.enlaceTerminos);
    }

    validarCargaDocumentos() {
        I.waitForElement(this.elementos.tituloTerminos, 10);
        I.seeElement(this.elementos.tituloTerminos, 10);
    }

    validarContenido() {
        I.waitForVisible(this.elementos.textoContenido, 10);
        I.seeElement(this.elementos.textoContenido);
    }
}

module.exports = new TC012Page();