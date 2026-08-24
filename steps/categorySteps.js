const { categoryPage } = inject();

Given('El usuario está en la página principal', () => {
    categoryPage.validation();
});

// --- TC004 a TC006: CATEGORÍAS ---
When('El usuario hace clic en el menú de "Categorías"', () => {
    categoryPage.openCategoryMenu();
});

Then('El usuario puede visualizar las diferentes categorías de productos disponibles en el portal', () => {
    categoryPage.visualizeCategories();
});

Given('El usuario visualiza el menú de "Categorías"', () => {
    categoryPage.visualizeCategories();
});

When('El usuario selecciona la subcategoría {string}', (subcat) => {
    categoryPage.selectSubCategory(subcat);
});

Then('El usuario puede ver una página con los tipos de productos relacionados a {string}', (subcat) => {
    categoryPage.validateSubCategory(subcat);
});

Given('El usuario visualiza la página de la subcategoría {string}', (subcat) => {
    categoryPage.validateSubCategory(subcat);
});

When('El usuario selecciona el tipo de producto {string}', (tipo) => {
    categoryPage.selectItemType(tipo);
});

Then('El usuario puede ver resultados del tipo de producto {string}, con imágenes, nombre y precio de los artículos', (producto) => {
    categoryPage.validateResultsDisplayed(producto);
});