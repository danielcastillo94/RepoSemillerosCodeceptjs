const { I } = inject();

const SearchPage = require('../pages/SearchPage');
const ResultsPage = require('../pages/ResultsPage');
const FilterPage = require('../pages/FilterPage');

Given('que estoy en la página principal de Liverpool', async () => {
  await SearchPage.open(I);
});

When('busco el producto {string}', async (product) => {
  await SearchPage.searchProduct(I, product);
});

Then('debería visualizar resultados de búsqueda', async () => {
  await ResultsPage.waitForResults(I);
});

Then('debería visualizar el mensaje de que no hay resultados', async () => {
  await ResultsPage.validateNoResults(I);
});

Then(
  'debería visualizar productos relacionados con {string}',
  async (product) => {
    await ResultsPage.validateProduct(I, product);
  }
);

When('inspecciono el filtro de precio', async () => {
  await FilterPage.inspectPriceFilter(I);
});

When('ordeno productos de menor a mayor', async () => {
  await FilterPage.sortPriceLowToHigh(I);
});

When(
  'filtro productos desde {string} hasta {string}',
  async (min, max) => {
    await FilterPage.filterByPriceRange(I, min, max);
  }
);

Then(
  'debería visualizar productos de menor a mayor',
  async () => {
    await ResultsPage.validatePricesLowToHigh(I);
  }
);

Then(
  'debería visualizar productos dentro del rango de {string} a {string}',
  async (min, max) => {
    await ResultsPage.validateProductsInPriceRange(I, min, max);
  }
);

Then(
  'todos los productos deberían estar entre {string} y {string}',
  async (min, max) => {
    await ResultsPage.validateProductsInPriceRange(I, min, max);
  }
);

When('abro el menú de Categorías', async () => {
  await SearchPage.openCategories(I);
});

When('accedo a la subcategoría Mujer', async () => {
  await SearchPage.openSubcategory(I);
});

Then('debería visualizar productos de la categoría', async () => {
  await SearchPage.validateCategoryProducts(I);
});
