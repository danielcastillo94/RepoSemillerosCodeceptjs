const { ProductoDetail } = inject();
// Given Principal
Given(/^El usuario se encuentra en la página principal de Liverpool$/, () => {
  ProductoDetail.PaginPrincipal();
});
//@TC-020-----------------------------------------------------------------
Given(/^El Usurario se encuentra en la página de la Playera manga corta cuello redondo para mujer$/, () => {
  ProductoDetail.paginaPlayeraMangaCorta();
});

When(/^El usario da click en un Tamaño en este caso XCH Y da click en Ver disponibilidad en tienda$/, () => { //selecciona algun plan
  ProductoDetail.clicTamaño(); // verifica que cargue correctamente la página "Plan de Renta"
});
Then(/^El usuario le muestra los estados de México$/, () =>{
  ProductoDetail.visibleEstados();
});
When(/^El usuario da Clic en Puebla$/, () => { //selecciona algun plan
  ProductoDetail.seleccionEstado(); // verifica que cargue correctamente la página "Plan de Renta"
});
Then(/^Se muestran la disponibilidad$/, () =>{
  ProductoDetail.disponibilidadEnEstado();
});


