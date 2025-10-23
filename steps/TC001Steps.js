const {TC001Page} = inject();

Given (/^el usuario accede al portal Telcel$/, () => {
    TC001Page.carga();
});

When (/^Carga la página principal$/, () =>{
    TC001Page.portal();
});

Then (/^el logotipo, menú principal y banner deben ser visibles$/, () =>{
    TC001Page.verelementos();
});
