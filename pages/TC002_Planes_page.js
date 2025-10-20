const { I } = inject();

class planes_5G {
    page_elements={
        banner5G: '//*[@id="accordion-9615"]/div/div[7]/div/div/div/a/div[2]',
        seeMapButton:'//*[@id="accordion-9615"]/div/div[7]/div/div/div/a/div[2]/div/button',
        mapGraph: '//html/body/div[2]/div[2]/div[1]/div/div/div[3]/div[1]/div[2]'
    }

    goToPage(){
        I.amOnPage('https://www.telcel.com/personas/la-red-de-mayor-cobertura/red-tecnologia/5g.html');
    }

    goToMap(){
        I.click('//*[@id="acepto-cookies"]');
        I.scrollTo(this.page_elements.banner5G);
        I.click(this.page_elements.seeMapButton);
        I.waitForElement(this.page_elements.mapGraph, 10);
        I.seeElement(this.page_elements.mapGraph);
    }
}

module.exports = new planes_5G();