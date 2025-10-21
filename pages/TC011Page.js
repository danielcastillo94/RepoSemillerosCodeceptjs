const {I} = inject();

class TC011Page{
    botones = {
        buttoncookies: '//a[@id="acepto-cookies"]',
        menu : 'a#telcel-menu-principal-boton',
        btn1: 'a[data-nombreboton="Movil"]',
        btn2: 'a[data-nombreboton="Dispositivos Conectados y Seguridad"]',
        btn3: 'a[data-nombreboton="Entretenimiento"]'
    }

    urls = {
        telcel: 'https://www.telcel.com/'
    }

    vistaMovil(){
        I.usePlaywrightTo('emular vista móvil', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
        });
        I.amOnPage(this.urls.telcel);
        I.click(this.botones.buttoncookies);
    }

    menuHamburguesa(){
        I.waitForURL(this.urls.telcel);
        I.click(this.botones.menu);
        I.seeElement('//div[contains(text(), "Menú")]');
    }

    opHamburguesa(){
        I.waitForElement(this.botones.btn1,
                        this.botones.btn2,
                        this.botones.btn3
        );
        I.click(this.botones.btn1);
        I.click(this.botones.btn2);
        I.click(this.botones.btn3);

    }

}
module.exports = new TC011Page();