const { SearchPage, ResultPage } = inject();

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
When(/^El usuario escribe "uber" en el buscador$/, () => {
    SearchPage.busquedainvalida();
});
Then(/^El usuario ve un mensaje de error de busqueda$/, () => {
    SearchPage.resultadosinvalidos();
});

//TC03-----------------------
//no se repite el primer When porque identico al del TC001 y no hay problema
When(/^El usuario da clic en un pantalon$/, () =>{
    ResultPage.resultadosbuscados();
});
Then(/^El usuario puede ver detalles del pantalon$/, () => {
    ResultPage.detallesbusqueda();
});