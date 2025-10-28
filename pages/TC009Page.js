const {I} = inject();
const {allure} = codeceptjs.container.plugins();

class TC009Page{
    elementos = {
        buttoncookies: '//a[@id="acepto-cookies"]',
        btnubicacion: '//span[contains(@class, "estado-Gluo")]',
        menuUbicacion: 'ul[class="dropdown-menu"]',
        optam: 'a[data-submenu="Tamaulipas"]'
    }

    urls = {
        telcel: 'https://www.telcel.com/'
    }

    paginaprincipal(){
        I.amOnPage(this.urls.telcel);
        I.click(this.elementos.buttoncookies);
    }

    ubicacion(){
        I.waitForURL(this.urls.telcel);
        I.click(this.elementos.btnubicacion);
        I.waitForElement(this.elementos.menuUbicacion);
        I.scrollTo(this.elementos.optam);
        I.click(this.elementos.optam);
    }

    verubicacion(){
        I.amOnPage(this.urls.telcel);
        I.seeTextEquals("Tamaulipas", this.elementos.btnubicacion);
        
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
module.exports = new TC009Page();