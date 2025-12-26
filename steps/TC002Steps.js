const { I } = inject();

Given('que abro la página principal de Telcel', () => {
  I.amOnPage('https://www.telcel.com/');
});

When('hago clic en el menú {string}', (menu) => {
 
  I.click(`text=${menu}`);

  I.waitForURL('**/planes-de-renta/**', 20);
});

Then('debería ver el título de la sección Planes visible', () => {

  I.waitForElement('section h2', 20);
  I.seeElement('section h2');
});
