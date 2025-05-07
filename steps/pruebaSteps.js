

const PruebaPage = require("../pages/pruebaPage");
const { I } = inject();

Given('el usuario está en la página principal de YouTube', async () => {
  I.amOnPage('https://www.youtube.com');
  const currUrl = await I.grabCurrentUrl();
  console.log(`URL actual: ${currUrl}`);
  I.waitForElement('button[aria-label="Guía"]', 20); 
  I.click('button[aria-label="Guía"]'); 
});

When('haces clic en el botón "Explorar"', async () => {
  const explorarContext = "#guide-section-title";
  I.see('Explorar', explorarContext);
  I.say('Se valido el texto "Explorar"');
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

Given("Estoy en telcel", () => {
PruebaPage.home();
});

Then('debería ver videos con título y nombre del canal visible', async () => {
  I.waitForElement('//*[@id="hero-title"]', 20);
  I.seeElement('//*[@id="hero-title"]');
  I.seeElement('//*[@id="description"]/span[1]');
});
