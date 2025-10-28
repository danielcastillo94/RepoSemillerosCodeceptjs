const { I } = inject();

class TC012terminos_page {
    fields = {
        Cookies: '[class="telcel-banner-aviso-cookies"]',
        Footer: '#telcel-footer-copyright',
        Terminos: 'a[data-nombreboton="Términos y condiciones"]',
        Pagina: 'h1:has-text("Términos y condiciones")',
        Verificar: 'a:has-text("CONSULTA TÉRMINOS Y CONDICIONES TIENDA EN LÍNEA")',

    };

    async inicio() {
        I.amOnPage('/');

    }


    navegacion() {
        //Scroll al footer
        I.scrollTo(this.fields.Footer);
        I.wait(3);


        I.waitForElement(this.fields.Cookies, 10)
        if (I.grabNumberOfVisibleElements(this.fields.Cookies)) {
            I.click('//a[@id="acepto-cookies"]');
        }

    }


    clickTerminos() {
        //Esperar elemento terminos y dar click en el 
        I.waitForElement(this.fields.Terminos, 10);
        I.click(this.fields.Terminos);


    }

    async paginaCargada() {
        //Redirigirse a la pagina de terminos y condiciones, hacer un scroll para valdiar que cargo completa
        I.waitForElement(this.fields.Pagina, 5);
        I.see('Términos y condiciones', 'h1');
        I.waitForElement(this.fields.Verificar, 5);


    }
}
module.exports = new TC012terminos_page(); //exportar la clase
