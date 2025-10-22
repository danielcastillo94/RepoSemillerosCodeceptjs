const { I } = inject();

class mobileMenuPage {
    elements = {
        botonMenuHamburguesa: 'a#telcel-menu-principal-boton',
        menuLateral: '//nav[@id="menu-principal" and contains(@class,"active-menu")]',
        opcionesMenu: '//nav[@id="menu-principal"]//ul[@id="level-1"]//a[@class="black-mobile"]',
        menuPersonas: '//a[normalize-space(text())="Personas"]',
    };

    abrirPaginaResize() {
        I.amOnPage('https://www.telcel.com/');
        I.waitForElement(this.elements.botonMenuHamburguesa, 10);
    }

    abrirMenuHamburguesa() {
        I.resizeWindow(360, 740);
        I.waitForVisible(this.elements.botonMenuHamburguesa, 10);
        I.click(this.elements.botonMenuHamburguesa);
    }

    validarOpcionesMenu(opcionesEsperadas) {
        I.waitForVisible(this.elements.menuPersonas, 10);
        I.click(this.elements.menuPersonas);

        I.waitForElement('//ul[contains(@class, "submenu") or @id="level-2"]', 10);

        opcionesEsperadas.forEach(opcion => {
            const xpath = `//nav[@id="menu-principal"]//a[contains(@href,"${opcion.href}") and contains(normalize-space(.),"${opcion.text}")]`;
            I.waitForElement(xpath, 10);
            I.seeElement(xpath);
        });
        
    }
}

module.exports = new mobileMenuPage();
