const { I } = inject();
const TC0011Page = require('../pages/TC0011Page');
const mobileMenuPage = new TC0011Page(I);

Given('que abro la pagina principal de Telcel', () => {
  I.amOnPage('https://www.telcel.com/');
});

When('abro el menú hamburguesa en vista móvil', async () => {
  await mobileMenuPage.simularVistaMovil();
  await mobileMenuPage.abrirMenu();
});

Then('deberia ver la opción {string} visible', async (opcion) => {
  await mobileMenuPage.verificarOpciones();
});
