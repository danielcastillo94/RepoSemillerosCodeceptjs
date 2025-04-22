

const { I } = inject();

Given('el usuario está en la página principal de YouTube', async () => {
  I.amOnPage('https://www.youtube.com');
  I.waitForElement('button[aria-label="Guía"]', 10); 
  I.click('button[aria-label="Guía"]'); 
  I.wait(4);
});

When('haces clic en el botón "Explorar"', async () => {
  const xpathExplorar = '//*[@id="guide-section-title"][contains(text(), "Explorar")]';
  I.waitForElement(xpathExplorar, 20);
  I.scrollTo(xpathExplorar);
});

Then('debería ver las categorías "Tendencias", "Música" y "Noticias"', async () => {
  I.see('Tendencias');
  I.see('Música');
  I.see('Noticias');
});

When('hacer clic en la categoría "Música"', async () => {
  I.click('Música');
  I.wait(4);
});

Then('debería ver videos con título y nombre del canal visible', async () => {
  I.waitForElement('//*[@id="hero-title"]', 20);
  I.seeElement('//*[@id="hero-title"]');
  I.seeElement('//*[@id="description"]/span[1]');
});
