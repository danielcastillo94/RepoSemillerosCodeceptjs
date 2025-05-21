

const PruebaPage = require("../pages/pruebaPage");
const { I } = inject();
const { expect } = require("chai");

Given('el usuario está en la página principal de YouTube', async () => {
  
  I.amOnPage("https://www.youtube.com");
  I.waitForElement('//div[@id="start"]/yt-icon-button[@id="guide-button"]', 20); 
  I.click('//div[@id="start"]/yt-icon-button[@id="guide-button"]'); 
});

When('haces clic en el botón "Explorar"', async () => {
  I.waitForElement(
    '(//h3[not(@hidden)]/yt-formatted-string[@id="guide-section-title"])[1]'
  );

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
