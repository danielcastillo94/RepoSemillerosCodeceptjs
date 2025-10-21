const {TC009Page} = inject();

Given (/^el usuario esta en la pagina principal$/, () =>  {
    TC009Page.paginaprincipal();
});

When (/^seleccion el boton de ubicacion y elige su estado$/, () =>{
    TC009Page.ubicacion();
});

Then (/^la pagina principal se puede evr el cambio de region$/, () =>{
    TC009Page.verubicacion();
});