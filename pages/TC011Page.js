const { I } = inject();
class TC011Page {

    elementos = {
        Cookies: '[class="telcel-banner-aviso-cookies"]',
        menuHamburguesa: '#telcel-menu-principal-boton',
        menuLateral: '.navbar-nuevo-menu.btn',
        DesplieguePersonas: locate('a').withAttr({ 'data-menusup': 'Personas' }),

    };

    async portal() {

        await I.amOnPage('https://www.telcel.com/');
        if (await I.grabNumberOfVisibleElements(this.elementos.Cookies)) {
            await I.click('//a[@id="acepto-cookies"]');
        }
        // Simulador de pantalla del iPhone 14 Pro Max
        await I.resizeWindow(430, 932);
        await I.wait(5);

    }
    async MenuHambur() {

        await I.waitForVisible(this.elementos.menuHamburguesa, 10);
        await I.seeElement(this.elementos.menuHamburguesa);
        await I.click(this.elementos.menuHamburguesa);
        await I.wait(3);

        // Mostrar los elementos del menu lateral 
        await I.waitForVisible(this.elementos.menuLateral, 10);
        await I.seeElement(this.elementos.menuLateral);

        //Despliegue
        I.waitForVisible(this.elementos.DesplieguePersonas, 10);
        I.click(this.elementos.DesplieguePersonas);
        I.wait(3);

    }

    VisualizarResul() {

        I.say('Menú lateral visible con despliegue de opciones')

    }

}

module.exports = new TC011Page(); 