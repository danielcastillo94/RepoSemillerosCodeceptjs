const { I } = inject();
const dailyPage = require("../pages/dailyPage.js");

Given("Estoy en la pagina de Daily Motion", () => {
    dailyPage.home();
});

When("Presiono el boton de Explorar", () => {
    dailyPage.clickBoton();
});

Then("Valido si el href contiene explore", async () => {
    await dailyPage.verificarHref();
});

Then("Validar login correcto ", async () => {
});