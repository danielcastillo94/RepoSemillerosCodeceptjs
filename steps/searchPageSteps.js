const {searchPage} = inject();

Given (/^El usuario esta en la pagina principal$/, () => {
    searchPage.home();
});

//TC001--------------------------------------------------------------------------------------------------------------------
When (/^El usuario da click en el buscador$/, () => {
    searchPage.darClicEnBuscador();
});

When (/^El usuario escribe "Videojuegos"$/, () => {
    searchPage.escribirProducto();
});

When (/^El usuario da 'Enter'$/, () => {
    searchPage.presionarEnter();
});

Then (/^Se muestran diferentes productos$/, () => {
    searchPage.validarResultados();
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

