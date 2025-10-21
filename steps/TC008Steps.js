const {TC008Page} = inject();

Given (/^el usuario esta en el menu principal$/, () =>  {
    TC008Page.menu();
});

When (/^el usuario selecciona la opcion de ayuda$/, () =>{
    TC008Page.opayuda();
});

Then (/^el usuario ve la seccion de "Preguntas frecuentes"$/, () =>{
    TC008Page.seccionayuda();
});