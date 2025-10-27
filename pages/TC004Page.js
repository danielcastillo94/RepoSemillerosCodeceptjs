const {I} = inject();

class TC004Page {
    elementos = {
        buttoncookies: '//a[@id="acepto-cookies"]',
        barra: 'input[id="buscador-menu-input"]',

    }

    urls = {
        telcel: 'https://www.telcel.com/',
        resultados: 'https://www.telcel.com/buscador?query=iPhone&mundo=Home&subseccion=Home'
    }

    inicio(){
        I.amOnPage(this.urls.telcel);
        I.click(this.elementos.buttoncookies);
    }

    buscador(){
        I.fillField(this.elementos.barra, "iPhone");
        I.pressKey('Enter');

    }

    async resultadosBusqueda(){
        I.waitForURL(this.urls.resultados);
        I.seeElement('p[class="card-products--data_name"]');

        const tarjeta = await I.grabTextFromAll('p[class="card-products--data_name"]');
        for (let i = 0; i < tarjeta.length ; i++){
            I.say(`Resultado ${[i+1]}: ${tarjeta[i]}`);
        }

    }
}    

module.exports = new TC004Page();