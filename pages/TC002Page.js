const { I } = inject();
const { allure } = codeceptjs.container.plugins();

/*Se crearon 3 metodos para simular el flujo de navegación*/

class TC002Page {

    elemnts ={
        buttoncookies: '//a[@id="acepto-cookies"]',
        buttonplanrenta: '//a[@data-submenu="Plan de renta"]',
        buttonplan: '(//button[contains(@class, "telcel-controles-cta")])[1]',

    };

    urls = {
        urlprincipal: 'https://www.telcel.com/',
        urlplanrenta: 'https://www.telcel.com/planes-renta',
        urlplan: 'https://www.telcel.com/personas/planes-de-renta/tarifas-y-opciones/telcel-ultra',

    };

    inicio() { //método que dirige a la página principal de telcel
    I.amOnPage(this.urls.urlprincipal);
    I.click(this.elemnts.buttoncookies);
    }

    accedermenu() { //método que accede al menu, "Plan de Renta"
        I.moveCursorTo('//a[@id="telcel-menu-principal-boton"]');
        I.waitForElement('//ul[@id="level-1"]');
        I.seeElement('//a[@data-submenu="Plan de renta" and @data-menuprin="Movil"]');
        I.click(this.elemnts.buttonplanrenta);
    }

    ventanaplanes() { //método que verífica que cargue la página de "Plan de Renta"
        I.waitForURL(this.urls.urlplanrenta);
        I.waitForElement('//b[contains(text(), "Plan Telcel Ultra")]');
        I.waitForElement('p[class="telcel-destacado-descriptivo---titulo"]');
        I.click(this.elemnts.buttonplan);
    }

    async seccionPlanes(){
        I.waitForURL(this.urls.urlplan);
        I.waitForVisible('//p[contains(@class, "content-title")]');
        I.scrollTo('//p[contains(@class, "content-title")]');
        // Obtiene todos los textos visibles que coincidan
        const titulos = await I.grabTextFromAll('//p[contains(@class, "content-title")]');
        // Recorre e imprime cada uno
        for (let i = 0; i < titulos.length; i++) {
        I.say(`Plan visible: ${titulos[i]}`);
        }
        this.screenshotPassed();
    }

    async screenshotPassed(){
    const fs = require('fs');
    const path = require('path');
    const className = this.constructor.name;
    const screenshotName = (`${className}`+'.png');
    await I.saveScreenshot(screenshotName);
    const screenshotPath = path.resolve('output', screenshotName);

    const dataImage = fs.readFileSync(screenshotPath);
    allure.addAttachment(`Screenshot: ${className}`, dataImage, 'image/png');
    }
}

module.exports = new TC002Page();
