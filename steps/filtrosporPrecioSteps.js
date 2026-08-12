const { FilterPage } = inject();

//GIven---------------------------------------------------------------
Given(/^El usuario se encuentra en la página principal de Liverpool$/, () => {
  FilterPage.PaginPrincipal();
});

//TC-007-----------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de categoría de Tenis Casuales$/, () => {
  FilterPage.PaginTenisCasuales();
});

When(/^El usuario filtra el precio de menor a mayor$/, () => { //selecciona algun plan
  FilterPage.filtrarPrecioMenorMayor(); // verifica que cargue correctamente la página "Plan de Renta"
});
Then(/^En la página se debe de mostrar una sección de Filtros seleccionados con los datos de filtrado$/, () =>{
  FilterPage.validarprecio();
});

//TC-008----------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de resultados de Liverpool$/, () => {
  FilterPage.PaginTenisCasualesrango();
});
When(/^El usuario selecciona el rango de precio de 500 a 1000 pesos$/, () => { //selecciona algun plan
  FilterPage.seleccionPrecioEspecifico(); // verifica que cargue correctamente la página "Plan de Renta"
});

Then(/^Los productos mostrados deben tener un precio dentro del rango de 500 a 1000 pesos$/, () =>{
  FilterPage.validarPrecioRango();
});

//TC-008----------------------------------------------------------------------
Given(/^El usuario se encuentra en la página de resultados de Liverpool$/, () => {
  FilterPage.PaginTenisCasualesrango();
});
When(/^El usuario aplica un filtro especifico de precio de 500 a 1000 pesos$/, () => { //selecciona algun plan
  FilterPage.seleccionPrecioEspecifico(); // verifica que cargue correctamente la página "Plan de Renta"
});

Then(/^Se muestra la cantidad de productos que cumplen con ese filtro$/, () =>{
  FilterPage.validarPrecioRango();
});

