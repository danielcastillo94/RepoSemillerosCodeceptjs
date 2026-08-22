const { filterPage, resultsPage } = inject();

Given(/^El usuario esta en la pagina de la categoria "Ropa-Camisas"$/, () => {
    filterPage.categoria();
});

When(/^El usuario selecciona la opcion de ordenamiento "Menor a mayor precio"$/, () => {
    filterPage.filtrado();
});

Then(/^Los productos se muestran ordenados por precio ascendentemente$/, () =>{
    filterPage.validarFiltro();
});

When(/^El usuario ingresa "500" en el precio minimo$/, () => {

});

When(/^El usuario ingresa "2000" en el precio maximo$/, () => {

});

When(/^El usuario aplica el filtro de precio$/, () => {

});

Then(/^La pagina de resultados se actualiza$/, () => {

});

Then(/^Todos los productos mostrados tienen un precio entre 500 y 2000$/, () => {

});