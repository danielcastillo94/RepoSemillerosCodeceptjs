const { I } = inject();

class contact_page {
    elements={
        attentionLink: '//a[text()="Centro de Atención"]',
        zacatecasText:'//p[text()="Zacatecas"]',
        veracruzText: '//p[text()="Veracruz"]'
    }

    goToPage(){
        I.amOnPage("https://www.telcel.com/personas/atencion-a-clientes/puntos-de-contacto");
    }

    verifyElements(){
        I.click(this.elements.attentionLink);
        I.scrollTo(this.elements.veracruzText);
        I.seeElement(this.elements.veracruzText);
        I.seeElement(this.elements.zacatecasText);
    }
}

module.exports = new contact_page();