const CoberturaPage = require('../pages/cobertura_page');

Feature('Cobertura - Validación de sección');

Scenario('Abrir Cobertura y validar mapa y título', async ({ I }) => {
  const coberturaPage = new CoberturaPage(I);

  // Abrir el home de Telcel
  await I.amOnPage('https://www.telcel.com/');

  // Buscar y abrir la sección Cobertura
  await coberturaPage.buscarCobertura();

  // Validar título visible
  await coberturaPage.verificarTituloVisible();

  // Validar mapa interactivo visible
  await coberturaPage.verificarMapaVisible();
});