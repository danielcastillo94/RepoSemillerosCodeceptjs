const { I } = inject();
class TC011mobile_menu_page {

    fields = {
        Cookies: '[class="telcel-banner-aviso-cookies"]',
        menuHamburguesa: '#telcel-menu-principal-boton',
        menuLateral: '.navbar-nuevo-menu.btn',
        DesplieguePersonas: locate('a').withAttr({ 'data-menusup': 'Personas' }),


    };

    async Home() {

        I.amOnPage('/');
        if (await I.grabNumberOfVisibleElements(this.fields.Cookies)) {
            I.click('//a[@id="acepto-cookies"]');
        }
        // Simulador de pantalla del iPhone 14 Pro Max
        I.resizeWindow(430, 932);
        I.wait(5);


    }
    async MenuHamburguesa() {

        await I.waitForVisible(this.fields.menuHamburguesa, 10);
        await I.seeElement(this.fields.menuHamburguesa);
        I.click(this.fields.menuHamburguesa);
        I.wait(3);


        // Mostrar los elementos del menu lateral 
        await I.waitForVisible(this.fields.menuLateral, 10);
        await I.seeElement(this.fields.menuLateral);

        //Despliegue
        I.waitForVisible(this.fields.DesplieguePersonas, 10);
        I.click(this.fields.DesplieguePersonas);
        I.wait(3);


    }


    VisualizarResultado() {


        I.say('Menú lateral visible con despliegue de opciones')


    }


}

module.exports = new TC011mobile_menu_page(); 