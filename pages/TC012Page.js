const {I} = inject();

class TC012Page{
    botones = {
        buttoncookies: '//a[@id="acepto-cookies"]',
        footer: 'div#telcel-footer-copyright',
        tyc: 'a[data-nombreboton="Términos y condiciones"]'
    }
    urls = {
        telcel: 'https://www.telcel.com/',
        urlTYC: 'https://www.telcel.com/terminos-y-condiciones'
    }

    footerEnd(){
        I.amOnPage(this.urls.telcel);
        I.click(this.botones.buttoncookies);
        I.scrollTo(this.botones.footer);
    }

    opTYC(){
        I.waitForElement(this.botones.tyc);
        I.click(this.botones.tyc);
    }

    seccionTYC(){
        I.waitForURL(this.urls.urlTYC);
        I.see('Términos y condiciones');

    }
}

module.exports = new TC012Page();