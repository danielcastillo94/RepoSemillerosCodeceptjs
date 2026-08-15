const { I } = inject();

class CartPage {
    locator = {
        btncantidadproduc: '//button[@data-testid="1041644110-configurator-quantity-increase"]',
        btnagregarbolsa: '//button[@data-testid="add-to-bag-button"]',
        msjconfirmaccion: '//span[contains(text(),"Agregaste")]',
    };

    //TC029------------------
    agregarbolsa(){
        I.scrollTo(this.locator.btnagregarbolsa);
        I.click(this.locator.btnagregarbolsa);
    }
    
    //TC030------------------
    cantidadproducto(){
        I.click(this.locator.btncantidadproduc);
    }

    //TC031------------------
    validarmensaje(){
        I.waitForElement(this.locator.msjconfirmaccion);
        I.waitForVisible(this.locator.msjconfirmaccion);
    }
}

module.exports = new CartPage();