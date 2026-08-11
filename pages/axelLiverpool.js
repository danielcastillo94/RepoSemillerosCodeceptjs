const { I } = inject();

class axelLiverpool{
    urls = {
        urlLiverpool: 'https://www.liverpool.com.mx/tienda/home',

    };

    fields = {
        footer: '//div[contains(@class, "container") and contains(@class, "justify-between")]',

    };

    web(){
        I.amOnPage(this.urls.urlLiverpool)
    }

    cursor(){
        I.scrollTo(this.fields.footer)
    }

    verSeccion(){
        I.see(this.fields.footer)
    }
}

module.exports = new axelLiverpool();