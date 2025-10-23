const { I } = inject();
const detalleEquipoPage = require('../pages/TC005Page');

Given('que estoy en la página de inicio del portal Telcel', async () => {
  await I.amOnPage('https://www.telcel.com');
});

When('selecciono un equipo desde los resultados', async () => {
  // Aquí deberás agregar la lógica para seleccionar un equipo
  await I.click(seleccionequipo); // Selector del equipo (ajusta según sea necesario)
});

Then('debo ver las imágenes del producto', async () => {
  await detalleEquipoPage.verificarElementosVisibles();
});

Then('debo ver el precio del producto', async () => {
  await detalleEquipoPage.verificarElementosVisibles();
});

Then('debo ver las especificaciones del producto', async () => {
  await detalleEquipoPage.verificarElementosVisibles();
});