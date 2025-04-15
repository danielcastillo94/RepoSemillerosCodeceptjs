const { I } = inject();

Given('Estoy en la página de Mercado Libre', () => {
  I.amOnPage('/');
  I.waitForElement('[data-testid="action:understood-button"]', 5); // por si aparece banner de cookies
  I.click('[data-testid="action:understood-button"]');
});

When('Busco {string}', (producto) => {
  I.fillField('input[name="as_word"]', producto);
  I.pressKey('Enter');
  I.waitForElement('[class*="search-results"]', 10);
});

Then('Veo resultados relacionados con {string}', (producto) => {
  I.see(producto);
});

