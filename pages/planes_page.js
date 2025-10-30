const { I } = inject();

class planes_page {
    elements = {
         // Aquí se muestran los elementos del TC002
        menuPrincipal: 'a#telcel-menu-principal-boton',
        menuDesplegado: '#menu-principal.active-menu',
        opcionMovil: 'a[data-menuprin="Movil"].black-mobile',
        submenuMovilContenedor: '//div[@class="submenu-content default submenu-mobile" and @data-menuprin="Movil"]',
        submenuMovil: '//div[@class="submenu-content default submenu-mobile" and @data-menuprin="Movil"]//a',
        // Aquí se muestran los elementos del TC003
        planTelcelUltra: '//p[text()="Plan Telcel Ultra"]',
        botonVerMas: '//p[text()="Plan Telcel Ultra"]/following::button[text()="Ver más"][1]',
        botonVerDetalles: '//a[contains(@data-nombre,"Telcel Ultra 5") and contains(text(),"Ver detalles")]',
        detallesPlanUltra5: '//div[contains(@class,"modal-content")]//p[contains(@class,"title-modal") and text()="Telcel Ultra 5"]',
    };

    //TC002
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
            const i = index + 1;
            const xpathElemento = `(${this.elements.submenuMovil})[${i}]`;

            I.waitForVisible(xpathElemento, 10);
            I.seeElement(xpathElemento);

            // Se valida el texto
            I.grabTextFrom(xpathElemento).then(textoActual => {
                I.assert(textoActual.trim() === submenu.texto, `Texto esperado: "${submenu.texto}", encontrado: "${textoActual.trim()}"`);
            });
            // Se valida el link en esta parte
            I.grabAttributeFrom(xpathElemento, 'href').then(hrefActual => {
                I.assert(hrefActual.endsWith(submenu.link) || hrefActual === submenu.link, `Link esperado: "${submenu.link}", encontrado: "${hrefActual}"`);
            });
        });
    }

    // TC003
    irAPaginaPlanes() {
        I.amOnPage('https://www.telcel.com/planes-renta');
        I.waitForElement(this.elements.planTelcelUltra, 5);
        I.seeElement(this.elements.planTelcelUltra);
    }

    verMasPlanUltra() {
        I.click(this.elements.botonVerMas);
        I.waitForElement(this.elements.botonVerDetalles, 5);
    }

    buscarPlanUltra5() {
        I.click(this.elements.botonVerDetalles);
        I.waitForElement(this.elements.detallesPlanUltra5, 10);
    }

    verDetallesPlanUltra5() {
        I.wait(2);
        I.seeElement(this.elements.detallesPlanUltra5);
    }
}

module.exports = new planes_page();