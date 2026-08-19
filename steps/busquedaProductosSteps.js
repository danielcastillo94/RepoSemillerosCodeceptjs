const { searchPage, resultsPage } = inject();

Given(/^El usuario esta en la pagina principal$/, () => {
    searchPage.home();
});

When(/^El usuario da click en el buscador$/, () => {
    searchPage.darClicEnBuscador();
});

When(/^El usuario escribe "([^"]*)"$/, (producto) => {
    searchPage.escribirProducto(producto);
});

When(/^El usuario da 'Enter'$/, () => {
    searchPage.presionarEnter();
});

Then(/^Se muestran resultados del producto "([^"]*)"$/, (producto) => {
    resultsPage.validarResultados(producto);
});

Then(/^El usuario selecciona la card de la consola$/, () => {
    resultsPage.verCardXbox();
});

Then(/^Aparece el mensaje de "Lo sentimos, no encontramos nada"$/, () => {
    resultsPage.validarResultadosInexistentes();
});

Then(/^Se muestran resultados generales del producto "([^"]*)"$/, (producto) => {
    resultsPage.validarResultadosGenerales(producto);
});

