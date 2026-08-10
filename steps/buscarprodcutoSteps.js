const { SearchPage } = inject();

Given(/^El usuario se encuentra en la pagina principal$/, () => {
    SearchPage.inicio();
});
//TC01-----------------------
When(/^El usuario escribe "pantalon hombre" en el buscador$/, () => {
    SearchPage.busquedavalida();
});
Then(/^El usuario ve los resultados de su busqueda$/, ()=> {
    SearchPage.resultadosbuscados();
});

//TC02-----------------------
When(/^El usuario escribe "DiDi" en el buscador$/, () => {
    SearchPage.busquedainvalida();
});
Then(/^El usuario ve un mensaje de error de busqueda$/, () => {
    SearchPage.resultadosinvalidos();
});