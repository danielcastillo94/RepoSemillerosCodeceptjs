const { FilterPage } = inject();

//GIven---------------------------------------------------------------
Given(/^El usuario se encuentra en la página principal de Liverpool$/, () => {
  FilterPage.PaginPrincipal();
});

//@TC-013-----------------------------------------------------------------
Given(/^El Usurario se encuentra en la página de Subcategorias de playeras de mujer$/, () => {
  FilterPage.paginaPlayerasMujer();
});

When(/^El usuario aplica el filtro de talla Mediana$/, () => { //selecciona algun plan
  FilterPage.filtroTalla(); // verifica que cargue correctamente la página "Plan de Renta"
});
Then(/^El usuario puede ver que que se aplico correctamente el filtro$/, () =>{
  FilterPage.filtroValido();
});

//@TC-014-----------------------------------------------------------------
Given(/^El Usurario se encuentra en la página de Subcategorias de playeras de mujer$/, () => {
  FilterPage.paginaPlayerasMujer();
});

When(/^El usuario aplica el filtro de Color Rosa$/, () => { //selecciona algun plan
  FilterPage.filtroColor(); // verifica que cargue correctamente la página "Plan de Renta"
});
Then(/^Se muestran los productos que son de color rosa$/, () =>{
  FilterPage.filtroValido();
});

//@TC-015-----------------------------------------------------------------
Given(/^El Usurario se encuentra en la página de Subcategorias de playeras de mujer$/, () => {
  FilterPage.paginaPlayerasMujer();
});

When(/^El usuario aplica la combinación de filtros de talla M y color Rosa$/, () => { //selecciona algun plan
  FilterPage.combinacionFiltro(); // verifica que cargue correctamente la página "Plan de Renta"
});
Then(/^Se ve el filtrado seleccionado correctamente$/, () =>{
  FilterPage.filtroValidoCombinacion();
});


