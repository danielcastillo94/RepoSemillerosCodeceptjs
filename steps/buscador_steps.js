const { I } = inject();

Given('que el usuario abre el portal oficial de Telcel {string}', (url) => {
  I.amOnPage(url);
  I.waitForElement('#buscador-menu-input', 10);
});

When('ingresa un término de búsqueda {string}', (term) => {
  I.click('#buscador-menu-input');
  I.fillField('#buscador-menu-input', term);
  I.pressKey('Enter');
  I.wait(5);
});

Then('debe ver resultados relacionados con {string}', (term) => {
  I.wait(5);
    I.see(term);
});