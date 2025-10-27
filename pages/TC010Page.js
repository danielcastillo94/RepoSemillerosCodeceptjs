const { I } = inject();

class TC010Page {
    elementos = {
        Cookies: '[class="telcel-banner-aviso-cookies"]',
        Footer: 'div[id="telcel-footer-tienda-redes"]',
        Facebook: '//a[img[@alt="facebook" and @title="Facebook"]]',
        Youtube: '//a[img[@alt="youtube" and @title="Youtube"]]',

    };

    async inicio() {
        I.amOnPage('https://www.telcel.com/');

    }

    footer() {
        //Scroll al footer
        I.scrollTo(this.elementos.Footer);
        I.wait(5);

        I.waitForElement(this.elementos.Cookies, 10)
        if (I.grabNumberOfVisibleElements(this.elementos.Cookies)) {
            I.click('//a[@id="acepto-cookies"]');
        }

    }

    async validarIcono() {

        const fb = await I.grabAttributeFrom(this.elementos.Facebook, 'href');
        if (fb && fb.includes('facebook.com')) I.say('URL de Facebook cargada correctamente');
        else I.say('URL de Facebook incorrecta');

        const yt = await I.grabAttributeFrom(this.elementos.Youtube, 'href');
        if (yt && yt.includes('youtube.com')) I.say('URL de Youtube cargada correctamente');
        else I.say('URL de Youtube incorrecta');

    }
}
module.exports = new TC010Page();