const {I} = inject();
const {allure} = codeceptjs.container.plugins();
const fs = require('fs');
const path = require('path');

class TC001Page{
    elements = {
        busqueda: 'textarea[title="Buscar"]',        
    }

    urls = {
        telcel: 'https://www.telcel.com',
    }

    carga(){
        I.amOnPage(this.urls.telcel);
    }

    portal(){
        I.waitForURL(this.urls.telcel);
        I.waitForElement('//title[contains(text(), "Telcel es la Red - Sitio Oficial")]');
        
    }

    async verelementos(){
        I.seeElement('a[title=Telcel]');
        I.seeElement('a[id="telcel-menu-principal-boton"]');
        I.seeElement('//div[contains(@class, "bannerprincipal")]');
        await this.screenshotPassed();
    }

    async screenshotPassed(){
        const className = this.constructor.name;
        const screenshotName = (`${className}`+'.png');
        await I.saveScreenshot(screenshotName);
        const screenshotPath = path.resolve('output', screenshotName);
        const dataImage = fs.readFileSync(screenshotPath);
        allure.addAttachment(`Screenshot: ${className}`, dataImage, 'image/png');
    }
}

module.exports = new TC001Page();