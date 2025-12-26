const { I } = inject();
const TC0010Page = require('../pages/TC0010Page');
const footerPage = new TC0010Page(I);

Given('que abro la pagina principal de Telcel', () => {
  I.amOnPage('https://www.telcel.com/');
});

When('me desplazo al footer del sitio', async () => {
  await footerPage.desplazarseAlFooter();
});

Then('deberia ver el enlace de Twitter visible', async () => {
  await footerPage.verificarIconosFooter();
});

Then('deberia ver el enlace de Facebook visible', async () => {
  await footerPage.verificarIconosFooter();
});

Then('deberia ver el enlace de YouTube visible', async () => {
  await footerPage.verificarIconosFooter();
});

Then('deberia ver el enlace de Hola Telcel visible', async () => {
  await footerPage.verificarIconosFooter();
});
