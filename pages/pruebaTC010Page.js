// EJERCICIO 4 - ANA PAOLA REBOLLOSO SAUCEDO

const { I } = inject();

class footertelcelPage {
    // Elementos de la página a los que se les aplicarán las pruebas
    elements = {
        footer: 'footer.telcel-footer',
        redesSociales: 'ul.contenido-redes-sociales li a',          // Son 4 de redes sociales
        accesosRapidos: '#telcel-footer-menu-personas ul li a',     // Son 12 en una lista para acceso rápido
    };

    abrirPagina() {
        I.amOnPage('https://www.telcel.com/');
    }

    // Desplaza la página hasta el footer y espera a que termine de cargarse
    irAlFooter() {
        I.scrollTo(this.elements.footer);
        I.waitForElement(this.elements.footer, 10);
    }

    // Verifica que cada enlace e icono de redes sociales sea visible y tenga la URL correcta
    verificarRedesSociales(linksEsperados) {
        linksEsperados.forEach(link => {
            I.waitForVisible(`${this.elements.redesSociales}[href="${link.url}"]`, 5);
            I.seeElement(`${this.elements.redesSociales}[href="${link.url}"]`);     // Comprueba el enlace
            I.seeElement(`${this.elements.redesSociales}[href="${link.url}"] img`); // Comprueba la imagen
        });
    }

    // Verifica que cada enlace de accesos rápidos sea visible y tenga la URL correcta y se vea el texto correcto
    verificarAccesosRapidos(linksEsperados) {
        linksEsperados.forEach(link => {
            I.waitForVisible(`${this.elements.accesosRapidos}[href="${link.url}"]`, 5); // Espera a que carguen los enlaces
            I.see(link.texto, `${this.elements.accesosRapidos}[href="${link.url}"]`);   // Comprueba que el texto y el enlace sean correctos
        });
    }
}

module.exports = new footertelcelPage();
