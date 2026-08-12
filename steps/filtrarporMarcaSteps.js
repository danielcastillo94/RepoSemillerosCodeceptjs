const { FilterPage } = inject();

//GIven---------------------------------------------------------------
Given(/^El usuario se encuentra en la página principal de Liverpool$/, () => {
  FilterPage.PaginPrincipal();
});


//@TC-010-----------------------------------------------------------------
Given(/^El usuario se encuentra en la página de Subcategorias de Tenis Casuales$/, () => {
  FilterPage.PaginTenisCasuales();
});

When(/^El usuario selecciona una marca$/, () => { //selecciona algun plan
  FilterPage.seleccionarMarca(); // verifica que cargue correctamente la página "Plan de Renta"
});
Then(/^Los productos mostrados deben pertenecer a la marca seleccionada$/, () =>{
  FilterPage.marcaPerteneciente();
});


//@TC-011---------------------------------------------------------------
Given(/^El usuario se encuentra en la página de Subcategorias de Tenis Casuales$/, () => {
  FilterPage.PaginTenisCasuales();
});
When(/^El usuario selecciona dos marcas en el filtro de marca$/, () => {
  FilterPage.seleccionarMasMarcas();
});
Then(/^Los productos mostrados deben pertenecer a alguna de las marcas seleccionadas$/, () => {
  FilterPage.marcasPertenecientes();
});

//@TC-012--------------------------------------------------------------
Given(/^El usuario se encuentra en la página de Subcategorias de Tenis Casuales$/, () => {
  FilterPage.PaginTenisCasuales();
});
When(/^El usuario selecciona la marca ADIDAS$/, () => {
  FilterPage.seleccionarMarca();
});
Then(/^El usuario le aparecen productos de Tenis ADIDAS$/, () => {
  FilterPage.marcaPerteneciente();
});
When(/^El usuario vuelve a dar Click en la Marca ADIDAS$/, () => {
  FilterPage.desseleccionarMarca();
});
Then(/^La marca ADIDAS no debe de estar seleccionada$/, () => {
  FilterPage.validarCheckNoSeleccionado();
});




