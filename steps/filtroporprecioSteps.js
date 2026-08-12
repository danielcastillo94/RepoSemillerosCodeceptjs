const { MenuPage, CategoryPage, FilterPage, ResultPage, } = inject();

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
//TC007----------------------
When(/^El usuario da clic cobre el boton "Ordenar por:"$/, () => {
    FilterPage.opcionesorden();
});
When(/^El usuario ve una lista y da clic sobre "Menor precio"$/, () => {
    FilterPage.ordenmenorprecio();
});
Then(/^El usuario ve una los productos de menor precio primero$/, () => {
    FilterPage.validarprecios();
});

//TC008----------------------
When(/^El usuario ingresa el rango de precio "1000 - 5000"$/, () => {
    FilterPage.rangoprecio();
});
When(/^El usuario da clic sobre el boton con forma de flecha$/, () => {
    FilterPage.aplicarrangoprecio();
});
Then(/^EL usuario observa productos dentro del rango de precios que valido$/, () => {
    FilterPage.validarprecios();
});

//TC009----------------------
When(/^El usuario da clic en la opcion de Precio "Menos de 500"$/, () => {
    ResultPage.filtrounico();
});
Then(/^El usuario ve productos menores a 500 pesos$/, () => {
    ResultPage.filtroaplicado();
});