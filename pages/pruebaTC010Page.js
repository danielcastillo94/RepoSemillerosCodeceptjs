// EJERCICIO 4 - ANA PAOLA REBOLLOSO SAUCEDO

const { I } = inject();

class footertelcelPage {
    elements = {
        footer: 'footer.telcel-footer',
        redesSociales: 'ul.contenido-redes-sociales li a',          // Son 4 de redes sociales
        accesosRapidos: '#telcel-footer-menu-personas ul li a',     // Son 12 en una lista para acceso rápido
    };

    abrirPagina() {
        I.amOnPage('https://www.telcel.com/');
    }

    irAlFooter() {
        I.scrollTo(this.elements.footer);
        I.waitForElement(this.elements.footer, 10);
    }

    verificarRedesSociales(linksEsperados) {
        linksEsperados.forEach(link => {
            I.waitForVisible(`${this.elements.redesSociales}[href="${link.url}"]`, 5);
            I.seeElement(`${this.elements.redesSociales}[href="${link.url}"]`);
        });
    }

    verificarAccesosRapidos(linksEsperados) {
        linksEsperados.forEach(link => {
            I.waitForVisible(`${this.elements.accesosRapidos}[href="${link.url}"]`, 5);
            I.seeElement(`${this.elements.accesosRapidos}[href="${link.url}"]`);
        });
    }
}

module.exports = new footertelcelPage();
