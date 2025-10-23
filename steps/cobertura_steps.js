const { I } = inject();
const CoberturaPage = require('../pages/cobertura_page');
const coberturaPage = new CoberturaPage(I);

Given('que abro la pagina principal de Telcel', () => {
  I.amOnPage('https://www.telcel.com/');
});

When('navego a la seccion de Cobertura usando el buscador', async () => {
  await coberturaPage.buscarCobertura();
});

Then('deberia ver el titulo de la seccion visible', async () => {
  await coberturaPage.verificarTituloVisible();
});

Then('deberia ver el mapa interactivo visible', async () => {
  await coberturaPage.verificarMapaVisible();
});

