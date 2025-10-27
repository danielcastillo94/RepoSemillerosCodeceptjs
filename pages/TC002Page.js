const { I } = inject();

class TC002Page {
    // Definimos los elementos de la página como propiedades de la clase
    get elements() {
        return {
            menuPrincipal: 'a#telcel-menu-principal-boton',
            menuDesplegado: '#menu-principal.active-menu',
            opcionMovil: 'a[data-menuprin="Movil"].black-mobile',
            submenuMovilContenedor: '//div[@class="submenu-content default submenu-mobile" and @data-menuprin="Movil"]',
            submenuMovil: '//div[@class="submenu-content default submenu-mobile" and @data-menuprin="Movil"]//a',
        };
    }

    abrirPagina() {
        I.amOnPage('https://www.telcel.com/');
    }

    esperarCarga() {
        I.waitForElement(this.elements.menuPrincipal, 10);
    }

    accederMenuPrincipal() {
        I.moveCursorTo(this.elements.menuPrincipal);
        I.waitForVisible(this.elements.menuDesplegado, 10);
    }

    posicionarseSobreOpcionMovil() {
        I.waitForVisible(this.elements.opcionMovil, 10);
        I.seeElement(this.elements.opcionMovil);
        I.waitForVisible(this.elements.submenuMovilContenedor, 10);
    }

    validarSubmenus(submenusEsperados) {
        submenusEsperados.forEach((submenu, index) => {
            const xpathElemento = `(${this.elements.submenuMovil})[${index + 1}]`;

            I.waitForVisible(xpathElemento, 10);
            I.seeElement(xpathElemento);

            this.validarTexto(xpathElemento, submenu.texto);
            this.validarLink(xpathElemento, submenu.link);
        });
    }

    validarTexto(xpathElemento, textoEsperado) {
        I.grabTextFrom(xpathElemento).then(textoActual => {
            I.assert(textoActual.trim() === textoEsperado, `Texto esperado: "${textoEsperado}", encontrado: "${textoActual.trim()}"`);
        });
    }

    validarLink(xpathElemento, linkEsperado) {
        I.grabAttributeFrom(xpathElemento, 'href').then(hrefActual => {
            const esElMismoLink = hrefActual.endsWith(linkEsperado) || hrefActual === linkEsperado;
            I.assert(esElMismoLink, `Link esperado: "${linkEsperado}", encontrado: "${hrefActual}"`);
        });
    }
}

module.exports = new TC002Page();