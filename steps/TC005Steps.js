const { I } = inject();
const detalleEquipoPage = require('../pages/TC005Page');

Given('que el usuario está en la página principal de Telcel', () => {
  // Aumentamos timeout para la carga completa de la página
  I.amOnPage('https://www.telcel.com/', { waitUntil: 'networkidle', timeout: 120000 });
  I.wait(5); // Pequeña espera extra para carga dinámica
});

When('selecciona un equipo de los resultados de búsqueda', () => {
  detalleEquipoPage.seleccionarEquipo('iPhone'); // Buscamos "iPhone"
});

Then('se debe mostrar la sección de detalle correctamente con imagen, precio y especificaciones', () => {
  detalleEquipoPage.validarDetalleVisible();
});
