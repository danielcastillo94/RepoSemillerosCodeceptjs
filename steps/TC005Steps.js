const { TC005Page } = inject();

Given(/^que estoy en la página de inicio del portal Telcel$/, async () => {
  await TC005Page.portal();

});

When(/^selecciono un equipo desde los resultados$/, () => {
  TC005Page.busqueda();

});


Then(/^debo ver las imágenes, el precio del producto$/, () => {
  TC005Page.resultados();

});

Then(/^las especificaciones del producto$/, () => {
  TC005Page.detalles();

});