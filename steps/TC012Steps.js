const {TC012Page} = inject();

Given (/^el usuario esta en el final de la pagina principal$/, () =>  {
    TC012Page.footerEnd();
});

When (/^el usuario da click en "Términos y Condiciones"$/, () =>{
    TC012Page.opTYC();
});

Then (/^el usuario puede ver la pagina cargada$/, () =>{
    TC012Page.seccionTYC();
});