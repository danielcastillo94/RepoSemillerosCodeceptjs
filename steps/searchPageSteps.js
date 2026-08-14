const {searchPage} = inject();

Given (/^El usuario esta en la pagina principal$/, () => {
    searchPage.home();
});

//TC001--------------------------------------------------------------------------------------------------------------------
When (/^El usuario da click en el buscador$/, () => {
    searchPage.darClicEnBuscador();
});

When (/^El usuario escribe "Xbox series X"$/, () => {
    searchPage.escribirProducto();
});

When (/^El usuario da 'Enter'$/, () => {
    searchPage.presionarEnter();
});

Then (/^Se muestran productos de Xbox$/, () => {
    searchPage.validarResultados();
    searchPage.verCard();
});


//TC002---------------------------------------------------------------------------------------------------------------
When (/^El usuario da click en el buscador$/, () => {
    searchPage.darClicEnBuscadorI();
});

When (/^El usuario escribe "vvnvnvnc"$/, () => {
    searchPage.escribirProductoInexistente();
});

When (/^El usuario da 'Enter'$/, () => {
    searchPage.presionarEnterI();
});

Then (/^Aparece la pagina de "Lo sentimos, no encontramos nada"$/, () => {
    searchPage.validarResultadosInexistentes();
});

//TC003--------------------------------------------------------------------------------------------------------------------
When (/^El usuario da click en el buscador$/, () => {
    searchPage.darClicEnBuscador3();
});

When (/^El usuario escribe "Videojuegos"$/, () => {
    searchPage.escribirProducto3();
});

When (/^El usuario da 'Enter'$/, () => {
    searchPage.presionarEnter3();
});

Then (/^Se muestran productos de Videojuegos$/, () => {
    searchPage.validarResultados3();
});

