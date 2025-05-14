const dailyPage = require('../pages/dailyPage.js');
const { I } = inject();

Given('Estoy en la pagina de Daily Motion', () => {
  dailyPage.home();
});

When('espero a que el contenido cargue', async () => {
  await I.waitPageLoaded(); 
});

Then('verifico que se cargue el contenido', async () => {
  await I.seeMinElements('//div[@class="HomeVideoFeed__homeFeedItem___1CUT1"]', 3);
  await I.seeElement('//div[@class="ResponsiveSubheader__subheader___1z-cj"]');
});

// When('espero a que el contenido cargue', async () => {
//   await dailyPage.waitForCompleteLoad(); 
// });

// Then('verifico que se cargue el contenido', async () => {
//   await dailyPage.verifyContentLoaded();
// });

When("Presiono el boton de Explorar", () => {
    dailyPage.clickBoton();
});

Then("Valido si el href contiene explore", async () => {
    await dailyPage.verificarHref();
});