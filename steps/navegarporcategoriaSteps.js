const { MenuPage, CategoryPage } = inject();

//Given--------------
Given(/^El usuario se encuentra en la pagina principal$/, () => {
    MenuPage.inicio();
});

//TC004--------------
When(/^El usuario da clic sobre "Categorías"$/, () => {
    MenuPage.categorias();
});
Then(/^El usuario observa un menu lateral del lado izquierdo$/, () => {
    MenuPage.submenu();
});

//TC005--------------
When(/^El usuario da clic sobre la categoria "Hombre"$/, () => {
    CategoryPage.categoria();
});
When(/^El usuario da clic en la subcategoría "Zapatos"$/, () => {
    CategoryPage.subcategoria();
});
Then(/^El usuario observa un nuevo menu y imagenes relacionados a la categoria$/, () => {
    CategoryPage.resultadosubcategoria();
});

//TC006--------------
When(/^El usuario da clic en la opcion "Tenis Casuales"$/, () => {
    CategoryPage.accesosubcattenis();
});
Then(/^El usuario ve todos los resultados relacionados de la subcategoría$/, () => {
    CategoryPage.validarproductos();
});