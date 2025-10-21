const {TC005Page} = inject();

Given (/^el usuario esta en la pagina de resultados de la busqueda$/, () =>  {
    TC005Page.busqueda();
});

When (/^el usuario selecciona algun equipo$/, () =>{
    TC005Page.seleccionequipo();
});

Then (/^el usuario puede ver la imagen, especificaciones y precio del equipo$/, () =>{
    TC005Page.ventanadetalles();

});