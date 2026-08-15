const {MenuPage, CategoryPage, FilterPage, ResultPage} = inject();

//Background---------------
Given(/^El usuario se encuentra en la pagina principal$/, () => {
    MenuPage.inicio();
});
When(/^El usuario da clic sobre "Categorías"$/, () => {
    MenuPage.categorias();
});
When(/^El usuario da clic sobre la categoria "Hombre"$/, () => {
    CategoryPage.categoria();
});
When(/^El usuario da click en la opcion "Playeras"$/, () => {
    FilterPage.inicifiltroropa();
});

//TC013---------------
When(/^El usuario da clic en la opcion "Grande"$/, () => {
    FilterPage.filtrotalla();
});
Then(/^El usuario ve solo playeras talla "Grande"$/, () => {
    FilterPage.revisarresultados();
});

//TC014---------------
When(/^El usuario da clic en el color "Azul Oscuro"$/, () => {
    FilterPage.filtrocolor();
});
Then(/^El usuario ve playeras con el mismo color$/, () => {
    FilterPage.revisarresultados();
});

//TC015---------------
Then(/^El usuario ve resultados de acuerdo a los filtros que aplico$/, () => {
    FilterPage.filtrodoblecolortalla();
});