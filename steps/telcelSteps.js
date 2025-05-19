const mainPage = require('../pages/mainPage');
const planesPage = require('../pages/planesPage');
const PaquetesYRecargasPage = require('../pages/paquetesYRecargasPage');
const politicasYCodigosPage = require('../pages/politicasYCodigosPage');
const { I } = inject();

Given("estoy en la pagina de inicio de Telcel", () => {
  I.openTelcelHomepage();
});

When("hago clic en Ver todos los Planes", () => {
  I.goToAllPlans();
});

Then("debo ver un plan Telcel Plus", () => {
  planesPage.verifyTelcelLibre();
});

Then("debo ver el resumen de la recarga y un formulario de pago", () => {
  PaquetesYRecargasPage.verificarResumenYFormulario();
});

When("hago clic en {string}", (seccion) => {
  mainPage.goTo(seccion);
});

When("selecciono el acceso rapido {string}", (acceso) => {
  politicasYCodigosPage.seleccionarAcceso(acceso);
});

When("selecciono el estado {string} y la modalidad {string}", (estado, modalidad) => {
  politicasYCodigosPage.seleccionarOpcion(estado, "state");
  politicasYCodigosPage.seleccionarOpcion(modalidad, "modality");
});

When("realizo la búsqueda", () => {
  politicasYCodigosPage.clickBuscar();
});

Then("debo ver la region y los números de contacto", () => {
  politicasYCodigosPage.waitForResults();
});


When("recargo {string} al numero {string}", async (amount, phoneNumber) => {
  await I.mobileRecharge(amount, phoneNumber);
});