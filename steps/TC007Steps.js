const {TC007Page} = inject();

Given (/^el usuario esta en el menu principal y selecciona contactanos$/, () =>  {
    TC007Page.menuinicio();
});

When (/^el usuario selecciona la opcion correo$/, () =>{
    TC007Page.opcontact();
});

Then (/^el usuario puede ver el formulario y sus elementos$/, () =>{
    TC007Page.pagecontact();
});