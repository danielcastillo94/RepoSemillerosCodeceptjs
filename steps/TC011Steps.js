const {TC011Page} = inject();

Given (/^esta en simulacion movil$/, () =>  {
    TC011Page.vistaMovil();
});

When (/^selecciona menu$/, () =>{
    TC011Page.menuHamburguesa();
});

Then (/^puede ver todas las opciones$/, () =>{
    TC011Page.opHamburguesa();
});
