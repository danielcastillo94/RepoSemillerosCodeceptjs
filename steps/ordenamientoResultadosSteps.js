const { resultsPage } = inject();
// Given Principal
Given(/^El usuario se encuentra en la página principal de Liverpool$/, () => {
  resultsPage.pagina();
});

// TC-016-----------------------------------------------------------
Given(/^El Usurario se encuentra en la página de Subcategorias de playeras de mujer$/, () => {
   resultsPage.playerasMujer();

});

When(/^El usario da click en el componente de la página que dice Ordenar por$/, () => {
   resultsPage.ordenarPor();
});

Then(/^El usuario le muestra todas las opciones posibles para ordenar$/,  () => {
  resultsPage.opcionesPosiblesOrdenar();
});

When(/^El usuario dar click em el que dice destacados$/, () => {
 resultsPage.destacados();
});

Then(/^Se muestran los resultados Destacados$/,() => {
    resultsPage.resultadoDestacado();
});

// TC-017-----------------------------------------------------------
Given(/^El Usurario se encuentra en la página de Subcategorias de playeras de mujer$/, () => {
   resultsPage.playerasMujer();
});
When(/^El usario da click en Menor Precio$/, () => {
  resultsPage.ordenarPor();
  resultsPage.menorPrecio();
});
Then(/^El usuario le muestra los productos de menor precio$/,() => {
    resultsPage.productoMenorPrecio();
});

// TC-018-----------------------------------------------------------
Given(/^El Usurario se encuentra en la página de Subcategorias de playeras de mujer$/, () => {
   resultsPage.playerasMujer();
});
When(/^El usario da click en Mayor Precio$/, () => {
  resultsPage.ordenarPor();
  resultsPage.mayorPrecio();
});
Then(/^El usuario le muestra los productos de mayor precio$/,() => {
    resultsPage.productoMayorPrecio();
});

// TC-019-----------------------------------------------------------
Given(/^El Usurario se encuentra en la página de Subcategorias de playeras de mujer$/, () => {
   resultsPage.playerasMujer();
});
When(/^El usario da click en Mejor Calificación$/, () => {
  resultsPage.ordenarPor();
  resultsPage.majorCalificacion();
});
Then(/^El usuario le muestra los productos de Mejor Calificación$/,() => {
    resultsPage.productosMejorCalificados();
});