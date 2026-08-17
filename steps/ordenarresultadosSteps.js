const {ResultPage} = inject();

Given(/^El usuario inicio sesion$/, () => {
    ResultPage.iniciarsesion();
});
When(/^El usuario se encuenta buscando un producto$/, () => {
    ResultPage.buscarproducto();
});

//TC016-----------------------
When(/^El usuario ordena los producto por relevancia$/,() => {
    ResultPage.ordenrelivante();
});

//TC017-----------------------
When(/^El usuario ordena los producto de menor a mayor precio$/,() => {
    ResultPage.ordenmenorprecio();
});

//TC018-----------------------
When(/^El usuario ordena los producto de mayor a menor precio$/,() => {
    ResultPage.ordenmayorprecio();
});

//TC019-----------------------
When(/^El usuario ordena los producto de acuerdo a la novedad$/, () => {
    ResultPage.ordenmasnuevo();
});