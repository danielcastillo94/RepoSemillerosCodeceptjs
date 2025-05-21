const { I } = inject();

Given("Estoy en la pagina de Daily Motion", async () => {
  await I.irADailyMotion();
});

When("Presiono el boton de Seguidos", async () => {
  await I.clickEnSeguidos();
});

Then("Valido el enlace de seguidos", async () => {
   await I.validarEnlaceSeguidos();
});
