const { MenuPage, CategoryPage, FilterPage } = inject();

//Background: inicio de filtro
Given(/^El usuario se encuentra en la pagina principal$/, () => {
    MenuPage.inicio();
});
When(/^El usuario da clic sobre "Categorías"$/, () => {
    MenuPage.categorias();
});
When(/^El usuario da clic sobre la categoria "Hombre"$/, () => {
    CategoryPage.categoria();
});
When(/^El usuario da clic en la subcategoría "Zapatos"$/, () => {
    CategoryPage.subcategoria();
});
When(/^El usuario da clic en la opcion "Tenis Casuales"$/, () => {
    CategoryPage.accesosubcattenis();
});
//TC010----------------
When(/^El usuario da clic en la marca "FOOTWEAR"$/, () => {
    FilterPage.filtromarcafoot();
});
Then(/^El usuario ve Tenis de una sola marca$/, () => {
    FilterPage.filtroaplicado();
});
//TC011----------------
When(/^El usuario da clic en la marca "AMERICAN FIRE"$/, () => {
    FilterPage.filtroamericanfire();
});
When(/^El usuario da clic en la marca " ASICS"$/, () => {
    FilterPage.filtroasics();
});
Then(/^El usuario ve Tenis de multiples marcas$/, () => {
    FilterPage.filtrosaplicados();
});
//TC012----------------
When(/^El usuario da clic en las marcas "FOOTWAER Y ASICS"$/, () => {
    FilterPage.quitarfiltro();
});
Then(/^El usuario solo ve resultados de un marca$/, () => {
    FilterPage.verificarfiltro();
});