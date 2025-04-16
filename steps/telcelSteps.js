const TelcelPage = require('../pages/telcelPage');

const { I } = inject();

Given('estoy en la página de Telcel', () => {
  TelcelPage.goToHomePage();
});

When('busco {string}', (producto) => {
  TelcelPage.searchProduct(producto);
});

Then('debería ver resultados relacionados con {string}', (producto) => {
  TelcelPage.verifySearchResult(producto);
});

When('voy al menu', () => {
  TelcelPage.openMainMenu();
});

When('selecciono telefonos y smartphones', () => {
  TelcelPage.selectPhonesAndSmartphones();
});

Then('debería ver la lista de teléfonos disponibles', () => {
  TelcelPage.verifyPhoneList();
});

When('voy a la tienda', () => {
  TelcelPage.goToStore();
});

When('selecciono la marca', () => {
  TelcelPage.selectSamsungBrand();
});

Then('debería ver productos de la marca Samsung', async () => {
  await TelcelPage.verifySamsungProducts();
});

When('selecciono el primer producto de la lista', () => {
  TelcelPage.selectFirstProduct();
});

When('agrego el producto al carrito', () => {
  TelcelPage.addToCart();
});

Then('debería ver el producto en el carrito', () => {
  TelcelPage.verifyProductInCart();
});

When('selecciono la opción de pago de factura', () => {
  TelcelPage.selectBillPayment();
});

When('coloco el numero {string}', (numero) => {
  TelcelPage.enterPhoneNumber(numero);
});

When('confirmo el numero {string}', (numero) => {
  TelcelPage.confirmPhoneNumber(numero);
});

Then('no deberia dejar continuar', async () => {
  await TelcelPage.shouldNotProceed();
});
