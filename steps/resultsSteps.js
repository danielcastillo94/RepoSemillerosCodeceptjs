const { resultsPage } = inject();

Given('El usuario está en la página principal', () => {
    resultsPage.validation();
});

// --- TC001 a TC003: BÚSQUEDA ---
When('El usuario hace clic en la barra de búsqueda', () => {
    resultsPage.clickSearchBar();
});

When('El usuario busca {string} mediante la barra de búsqueda', (producto) => {
    resultsPage.searchFor(producto);
});

Then('El usuario puede ver los resultados coincidentes de la búsqueda', () => {
    resultsPage.validateResultsDisplayed();
});

Then('El usuario puede ver resultados que no coinciden con la búsqueda inicial', () => {
    resultsPage.validateNoMatchResults();
});

Given('El usuario está en la página de resultados de búsqueda', () => {
    resultsPage.validateResultsPage();
});

When('El usuario puede visualizar los productos que coinciden con la búsqueda', () => {
    resultsPage.validateResultsDisplayed();
});

Then('El usuario puede ver imágenes, nombre y precio de los productos', () => {
    resultsPage.validateProductList();
});