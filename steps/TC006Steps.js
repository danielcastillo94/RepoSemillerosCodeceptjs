const { I } = inject();
const TC006Page = require('../pages/TC006Page');
const coberturaPage = new TC006Page(I);

Given('que abro la pagina principal de Telcel', () => {
  I.amOnPage('https://www.telcel.com/', { waitUntil: 'load', timeout: 120000 }); // <-- aquí
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
