const { liverpoolPage } = inject();

Given(/^el usuario se encuentra en la página principal de Liverpool$/, () => {
    liverpoolPage.abrirHome();
});

Then(/^los elementos principales del home son visibles$/, () => {
    liverpoolPage.verificarElementosHome();

//TC001--------------------------------------------------------------------------------------------------------------------

When(/^el usuario da clic en la barra de busqueda$/, () => {
    liverpoolPage.clicBarraBusqueda();
});

When(/^el usuario ingresa "(.*)"$/, (producto) => {
    liverpoolPage.ingresarProducto(producto);
});

When(/^da enter$/, () => {
    liverpoolPage.presionarEnter();
});

Then(/^la pagina carga y muestra los resultados relacionados a "(.*)"$/, (producto) => {
    liverpoolPage.verificarResultados(producto);
});

//TC002--------------------------------------------------------------------------------------------------------------------

Then(/^la pagina carga y muestra el mensaje de "(.+)"$/, (mensaje) => {
    liverpoolPage.verificarMensajeSinResultados(mensaje);
});

//TC003--------------------------------------------------------------------------------------------------------------------

Then(/^la URL contiene "(.*)"$/, (texto) => {
    liverpoolPage.verificarURL(texto);
});

});