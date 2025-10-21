const {TC006Page} = inject();

Given (/^el usuario esta en el menu principal$/, () =>  {
    TC006Page.inicio();
});

When (/^el usuario accede a la opcion red de mayor cobertura$/, () =>{
    TC006Page.opred();
});

When (/^el usuario da click en Ver Cobertura$/, () =>{
    TC006Page.vercobertura();
});

Then (/^el usuario puede ver el mapa de cobertura$/, () =>{
    TC006Page.vermapa();
});