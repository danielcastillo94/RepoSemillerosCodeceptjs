const { I } = inject();

class TC008Page{
    elementos = {
        buttoncookies: '//a[@id="acepto-cookies"]',
        menu: 'a[id="telcel-menu-principal-boton"]',
        ayuda: 'a[data-nombreboton="Ayuda"]',
        p5g: '//a[contains(text(), "5G")]',
        resultados: 'div[class="sc-results-container"]',
        paginas: 'ul[class="sc-pagination"]'
    }

    urls = {
        telcel: 'https://www.telcel.com/',
        secayuda: 'https://www.telcel.com/personas/atencion-a-clientes/preguntas-frecuentes'
    }

    menu(){
        I.amOnPage(this.urls.telcel);
        I.click(this.elementos.buttoncookies);
    }

    opayuda(){
        I.moveCursorTo(this.elementos.menu);
        I.click(this.elementos.ayuda);
    }

    seccionayuda(){
        I.waitForURL(this.urls.secayuda);
        I.waitForElement('section[id="#faqsTodas"]');
        I.waitForElement(this.elementos.p5g,5);
        I.click(this.elementos.p5g);
        I.waitForElement(this.elementos.resultados);
        I.seeElement(this.elementos.resultados, this.elementos.paginas);
    }

}
module.exports = new TC008Page();