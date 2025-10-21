const {I} = inject();

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
        I.waitForNavigation();
    }

    verubicacion(){
        I.waitForURL(this.urls.telcel);
        I.seeTextEquals("Tamaulipas", this.elementos.btnubicacion);

    }
}
module.exports = new TC009Page();