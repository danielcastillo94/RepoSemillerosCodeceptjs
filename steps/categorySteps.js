const { menuPage, categoryPage } = inject();

Given(/^El usuario esta en la pagina principal$/, () => {
    menuPage.home();
});

//TC004--------------------------------------------------------------------------------------------------------------------
When(/^El usuario da click en el boton Categorias$/, () => {
    menuPage.abrirMenu();
});

Then(/^Se muestran todas las categorias$/, () => {
    menuPage.validarCategoriasVisible();
});

When(/^El usuario hace hover sobre la categoria  "([^"]*)"$/, (categoria) => {
    menuPage.hacerHoverEnCategoria(categoria);
});

Then(/^Se muestran todas las subcategorias$/, () => {
    menuPage.validarSubcategoriasVisibles();
})

//TC005--------------------------------------------------------------------------------------------------------------------

When(/^El usuario da click en el boton Categorias$/, () => {
    menuPage.abrirMenu();
});

Then(/^Se muestran todas las categorias$/, () => {
    menuPage.validarCategoriasVisible();
});

When(/^El usuario hace hover sobre la categoria  "([^"]*)"$/, (categoria) => {
    menuPage.hacerHoverEnCategoria(categoria);
});

When(/^El usuario da clic en la subcategoria "([^"]*)"$/, (subcategoria) => {
    menuPage.seleccionarSubcategoria(subcategoria);
});

Then(/^El usuario es redirigido a la pagina de la subcategoria "([^"]*)"$/, (titulo) => {
    categoryPage.validarTituloPagina(titulo);
});

//TC006--------------------------------------------------------------------------------------------------------------------

