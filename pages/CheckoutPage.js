const {I, CartPage} = inject();
require('dotenv').config();

class CheckoutPage{
    locartor = {
        btncomprar: '//button[@data-testid="checkout-payment-summary-button"]',
        btncupon: '//button[@data-testid="one-checkout-page-coupons"]',
        contentcupon: '//div[@class="flex items-center h-14 w-full gap-6 px-5 py-4 md:px-4"]',
        inputcupon: '//input[@data-testid="coupon-list-coupon-input-input"]',
        btnaplicarcupon: '//span[contains(text(),"Aplicar")]',
        btnclosecupon: '//span[contains(text(),"close")]',
    }

    //TC047-48---------------------
    validarcupon(){
        I.scrollPageToTop();
        I.click(this.locartor.btncomprar);
        I.click(this.locartor.btncupon);
        I.waitForElement(this.locartor.contentcupon);
        I.fillField(this.locartor.inputcupon, process.env.CUPON);
        I.click(this.locartor.btnaplicarcupon);
        I.click(this.locartor.btnclosecupon);
    }
    validardescuento(){
        CartPage.total();
    }
}

module.exports = new CheckoutPage();