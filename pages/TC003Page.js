const {I} = inject();

class TC003Page {
    boton = {
        buttoncookies: '//a[@id="acepto-cookies"]',
        comparar: '//div[h2[contains(text(), "Telcel Ultra")]]//a[contains(text(), "Comparar")]'
    }
    
    urls = {
        tarifas: 'https://www.telcel.com/personas/planes-de-renta/tarifas-y-opciones',
        plan5g: 'https://www.telcel.com/personas/planes-de-renta/comparador-de-planes.f_familyPlan=150.f_plan=6162'
    }

    paginatarifas(){
        I.amOnPage(this.urls.tarifas);
        I.click(this.boton.buttoncookies);
    }

    eleccionplan(){
        I.waitForURL(this.urls.tarifas);
        I.scrollTo('//div[contains(@class, "list-plans")]');
        I.click(this.boton.comparar);
    }

    async verplan5g(){
        I.waitForURL(this.urls.plan5g);
        I.scrollTo('div[id="compare_planes"]');
        const bf = await I.grabTextFromAll('//tbody/tr/td/strong[@class="ng-binding"]');
        for (let i = 0; i < bf.length; i++ ){
            console.log(`Beneficio ${i + 1}: ${bf[i]}`);
        }
    }
}

module.exports = new TC003Page();