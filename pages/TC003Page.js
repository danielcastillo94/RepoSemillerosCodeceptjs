const {I} = inject();

class TC003Page {
    boton = {
        buttoncookies: '//a[text()="Acepto las Cookies"]',
        comparar: '//div[h2[contains(text(), "Telcel Ultra")]]//a[contains(text(), "Comparar")]'
    }

    urls = {
        tarifas: 'https://www.telcel.com/personas/planes-de-renta/tarifas-y-opciones',
        plan5g: 'https://www.telcel.com/personas/planes-de-renta/comparador-de-planes.f_familyPlan=150.f_plan=6162'
    }

    pagtarifas(){
        I.amOnPage(this.urls.tarifas);
        I.click(this.boton.buttoncookies);
    }

    elegirplan(){
        I.waitForURL(this.urls.tarifas);
        I.scrollTo('//div[contains(@class, "list-plans")]');
        I.click(this.boton.comparar);
    }

    async visualizarplan5g(){
        I.waitForURL(this.urls.plan5g);
        I.scrollTo('div[id="compare_planes"]');
        const bf = await I.grabTextFromAll('(//strong[contains(text(),"Cargo mensual por servicio")])[1]');
        for (let i = 0; i < bf.length; i++ ){
            I.say(`Beneficio ${i + 1}: ${bf[i]}`);
        }
    }
}

module.exports = new TC003Page();



