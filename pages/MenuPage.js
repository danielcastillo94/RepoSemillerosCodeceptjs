const {I} = inject();

class MenuPage {
    urls = {

    };

    locator = {
        liverpoollogo: '//img[@data-testid="blt26617d4f2e17657d-logo-default-image"]',
        btncategorias: '//button[@data-testid="blt26617d4f2e17657d-header-button-category"]',
        imgcontanier: '//img[@alt="liverpool-primary"]',
        contentmenucategoria: '//div[@class="flex flex-col bg-carbon-25 h-full pt-9"]',
        categoriahombre: '//span[contains(text(),"Hombre")]',
        imgtenis: '//img[@data-testid="Tenis-image"]',

    };

    //Given----------
    inicio(){
        I.amOnPage('/');
        I.waitForElement(this.locator.liverpoollogo, 10);
    }

    //TC004----------
    categorias(){
        I.click(this.locator.btncategorias);
        I.waitForVisible(this.locator.imgcontanier, 5);
    }
    submenu(){
        I.waitForVisible(this.locator.contentmenucategoria, 5);
    }

}

module.exports = new MenuPage();