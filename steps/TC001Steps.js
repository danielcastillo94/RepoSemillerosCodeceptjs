const {TC001Page} = inject();

Given (/^el usuario selecciona la pagina telcel.com$/, () => {
    TC001Page.carga();
});

When (/^carga la pagina principal$/, () =>{
    TC001Page.portal();
});

Then (/^el usuario puede ver el logotipo, menu principal y banner$/, () =>{
    TC001Page.verelementos();
});