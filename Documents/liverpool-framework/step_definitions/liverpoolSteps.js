const { liverpoolPage } = inject();

Given(/^El usuario está en la página principal de Liverpool$/, () => {
  liverpoolPage.open();
});

//TC001 --------------------------------------------------------------
When(/^El usuario introduce "atv" en la barra de búsqueda$/, () => {
  liverpoolPage.buscarProducto();
});

Then(/^El usuario visualiza los resultados mostrados de "atv"$/, () => {
  liverpoolPage.validacionBusqueda();
});

//TC002 --------------------------------------------------------------
When(/^El usuario introduce "juegosfera" en la barra de búsqueda$/, () => {
  liverpoolPage.buscarProductoInexistente();
});

Then(/^El usuario visualiza un mensaje indicando que no se encontraron resultados$/, () => {
  liverpoolPage.validacionBusqueda();
});

//TC003 --------------------------------------------------------------
When(/^El usuario introduce "xbox" en la barra de búsqueda$/, () => {
  liverpoolPage.buscarProducto();
});

Then(/^El usuario visualiza los resultados mostrados de 'xbox'$/, () => {
  liverpoolPage.validacionBusqueda();
});