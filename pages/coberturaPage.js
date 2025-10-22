const { I } = inject();

class coberturaPage {
    elements = {
        menuPrincipal: 'a#telcel-menu-principal-boton',
        menuDesplegado: '#menu-principal.active-menu',
        opcionMovil: 'a[data-menuprin="Movil"].black-mobile',
        submenuMovilContenedor: '//div[@class="submenu-content default submenu-mobile" and @data-menuprin="Movil"]',
        menuCobertura: '//a[text()="Red de mayor cobertura"]',
        botonVerCobertura: '//button[contains(text(), "Ver cobertura")]',
        tituloSeccion: '//h1[normalize-space(b/text())="Mapas de Cobertura"]',
        mapaInteractivo: '#iframe-recarga3',

    };

    abrirPagina() {
        I.amOnPage('https://www.telcel.com/');
        I.waitForElement(this.elements.menuPrincipal, 10);
    }

    accederMenuCobertura() {
        I.moveCursorTo(this.elements.menuPrincipal);
        I.waitForVisible(this.elements.menuDesplegado, 5);
        I.waitForVisible(this.elements.opcionMovil, 5);
        I.seeElement(this.elements.opcionMovil);
        I.waitForVisible(this.elements.submenuMovilContenedor, 5);
        I.click(this.elements.menuCobertura);
    }

    oprimirVerCobertura(){
        I.waitForVisible(this.elements.botonVerCobertura, 10);
        I.scrollTo(this.elements.botonVerCobertura);
        I.wait(3);
        I.click(this.elements.botonVerCobertura);
    }

    validadMapa(){
        I.waitForVisible(this.elements.mapaInteractivo, 30);
        I.seeElement(this.elements.tituloSeccion);
        I.seeElement(this.elements.mapaInteractivo);
    }
}

module.exports = new coberturaPage();
