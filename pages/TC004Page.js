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

    pagprincipal(){
        I.amOnPage(this.urls.telcel);
        I.click(this.elementos.buttoncookies);
    }

    busqueda(){
        I.fillField(this.elementos.barra, "iPhone");
        I.pressKey('Enter');

    }

    async resultadosB(){
        I.waitForURL(this.urls.resultados);
        I.see('iPhone');
        I.seeElement('p[class="card-products--data_name"]');

        const card = await I.grabTextFromAll('p[class="card-products--data_name"]');
        for (let i = 0; i < card.length ; i++){
            I.say(`Resultado ${[i+1]}: ${card[i]}`);
        }

    }
}    

module.exports = new TC004Page();