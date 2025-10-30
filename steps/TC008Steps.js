const { I } = inject();
const TC008Page = require('../pages/TC008Page');
const ayudaPage = new TC008Page(I);

Given('que abro la pagina principal de Telcel', () => {
  I.amOnPage('https://www.telcel.com/', 60000); // 60s timeout
});

When('navego al modulo Centro de ayuda', async () => {
  await ayudaPage.abrirCentroAyuda();
});

Then('deberia ver las categorias visibles', async () => {
  await ayudaPage.verificarCategoriasVisibles();
});

Then('los enlaces informativos deberian ser visibles y sus contenidos desplegables', async () => {
  await ayudaPage.verificarEnlacesVisibles();
});
