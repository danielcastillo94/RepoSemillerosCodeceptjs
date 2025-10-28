const { I } = inject();

class TC010footer_page {
    fields = {
        Cookies: '[class="telcel-banner-aviso-cookies"]',
        Footer: '#telcel-footer-copyright',
        Facebook: '//a[img[@alt="facebook" and @title="Facebook"]]',
        Youtube: '//a[img[@alt="youtube" and @title="Youtube"]]',



    };

    async inicio() {
        I.amOnPage('/');

    }


    footer() {
        //Scroll al footer
        I.scrollTo(this.fields.Footer);
        I.wait(5);

        I.waitForElement(this.fields.Cookies, 10)
        if (I.grabNumberOfVisibleElements(this.fields.Cookies)) {
            I.click('//a[@id="acepto-cookies"]');
        }

    }


    async validarIcono() {

        const fb = await I.grabAttributeFrom(this.fields.Facebook, 'href');
        if (fb && fb.includes('facebook.com')) I.say('URL de Facebook cargada correctamente');
        else I.say('URL de Facebook incorrecta');

        const yt = await I.grabAttributeFrom(this.fields.Youtube, 'href');
        if (yt && yt.includes('youtube.com')) I.say('URL de Youtube cargada correctamente');
        else I.say('URL de Youtube incorrecta');


    }
}
module.exports = new TC010footer_page(); //exportar la clase
