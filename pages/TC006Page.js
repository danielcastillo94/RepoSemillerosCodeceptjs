const { I } = inject();

class TC006Page{
    elementos = {
        buttoncookies: '//a[@id="acepto-cookies"]',
        menu: 'a#telcel-menu-principal-boton',
        movil: 'a[data-nombreboton="Movil"]',
        redcobertura: 'a[data-nombreboton="Red de mayor cobertura"]',
        vercobertura: '//button[contains(@class,"telcel-controles-cta")]'
    }

    urls = {
        telcel: 'https://www.telcel.com/',
        coberura: 'https://www.telcel.com/personas/la-red-de-mayor-cobertura/red-tecnologia/5g',
        mapa: 'https://www.telcel.com/personas/quien-es-telcel/sobre-nosotros/mapas-cobertura'
    }

    inicio(){
        I.amOnPage(this.urls.telcel);
        I.click(this.elementos.buttoncookies);
    }

    opred(){
        I.moveCursorTo(this.elementos.menu);
        I.moveCursorTo(this.elementos.movil);
        I.click(this.elementos.redcobertura);
    }

    vercobertura(){
        I.waitForURL(this.urls.coberura);
        I.scrollPageToBottom(this.elementos.vercobertura);
        I.click(this.elementos.vercobertura);
    }

    vermapa(){
        I.waitForURL(this.urls.mapa);
        I.see('Mapas de Cobertura'); //nombre de la seccion
        I.scrollTo('iframe[id="iframe-recarga3"]');
        I.seeElement('iframe[id="iframe-recarga3"]'); //mapa
    }

}
module.exports = new TC006Page();