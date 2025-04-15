const { I } = inject();

Given('estoy en la página de Telcel', () => {
  I.amOnPage('/');
  I.waitForElement('//input[@id="buscador-menu-input"]', 10);
});

When('busco {string}', (producto) => {
  I.fillField('//input[@id="buscador-menu-input"]', producto);
  I.pressKey('Enter');
  I.waitForNavigation();
});

Then('debería ver resultados relacionados con {string}', (producto) => {
  I.see(producto);
});

When("selecciono telefonos y smartphones", () => {
  I.moveCursorTo(`//a[@id="telcel-menu-principal-boton"]`);
  I.click(`//a[contains(text(), "Equipos y Accesorios")]`);
  I.wait(3);
  I.click(`(//img[@class="responsive desktop ng-star-inserted"])[1]`);
  I.wait(3);
});

Then('debería ver la lista de teléfonos disponibles', () => {
  I.see('Smartphones');
});

Given('estoy en la pagina Telcel y voy a la tienda', () => {
  I.amOnPage('/');
  I.click(`(//span[@class="text-option"])[3]`); 
  I.wait(2);
});

Then('selecciono la marca', () => {
  I.click(`//span[contains(text(), "SAMSUNG" )]`);
  I.wait(5);
});

When('selecciono el primer producto de la lista', () => {
  I.waitForElement('(//div[@class="card-products--data"])[1]', 10);
  I.click('(//div[@class="card-products--data"])[1]');
  I.wait(5);
});

When('agrego el producto al carrito', () => {
  I.click('//button[@class="btn btn-secondary addtominicart"]');
  I.wait(5);
});

Then('debería ver el producto en el carrito', () => {
  I.click('//a[@class="btn btn-primary cart"]'); 
  I.waitForElement('(//a[@class="cx-link"])[1]', 10);
  I.seeElement('(//a[@class="cx-link"])[1]');
});

// When('selecciono la opción de pago de factura', () => {
//   I.wait(6);
//   I.click('title="icono pago de factura"');
//   I.wait(3);
// });

// When('coloco el numero y lo confirmo', () => {
//   I.fillField("//input[@placeholder='A 10 dígitos'])[1]", "5566778899")
//   I.wait(3);
//   I.fillField("//input[@placeholder='A 10 dígitos'])[2]", "5566778899")
//   I.wait(2);
//   I.click('//button[@class="btn btn-primary"]//[contains, text() "Continuar"]')
//   I.wait(2);
// });
