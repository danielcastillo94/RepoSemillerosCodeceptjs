const dailyPage = require('../pages/dailyPage.js');

Given('Estoy en la pagina de Daily Motion', () => {
  dailyPage.home();
});

When('espero a que el contenido cargue', async () => {
  await dailyPage.waitForCompleteLoad(); 
});

Then('verifico que se cargue el contenido', async () => {
  await dailyPage.verifyContentLoaded();
});

Given("Estoy en la pagina de Daily Motion", () => {
    dailyPage.home();
});

When("Presiono el boton de Explorar", () => {
    dailyPage.clickBoton();
});

Then("Valido si el href contiene explore", async () => {
    await dailyPage.verificarHref();
});