const { I } = inject();
const TC004Page = require('../pages/TC004Page');

Given('que el usuario está en la página principal de Telcel', () => {
  I.amOnPage('https://www.telcel.com/');
  I.wait(5); // Espera breve para asegurar que cargue bien la página
});

When('ingresa un término de búsqueda válido en el buscador general', () => {
  TC004Page.ingresarTerminoDeBusqueda('iPhone');
});

Then('se deben mostrar resultados coherentes con la búsqueda realizada', () => {
  TC004Page.validarResultadosVisibles();
});
