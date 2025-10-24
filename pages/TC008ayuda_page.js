const { I } = inject();

class TC008ayuda_page {
    fields = {
        Cookies: '[class="telcel-banner-aviso-cookies"]',
        Menu: '#telcel-menu-principal-boton',
        Ayuda: 'a[data-nombreboton="Ayuda"]',
        Pfrecuentes: 'a[data-slider="1"][data-target="#puntos-de-contacto"]'



    };
    async pagInicio() {
        await I.amOnPage('https://www.telcel.com/');
        if (await I.grabNumberOfVisibleElements(this.fields.Cookies)) {
            await I.click('//a[@id="acepto-cookies"]');

        }

    }

    async menuDesplegable() {
        //Navegar al menu y hacer clik
        await I.moveCursorTo(this.fields.Menu);

        //Elegir la opcion ayuda
        await I.waitForVisible(this.fields.Ayuda, 10);
        await I.moveCursorTo(this.fields.Ayuda);
        await I.click(this.fields.Ayuda);
        await I.wait(5);

    }

    contenidoVisible() {

        //visualizar sección de preguntas frecuentes
        I.waitForVisible(this.fields.Pfrecuentes);
        I.wait(5);

    }
}

module.exports = new TC008ayuda_page(); //exportar la clase*/