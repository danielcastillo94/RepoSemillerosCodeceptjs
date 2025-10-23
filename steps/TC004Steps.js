const {TC004Page} = inject();

Given (/^el usuario esta en el portal telcel$/, () =>  {
    TC004Page.pagprincipal();
});

When (/^el usuario busca el equipo "IPhone" en la barra de busqueda$/, () =>{
    TC004Page.busqueda();
});

Then (/^el usuario puede ver los resultados$/, () =>{
    TC004Page.resultadosB();

});