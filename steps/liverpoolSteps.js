const { liverpoolPage } = inject();

Given(/^el usuario se encuentra en la página principal de Liverpool$/, () => {
    liverpoolPage.abrirHome();
});

Then(/^los elementos principales del home son visibles$/, () => {
    liverpoolPage.verificarElementosHome();
});

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

Then(/^la pagina muestra el mensaje de producto no encontrado para "(.*)"$/, (producto) => {
    liverpoolPage.verificarMensajeSinResultados(producto);
});

//TC003--------------------------------------------------------------------------------------------------------------------

Then(/^la URL contiene "(.*)"$/, (producto) => {
    liverpoolPage.verificarURL(producto);
});

//TC004--------------------------------------------------------------------------------------------------------------------

When(/^el usuario da clic en categorias$/, () => {
    liverpoolPage.clicCategorias();
});

Then(/^el submenu de categorias carga al lado izquierdo de la pagina$/, () => {
    liverpoolPage.verificarSubmenuCategorias();
});

//TC005--------------------------------------------------------------------------------------------------------------------

When('da clic en "Videojuegos"', () => {
    liverpoolPage.clicVideojuegos();
});

Then('la pagina carga y muestra la categoria "Videojuegos"', () => {
    liverpoolPage.verificarCategoriaVideojuegos();
});

//TC006--------------------------------------------------------------------------------------------------------------------

Then('podemos ver las opciones de productos de "Videojuegos"', () => {
    liverpoolPage.verificarOpcionesVideojuegos();
})

//TC007--------------------------------------------------------------------------------------------------------------------


//TC008--------------------------------------------------------------------------------------------------------------------


//TC009--------------------------------------------------------------------------------------------------------------------
