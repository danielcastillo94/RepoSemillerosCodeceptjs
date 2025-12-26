const { I } = inject();
const InicioPage = require('../pages/TC001Page');
const inicioPage = new InicioPage(I);

Given('que abro la pagina principal de Telcel', () => {
  I.amOnPage('https://www.telcel.com/');
});

Then('deberia ver el logotipo visible', async () => {
  await inicioPage.verificarLogoVisible();
});

Then('deberia ver el menú principal visible', async () => {
  await inicioPage.verificarMenuVisible();
});

Then('deberia ver el banner inicial visible', async () => {
  await inicioPage.verificarBannerVisible();
});
