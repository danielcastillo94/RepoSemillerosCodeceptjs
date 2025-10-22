const { I } = inject();

class planes_5G {
    page_elements = {
        banner5G: '//div[@class="telcel-destacado-descriptivo---contenido  "]',
        seeMapButton: '//button[text()="Ver cobertura"]',
        mapiFrame: '#iframe-recarga3',
        mapGraph: '//html/body/div[2]/div[2]/div[1]/div/div/div[3]/div[1]/div[2]'
    }

    goToPage() {
        I.amOnPage('https://www.telcel.com/personas/la-red-de-mayor-cobertura/red-tecnologia/5g.html');
    }

    goToMap() {
        I.click('//*[@id="acepto-cookies"]');
        I.scrollTo(this.page_elements.banner5G);
        I.click(this.page_elements.seeMapButton);
        I.waitForElement(this.page_elements.mapiFrame, 10);
        within({ frame: locate(this.page_elements.mapiFrame).first() }, () => {
            I.waitForElement(this.page_elements.mapGraph, 10);
            I.seeElement(this.page_elements.mapGraph);
        });
    }
}

module.exports = new planes_5G();