const { I } = inject();

class TelcelPage {
  goToHomePage() {
    I.amOnPage('/');
  }

  searchProduct(product) {
    I.waitForElement('#buscador-menu-input', 10);
    I.fillField('#buscador-menu-input', product);
    I.pressKey('Enter');
    I.waitForNavigation();
    I.wait(3);
  }

  verifySearchResult(product) {
    I.see(product);
    I.wait(2);
  }

  openMainMenu() {
    I.wait(2);
    I.moveCursorTo('#telcel-menu-principal-boton');
    I.click('//a[contains(text(), "Equipos y Accesorios")]');
    I.wait(3);
  }

  selectPhonesAndSmartphones() {
    I.wait(2);
    I.click('(//img[@class="responsive desktop ng-star-inserted"])[1]');
    I.wait(3);
  }

  verifyPhoneList() {
    I.see('Smartphones');
  }

  goToStore() {
    I.click('(//span[@class="text-option"])[3]');
    I.wait(2);
  }

  selectSamsungBrand() {
    I.click('//span[contains(text(), "SAMSUNG")]');
    I.wait(5);
  }

  async verifySamsungProducts() {
    const productos = await I.grabTextFromAll('//p[@class="cx-product-model ng-star-inserted"]');
    for (const nombre of productos) {
      if (!nombre.toUpperCase().includes('SAMSUNG')) {
        throw new Error(`Se encontró un producto que no es Samsung: "${nombre}"`);
      }
    }
  }

  selectFirstProduct() {
    I.waitForElement('(//div[@class="card-products--data"])[1]', 10);
    I.click('(//div[@class="card-products--data"])[1]');
    I.wait(5);
  }

  addToCart() {
    I.click('//button[@class="btn btn-secondary addtominicart"]');
    I.wait(5);
  }

  verifyProductInCart() {
    I.click('//a[@class="btn btn-primary cart"]');
    I.waitForElement('(//a[@class="cx-link"])[1]', 10);
    I.seeElement('(//a[@class="cx-link"])[1]');
  }

  selectBillPayment() {
    I.wait(3);
    I.click('//img[@title="icono pago de factura"]');
    I.wait(4);
  }

  enterPhoneNumber(numero) {
    I.switchTo('.iframePackagesRoaming-SIN_LIMITE');
    I.waitForElement('//input[@name="mdn"]', 10);
    I.fillField('//input[@name="mdn"]', numero);
  }

  confirmPhoneNumber(numero) {
    I.fillField('//input[@name="confirmMdn"]', numero);
  }

  async shouldNotProceed() {
    I.click('//button[@class="btn btn-primary" and contains(text(), "Continuar")]');
    I.seeElement('//input[@name="mdn"]');
  }
}

module.exports = new TelcelPage();
