const {TC004Page} = inject();

Given (/^el usuario est en la pagina principal$/, () =>  {
    TC004Page.inicio();
});

When (/^el usuario introduce "IPhone" en la barra de busqueda$/, () =>{
    TC004Page.buscador();
});

Then (/^el usuario puede ver los resultados de la busqueda$/, () =>{
    TC004Page.resultadosBusqueda();

});