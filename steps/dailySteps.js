const { I } = inject();
const dailyPage = require('../pages/dailyPage.js');


Given('navego a la pagina', () => {
  dailyPage.Home();
});

When('espero a que el contenido cargue', async () => {
  await dailyPage.waitForContent();
});

Then('verifico que se cargue el contenido', async () => {
  await dailyPage.verifyContentLoaded();
});