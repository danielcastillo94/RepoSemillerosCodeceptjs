const { I } = inject();
const TC09Page = require('../pages/TC09Page');
const regionPage = new TC09Page(I);

Given('que abro la pagina principal de Telcel', () => {
  I.amOnPage('https://www.telcel.com/', 90000);
});

When('cambio la región desde el selector del encabezado a {string}', async (region) => {
  await regionPage.abrirSelector();
  await regionPage.seleccionarRegion(region);
});

Then('deberia ver que la región seleccionada se actualiza correctamente', async () => {
  await regionPage.verificarRegionActual('Ciudad de México');
});
