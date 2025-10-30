const { I } = inject();

class footer_page {
   
    elements = {
        footer: 'footer.telcel-footer',
        redesSociales: 'ul.contenido-redes-sociales li a',          
        accesosRapidos: '#telcel-footer-menu-personas ul li a',     
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
            I.seeElement(`${this.elements.redesSociales}[href="${link.url}"]`);     // Comprueba el enlace
            I.seeElement(`${this.elements.redesSociales}[href="${link.url}"] img`); // Comprueba la imagen
        });
    }

    
    verificarAccesosRapidos(linksEsperados) {
        linksEsperados.forEach(link => {
            I.waitForVisible(`${this.elements.accesosRapidos}[href="${link.url}"]`, 5); 
            I.see(link.texto, `${this.elements.accesosRapidos}[href="${link.url}"]`);   
        });
    }
}

module.exports = new footer_page();
