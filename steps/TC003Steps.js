const {TC003Page} = inject();

Given (/^el usuario esta en la pagina de tarifas$/, () =>  {
    TC003Page.pagtarifas();
});

When (/^el usuario elige el plan 5G y da click en comparar$/, () =>{
    TC003Page.elegirplan();
});

Then (/^el usuario puede ver los detalles del plan$/, () =>{
    TC003Page.visualizarplan5g();

});